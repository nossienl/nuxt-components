<script setup>
import { onMounted, onUnmounted, ref } from 'vue';


const { $gsap: gsap, $scrollTrigger: scrollTrigger } = useNuxtApp();
const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <section class="section flex-center column blue">
    <h1>Basic ScrollTrigger in Nuxt 3</h1>
    <h2>Scroll down to see the magic happen!!</h2>
  </section>
  <div class="section flex-center column" ref="main">
    <div class="box">box</div>
    <div class="box">box</div>
    <div class="box">box</div>
  </div>
  <section class="section flex-center orange column">
    <h1>The End!</h1>
    <h2>
      For more information visit:&nbsp;
      <a
          href="https://greensock.com/scrolltrigger/"
          target="_blank"
          rel="noreferrer"
      >
        greensock.com/scrolltrigger/
      </a>
    </h2>
  </section>
</template>

<style>

.section {
  width: 100%;
  height: 100vh;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  flex-direction: column;
  gap: 1rem;
}

.boxes-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.box {
  background-color: green;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}
</style>
