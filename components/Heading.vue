<template>
  <component :is="`h${level}`">
   <slot></slot>
    <font-awesome-icon icon="fa-brands fa-twitter-square" />
    <font-awesome-icon icon="fa-brands fa-youtube-square" />
    <font-awesome-icon icon="fa-brands fa-github-square" />
  </component>
</template>

<script setup>
 const props = defineProps({
   level: {
     type: Number,
     required: true,
     default: 1
   }
 })
</script>

<style lang="scss" scoped>

$font-family: 'Poppins', sans-serif !default;
$font-weight-bold: 700 !default;
$color-primary: #000 !default;

  h1, h2, h3, h4, h5, h6 {
    font-family: $font-family;
    font-weight: $font-weight-bold;
    color: $color-primary;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }
</style>