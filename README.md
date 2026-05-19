# 🚀 Multi-Branch CI/CD Deployment

A professional CI/CD pipeline using **GitHub Actions** that automatically deploys to different environments based on the branch.

---

## 🌐 Live Deployments

| Environment | Branch | URL |
|---|---|---|
| 🟢 Production | `main` | [multi-branch-ci-cd.vercel.app](https://multi-branch-ci-cd.vercel.app/) |
| 🟡 QA | `dev` | [multi-branch-ci-cd-dev.vercel.app](https://multi-branch-ci-knnr2fdwz-ahmedoffice69-5379s-projects.vercel.app/) |

---

## 📋 Pipeline Overview

| Branch | Environment | Build & Test | Deploy |
|---|---|---|---|
| `main` | Production | ✅ | ✅ |
| `dev` | QA | ✅ | ✅ |
| `pull_request` | None | ✅ | ❌ |

---

## 🛠 Tech Stack

- **Runtime** — Node.js v24
- **Framework** — Express.js
- **CI/CD** — GitHub Actions
- **Hosting** — Vercel

---

## 📁 Project Structure

```
Multi-Branch-CI-CD/
├── .github/
│   └── workflows/
│       └── multi-branch-deploy.yml
├── index.js
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ How the Pipeline Works

```
Developer Pushes Code
        ↓
   GitHub Actions Triggers
        ↓
   Build & Test Job
        ↓
   Branch Check
   ↙         ↘
main          dev
  ↓             ↓
Deploy to     Deploy to
Production      QA
```

---

## 🔐 GitHub Secrets Required

Go to: `Repo → Settings → Secrets → Actions`

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | Vercel API Token |
| `VERCEL_ORG_ID` | Vercel Organization ID |
| `VERCEL_PROJECT_ID` | Vercel Project ID |

---

## 🚀 Getting Started

**1. Clone the repo**
```bash
git clone https://github.com/AhmedDevx07/Multi-Branch-CI-CD.git
cd Multi-Branch-CI-CD
```

**2. Install dependencies**
```bash
npm install
```

**3. Run locally**
```bash
npm start
```

**4. Open in browser**
```
http://localhost:3000
```

---

## 🌿 Branch Strategy

**Create dev branch:**
```bash
git checkout -b dev
git push origin dev
```

**Push to Production:**
```bash
git checkout main
git add .
git commit -m "your message"
git push origin main
```

**Push to QA:**
```bash
git checkout dev
git add .
git commit -m "your message"
git push origin dev
```

---

## 📄 Workflow File

`.github/workflows/multi-branch-deploy.yml`

```yaml
name: Multi-Branch Deployment

on:
  push:
    branches:
      - main
      - dev
  pull_request:
    branches:
      - main

jobs:
  build:
    name: Build & Test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
      - run: npm install
      - run: npm test --if-present

  deploy-qa:
    name: Deploy to QA
    needs: build
    if: github.ref == 'refs/heads/dev'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g vercel
      - run: vercel --token=${{ secrets.VERCEL_TOKEN }} --yes
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    name: Deploy to Production
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install -g vercel
      - run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }} --yes
        env:
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 👨‍💻 Author

**Muhammad Ahmed** — [@AhmedDevx07](https://github.com/AhmedDevx07)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
