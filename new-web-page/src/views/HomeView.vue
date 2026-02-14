<script setup lang="ts">
import { NButton, NIcon, NCard } from 'naive-ui'
import { ArrowForwardRound, ComputerOutlined, LanguageOutlined, PhoneAndroidOutlined } from '@vicons/material'
import { Glasses16Regular, HandLeft16Regular } from '@vicons/fluent'
import FadeIn from '@/components/FadeIn.vue'

const animateDuration = 600

const mainRegions = [
  { label: '計算機圖學', icon: ComputerOutlined },
  { label: '人機互動', icon: HandLeft16Regular },
  { label: 'AR/VR', icon: Glasses16Regular },
  { label: '網頁程式設計', icon: LanguageOutlined },
  { label: '行動應用開發', icon: PhoneAndroidOutlined },
]
</script>

<template>
  <main>
    <section class="hero-wrap">
      <div class="hero-bg"></div>
      <div class="light-circle"></div>

      <div class="hero-content">
        <FadeIn :tag="'h3'" :duration="animateDuration">
          <h3 class="hero-sub-title">國立臺北科技大學 · 資訊工程系</h3>
        </FadeIn>

        <FadeIn :duration="animateDuration" :tag="'h1'">
          <h1 class="hero-main-title">
            <span class="text-gradient">互動媒體</span>
            <br />
            <span>實驗室</span>
          </h1>
        </FadeIn>

        <FadeIn :delay="500" :duration="animateDuration" :tag="'h4'">
          <h4 class="hero-description">Interactive Media Laboratory — 由江佩穎教授指導，專注於計算機圖學、人機互動、AR/VR 及生成式 AI 等前沿研究領域。</h4>
        </FadeIn>

        <FadeIn :delay="500" :duration="animateDuration" :tag="'div'">
          <div class="hero-button-group">
            <n-button type="primary" size="large">
              <div class="text-icon-button">聯絡我們 <n-icon size="16" :component="ArrowForwardRound" /></div>
            </n-button>
            <n-button size="large">新生專區</n-button>
          </div>
        </FadeIn>
      </div>
    </section>

    <section class="main-region">
      <h2 class="main-region-title">主要研究領域</h2>
      <div class="main-region-content">
        <Motion v-for="value in mainRegions" :key="value.label" :initial="{ y: 0 }" :enter="{ y: 0 }" :hovered="{ y: -8 }" :transition="{ type: 'spring', stiffness: 320, damping: 24 }">
          <n-card size="small" class="main-region-card">
            <div class="main-regin-card-content">
              <div class="main-region-icon-box">
                <n-icon size="24" :component="value.icon" />
              </div>
              <div>{{ value.label }}</div>
            </div>
          </n-card>
        </Motion>
      </div>
    </section>

    <section class="location"></section>
  </main>
</template>

<style scoped>
.hero-wrap {
  border-bottom: 1px solid hsl(var(--border));
  position: relative;
  min-height: 90vh;

  display: flex;
  padding: 64px 0;
  border-bottom: 1px solid hsl(var(--border));
}

.hero-bg {
  position: absolute;
  background: hsl(var(--hero-gradient));
  opacity: 0.05;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.light-circle {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background-image: radial-gradient(ellipse at top right, hsla(var(--color-accent), 0.12), transparent 60%);
}
.hero-content {
  max-width: 576px;
  margin: 0 auto;
  padding: 128px 24px;
}

.hero-sub-title {
  font-size: 14px;
  color: hsl(var(--color-accent));
  margin-bottom: 16px;
  letter-spacing: 0.1em;
  font-weight: 600;
  line-height: 1.25rem;
}

.hero-main-title {
  font-size: 72px;
  line-height: 1;
  font-weight: 800;
  margin-bottom: 24px;
}

.hero-description {
  line-height: 1.625;
  margin-bottom: 32px;
  font-size: 18px;
  color: hsl(var(--muted-foreground));
}

.hero-button-group {
  display: flex;
  gap: 16px;
}

.main-region {
  padding: 84px 24px;
}

.main-region-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  letter-spacing: -0.025em;
  font-size: 30px;
  line-height: 2.25rem;
}

.main-region-card {
  width: 180px;
  padding: 32px;
  height: 150px;
}

.main-region-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(var(--color-primary), 0.1);
  border-radius: 12px;
  width: 48px;
  height: 48px;
}

.main-region-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.main-regin-card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
</style>
