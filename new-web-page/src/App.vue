<script setup lang="ts">
import { onMounted } from 'vue' // 加入 onMounted
import { zhCN, dateZhCN, NConfigProvider, NGlobalStyle, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from 'naive-ui'
import { RouterView } from 'vue-router'
import { breakpoints, darkThemeOverrides, lightThemeOverrides } from './constant/them.constant'
import Header from './components/Header.vue'

// 引入 Theme Store
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()

// 初始化主題 (可選)
onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <!-- 使用 Store 中的 naiveTheme -->
  <n-config-provider :theme="themeStore.naiveTheme" :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeStore.isDark ? darkThemeOverrides : lightThemeOverrides" :breakpoints="breakpoints">
    <n-global-style />
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>

      <n-layout-content class="content-wrap">
        <RouterView />
      </n-layout-content>

      <n-layout-footer>
        <footer class="footer-content">
          <span class="footer-text">© 2013–2026 Interactive Media Laboratory · 國立臺北科技大學</span>
        </footer>
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<style scoped>
.content-wrap {
  min-height: calc(100vh - 64px - 64px);
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 64px;
  padding: 32px 0;
  border-top: 1px solid hsl(var(--border));
}

.footer-text {
  color: hsl(var(--muted-foreground));
}
</style>
