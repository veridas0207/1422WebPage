<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { NButton, NIcon } from 'naive-ui'
import { WeatherMoon16Regular, WeatherSunny16Regular } from '@vicons/fluent'
import { MenuRound, CloseRound } from '@vicons/material'

// [Store]
const themeStore = useThemeStore()

// [Routing]
const route = useRoute()
const navItems = [
  { label: '關於我們', path: '/about' },
  { label: '教授介紹', path: '/professor' },
  { label: '課程', path: '/courses' },
  { label: '專案', path: '/projects' },
  { label: '新生須知', path: '/freshman' },
]

// [UI State]
const isOpen = ref(false)
const scrolled = ref(false)

// [Watch]
watch(
  () => route.path,
  () => {
    isOpen.value = false
  },
)

// [Scroll Handler]
const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header-container" :class="{ 'is-scrolled glass-effect': scrolled, 'is-dark': themeStore.isDark }">
    <!-- Logo -->
    <RouterLink to="/" class="logo-link">
      <h1 class="logo-text">
        <span class="text-gradient">IML</span>
        <span class="site-title">Interactive Media Lab</span>
      </h1>
    </RouterLink>

    <!-- Desktop Nav -->
    <nav class="desktop-nav">
      <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item" :class="{ 'is-active': route.path === item.path }">
        {{ item.label }}
      </RouterLink>

      <n-button quaternary circle @click="themeStore.toggleTheme()" class="theme-btn">
        <template #icon>
          <n-icon size="24" :component="themeStore.isDark ? WeatherMoon16Regular : WeatherSunny16Regular" />
        </template>
      </n-button>
    </nav>

    <!-- Mobile Controls -->
    <div class="mobile-controls">
      <n-button quaternary circle @click="themeStore.toggleTheme()">
        <template #icon>
          <n-icon size="24" :component="themeStore.isDark ? WeatherMoon16Regular : WeatherSunny16Regular" />
        </template>
      </n-button>
      <n-button quaternary circle @click="isOpen = !isOpen">
        <template #icon>
          <n-icon size="24" :component="isOpen ? CloseRound : MenuRound" />
        </template>
      </n-button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition name="fade-slide">
      <div v-if="isOpen" class="mobile-menu">
        <div class="mobile-menu-content">
          <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="mobile-nav-item" :class="{ 'is-active': route.path === item.path }">
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* --- Layout Container --- */
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: 64px;
  width: 100%;
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: transparent; /* 預設透明 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scrolled State (Glass Effect) */
.header-container.is-scrolled {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* --border or subtle shadow */
  border-bottom: 1px solid var(--border); /* 使用自定義變數 */
}

.header-container.is-scrolled.is-dark {
  background-color: hsla(222, 30%, 8%, 0.7);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* --- Logo --- */
.logo-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
}

.logo-text {
  margin: 0;
  font-size: 18px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  /* Logo 文字顏色使用主要文字色 */
  color: hsl(var(--foreground));
}

/* Desktop Only Title */
.site-title {
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
}
/* --- Navigation (Desktop) --- */
.desktop-nav {
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

.nav-item {
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  /* 預設狀態：次要文字顏色 */
  color: hsl(var(--muted-foreground));

  transition:
    color 0.2s,
    background-color 0.2s;
}

.nav-item:hover {
  /* Hover 狀態：主要文字顏色 + 次要背景色 */
  color: hsl(var(--foreground));
  background-color: hsl(var(--muted));
}

.nav-item.is-active {
  /* Active 狀態：Primary 文字 + Primary 背景 (透明度) */
  color: hsl(var(--foreground)); /* 或者使用 var(--primary) */
  background-color: hsla(var(--color-primary), 0.1);
  /* 注意：如果 base.css 定義的 --primary 是 HSL 字串 (如 '220, 60%, 30%')，可以用 rgba/hsla 包裹 */
  /* 如果你的 --primary 已經包含 hsl()，則需要用 color-mix 或 opacity */

  /* 修正：假設你的 base.css --color-primary 是 H,S,L 數值 */
  color: hsl(var(--color-primary));
  background-color: hsla(var(--color-primary), 0.1);
}

/* --- Mobile Controls --- */
.mobile-controls {
  display: flex;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    display: none;
  }
}

/* --- Mobile Menu Dropdown --- */
.mobile-menu {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;

  /* Mobile Menu 背景色使用 Card 背景 */
  background-color: hsl(var(--card));
  border-bottom: 1px solid hsl(var(--border));

  /* Glass effect for menu */
  backdrop-filter: blur(12px) saturate(180%);
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
}

.mobile-nav-item {
  display: block;
  text-decoration: none;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;

  /* Mobile Link 預設顏色 */
  color: hsl(var(--muted-foreground));
  transition:
    background-color 0.2s,
    color 0.2s;
}

.mobile-nav-item:hover {
  color: hsl(var(--foreground));
  background-color: hsl(var(--muted));
}

.mobile-nav-item.is-active {
  /* Active 狀態 */
  color: hsl(var(--color-primary));
  background-color: hsla(var(--color-primary), 0.1);
}

/* --- Transitions --- */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease-out;
  max-height: 300px;
  opacity: 1;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
