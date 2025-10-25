<template>
  <div id='breadcrumb' v-if='items.length > 0'>
    <span v-for='item in items' class='bc-items' :id="item.first ? 'bc-project' : undefined">
      {{ item.name }}
    </span>
  </div>
</template>

<script setup lang='ts'>
import {useData} from 'vitepress'
import {ref, watchEffect} from 'vue'
import {nav, sidebar, breadcrumbTitle} from '../../configs'

type Breadcrumb = {
  name: string
  first: boolean
}

const {page} = useData()
const items = ref<Breadcrumb[]>([])

const getBreadcrumbTitle = (path: string): string => {
  const searchPath = '/' + path
  if (breadcrumbTitle[searchPath]) {
    return breadcrumbTitle[searchPath]
  }
  if (!nav) {
    return path
  }
  const findRecursive = (navItems: any[]): string | null => {
    for (const item of navItems) {
      if (item.link == searchPath) {
        return item.text
      }
      if (item.items) {
        const found = findRecursive(item.items)
        if (found) {
          return found
        }
      }
    }
    return null
  }
  return findRecursive(nav) || path
}

const findBreadcrumbInSidebar = (fullPath: string): string[] => {
  if (!sidebar) {
    return []
  }
  const findRecursive = (config: any, currentPath: string[] = []): string[] | null => {
    for (const item of config) {
      if (item.link == '/' + fullPath.replace('.md', '')) {
        return currentPath
      }
      if (item.items) {
        const found = findRecursive(item.items, [...currentPath, item.text])
        if (found) {
          return found
        }
      }
    }
    return null
  }
  for (const [basePath, config] of Object.entries(sidebar as Record<string, any>)) {
    if (fullPath.startsWith(basePath.replace('/', ''))) {
      const found = findRecursive(config, [])
      if (found) {
          return found
        }
    }
  }
  return []
}

watchEffect(() => {
  if (!page.value.relativePath) {
    items.value = []
    return
  }
  const pathSegs = page.value.relativePath.split('/').filter(seg => seg && seg != 'index.md')
  if (pathSegs.length == 0) {
    items.value = []
    return
  }
  const breadcrumbItems: Breadcrumb[] = []
  if (pathSegs.length >= 1) {
    const firstLevelPath = pathSegs[0]
    if (!breadcrumbTitle.hasOwnProperty('/' + firstLevelPath)) {
      items.value = []
      return
    }
    breadcrumbItems.push({
      name: getBreadcrumbTitle(firstLevelPath),
      first: true
    })
  }
  const sidebarBreadcrumbs = findBreadcrumbInSidebar(page.value.relativePath)
  sidebarBreadcrumbs.forEach((title, index) => {
    breadcrumbItems.push({
      name: title,
      first: false
    })
  })
  items.value = breadcrumbItems
})
</script>

<style>
#breadcrumb {
  margin-bottom: 16px;
  font-size: 15px;
  color: var(--vp-c-text-2);
}

.bc-items::after {
  content: '/';
  margin: 0 8px;
  vertical-align: top;
  font-weight: bold;
  font-size: 10px;
  color: var(--vp-c-text-3);
}

.bc-items:last-child::after {
  content: '';
}
</style>
