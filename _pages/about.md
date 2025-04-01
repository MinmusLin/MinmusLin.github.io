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

<div style="display: flex; align-items: center"><img src="images/tongji.png" style="width: 200px; height: 57px; margin-right: 20px">
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

- *2024 / 07 - 2024 / 10*, 🥇🥉 Gold Award in Shanghai (Provincial Level) and National Bronze Award in China International College Students Innovation Competition (2024)
- *2024 / 03 - 2024 / 10*, 🥇 Gold Award in International Genetically Engineered Machine Competition (iGEM)
- *2022 - 2026*, 🎖️ Tang Zhongying Moral Education Scholarship, Tongji University (Top 1%)
- *2022 / 2023*, 🥇 First-Class Outstanding Student Scholarship, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ Social Activity Scholarship, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ "Outstanding Class Cadre" Award, Tongji University (Top 1%)
- *2023 / 2024*, 🎖️ "Outstanding Student" Award, Tongji University (Top 5%)

<span class="anchor" id="scientific-research"></span>

# 🔬 Scientific Research

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">National-level SITP</div><img src="images/lightweight-network-for-3d-image-sensor-signal-enhancement.png" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 03 - 2025 / 03*, Lightweight Network for 3D Image Sensor Signal Enhancement

  *National-level Student Innovation Training Project - Lead Researcher*

  - **Description:** Developed a ​lightweight neural network for enhancing ​Time-of-Flight (ToF) sensor signals on edge devices, optimizing the trade-off between ​computational efficiency and ​3D imaging accuracy for applications like robotics, autonomous driving, and AR/VR.
  - **Responsibilities:**
    - Designed a ​dynamic kernel adjustment mechanism to adaptively optimize feature extraction while reducing model parameters.
    - Implemented ​model compression techniques (quantization, pruning) to enable real-time inference on embedded devices (Jetson Nano, Raspberry Pi).
    - Developed a ​pipeline for depth map and 3D point cloud reconstruction, improving robustness against sensor noise.
    - Validated performance on ​real-world and synthetic ToF datasets, benchmarking against state-of-the-art methods.
  - **Achievements:** The project successfully ​improved depth imaging quality while reducing computational load by ​40%+, achieving ​>30 FPS real-time processing on edge devices. By deploying the optimized model on low-power hardware, we enabled ​energy-efficient 3D perception, advancing ​"sensing-computing integration" for applications requiring lightweight, high-speed depth reconstruction.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Provincial-level SITP</div><img src="images/access-control-mask-detection-system.png" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2023 / 03 - 2024 / 03*, Access Control Mask Detection System

  *Provincial-level Student Innovation Training Project - Lead Researcher*

  - **Description:** Developed a ​real-time mask detection system using ​YOLOv8 to automate access control in high-traffic areas (e.g., schools, transit hubs) during the post-COVID-19 era. The system identifies ​proper/improper mask usage, reducing reliance on manual monitoring while supporting public health measures.
  - **Responsibilities:**
    - Researched and implemented ​YOLOv8 for binary mask detection, trained on open-source datasets with custom augmentation for improper usage cases.
    - Expanded training data with ​diverse mask-wearing scenarios (correct, incorrect, no mask) to improve model robustness.
    - Fine-tuned hyperparameters and deployed ​TensorRT acceleration for real-time inference (>30 FPS) on edge devices.
    - Designed a ​gateway access control interface that triggers alerts/barriers based on detection results.
  - **Achievements:** The system achieved ​>95% detection accuracy in real-world testing, enabling ​automated, scalable mask enforcement while reducing labor costs by ~60% at pilot sites. Its ​low-latency edge deployment proved effective for high-traffic environments, contributing to safer public spaces during pandemic recovery.
</div>
</div>

<span class="anchor" id="internships"></span>

# 💻 Internships

<div style="display: flex; align-items: center"><img src="images/cpic-changjiangpension.png" style="width: 154px; height: 104px; margin-right: 20px">
<div markdown="1" style="flex: 1">
- *2024 / 07 - 2024 / 08*, Changjiang Pension Insurance Co., Pacific Insurance Group

  *Intern, Information Technology Department*

  - **Description:** Participated in the development and setup of the company's due diligence assistant, aimed at improving the efficiency of due diligence through automated workflows, addressing the issues of time consumption and high costs in traditional due diligence processes.
  - **Responsibilities:** Deployed Dify on local servers, designed and implemented the due diligence assistant Workflow, covering question classification, meeting minutes generation, opinion consistency analysis, and routine issue handling; integrated databases and leveraged LLM APIs for efficient processing, designed classification and processing logic, tested and optimized the Workflow to ensure accuracy and efficiency.
  - **Achievements:** Successfully deployed and launched the due diligence assistant, achieving over 95% accuracy in question classification. The meeting minutes generation and opinion analysis functions significantly improved efficiency, receiving positive feedback from the due diligence team.
</div>
</div>

<span class="anchor" id="projects"></span>

# 🧩 Projects

