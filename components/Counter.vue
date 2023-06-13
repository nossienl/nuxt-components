<template>
  <div class="counter">
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script setup lang="ts">
const { count, increment, decrement } = useCounter()
</script>

<style scoped>
.counter {
  display: flex;
}
</style>