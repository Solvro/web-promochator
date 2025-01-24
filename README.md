# PromoCHATor web client

![Solvro banner](https://github.com/Solvro/backend-topwr-sks/blob/main/assets/solvro_dark.png#gh-dark-mode-only)
![Solvro banner](https://github.com/Solvro/backend-topwr-sks/blob/main/assets/solvro_dark.png#gh-light-mode-only)

## About 🚀

The PromoCHATor is a recommendation system which helps WUST students to find their ideal diploma thesis supervisor. System is based on machine learning techniques and data scraped from web.

## Features 🔥

Current web app allows to:

- receive recommended supervisors based on user's thesis topic/short description
- save supervisors to favourites
- give feedback about recommended supervisor in order to fine tune the model

## Team 👨‍🔧

- [Maciej Król](https://github.com/maciejkrol18) - Techleader
- [Maciej Malinowski](https://github.com/mejsiejdev) - Frontend Developer
- [Maciej Talarczyk](https://github.com/muclx) - UI/UX Designer, Frontend Developer
- [Wojciech Kosmalski](https://github.com/chewmanji) - Frontend Developer

## Technologies 👀

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Coolify](https://img.shields.io/badge/Coolify-9D00FF?style=for-the-badge&logo=coolify&logoColor=white)

## Links 🔗

- [Application](https://promochator.solvro.pl/)
- [Project portfolio](https://solvro.pwr.edu.pl/portfolio/promochator)

## Development 🔧

### 1. Clone the Repository

```bash
git clone https://github.com/Solvro/web-promochator.git
```

### 2. Install Dependencies

```bash
cd web-promochator
pnpm i
```

### 3. Configure Environment

Copy and paste`.env.example` file in the root directory, rename the copy to `.env` and set the following content:

```env
PROMOCHATOR_API=<promochator-api-url>
NEXT_PUBLIC_LOCK_DURATION_SECONDS=<default-to-60>
BUG_REPORT_FORM_URL=<google-form-url>
BUG_REPORT_FORM_EMAIL=<form-entry>
BUG_REPORT_FORM_DESCRIPTION=<form-entry>
BUG_REPORT_FORM_STEPS=<form-entry>
```

### 4. Run the Project

```bash
pnpm dev
```

### 5. View the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 🤝 Contributing

We welcome contributions! Here's how you can help:

- 🐛 Report bugs or suggest improvements
- 🌟 Request new features
- 🧪 Test and provide feedback

## 🔄 Git Workflow

> Don't worry if you forget any steps – our automatic GitHub Action will run checks and notify you of any issues.

### 📘 Solvro GitHub Handbook

Check out our [detailed GitHub workflow guide](https://docs.solvro.pl/github).

### 🔐 SSH Setup

For Windows users, follow this [SSH setup tutorial](https://www.youtube.com/watch?v=vExsOTgIOGw).

### 🌿 Feature Development Workflow

1. Checkout and update main:

   ```bash
   git checkout main
   git pull origin main
   git fetch
   ```

2. Create a feature branch:

   ```bash
   git checkout -b feat/{issue_number}-my-feature-branch
   ```

3. Make your changes and commit:

   ```bash
   git add .
   git commit -m "My changes description"
   ```

4. Push to remote:

   ```bash
   git push origin feat/{issue_number}-my-feature-branch
   ```

5. Create a Pull Request on GitHub

### ⚠️ Important Reminders

- Never push directly to the main branch
- Always commit before checking out to a different branch
- After successful merge, clean up:

  ```bash
  git branch -d feat/{issue_number}-my-feature-branch
  git push origin --delete feat/{issue_number}-my-feature-branch
  ```

## 📞 Contact

For questions or suggestions, reach out to us:

- ✉️ Email: <kn.solvro@pwr.edu.pl>
- 🌐 Website: [solvro.pwr.edu.pl](https://solvro.pwr.edu.pl/)
- 📘 Facebook: [KN Solvro](https://www.facebook.com/knsolvro)

---

Thank you for your interest in our project! 🥰
