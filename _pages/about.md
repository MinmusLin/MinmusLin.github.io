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

- *2022 / 08 - 2026 / 06*, Tongji University - School of Computer Science and Technology
  - Bachelor's Degree in Software Engineering
  - GPA: 4.73 / 5.00 (92.27 on a 100-point scale)
  - Rank: 14 / 199 (Top 7%)
  - English Proficiency: CET-6

<div class="paper-box"><img src="images/tongji.png" alt="image">
<div class="paper-box-text" markdown="1">
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

- *2023 / 03 - 2024 / 03*, Access Control Mask Detection System Based on Ultralytics

  *Provincial-level College Student Innovation Training Project - Lead Researcher*

  - Post-COVID-19, mask-wearing became essential to prevent virus spread. Our team developed a real-time mask detection system using YOLOv8 for access control in high-traffic areas.
  - Design and deploy a system to detect mask usage and proper wearing, reducing manual monitoring in places like schools and transit hubs.
  - Researched YOLO models and trained on open-source datasets for binary mask detection. Expanded datasets with improper mask usage images, fine-tuned model parameters, and improved accuracy. Evaluated performance and deployed the system into access control.
  - Built a high-accuracy, real-time mask detection system capable of identifying proper/improper mask usage. The system is scalable for high-traffic environments, aiding pandemic prevention while cutting labor costs.

- *2024 / 03 - 2025 / 03*, Lightweight Network for 3D Image Sensor Signal Enhancement

  *National-level College Student Innovation Training Project - Lead Researcher*

  - Multi-scale Kernel Design: The network dynamically adjusts kernel sizes to capture both local details and broader features, modeling dependencies at various scales.
  - Model Complexity Analysis: Pruning and sparsification techniques reduced redundant computations, optimizing performance through L1 regularization and gradient calculations.
  - Lightweight Design: Streamlined network structures reduced computational complexity and memory usage while maintaining high performance.
  - Real-world Testing: The model was validated on real-time sensor data, demonstrating improved image quality and efficiency on resource-constrained devices.

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

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Teamfight Tactics</div><img src="images/teamfight-tactics.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2023 / 12*, Teamfight Tactics: A Game Developed with Cocos2d-x

  *Windows Application Development*

  - Implemented core functionalities such as character control, combat systems, and equipment synthesis using object-oriented programming (encapsulation, inheritance, polymorphism).
  - The project is open-sourced on GitHub and has received positive feedback and support from the open-source community.
  - Through this project, I gained in-depth knowledge of Cocos2d-x game engine development and valuable experience in interacting with the open-source community and handling feedback.
  - The project won the Bronze Award at Tongji University in the China International College Students Innovation Competition (2024) and the Bronze Award at the 9th "Huichuang Youth" Shanghai College Students Cultural and Creative Works Exhibition.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">MinmusOS</div><img src="images/minmusos.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 08*, MinmusOS: The Design and Implementation of an Operating System Based on Rust Language

  *System Development*

  - MinmusOS is a multitasking operating system developed in Rust, targeting the Intel IA-32 (x86) architecture.
  - The project achieved separation between the system kernel and user space, covering core functionalities such as boot processes, task scheduling, memory management, and device drivers.
  - Leveraging Rust's memory safety mechanisms, the project effectively addressed memory safety issues commonly found in traditional operating system kernels.
  - Through this project, I gained a foundational understanding of Rust, deepened my knowledge of operating system principles, became familiar with Linux-related toolchains, and significantly improved my system development skills.
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Atlas.Y</div><img src="images/atlas-y.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024 / 10*, Atlas.Y: Advanced Targeting and Localization Assistance System for Yeast

  *Full-stack Application Development and Database Maintenance*

  - As a software and artificial intelligence track entry for the iGEM competition, this project aimed to address protein localization challenges in synthetic biology by integrating AI technologies.
  - Led full-stack development, building a system to support molecular tag design and optimization, ensuring efficient data processing and model integration.
  - Developed RESTful APIs using Spring Boot, integrated graph neural network models, designed a MySQL database for efficient data operations, and coordinated the team to deliver the project.
  - Built the team project Wiki using Vue.js (Link: [https://2024.igem.wiki/tongji-software](https://2024.igem.wiki/tongji-software)).
  - The project won an international gold medal in the iGEM competition and received high recognition from dozens of international synthetic biology researchers. As one of the team leaders, presented the project in Paris, France.
</div>
</div>

<span id="technical-skills"></span>

# 🛠️ Skills

- 🖥️ Proficient in Java programming language and Spring Boot framework, with the ability to develop systems and implement algorithms.
- 🧰 Experienced in Vue.js ecosystem, possessing full-stack development experience.
- ⚙️ Familiar with Linux environment and basic operations, skilled in development tools such as Git, Docker, and GitHub Actions CI/CD workflows.
- 🗃️ Capable of database design, with expertise in MySQL and Redis.

<span class="anchor" id="student-activities"></span>

# 🏫 Student Activities

- 👨‍🎓 Class Monitor, Class 1, Software Engineering, School of Computer Science and Technology (2022 cohort)
- 🎖️ Awarded "Outstanding Volunteer" by Freshman Institute (2022-2023), with nearly 200h of volunteer service
- 🏆 President, Huawei Student Technology Club, School of Computer Science and Technology, Tongji University
- 🏆 2024 Huawei Developer Program (HSD) Tongji University Campus Ambassador
- 💞 Member, Zhongying Public Welfare Promotion Association, Tongji University
- 👨‍🏫 Senior Peer Mentor, Academic Guidance and Development Center, Tongji University

<span class="anchor" id="self-evaluation"></span>

# 💡 Self-Evaluation

- 🎓 Achieved outstanding academic performance during undergraduate studies, proficient in core computer science knowledge such as data structures and algorithms, operating systems, computer networks, and design patterns, with strong system analysis and design capabilities.
- ⏰ Served as the group leader for nearly all courses during undergraduate studies, demonstrating excellent project planning and team coordination skills, able to collaborate efficiently with team members and drive project progress effectively.
- 📑 Passionate about technology, with strong programming habits, clear code structure, and attention to detail and maintainability, capable of quickly mastering new technologies and applying them to practical projects.
- 🏃‍♂️‍➡️ Enthusiastic about sports, maintaining good physical fitness and a positive attitude towards life, able to handle high-intensity work challenges.

# 🥰 Take a look at my repositories and let's get in touch!

<br><br>