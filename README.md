# Laurus Studio — Week 3 Assignment 2

## Project Overview

This project is a Next.js website created for WDD325 Week 3 Assignment 2: Reusable Components and Persistent Navigation.

The website demonstrates reusable components, consistent styling, and navigation between multiple pages using the Next.js App Router.

## Layout Structure

The `app/layout.js` file contains the shared layout for the website. It includes the Header, Sidebar, and Footer outside the main content area.

The `{children}` section displays the content of the selected page while the shared layout remains visible.

## Reusable Components

The `app/components` folder contains four reusable components:

- **Header.jsx:** Displays the Laurus Studio title and Login and Register buttons.
- **Sidebar.jsx:** Provides navigation links to Home, About, Contact, and Team.
- **Footer.jsx:** Displays the copyright information on every page.
- **Button.jsx:** Provides consistent button styling and accepts customizable text through the `ctaText` property.

The Button component is reused for Login, Register, and Get Started.

## Pages

- **Home:** Contains a welcome headline, supporting text, and Get Started button.
- **About:** Provides information about Laurus Studio.
- **Contact:** Displays a brief contact message.
- **Team:** Displays three team members with photos, names, and roles.

## Design Choices

The website uses a navy-blue and white color scheme for a clean, consistent appearance.

Tailwind CSS is used for styling, spacing, and layout. The header, sidebar, and footer maintain a consistent appearance across pages.

## Navigation and Deployment

Navigation is implemented with Next.js `Link` components.

The project is hosted on GitHub and deployed through Vercel.

**GitHub Repository:** https://github.com/abrahamviernes/week3-layout

**Live Website:** https://week3-layout-pearl.vercel.app/

## Running the Project Locally

Install the project dependencies using `npm install`.

Start the development server using `npm run dev`.

Open `http://localhost:3000` in a browser.
