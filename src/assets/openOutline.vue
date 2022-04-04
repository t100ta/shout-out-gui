<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="ionicon"
    viewBox="0 0 512 512"
    v-bind:width="width"
    v-bind:height="height"
  >
    <title>Open</title>
    <path
      d="M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48M336 64h112v112M224 288L440 72"
      v-bind:fill="fillColor"
      v-bind:stroke="strokeColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="32"
    />
  </svg>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    width: {
      type: String,
      default: "1rem",
    },
    height: {
      type: String,
      default: "1rem",
    },
    fillColor: {
      type: String,
      default: "none",
    },
    strokeColor: {
      type: String,
      default: "currentColor",
    },
  },
})
export default class OpenOutline extends Vue {}
</script>
