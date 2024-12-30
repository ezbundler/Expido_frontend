import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Add/remove the 'dark' class to the HTML element based on theme state
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save the theme in local storage
    localStorage.setItem('theme', theme);
    console.log('Current theme:', theme);  // Debugging to check if theme is set correctly
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded"
    >
      {theme === 'light' ? '🌙 ' : '☀️ '}
    </button>
  );
};

export default ThemeToggle;
