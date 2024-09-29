# Entertainment Web App

## Overview

This is a visually appealing and responsive entertainment web application built using Angular, NgRx, and RxJS. It allows users to browse and interact with movies, TV series, and bookmarks. The project emphasizes state management with NgRx and leverages RxJS for efficient data handling and asynchronous operations.

## GitHub Repo

[https://github.com/BennyChrispin/Entertainment-Web-App]

## Live Demo

[https://entertainment-web-app-dun-mu.vercel.app]

## Features

- **Angular Expertise**: Utilizes Angular components, services, routing, and NgRx for state management.
- **NgRx State Management**: Manages application state using NgRx store, reducers, effects, and selectors.
- **RxJS Observables**: Handles asynchronous operations and user interactions using RxJS.
- **Data Handling**: Fetches data from a local JSON file and dynamically renders content.
- **Responsive Design**: Implements responsive layouts for various screen sizes using Flex Layout and CSS media queries.
- **Bookmarking Feature**: Adds and removes bookmarked shows, persisting bookmark data using local storage.
- **User Interface Interactions**: Interactive UI with hover effects and smooth event handling.

## Project Structure

The project follows a modular and organized folder structure for easy scalability:

```plaintext
/src
├── /app
│   ├── /core
│   │   ├── /services       # Services for API calls and data handling
│   │   └── /models         # Interfaces for data types
│   ├── /store              # NgRx state management setup
│   │   ├── /actions
│   │   ├── /reducers
│   │   ├── /effects
│   │   └── /selectors
│   ├── /components         # Angular components (Home, Movies, TV Series, Bookmarked)
│   └── /shared             # Reusable components and pipes
│
├── /assets                 # Static assets, including data.json and images
└── styles.scss             # Global SCSS styles
```
