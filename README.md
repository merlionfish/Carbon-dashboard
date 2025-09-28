This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Carbon Dashboard

A Next.js demo app with a fake backend for testing loading/error/rollback behaviors.

## Getting Started

## Overview
This is a small production-minded web application built for HanaLoop to visualize carbon emissions of companies. The dashboard allows executives and managers to track emissions, plan ahead, and assess sustainability performance.

Built with:
- Next.js 14+ (App Router)
- React 18 + TypeScript
- Tailwind CSS (custom design system)
- Optional: React Context for state management
```bash
npm install
npm run dev
```

## Revisions
### v1.0 (Initial setup)
- Initialized Next.js project with TypeScript
- Configured Tailwind CSS (global styles and basic layout)
- Set up `pages/` and `app/` directory structure

### v2.0 (Data models)
- Added `types.ts` with:
  ```ts
  type Company = {
    id: string;
    name: string;
    country: string;
    emissions: GhgEmission[];
  };

  type GhgEmission = {
    yearMonth: string;
    source: string;
    emissions: number;
  };

  type Post = {
    id: string;
    title: string;
    resourceUid: string;
    dateTime: string;
    content: string;
  };
  ```

- Added seed data for companies and posts
- Set up lib/api.ts with stub backend simulating latency (200–800ms) and occasional failure (15%)

### v3.0 (API module)
- Implemented fetchCountries, fetchCompanies, fetchPosts
- Implemented createOrUpdatePost with simulated write failures
- Fixed typing issues with _countries, _companies, _posts

### v4.0 (Dashboard layout)
- Added basic DashboardCard component
- Created a 3-column grid showing:
- Total Emissions
- Monthly Target
- Reduction Achieved
- Decided to remove totalEmissions, monthlyTarget, reductionRate from Company type as per assignment data model

### v5.0 (State & main data handling)
- Added mainCompany and mainMonthIndex state
- Fixed mainMonthIndex undefined error
- Connected stub API to Dashboard component
- Handled loading and error states for async data fetching

### v6.0 (CSS & styling)
- Configured globals.css:
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
```

- Verified Tailwind working (npm run dev runs successfully on localhost)
- Removed unused Tailwind/PostCSS config errors

### v7.0 (Final API & type fixes)
- Fixed fetchCountries return type:
```ts
export async function fetchCountries(): Promise<string[]> {
  await delay(jitter());
  return _countries.map(c => c.code); // map to string[]
}
```

- Fixed companies import/type issues
- Verified all components compile without TypeScript errors
- Ensured lib/api.ts matches assignment requirements
- Dashboard connected with stub API, displaying companies, emissions, and posts

### v7.1 Release GitHub public.
- Added snapshots
- Added GitHub public.
- Developed Windows 11 w/ node v24.2.0.
- Please refer to package.json for more detail due to various components.

## Directory Structures
/carbon-dashboard
  ├─ app/globals.css
  ├─ app/layout.tsx
  ├─ app/page.tsx
  ├─ components/DashboardCard.tsx
  ├─ components/EmissionsChart.tsx
  ├─ components/Navbar.tsx
  ├─ components/PostList.tsx
  ├─ components/Sidebar.tsx
  ├─ lib/api.ts
  ├─ lib/seed.ts
  ├─ lib/types.ts
  ├─ node_modules  <-- These files are does not included on GitHub.
  ├─ public/
  ├─ screenshots/
  ├─ next.config.ts
  ├─ package.json
  ├─ README.md      <-- This file.
  └─ tsconfig.json

## How to Run
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000
 in your browser

## Assumptions & Design Decisions
- Only the provided data model (countries, companies, posts) used; totalEmissions, monthlyTarget, reductionRate removed
- mainCompany and monthly index state managed via React useState
- Tailwind used for responsive layout and design system
- API stub simulates realistic latency and occasional write failure (15%)
- Focused on clarity, modularity, and responsiveness
- DashboardCard component reusable for different metrics

## Future Improvements
- Add chart visualizations for emissions over time
- Implement filtering and search by country or company
- Enhance UI/UX with smoother transitions and tooltips
- Add proper error handling and rollback for API failures

## Contact
- Created by Craig Lee
- Completion time: 28th Sep. 2025, 9:51 PM
- Start time     : 28th Sep. 2025, 6:00 PM