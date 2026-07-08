'use client';

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';

    root.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <button
      className="themeToggle"
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle light and dark mode"
      title="Toggle light and dark mode"
    >
      <span className="themeIcon themeIconSun" aria-hidden="true">
        ☀
      </span>
      <span className="themeIcon themeIconMoon" aria-hidden="true">
        ☾
      </span>
    </button>
  );
}
