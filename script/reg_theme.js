
  // 主题注册表：页面主题名 -> { monacoTheme, label }
  const ThemeRegistry = {
    light: { monacoTheme: 'vs', label: '浅色' },
    dark:  { monacoTheme: 'vs-dark', label: '深色' },
    blue:  { monacoTheme: 'aurora', label: '极光蓝' } // 使用上面自定义的 aurora
  };

  const ThemeManager = (() => {
    const STORAGE_KEY = 'turtle_theme';

    function getCurrent() {
      return localStorage.getItem(STORAGE_KEY) || 'dark';
    }

    function applyTheme(name) {
      const meta = ThemeRegistry[name] || ThemeRegistry.dark;
      // 应用页面主题（CSS 变量通过 data-theme 生效）
      document.body.setAttribute('data-theme', name);
      // 同步 Monaco 主题
      if (window.monaco && meta.monacoTheme) {
        monaco.editor.setTheme(meta.monacoTheme);
      }
      // 持久化
      try { localStorage.setItem(STORAGE_KEY, name); } catch (e) {}
    }

    function initThemeSelector(selectEl) {
      // 填充下拉选项
      selectEl.innerHTML = '';
      Object.entries(ThemeRegistry).forEach(([key, meta]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `${meta.label} (${key})`;
        selectEl.appendChild(opt);
      });
      // 设定默认值
      selectEl.value = getCurrent();
      // 监听切换
      selectEl.addEventListener('change', () => applyTheme(selectEl.value));
    }

    return { getCurrent, applyTheme, initThemeSelector };
  })();
