# 分布式概述

我们构建分布式存储系统，是为了获得更大的 **存储容量（Scalability）**。

为了获得更大的存储容量，我们把数据进行 **分片（Sharding）**。

而更多的机器带来了更好的 **出错频率（Fault）**。

为了 **容错（Fault Tolerance）**，我们要对每个分片建立 **副本（Replication）**。

而为了维持副本之间的一致，就要引入 **共识算法（Consensus）**。

而共识算法会需要额外的 **资源与性能（Low Performance）**，这里又会反过来影响系统的容量和分片数设计。

本站总访问量 <span id="busuanzi_value_site_pv" /> 次
本站访客数 <span id="busuanzi_value_site_uv" /> 人次
