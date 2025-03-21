---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class="anchor" id="about-me"></span>

<h1>
  👋 Hi there my No.
  <img src="https://profile-counter.glitch.me/MinmusLin/count.svg"/>
  visitor!
</h1>

# 👨‍💻 About Me ([CV](https://github.com/MinmusLin/MinmusLin/raw/refs/heads/main/CV/CV.pdf))

I'm Jishen Lin, an undergraduate student majoring in Software Engineering at [School of Computer Science and Technology](https://cs.tongji.edu.cn), [Tongji University](https://www.tongji.edu.cn). I am passionate about full-stack development and committed to practicing elegant engineering solutions. I enjoy collaborating with diverse teams to explore cutting-edge technologies and solve real-world problems through innovative and efficient solutions. With experience in full-stack development, AI research, and open-source projects, I am always seeking new challenges and opportunities to learn and grow.

<span class="anchor" id="educations"></span>

# 📖 Educations

<div style="display: flex; align-items: center"><img src="images/tongji.png" alt="image" style="width: 200px; height: 57px; margin-right: 20px">
<div markdown="1" style="flex: 1">
- *2022 / 08 - 2026 / 06*, Tongji University - School of Computer Science and Technology
  - Bachelor's Degree in Software Engineering
  - GPA: 4.73 / 5.00 (92.27 on a 100-point scale)
  - Rank: 14 / 199 (Top 7%)
  - English Proficiency: CET-6
</div>
</div>

<span class="anchor" id="honors-and-awards"></span>

# 🏅 Honors and Awards

- *2022 - 2026*, 🎖️ Tang Zhongying Moral Education Scholarship, Tongji University (Top 1%)
- *2022 / 2023*, 🥇 First-Class Outstanding Student Scholarship, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ Social Activity Scholarship, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ "Outstanding Class Cadre" Award, Tongji University (Top 1%)
- *2023 / 2024*, 🎖️ "Outstanding Student" Award, Tongji University (Top 5%)
- *2024 / 07 - 2024 / 10*, 🥇🥉 Gold Award in Shanghai (Provincial Level) and National Bronze Award in China International College Students Innovation Competition (2024)
- *2024 / 03 - 2024 / 10*, 🥇 Gold Award in International Genetically Engineered Machine Competition (iGEM)

<span class="anchor" id="scientific-research"></span>

# 🔬 Scientific Research

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">National-level SITP</div><img src="images/lightweight-network-for-3d-image-sensor-signal-enhancement.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 03 - 2025 / 03*, Lightweight Network for 3D Image Sensor Signal Enhancement

  *National-level College Student Innovation Training Project - Lead Researcher*

  - Developed a lightweight 3D imaging processing algorithm to address the challenges of balancing power consumption and accuracy in Time-of-Flight (ToF) sensors for edge devices.
  - Aimed to optimize model inference efficiency, reduce computational complexity, and ensure high-quality depth map and 3D point cloud imaging for applications like robotics, autonomous driving, and AR/VR.
  - Implemented dynamic kernel adjustment and reduced model parameters to create a lightweight architecture, deploying the algorithm on edge devices for real-time processing and low-power operation.
  - Successfully improved imaging quality and computational efficiency, enabling real-time 3D perception on edge devices and advancing the development of "sensing-computing integration" technology.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Provincial-level SITP</div><img src="images/access-control-mask-detection-system.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2023 / 03 - 2024 / 03*, Access Control Mask Detection System

  *Provincial-level College Student Innovation Training Project - Lead Researcher*

  - Post-COVID-19, mask-wearing became essential to prevent virus spread. Our team developed a real-time mask detection system using YOLOv8 for access control in high-traffic areas.
  - Design and deploy a system to detect mask usage and proper wearing, reducing manual monitoring in places like schools and transit hubs.
  - Researched YOLO models and trained on open-source datasets for binary mask detection. Expanded datasets with improper mask usage images, fine-tuned model parameters, and improved accuracy. Evaluated performance and deployed the system into access control.
  - Built a high-accuracy, real-time mask detection system capable of identifying proper/improper mask usage. The system is scalable for high-traffic environments, aiding pandemic prevention while cutting labor costs.
</div>
</div>

<span class="anchor" id="internships"></span>

# 💻 Internships

