1. What is JSX, and why is it used?

What is JSX:
JSX (JavaScript XML) হলো JavaScript-এর একটি extension বা JavaScript XML, যা মূলত React-এ ব্যবহৃত হয়। এটি দেখতে অনেকটা HTML-এর মতো লাগলেও আসলে এটি JavaScript-এর কোড। JSX-এর মাধ্যমে আমরা সহজেই UI (User Interface) তৈরী করতে পারি। সহজভাবে বললে, JSX React ডেভেলপারদের HTML-এর মতো syntax ব্যবহার করে JavaScript-এ UI ডিজাইন করার সুবিধা দেয়।

 why is it used?
> সহজে UI লেখা যায়
> 
> JavaScript এবং HTML একসাথে ব্যবহার করা যায়
> 
> React DOM-এর সাথে কাজ করা সহজ হয়
> 
> পুনরায় ব্যবহারযোগ্য কম্পোনেন্ট তৈরী করা যায়।
> 
> সহজে কোড পড়া যায়

>>>

>
>
>2 What is the difference between State and Props?
>
>React-এ State এবং Props দুইটাই data handle করার জন্য ব্যবহার হয়, কিন্তু এদের কাজ ভিন্ন।
React JS-এ props এবং state-এর মূল পার্থক্য হলো, props ব্যবহার করা হয় এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে ডাটা বা প্রপার্টি পাঠানোর জন্য, আর state সেই কম্পোনেন্টের ভেতরে থাকা রিয়েল-টাইম ডাটা পরিবর্তন করে বা ম্যানেজমেন্ট করে ।
>
>
> 
>
































































































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
