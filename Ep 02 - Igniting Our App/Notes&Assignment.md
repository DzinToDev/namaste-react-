# 🚀 Igniting Our App - Episode 02

## Introduction

To make our **React app production-ready**, we need to process a lot of things locally.  
If we build a project using **`create-react-app`**, it generates a **pre-configured scaffold** that is already **production-ready**.

In this episode, we are creating our own **production-ready React app** from scratch instead of using `create-react-app`.  
This helps us **understand the processes happening behind the scenes**.

And we should understand the engineering behind it—we should appreciate that a lot of things work behind the scenes to make a large-scale application function smoothly.
We often think that using a ready-made setup makes our app fast, but that's not true. A lot of dependencies, packages, and optimizations are involved in making an application both fast and efficient.

---

## What is NPM?

**NPM (Node Package Manager)** is not just for **managing Node.js packages** but for the **entire JavaScript ecosystem**.

Initially, it was primarily used for **Node.js packages**, but over time, it became popular for managing **React, Vue, Angular, and even non-code projects**.

**💡 Today, NPM does not stand for "Node Package Manager"; it is simply called NPM.**

### How does NPM work?

- **NPM is a standard repository** where JavaScript libraries and utilities are hosted.
- It **automatically manages dependencies and their versions** for your project.

---

## Setting up Our Project with NPM

### Initialize NPM (`npm init`)

- The package.json file tracks dependencies, scripts, and metadata for the project.
- Dependencies: The packages installed in a project are listed here for management and tracking.

### There are two types of dependencies

- Normal Dependencies required in both development and production
- Development Dependencies used only in development.

### Package Bundlers (Parcel, Webpack, Vite)

A bundler is a tool that combines multiple files into an optimized format.
Parcel, Webpack, and Vite work similarly behind the scenes.
We installed Parcel using: `npm install -D parcel`

### Understanding Package Versions in package.json

NPM uses ^ (caret) minor versions and ~ (tilde) major versions symbols for package versions.
and if we remove this no updates.

### Understanding package-lock.json

Tracks the exact versions of installed dependencies.
Uses integrity and SHA-52 hash to ensure consistency across different environments.
Prevents issues where an app works locally but fails in production.

## What is node_modules?

It contains all installed dependencies and their code.
A famous meme says node_modules is the "heaviest object in the universe" 😂.

### Transitive Dependencies

If we install Parcel, it has its own dependencies.
Dependencies that rely on other dependencies are called transitive dependencies.

### Multiple package.json Files in a Project?

A React project can have multiple package.json files.
Client-side and server-side dependencies can be managed separately.
Regenerated files (like node_modules) should not be pushed to GitHub.

## Q: How does Parcel manage dependencies?

A: Parcel has its own package.json that lists its dependencies, which are automatically installed by NPM.

## Q: How does NPM know Parcel has dependencies?

A: NPM checks the package.json of Parcel to install its required dependencies.

## Q: What are the dependencies of Parcel?

A: Parcel relies on tools like Babel, PostCSS, Source Maps, and HMR (Hot Module Replacement).

## Executing our package 
`npx parcel index.html` npx means executing that package. 
npm use when we need to install. 

### Why CDN is not a perfect way?  
- **Fetching from a CDN is a costly operation**.  
- If the **version** changes, we have to **manually update** the CDN link.  
- When React is in our **node_modules**, it is **easier** to manage and update.  
- It is **better** to have React as a **dependency** in our project.  

## Installing React and ReactDOM  
`npm i react` and `npm i react-dom`
Now, we install **React** and **ReactDOM** in our **node_modules**.  
We **no longer** need to use **CDN**.  

CDN was one way to use React, but another and **better** way is **via npm**.  
At the end of the day, **React is just a JavaScript package**, and it is hosted on **npm**.
Now, React is installed in node_modules, but the browser doesn't know what React is.
So, we need to import it in our code.

✅ Importing React and ReactDOM
We import React and ReactDOM like this:
`import React from 'react'
import ReactDOM from 'react-dom'`

But now, the browser will throw an error ❌:

"Uncaught SyntaxError: Cannot use import statement outside a module"

This happens because the browser treats our script as a normal JavaScript file, and in normal JS, import/export is not allowed.
To fix this, we need to tell the browser that our script is a module by adding:
`type="module"` 
Now, React is successfully imported from node_modules! 🎉

## 🚀 What Parcel Does Behind the Scenes
Parcel is doing a lot of things automatically for us. Here are some of the major features:

- Hot Module Replacement (HMR)
-- Auto-reload: Automatically refreshes the page when we make changes.
-- Faster development: We don’t need to manually refresh the browser.
- File Watching Algorithm
-- Written in C++, which makes it super-fast.
-- Watches every file, and as soon as we save changes, it detects them instantly.
- Development Build Features
-- Runs a local development server.
-- Uses caching for faster builds.
-- Optimizes images automatically.
- Production Build Features
-- Minifies and compresses our files to reduce size.
-- Bundles JavaScript files efficiently.
-- Uses consistent hashing to manage file versions.
-- Supports code splitting for better performance.
-- Tree shaking: Removes unused code to optimize the final build.
- Error Handling & Debugging
-- Shows clear error messages when something goes wrong.
-- Provides detailed diagnostics to help fix issues.
- Different Builds for Development & Production
-- Parcel automatically optimizes the app differently for development and production environments.
- 🥹 Wow, Parcel does so much for us!
-- It makes our development easier.
-- It speeds up our application.
-- It takes care of complex optimizations behind the scenes.

## Targeting Older Browser Versions
`"browserslist": ["last 2 versions"]`
This helps to ensure our app works on older browsers as well.

Wow! I have learned so many basic and behind-the-scenes concepts in this episode.
Now, I understand how React is set up, how Parcel works, and why using npm is better than a CDN. 🚀
