# 🎬 Pitch Dekho

**Pitch Dekho** is a web application where users can explore and share movie pitches, trailers, and summaries — all in one interactive platform. It’s built using **Next.js** for the frontend and **Sanity.io** as the headless CMS.

---

## 🚀 Features

- 🔐 **Authentication** with GitHub using **NextAuth.js**
- ⚡ **Partial Pre-rendering (PPR)** for optimized performance
- 📊 **Real-time view tracking** per post
- 📽️ Display of **movie trailers**, **pitches**, and **summaries**
- 💡 **Sanity CMS** integration for dynamic content management
- 📱 Responsive and sleek UI

---

## 🛠️ Tech Stack

| Tech                            | Usage                      |
|--------------------------------|----------------------------|
| [Next.js](https://nextjs.org/) | Frontend Framework          |
| [Sanity.io](https://www.sanity.io/) | Headless CMS           |
| [NextAuth.js](https://next-auth.js.org/) | Authentication    |
| Tailwind CSS / CSS Modules      | Styling (mention your choice) |
| [Vercel](https://vercel.com/)  | Hosting (if deployed)       |

---

## 📸 Demo
> 🌐 Live site: [pitchdekho.vercel.app](https://startup-site-git-main-harsh-agarwals-projects-a10796f3.vercel.app/) 

---

## 🧠 How It Works

1. Content is managed through **Sanity Studio**, giving admins full control over posts.
2. Users authenticate via **GitHub** using **NextAuth.js**.
3. Each post uses **Partial Pre-rendering (PPR)** to improve load performance.
4. Views are fetched and updated in **real-time** to track user engagement.

---

## 🚧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Harsh-Agarwall/startup_site.git
cd startup_site
```

### 2. Install dependencies
```bash
npm install
```
### 3. Environment variables
```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-01
```
### 4. Run the development server
```bash
npm run dev
```



