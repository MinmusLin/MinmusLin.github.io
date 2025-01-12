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
  🥰 Hi there my No.
  <img src="https://profile-counter.glitch.me/MinmusLin/count.svg"/>
  visitor!
</h1>

[My Resume](https://github.com/MinmusLin/MinmusLin/raw/refs/heads/main/resume/Resume_En.pdf) / [我的简历](https://github.com/MinmusLin/MinmusLin/raw/refs/heads/main/resume/Resume_Zh.pdf)

I'm Jishen Lin, an undergraduate student majoring in Software Engineering with a focus on Machine Intelligence at the School of Computer Science and Technology, [Tongji University](https://www.tongji.edu.cn). I am passionate about full-stack development and committed to practicing elegant engineering solutions. I enjoy collaborating with diverse teams to explore cutting-edge technologies and solve real-world problems through innovative and efficient solutions. With experience in full-stack development, AI research, and open-source projects, I am always seeking new challenges and opportunities to learn and grow.

Feel free to reach out if you'd like to discuss ideas or explore new possibilities in tech innovation!

<span class="anchor" id="educations"></span>

# 📖 Educations

- *2022 - 2026*, Tongji University - School of Computer Science and Technology
  - Bachelor's Degree in Software Engineering

<span class="anchor" id="honors-and-awards"></span>

# 🏅 Honors and Awards

- *2022 / 2023*, 🥇 First-Class Scholarship for Outstanding Students, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ "Outstanding Student" Award, Tongji University (Top 5%)
- *2022 / 2023*, 🎖️ Social Activity Scholarship, Tongji University (Top 5%)
- *2022 - 2026*, 🎖️ Tang Zhongying Scholarship for Moral Education, Tongji University (Top 1%)
- *2024*, 🥇🥉 Gold Award in Shanghai and National Bronze Award in the 2024 China International College Students' Innovation Competition
- *2024*, 🥇 Gold Award in International Genetically Engineered Machine Competition (iGEM)

<span class="anchor" id="scientific-research"></span>

# 🔬 Scientific Research

- *2023 / 03 - 2024 / 03*, Access Control Mask Detection System Based on Ultralytics

  *University-Level College Student Innovation Training Project - Team Member*

  - This project developed a real-time mask-wearing detection system using the YOLOv8 model, covering data collection, annotation, model training, and optimization. The solution integrated mask detection into the access control system, enabling real-time monitoring and alerts.

  **The project was successfully completed and received an "Excellent" rating in the 2024 final review by the School of Electronics and Information Engineering.**

- *2024 / 03 - 2025 / 03*, Lightweight Method for Signal Enhancement Network in 3D Image Sensors

  *National-Level College Student Innovation Training Project - Lead Researcher*

  - Multi-scale Kernel Design: The network dynamically adjusts kernel sizes to capture both local details and broader features, modeling dependencies at various scales.
  - Model Complexity Analysis: Pruning and sparsification techniques reduced redundant computations, optimizing performance through L1 regularization and gradient calculations.
  - Lightweight Design: Streamlined network structures reduced computational complexity and memory usage while maintaining high performance.
  - Real-world Testing: The model was validated on real-time sensor data, demonstrating improved image quality and efficiency on resource-constrained devices.

  **The project ranked first in the 2024 College of Computer Science and Technology, Tongji University, Innovation Training Project Proposal Defense.**

<span class="anchor" id="internships"></span>

# 👨‍💻 Internships

- *2024 / 07 - 2024 / 08*, Changjiang Pension Insurance Co., Pacific Insurance Group - IT Department
  - Frontend Development for Middle Platform Management System: Assisted in the frontend development of the middle platform management system. Optimized the frontend display of user management, role permissions, and other functional modules within the Vue.js ecosystem, enhancing system performance and user experience.
  - Development of Due Diligence Assistant: Contributed to the development of the meeting minutes feature for the Due Diligence Assistant. Integrated speech recognition services with the Dify large language model to enable automatic generation and analysis of meeting minutes. Technically, users could upload meeting audio files through the file upload module, and the system converted and returned text results. Leveraging the Dify large language model, the system displayed key information and consistency analysis of viewpoints in the meeting minutes. For each speaker and topic, the model automatically generated summaries and key points, providing a more intelligent approach to content extraction and presentation.
  - Prompt Optimization Based on Dify Open-Source Large Language Model: Optimized the prompt design and workflow of the model. Enhanced the system's contextual analysis capabilities through multi-turn dialogue functionality, enabling it to remember and correlate previous interactions, thereby improving the accuracy and intelligent feedback of subsequent conversations.

  **During this internship, I improved my frontend development skills through technical practice and effective communication, while also strengthening my ability to collaborate with the team and understand project requirements.**

<span class="anchor" id="projects"></span>

# 💻 Projects

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Teamfight Tactics</div><img src="images/teamfight-tactics.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2023*, Teamfight Tactics: A Game Developed with Cocos2d-x

  *Windows Application Development*

  - Implemented core functionalities such as character control, combat systems, and equipment synthesis using object-oriented programming (encapsulation, inheritance, polymorphism).
  - The project is open-sourced on GitHub and has received positive feedback and support from the open-source community.
  - Through this project, I gained in-depth knowledge of Cocos2d-x game engine development and valuable experience in interacting with the open-source community and handling feedback.
  - **The project won the Bronze Award at Tongji University in the China International College Students Innovation Competition (2024) and the Bronze Award at the 9th "Huichuang Youth" Shanghai College Students Cultural and Creative Works Exhibition.**
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">MinmusOS</div><img src="images/minmusos.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024*, MinmusOS: The Design and Implementation of an Operating System Based on Rust Language

  *System Development*

  - MinmusOS is a multitasking operating system developed in Rust, targeting the Intel IA-32 (x86) architecture.
  - The project achieved separation between the system kernel and user space, covering core functionalities such as boot processes, task scheduling, memory management, and device drivers.
  - Leveraging Rust's memory safety mechanisms, the project effectively addressed memory safety issues commonly found in traditional operating system kernels.
  - **Through this project, I gained a foundational understanding of Rust, deepened my knowledge of operating system principles, became familiar with Linux-related toolchains, and significantly improved my system development skills.**
</div>
</div>

<div class="paper-box"><div class="paper-box-image"><div><div class="badge">Atlas.Y</div><img src="images/atlas-y.png" alt="image" width="100%"></div></div>
<div class="paper-box-text" markdown="1">
- *2024*, Atlas.Y: Advanced Targeting and Localization Assistance System for Yeast

  *Full-stack Application Development and Database Maintenance*

  - This project is an entry for the Software & AI track of the iGEM (International Genetically Engineered Machine Competition) 2024.
  - The frontend, built with Vue.js, provides a user-friendly interface, while the backend implements RESTful APIs and database management to support molecular tag queries and data analysis.
  - A deep learning model and algorithm environment were deployed in the backend to enable intelligent optimization of molecular tag design.
  - Developed the project Wiki ([2024.igem.wiki/tongji-software](https://2024.igem.wiki/tongji-software)) to detail the software's functionalities and application scenarios, showcasing it to competition judges and the public.
  - **The project won the Gold Award at the International Genetically Engineered Machine Competition (iGEM), and I, as the Student Leader, presented the project in person in Paris, France.**
</div>
</div>

<span id="technical-skills"></span>

# 🛠️ Technical Skills

- 🖥️ Proficient in programming languages such as C/C++, C#, Java, Go, Python, and Rust, with strong capabilities in system development and algorithm implementation.
- 🧰 Skilled in the Vue.js ecosystem and familiar with frameworks like Spring Boot, possessing full-stack development experience.
- ⚙️ Experienced in Linux environments and associated toolchains, proficient in development tools such as CMake, Makefile, and Docker.
- 📈 Highly skilled in Git version control and CI/CD workflows like GitHub Actions.
- 🗃️ Capable of database design and optimization, with hands-on experience in MySQL and Redis.

<span class="anchor" id="student-activities"></span>

# 🏫 Student Activities

- 👨‍🎓 Class Monitor, Class 1, Software Engineering, School of Computer Science and Technology (2022 cohort)
- 🎖️ Awarded "Outstanding Volunteer" by Freshman Institute (2022-2023), with nearly 200h of volunteer service
- 🏆 President, Huawei Technology Club, School of Computer Science and Technology, Tongji University
- 🏆 2024 Huawei Developer Program (HSD) Tongji University Campus Ambassador
- 💞 Member, Zhongying Public Welfare Promotion Association, Tongji University
- 👨‍🏫 Senior Peer Mentor, Academic Development and Guidance Center & Student Growth Center, Jiading Campus

<br><br>