🎉 For more interesting and innovative projects, please visit my [GitHub repository](https://github.com/MinmusLin?tab=repositories).

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Zhimu Cloud</div><img src="images/zhimu-cloud.png" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 10 – 2025 / 03*, Zhimu Cloud: Intelligent Curtain Wall Dataset Management Platform

  *Full-stack Application Development and Database Maintenance*

  - **Description:** This project provides efficient, secure data storage, processing, and analysis services for Tongji University’s smart facade research team, promoting deep integration and innovative applications of civil engineering science and computer science. The platform supports multi-dimensional dataset management, access control, and automated operations, serving as the core data infrastructure for simulation analysis and experimental research on smart facades.
  - **Tech Stack:** Spring Boot, MyBatis, OSS SDK, MySQL, GitHub Actions, Docker Compose, Nginx, Vue, TypeScript, Element Plus
  - **Responsibilities:**
    - Led full-stack development of the dataset management platform, providing user authentication, resource access control, and data interaction services for ten external subsystems while ensuring security.
    - Implemented dataset upload, download, and storage operations using Alibaba Cloud OSS SDK, applied cold archival strategies for deletion workflows, and enabled automated data backup.
    - Built a CI/CD pipeline with GitHub Actions, integrating automated testing, Docker image builds, and container deployment, along with logging functionality.
    - Orchestrated multi-container services using Docker Compose and resolved cross-origin issues for the MatrixCloud GPU computing platform via Nginx reverse proxy.
  - **Achievements:** Successfully delivered and maintained a stable platform, processing over 10,000 daily data requests. It supports ten core research areas, including metal facade corrosion detection, glass facade burst detection, and stone facade crack analysis. The smart facade platform has been designated as key research infrastructure at Tongji University, with a software copyright application currently in progress.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Atlas.Y</div><img src="images/atlas-y.png" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 03 – 2024 / 10*, Atlas.Y: Advanced Targeting and Localization Assistance System for Yeast

  *Full-stack Application Development and Database Maintenance*

  - **Description:** This software was developed as an entry for the software and artificial intelligence track of the ​International Genetically Engineered Machine (iGEM) Competition, aiming to address protein localization challenges in synthetic biology using AI technologies. Built on ​Spring Boot and ​Vue, it features fusion protein generation, 3D protein structure visualization, functionality/stability evaluation, directed evolution, and optogenetic localization. The project followed full-cycle software development management and was completed in eight months from design to delivery. Project link: [https://2024.igem.wiki/tongji-software](https://2024.igem.wiki/tongji-software)
  - **Tech Stack:** Spring Boot, MyBatis-Plus, MySQL, GitLab CI/CD, Docker, Vue, TypeScript, Vuetify, NGL, Flask, AlphaFold, Rosetta
  - **Responsibilities:**
    - Led full-stack development, building a system for molecular tag design and optimization, ensuring efficient data processing and model integration.
    - Designed a ​MySQL database to store multi-dimensional data (signal peptides, linkers, user query logs, etc.), optimizing indexes to reduce query latency.
    - Integrated ​AlphaFold and ​Rosetta for fusion protein generation and stability assessment, and implemented protein directed evolution using a graph neural network model.
    - Established an encrypted ​SSH tunnel to bypass port restrictions on the ​AutoDL computing platform, ensuring stable GPU service access.
    - Resolved ​NGL library rendering issues for 3D protein visualization by analyzing source code due to outdated official documentation.
  - **Achievements:** The project won an ​iGEM Gold Medal (top 10% globally) and received high praise from nearly 100 international synthetic biology researchers. The software has been adopted by research teams at ​MIT, Tsinghua University, East China University of Science and Technology, and others. As one of the team leaders, I represented Tongji University at the ​in-person Grand Jamboree in Paris, France, to showcase the project.
</div>
</div>

<span id="technical-skills"></span>

# 🛠️ Technical Skills

- 📚 **Computer Fundamentals:** Proficient in core computer science concepts including ​data structures & algorithms, operating systems, and computer networks, with familiarity in common design patterns.
- 🖥️ **Programming Languages:** Solid grasp of ​Java (basic syntax, OOP principles, exception handling, collections framework). Familiar with key language specifics of ​C/C++.
- ⚙️ **Development Tools:** Skilled in ​Git, Docker, Docker Compose, Maven, IntelliJ IDEA, and comfortable working in ​Linux environments.
- 🗃️ **Databases:** Capable of database design, with hands-on experience in ​MySQL and ​Redis.
- 🧰 **Backend Development:** Proficient in ​Spring Boot and ​MyBatis. Understands core principles of ​Spring IoC and ​AOP.
- ⌨️ **Frontend Development:** Competent in fundamental ​web development. Experienced with the ​Vue.js ecosystem and full-stack development.
- 📈 **DevOps:**
Practical experience with ​GitHub Actions and ​GitLab CI/CD. Capable of setting up ​continuous integration and deployment (CI/CD) pipelines.
- 🔎 **Soft Skills:** Strong ​problem-solving, communication, and collaboration abilities. Able to efficiently troubleshoot issues, work effectively in teams, and continuously learn new technologies to enhance skills.

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