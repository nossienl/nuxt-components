<template>
  <component
      :is="to ? NuxtLink : href ? 'a' : 'button'"
      :to="to ? to : null"
      :href="href ? href : null"
      class="button"
      :class="[isSmall && 'is--small']"
      v-on:@click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import {NuxtLink} from "#components";

const props = defineProps({
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  isSmall: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss">
$button-color: #000 !default;
$button-color-hover: #fff !default;
$button-background-color: #fff !default;
$button-background-color-hover: #000 !default;
$button-border-color: #000 !default;
$button-border-color-hover: #000 !default;
$button-border-width: 1px !default;
$button-border-style: solid !default;

.button {
  cursor: pointer;
  width: auto;
  background-color: $button-background-color;
  border-color: $button-border-color;
  border-width: $button-border-width;
  border-style: $button-border-style;
  color: $button-color;
  padding: 1rem 2rem;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out;
  text-decoration: none;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;

  &:hover {
    background-color: $button-background-color-hover;
    border-color: $button-border-color-hover;
    color: $button-color-hover;
  }

  &.is--small {
    padding: 0.5rem 0.5rem;
  }
}

</style>