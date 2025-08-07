# 🌗 Theme Switcher React App (Context API)

A simple React application demonstrating how to implement a light/dark theme switcher using **React Context API**.

## 🚀 Features

- 😺 Switch between Light and Dark themes
- ✅ Uses React's Context API for global state management
- 🛠️ Built with Vite for fast development
- 🧩 Component-based structure

## 🗂️ Project Structure

theme-switcher-react-context/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ └── Main.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── package.json
├── vite.config.js
└── README.md

## 🧠 How It Works

- **App.jsx**: Defines the `ThemeContext`, holds the state `theme`, and toggles between `light` and `dark`.
- **Header.jsx**: Uses context to apply theme to header.
- **Main.jsx**: Provides a button to toggle the theme.

## 🎨 Styling

The theme is toggled by dynamically changing the CSS class:
```js
className={`${theme}-theme`}
You can define the styles for .light-theme and .dark-theme in App.css.

▶️ Getting Started
1. Clone the Repo
git clone https://github.com/your-username/theme-switcher-react-context.git
cd theme-switcher-react-context
2. Install Dependencies
npm install
3. Run the Dev Server
npm run dev
Then open http://localhost:5173/ in your browser.

📦 Built With
- React

- Vite

- JavaScript (ES6+)

Made with ❤️ By: Yasmin Hillis