- *2024 / 07 - 2024 / 08*, Changjiang Pension Insurance Co., Pacific Insurance Group

  *Intern, Information Technology Department*

  - Participated in the development and implementation of a due diligence assistant, aiming to enhance due diligence efficiency through automated workflows, addressing issues such as time consumption, error-proneness, and high costs in traditional due diligence processes.
  - Deployed Dify on local servers, designed, and implemented workflows for the due diligence assistant, covering question classification, meeting minutes generation, consistency analysis of viewpoints, and handling of routine inquiries.
  - Integrated databases and called LLM APIs, designed classification and processing logic, tested, and optimized workflows to ensure accuracy and efficiency.
  - Successfully deployed and launched the due diligence assistant, achieving over 95% accuracy in question classification. The meeting minutes generation and viewpoint analysis functions significantly improved efficiency, receiving positive feedback from the due diligence team.

<span class="anchor" id="projects"></span>

# 🧩 Projects

🎉 For more interesting and innovative projects, please visit my [GitHub repository](https://github.com/MinmusLin?tab=repositories).

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Zhimu Cloud</div><img src="images/zhimu-cloud.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 10 – 2025 / 02*, Zhimu Cloud: Intelligent Curtain Wall Dataset Management Platform

  *Full-stack Application Development and Database Maintenance*

  - This project provides efficient, secure data storage, processing, and analysis services for the smart curtain wall research platform, promoting the deep integration and innovative application of civil engineering science and computer science.
  - Responsible for designing and implementing the dataset management platform, supporting basic dataset operations, and providing user authentication, resource access management, and data interface services for 10 external subsystems.
  - Developed RESTful APIs using Spring Boot, implemented basic dataset operations based on Alibaba Cloud OSS SDK, and used Redis to store login credentials.
  - Designed and implemented a CI/CD pipeline based on GitHub Actions, providing automated integration and deployment services for 10 external subsystems, and integrated logging functionality.
  - Successfully delivered the platform, handling over 10,000 data requests daily, providing efficient and secure data support for the smart curtain wall research platform, and driving cross-disciplinary innovative applications.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Atlas.Y</div><img src="images/atlas-y.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 03 – 2024 / 10*, Atlas.Y: Advanced Targeting and Localization Assistance System for Yeast

  *Full-stack Application Development and Database Maintenance*

  - As a software and artificial intelligence track entry for the iGEM competition, this project aimed to address protein localization challenges in synthetic biology by integrating AI technologies.
  - Led full-stack development, building a system to support molecular tag design and optimization, ensuring efficient data processing and model integration.
  - Developed RESTful APIs using Spring Boot, integrated graph neural network models, designed a MySQL database for efficient data operations, and coordinated the team to deliver the project.
  - Built the team project Wiki using Vue.js (Link: [https://2024.igem.wiki/tongji-software](https://2024.igem.wiki/tongji-software)).
  - The project won an international gold medal in the iGEM competition and received high recognition from dozens of international synthetic biology researchers. As one of the team leaders, presented the project in Paris, France.
</div>
</div>

<span id="technical-skills"></span>

# 🛠️ Technical Skills

- 🖥️ Proficient in the fundamentals of the Java language and familiar with JVM principles, with the ability to develop systems and implement algorithms.
- 🧰 Skilled in frameworks such as Spring Boot and MyBatis, with an understanding of Spring IoC and AOP principles, and experienced with Kafka message queues.
- ⌨️ Experienced in the Vue.js ecosystem, with full-stack development capabilities.
- ⚙️ Familiar with the Linux environment and basic operations, proficient in development tools such as Git, Docker, Maven, and GitHub Actions CI/CD workflows.
- 🗃️ Capable of database design, with expertise in MySQL and Redis.
- 📑 Knowledgeable in core computer science concepts such as data structures and algorithms, operating systems, and computer networks, with an understanding of common design patterns.

<span class="anchor" id="student-activities"></span>

# 🏫 Student Activities

- 👨‍🎓 Class Monitor, Class 1, Software Engineering, School of Computer Science and Technology (2022 cohort)
- 🎖️ Awarded "Outstanding Volunteer" by Freshman Institute (2022-2023), with nearly 200h of volunteer service
- 🏆 President, Huawei Student Technology Club, School of Computer Science and Technology, Tongji University
- 🏆 2024 Huawei Developer Program (HSD) Tongji University Campus Ambassador
- 💞 Member, Zhongying Public Welfare Promotion Association, Tongji University
- 👨‍🏫 Senior Peer Mentor, Academic Guidance and Development Center, Tongji University

# 🥰 Take a look at my repositories and let's get in touch!

<br><br>