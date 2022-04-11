<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p>Twitch Auto Shout Out Bot</p>
    <div class="manual">
      <h3>使い方</h3>
      <span>1. 「botの設定」「コメントの設定」それぞれ登録</span><br />
      <span>2. このアプリを再起動</span><br />
      <span
        >3. RAIDの自動検知とメッセージの投稿が自動で行われるようになります</span
      ><br />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped>
.manual {
  color: #feffef;
}
</style>
