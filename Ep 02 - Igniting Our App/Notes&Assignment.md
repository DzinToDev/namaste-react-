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
