<template>
  <div class="comment-creater">
    <span>見え方</span>
    <p>{{ replaceUserInfoParam }}</p>
    <div class="button-box">
      <button v-on:click="concatUtil('$displayname')">表示名</button>
      <button v-on:click="concatUtil('$loginname')">ID</button>
      <button v-on:click="concatUtil('$category')">カテゴリ</button>
      <button v-on:click="concatUtil('$title')">タイトル</button>
    </div>
    <input v-model="comment" placeholder="ここに書く" />
    <button>テンプレを保存する</button>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class CommentCreatorView extends Vue {
  comment = "";

  get replaceUserInfoParam(): string {
    interface UserObject {
      [key: string]: string;
    }
    const sampleUser: UserObject = {
      $displayname: "にかなとむ",
      $loginname: "tom_t100ta",
      $category: "Silent Hill2",
      $title: "第２回 全日本静岡マラソン大会 #3",
    };

    let replaced = this.comment;
    Object.keys(sampleUser).forEach((key) => {
      replaced = replaced.replaceAll(key, sampleUser[key]);
    });
    return replaced;
  }

  concatUtil(value: string) {
    this.comment += `${value}`;
  }
}
</script>
<style lang="scss" scoped>
.button-box {
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;

  button {
    width: 5rem;
  }
}

input {
  width: 80%;
}
</style>
