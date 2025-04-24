# 📰 Stories Dashboard – Next.js Admin Panel

A responsive admin panel dashboard built using **Next.js 13+**, **Tailwind CSS**, and **React Icons**. The project showcases a news or content management system with a sidebar, search functionality, tabs for filtering, and visually engaging story cards. It's optimized for performance with lazy-loaded images and a high Lighthouse score.

## 🚀 Features

- ⚙️ Built with Next.js 13 App Router
- 🎨 Styled with Tailwind CSS
- 🧭 Fully responsive and mobile-friendly layout
- 🧱 Collapsible Sidebar with icons
- 🔍 Search bar to filter stories
- 🗂 Tabs to switch between story types
- 🖼 Story Cards displaying title, date, views, and status
- 📊 Lighthouse score = 97 for Performance, SEO, and Accessibility
- 💤 Lazy loading of images for performance boost
- 🔧 Codemod migration to latest Next.js image standards


Live Link-  https://next-js-ui-dashboard.vercel.app/stories

## 🖼 Image Optimization

Images are stored in the `public/images` directory and are rendered using the updated `<Image />` component from Next.js 13+. Lazy loading and `fill` are properly configured for best performance.

## ⚙️ Technologies Used

- [Next.js 13+](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [Lighthouse](https://pagespeed.web.dev) for performance evaluation

## 🛠 How to Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
