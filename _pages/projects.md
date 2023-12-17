---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
---

<!-- Project 1 -->
### 1. [Data Agnostic Blind Image Restoarion](https://github.com/Madhav-Kanda/DeblurGAN)

Current deep learning methods exhibit poor performance in deblurring images from different domains than their training set. Our objective is to develop a method that excels in deblurring various types of images. To achieve this, I conducted an empirical study on diverse image restoration techniques. By integrating these techniques, I implemented Generative Adversarial Networks (GANs) and modified state-of-the-art methods to assess their adaptability across a range of datasets. Presently, I am engaged in developing a CLIP-based StyleGAN method.

<!-- Project 2 -->
### 2. [Compiler](https://github.com/Madhav-Kanda/Compiler-Project)

A Powerful Compiler built from scratch with Python, incorporating advanced techniques for lexical analysis, parsing, semantic analysis, optimization, and a user-friendly interface. Incorporated advanced features such as error handling and introduced unique variable "var" for incorporating different possibilities of writing programs.


### 3. [AutoDiff-Inference](https://github.com/Madhav-Kanda/AutoDiff-Inference)

Implementation of Automatic Differentiation Variational Inference (ADVI) and Laplace Approximation with bijectors using Google's JAX framework. This work was done as a part of the development of [Bijax](https://github.com/patel-zeel/bijax), a bayesian inference library in JAX.

### 4. Active Learning for Efficient Data Acquisition for Wearable Spirometry
The aim of this project was to strategically select samples from ground-truth spirometers, effectively reducing the resource-intensive data collection necessary for constructing precise machine learning models for mobile spirometry. My role involved implementing active learning techniques in a multi-task setting. As a result, our approach delivered superior results, surpassing models trained on the entire dataset while utilizing just 48% of the available data. Preparing the manuscript for submission to *ACM Health*

### 5. Towards Scalable Identification of Brick Kilns from Satellite Imagery with Active Learning

Identifying illegally constructed brick kilns will help mitigate their environmental impact. Due to the sparse availability of Indian brick kailn data, we employed transfer learning and fine-tuned the models developed for Bangladesh data. Labeling brick kilns is time-consuming; thus, employing active learning we labeled data points where the model exhibited the highest uncertainty. With the trained model, we identified over 700 brick kilns in the Indo-Gangetic region and we are further expanding this approach for other regions in India

### 6. [Reliable Parameteric Reparameterization](https://madhav-kanda.github.io/blogs/posts/2023-07-21-wnr.html)

I worked on an approach to minimize the divergences encountered while performing Markov Chain Monte Carlo sampling from a posterior distribution. The proposed approach involved enhancing the HMC warmup phase by implementing methods for learning non-linear reparameterization alongside the existing linear ones. This method performed better than Variationally Inferred Parameterisation approach in terms of effective sample size per gradient evaluations. We are working on expanding it and comparing its performance to other methods like Neutra HMC.
