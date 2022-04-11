<template>
  <div class="comment-creater">
    <span>見え方(スタンプは反映されません)</span>
    <p>{{ replaceUserInfoParam }}</p>
    <div class="button-box">
      <button v-on:click="concatUtil('$displayname')" class="option-button">
        表示名
      </button>
      <button v-on:click="concatUtil('$loginname')" class="option-button">
        ID
      </button>
      <button v-on:click="concatUtil('$category')" class="option-button">
        カテゴリ
      </button>
      <button v-on:click="concatUtil('$title')" class="option-button">
        タイトル
      </button>
    </div>
    <textarea v-model="comment" placeholder="" />
    <button v-on:click="save()">テンプレを保存する</button>
  </div>
</template>
<script lang="ts">
import { SettingsState } from "@vue/runtime-core";
import { Vue } from "vue-class-component";
import { Store, useStore } from "vuex";

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

  save() {
    const payload = {
      SO_COMMENT: this.comment,
    };
    this.$store.commit("saveSOComment", payload);
    alert("コメントのテンプレを保存しました！");
  }

  mounted() {
    this.comment = this.$store.state.SO_COMMENT;
  }
}
</script>
<style lang="scss" scoped>
.comment-creater {
  width: 80%;
  display: inline-flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  P {
    width: 33rem;
    overflow-wrap: break-word;
    min-height: 1.5rem;
  }
  .button-box {
  }
  .option-button {
    width: 5rem;
  }
  textarea {
    width: 23rem;
    height: 3rem;
  }
}
</style>
