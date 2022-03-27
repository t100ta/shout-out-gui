<template>
  <div class="comment-creater">
    <p>{{ replaceUserInfoParam }}</p>
    <input v-model="comment" placeholder="edit me" />
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
      $title: "第２回 全日本静岡マラソン #3",
    };

    let replaced = this.comment;
    Object.keys(sampleUser).forEach((key) => {
      replaced = replaced.replaceAll(key, sampleUser[key]);
      console.log(replaced);
    });
    return replaced;
  }
}
</script>
