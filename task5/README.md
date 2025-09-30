

## `README.md`

````markdown
# Task 5 – Deploy a Static Website Using GitHub Pages

## Objective
Host a simple static website on **GitHub Pages** for free, and understand the workflow of version control and static hosting.

---

## Steps Followed
1. **Created GitHub Repository**  
   - Made a repo named `username.github.io` (replace with your GitHub username).  
   - Added `index.html` and `style.css` files for the static website.  

2. **Local Setup**  
   ```bash
   git clone https://github.com/tsujit74/elevatlab
   cd username.github.io
   # copied website files into this folder
   git add .
   git commit -m "Added Task 5 static website"
   git push origin main
````

3. **Enabled GitHub Pages**

   * Went to **Settings → Pages**.
   * Selected **Branch: main / root folder**.
   * Saved settings.
---

## 📂 Project Structure

```
task5/
 ├── index.html   # main webpage
 ├── styles.css    # styles
 └── README.md    # documentation
```

---

## 🔑 Key Concepts Learned

* **Git** → Distributed version control system to track changes in code.
* **GitHub** → Platform to host repositories and collaborate.
* **GitHub Pages** → Free hosting service for static websites.
* **Static Website** → Website built with only HTML, CSS, and JS (no server-side logic).
* **Version Control Workflow** → clone → commit → push → deploy.

---

## ✅ Outcome

* A **static portfolio website** was successfully deployed.
* Live Link (replace with your actual link):
  👉 [https://tsujit74.github.io/Photography/](https://username.github.io/)

This demonstrated skills in **Git, GitHub, hosting, and deployment workflow**.

