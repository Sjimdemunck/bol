# 🧠 Multiselect Filter

A modern web app featuring a dynamic multi-select filter component with inline and popover variants. Designed to be developer-friendly, accessible, and easily extendable.

## 🔍 Project Summary

This project was built as an assignment. Orginally intended to be fully static so it could be deployed on Github Pages. The assignment favoured towards gql server, so dug in to that tech. Which results in not having it on Github Pages.

I did deviate slightly from the design that was included in the assignment. The reason behind is, is that to me this feels better. Can remove the checkmark inside the option and have a 'Apply' button too, for me the filter should work with my cards/tiles about different products that can be lazy loaded (as an example).

Also added a light/dark theme toggler (I'm more of a dark theme enthousiast).

> _"It was a great project to work on — flexible, fast, and fun to prototype with. Static was the plan, but the request for GraphQL tilted it out of favor."_

---

## 🎥 Demo's

🚀 The demo's of the application, storybook, tooling are in the showcase [PR](https://github.com/Sjimdemunck/bol/pull/1)

---

## 🧱 Tech Stack

| Tech                                                             | Description                                                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Vite](https://vitejs.dev/)                                      | Lightning-fast frontend tooling and bundler                             |
| [Zustand](https://zustand-demo.pmnd.rs/)                         | A small, fast, and scalable bearbones state management solution         |
| [TanStack Query](https://tanstack.com/query)                     | Powerful asynchronous state management for React                        |
| [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)        | Lightweight GraphQL server used to mock and serve category data         |
| [Vitest](https://vitest.dev/)                                    | Blazing fast test runner, compatible with Jest syntax                   |
| [Storybook](https://storybook.js.org/)                           | Component-driven UI development environment                             |
| [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) | Code quality and formatting tools                                       |
| [TypeScript](https://www.typescriptlang.org/)                    | Static typing for improved DX and safety                                |
| [ReactScan](https://react-scan.com/)                             | React Scan automatically detects performance issues in your React app\* |

_\* ⚠️ You can disable ReactScan in the ui. It is enabled by default_

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v18+ recommended)
- [pnpm](https://pnpm.io/) (if you don’t have it: `npm install -g pnpm`)

---

### 🔧 Installation

```bash
pnpm install
```

---

### 🛠️ Running the App

#### 1️⃣ start GraphQL server (mock data) -- this is the items.json from the assignment

```bash
pnpm run dev:graphql
```

#### 2️⃣ in another terminal: start Vite dev server

```bash
pnpm run dev
```

Checkout http://localhost:5173 or the gql server on 4000

---

## 🧪 Testing

```bash
# run unit tests
pnpm run test

# interactive UI runner
pnpm run test:ui

# coverage report
pnpm run coverage
```

---

## 🧹 Lint & Format

```bash
# lint all files
pnpm run lint

# format codebase
pnpm run format

# check formatting only
pnpm run format:check
```

---

### 📦 Build & Preview

```bash
pnpm run build     # production build
pnpm run preview   # local preview of build
```

---

### 📖 Storybook

```bash
pnpm run storybook         # dev mode
pnpm run build-storybook   # static build
```

---

### 📂 Folder Structure

```css
src/
├─ api/          GraphQL queries & clients
├─ assets/       Static assets like search.svg
├─ components/   Reusable UI (MultiSelect, etc.)
├─ hooks/        UseCategoryQuery hook (tanstack)
├─ mock-data/    The items.json from assignment
├─ server/       GraphQL Yoga setup
├─ store/        Zustand state
├─ tests/        Test (Storybook and unit)
├─ utils/        Helpers (e.g., sanitize)
```

---

### 📫 Contact

📧 [Email](s.demunck@gmail.com)
🐱 [GitHub](https://github.com/Sjimdemunck)
💼 [LinkedIn](https://linkedin.com/in/sjim-de-munck/)
