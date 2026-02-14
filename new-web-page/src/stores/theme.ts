import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'

export const useThemeStore = defineStore('theme', () => {
  // 1. 預設值設為 false (亮色模式)
  const isDark = ref(false)

  // Getter (Computed): 用於 Naive UI 的 theme 屬性
  const naiveTheme = computed(() => (isDark.value ? darkTheme : null))

  // Action: 切換主題
  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  // 套用主題到 HTML class (內部函式，避免重複程式碼)
  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // 初始化主題
  function initTheme() {
    // 這裡我們強制預設與 ref(false) 一致，不讀取系統偏好 prefers-color-scheme
    // 這樣就算你在深色模式的電腦上打開，預設也會是亮色網頁

    // 如果未來想做「記住使用者選擇」，可以加這段：
    // const savedTheme = localStorage.getItem('user-theme')
    // if (savedTheme === 'dark') {
    //   isDark.value = true
    // }

    // 確保 HTML class 與狀態同步 (初始化為 false，所以這行會確保移除 dark class)
    applyTheme()
  }

  return { isDark, naiveTheme, toggleTheme, initTheme }
})
