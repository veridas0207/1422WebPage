<script setup lang="ts">
import FadeIn from '@/components/FadeIn.vue'
import { GroupPhoto } from '@/constant/aboutUs.constant';
import { NCarousel, NCard } from 'naive-ui'
const animateDuration = 800
const baseUrl = import.meta.env.BASE_URL
</script>
<template>
    <div class="about-us-page">
        <section class="introduce-warp">
        <FadeIn :tag="'h3'" :duration="animateDuration">
            <div class="introduce-title-content">
                <h2 class="introduce-title">實驗室介紹</h2>
                <h3 class="introduce-sub-title">國立臺北科技大學資訊工程系</h3>
            </div>
        </FadeIn>
        <FadeIn :delay="500" :duration="animateDuration" >
            <div class="introduce-content">
                <p> <span class="introduce-strong">互動媒體實驗室</span>由<span class="introduce-strong">江佩穎教授</span>指導。實驗室氛圍開放自由，老師十分鼓勵同學主動思考與嘗試，支持各種天馬行空的想法，陪你一步步把創意落實成實際成果。</p>
                <p>不論是否具備相關背景，只要你對我們的研究領域有興趣、願意投入學習與探索，都非常歡迎加入我們的行列。</p>
                <div>
                    <p>歡迎前往<span class="introduce-strong">宏裕科技大樓 14 樓 1422 室</span>，與我們聊聊你的想法與規劃。</p>
                    <p>（建議先透過 Email 與學長姐預約時間，實驗室目前以遠端為主。）</p>
                </div>
            </div>
        </FadeIn>
        </section>

        <section class="group-photo">
            <div class="group-photo-container">
                <h4>團體照</h4>
                <div class="group-photo-carousel">
                    <n-carousel :show-arrow="true" :space-between="10" :autoplay="true" :autoplay-speed="2000" :infinite="true"
                        :dot-type="'dot' "
                        :dot-placement="'bottom'">
                        <div class="carousel-item" v-for="(value, index) in GroupPhoto" :key="index">
                            <n-card type="large">
                                <template #cover>
                                    <img
                                        class="group-photo-image"
                                        :src="`${baseUrl}${value.src}`"
                                        :alt="value.alt">
                                </template>
                                <div class="group-photo-card-content">
                                    <div>{{ value.text }}</div>
                                </div>
                            </n-card>
                        </div>
                    </n-carousel>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.introduce-warp {
    padding: 96px 24px;
    border-bottom: 1px solid hsl(var(--border));
    background: hsla(var(--hero-gradient), 0.05);

    display: flex;
    flex-direction: column;
    gap: 48px;
}

.introduce-title {
    font-size: 36px;
    line-height: 40px;
    font-weight: 700;
}

.introduce-sub-title {
    color: hsl(var(--muted-foreground));
    font-size: 18px;
    font-weight: 400;
}

.introduce-title-content {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.introduce-strong {
    color: hsl(var(--foreground));
    font-weight: bold;
}

.introduce-content {
    max-width: 768px;
    font-size: 16px;
    line-height: 28px;
    font-size: 400;

    display: flex;
    flex-direction: column;
    gap: 16px;
    color: hsl(var(--muted-foreground));
    line-height: 1.625;

}

.group-photo {
    padding: 64px 0;
}

.group-photo-carousel {
    max-width: 890px;
    max-height: 476px;
    margin: 0 auto;
}

.group-photo-image {
    width: 100%;
    max-height: 430px;
    object-fit: cover;
}

.carousel-item {
    max-width: 768px;
    max-height: 476px;
    margin: 0 auto;
}
.group-photo-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
}
</style>