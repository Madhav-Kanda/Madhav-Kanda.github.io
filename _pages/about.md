---
permalink: /
title: "Madhav Kanda"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hello! I am a fully funded M.S. Computer Science (Thesis Track) student at the University of Illinois Urbana-Champaign. My research interests lie in multimodal multi-agent systems, error-free LLM-driven code generation, and program repair using LLMs.

I am currently working with [Prof. Sasa Misailovic](https://misailo.cs.illinois.edu/) on enhancing the semantic accuracy of LLM-generated code through **grammar-guided generation**. Additionally, I am collaborating with [Prof. Lingming Zhang](https://lingming.cs.illinois.edu/) on **automatic software debugging using small language models**. Previously, I worked with [Prof. Heng Ji](https://blender.cs.illinois.edu/hengji.html) and [Prof. Unnat Jain](https://unnat.github.io/) to design a **multi-agent framework** for complex VQA tasks—this work was recently submitted to ACL'25!

I earned my BTech with Honours in Computer Science and Engineering from IIT Gandhinagar, where I conducted research under the guidance of [Prof. Nipun Batra](https://nipunbatra.github.io/) and [Prof. Shanmuganathan Raman](https://sites.google.com/site/shanmuganathanraman/) on probabilistic machine learning (and its applications) and generative adversarial networks, respectively.

During my second-year summer internship, I had the opportunity to work with [Prof. A.G. Ramakrishnan](http://mile.ee.iisc.ac.in/AGR/index.htm) at IISc Bangalore, focusing on natural language processing tasks. In my third-year summer internship, I worked with [Prof. Aki Vehtari](https://users.aalto.fi/~ave/) at Aalto University on reducing divergences encountered during Hamiltonian Monte Carlo sampling. I also worked as a computer vision intern at [Spyne.ai](https://spyne.ai/), where I focused on Virtual Try-On. In addition to my research, I was featured as a contributor in [Dr. Kevin Murphy](https://www.cs.ubc.ca/~murphyk/)'s book, *Probabilistic Machine Learning: Advanced Topics*, in recognition of my contributions.

I’m actively seeking internship opportunities for Summer 2025. If you believe I’d be a great fit for your team, feel free to reach out at **madhav3@illinois.edu**. I’d love to connect!

---

## Affiliations

<div style="white-space: nowrap; overflow-x: auto; text-align: center; flex-direction: row;">

  <div style="display: inline-block; vertical-align: top; margin: 0 1rem; min-width: 100px;">
    <img src="../images/iitgn.png" alt="IIT Gandhinagar" style="width: 80px; height: 80px; object-fit: contain;">
    <p>IIT Gandhinagar<br><em>2020-2024</em></p>
  </div>
  
  <div style="display: inline-block; vertical-align: top; margin: 0 1rem; min-width: 100px;">
    <img src="../images/spyne.jpg" alt="Spyne" style="width: 80px; height: 80px; object-fit: contain;">
    <p>Spyne.ai<br><em>2022</em></p>
  </div>

  <div style="display: inline-block; vertical-align: top; margin: 0 1rem; min-width: 100px;">
    <img src="../images/iisc.png" alt="IISc" style="width: 80px; height: 80px; object-fit: contain;">
    <p>Indian Institute of Science<br><em>2022</em></p>
  </div>

  <div style="display: inline-block; vertical-align: top; margin: 0 1rem; min-width: 100px;">
    <img src="../images/aalto.png" alt="Aalto University" style="width: 80px; height: 80px; object-fit: contain;">
    <p>Aalto University<br><em>2023</em></p>
  </div>

  <div style="display: inline-block; vertical-align: top; margin: 0 1rem; min-width: 100px;">
    <img src="../images/uiuc.jpg" alt="UIUC" style="width: 80px; height: 80px; object-fit: contain;">
    <p>UIUC<br><em>2024-2026</em></p>
  </div>

</div>

---

## News

<!-- 
  By default, show a smaller area (max-height: 300px) with hidden overflow.
  On "More News" click, expand the area and enable scrollbar.
-->
<div id="news-container" style="max-height: 300px; overflow-y: hidden; transition: max-height 0.3s ease; margin-top: 1em; border: 1px solid #eee; padding: 1em;">

  <!-- Single news item -->
  <div style="display: flex; margin-bottom: 1em;">
    <div style="flex: 0 0 100px; font-weight: bold; color: #555;">Aug 2024</div>
    <div>Excited to start my second chapter as a Fully Funded MS CS student at UIUC!</div>
  </div>

  <!-- Single news item -->
  <div style="display: flex; margin-bottom: 1em;">
    <div style="flex: 0 0 100px; font-weight: bold; color: #555;">Jun 2024</div>
    <div>Awarded the Institute Gold Medal at IIT Gandhinagar for Outstanding Performance.</div>
  </div>

  <!-- Single news item -->
  <div style="display: flex; margin-bottom: 1em;">
    <div style="flex: 0 0 100px; font-weight: bold; color: #555;">Feb 2024</div>
    <div>Received an offer for the Caltech SURF program from Prof. Tapio Schneider in the CliMA group.</div>
  </div>

  <!-- Single news item -->
  <div style="display: flex; margin-bottom: 1em;">
    <div style="flex: 0 0 100px; font-weight: bold; color: #555;">Jan 2024</div>
    <div>Selected for Google Research Week 2024—exploring cutting-edge ML techniques with top experts.</div>
  </div>

  <!-- Single news item -->
  <div style="display: flex; margin-bottom: 1em;">
    <div style="flex: 0 0 100px; font-weight: bold; color: #555;">Mar 2023</div>
    <div>Among the 50 applicants selected for the Aalto University research program out of 1,600+ applicants across 84 countries.</div>
  </div>

  <!-- Add more items as needed... -->

</div>

<div style="margin-top: 1em; text-align: right;">
  <a href="#" id="toggle-news" onclick="toggleNews()" style="color: #007acc; text-decoration: none; font-weight: bold;">
    More News →
  </a>
</div>

<!-- Small JavaScript snippet for toggling the News container -->
<script>
function toggleNews() {
  var container = document.getElementById('news-container');
  var link = document.getElementById('toggle-news');
  
  // If currently collapsed (max-height = 300px), expand it
  if (container.style.maxHeight === '300px') {
    container.style.maxHeight = '800px';   // or 'none' if you want no limit
    container.style.overflowY = 'auto';
    link.textContent = 'Show Less ←';
  } else {
    // Otherwise, collapse it back
    container.style.maxHeight = '300px';
    container.style.overflowY = 'hidden';
    link.textContent = 'More News →';
  }
}
</script>
