# 📰 খবরিকা

A modern **full-stack news web application** built with **Next.js**, **TypeScript**, **MongoDB**, and **Better Auth**.

The project combines a responsive news interface with user authentication and a MongoDB-backed authentication system. News content is fetched from an external news API and displayed in categorized sections with article navigation.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Better Auth](https://img.shields.io/badge/Auth-Better%20Auth-orange)](https://www.better-auth.com/)

---

## ✨ Features

### 🔐 Authentication

* Email and password authentication
* Secure authentication powered by **Better Auth**
* MongoDB-backed authentication storage
* Authentication-ready project structure
* Easy to extend with additional authentication providers

### 📰 News Platform

* Fetches news from an external API
* Featured/main news section
* Categorized news sections
* Most-read news section
* Individual article navigation
* Reusable news card components
* Responsive grid-based layout

### 🎨 Modern UI

* Built with **Tailwind CSS**
* HeroUI components
* Clean and responsive interface
* Modern card-based news layout
* Optimized typography with Next.js font support

### ⚡ Next.js

* Next.js App Router
* Server-side data fetching
* TypeScript support
* Component-based architecture
* Production-ready build configuration

---

## 🛠️ Tech Stack

| Technology                     | Purpose                           |
| ------------------------------ | --------------------------------- |
| **Next.js 16**                 | Full-stack React framework        |
| **React 19**                   | UI library                        |
| **TypeScript**                 | Type-safe development             |
| **Better Auth**                | Authentication                    |
| **MongoDB**                    | Database                          |
| **@better-auth/mongo-adapter** | Better Auth + MongoDB integration |
| **Tailwind CSS 4**             | Styling                           |
| **HeroUI**                     | UI components                     |
| **DaisyUI**                    | Additional UI utilities           |
| **ESLint**                     | Code quality                      |
| **Vercel**                     | Deployment                        |

The repository's current dependencies include Next.js 16, React 19, Better Auth, MongoDB, HeroUI, Tailwind CSS 4, DaisyUI, and TypeScript.

---

## 📁 Project Structure

```text
full-project-with-auth/
│
├── public/
│   └── # Static assets
│
├── src/
│   ├── app/
│   │   ├── Components/
│   │   │   ├── MainNewsCard
│   │   │   └── NewsCard
│   │   │
│   │   ├── page.tsx
│   │   └── ...
│   │
│   └── lib/
│       └── auth.ts
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The homepage uses reusable `MainNewsCard` and `NewsCard` components and fetches news sections from the project's external news API.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tanvirahmedmahin10/full-project-with-auth.git
```

### 2. Navigate to the project

```bash
cd full-project-with-auth
```

### 3. Install dependencies

Using npm:

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

Or using pnpm:

```bash
pnpm install
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root of the project:

```env
BETTER_AUTH_MONGO=your_mongodb_connection_string
```

### Example

```env
BETTER_AUTH_MONGO=mongodb+srv://username:password@cluster.mongodb.net/
```

> **Important:** Never commit your `.env.local` file or expose your MongoDB credentials publicly.

The authentication configuration uses the `BETTER_AUTH_MONGO` environment variable to create the MongoDB connection and stores authentication data in the `auth-testing` database.

---

## 🗄️ MongoDB Setup

You can use either:

* MongoDB Atlas
* A local MongoDB server
* Any MongoDB-compatible deployment

### MongoDB Atlas

1. Create a MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Allow your IP address in Network Access.
5. Copy your MongoDB connection string.
6. Add it to `.env.local`:

```env
BETTER_AUTH_MONGO=mongodb+srv://<username>:<password>@<cluster-url>/
```

The application uses the Better Auth MongoDB adapter to connect authentication to MongoDB.

---

## ▶️ Run the Development Server

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

The application is configured around the standard Next.js development workflow.

---

## 📦 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the application in production mode.

### Lint

```bash
npm run lint
```

Runs ESLint against the project.

---

## 🔐 Authentication Architecture

Authentication is handled using **Better Auth** with MongoDB.

The authentication configuration enables email/password authentication:

```ts
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
```

This allows the application to authenticate users while persisting authentication-related data in MongoDB.

---

## 📰 News Data

The homepage retrieves news sections from the following API:

```text
https://news-api-v2.vercel.app/api/news/sections
```

The response is divided into news sections and articles, which are then rendered using reusable components.

The homepage includes:

* Featured news
* Latest/category sections
* Most-read articles
* Article navigation
* Reusable news cards

---

## 🧩 Component Architecture

The project uses reusable components to keep the UI maintainable.

### `MainNewsCard`

Used for displaying the primary/featured news content.

### `NewsCard`

Used for displaying individual articles inside the different news sections.

This makes it easier to modify the design of news items without duplicating UI code.

---

## 🌐 Deployment

This project can be deployed easily to **Vercel**.

### Deploy with Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Add your environment variable:

```env
BETTER_AUTH_MONGO=your_mongodb_connection_string
```

4. Deploy.

After deployment, make sure your MongoDB configuration allows connections from your deployed application.

The repository currently includes a Vercel deployment and is structured as a standard Next.js application.

---

## 🔒 Security

For production deployments:

* Never commit `.env.local`
* Never expose MongoDB credentials
* Use strong database passwords
* Configure MongoDB Network Access appropriately
* Use HTTPS in production
* Keep dependencies updated
* Use environment variables for sensitive configuration

---

## 🚧 Future Improvements

Some ideas for extending the project:

* [ ] Google authentication
* [ ] GitHub authentication
* [ ] User profile page
* [ ] Protected dashboard
* [ ] Bookmark/save articles
* [ ] Search functionality
* [ ] News category filtering
* [ ] Pagination
* [ ] Dark mode
* [ ] User comments
* [ ] Admin dashboard
* [ ] Article management
* [ ] Loading skeletons
* [ ] Error and empty states
* [ ] Improved SEO metadata
* [ ] Automated testing
* [ ] CI/CD with GitHub Actions

---

## 🤝 Contributing

Contributions are welcome!

### 1. Fork the repository

```bash
git fork https://github.com/tanvirahmedmahin10/full-project-with-auth.git
```

### 2. Create a new branch

```bash
git checkout -b feature/your-feature
```

### 3. Make your changes

```bash
git add .
git commit -m "feat: add your feature"
```

### 4. Push your branch

```bash
git push origin feature/your-feature
```

### 5. Open a Pull Request

Please make sure your code is clean, tested, and follows the existing project structure.

---

## 📄 License

This project currently does not specify a license.

If you intend to make the project open source, consider adding an appropriate license such as the **MIT License**.

---
