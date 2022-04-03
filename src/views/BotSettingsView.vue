<template>
  <div class="bot-settings">
    <h2>OAUTH TOKEN</h2>
    <input v-model="oauthToken" placeholder="oauth:..." />
    <p>{{ oauthToken }}</p>
    <open-outline width="8" height="8" fillColor="red" strokeColor="red" />
    <open-outline width="32" height="32" strokeColor="black" />

    <h2>CLIENT ID</h2>
    <input v-model="clientId" placeholder="XXX" />
    <p>{{ clientId }}</p>

    <h2>S.O.通知botとして使うアカウントのユーザー名</h2>
    <input v-model="botUsername" placeholder="your_bot" />
    <p>{{ botUsername }}</p>

    <h2>投稿先チャンネルとなるアカウントのユーザーID</h2>
    <input v-model="channelID" placeholder="your_channel" />
    <p>{{ channelID }}</p>

    <h2>疎通チェック用カスタムコマンド</h2>
    <input v-model="pingCommand" placeholder="!sobot" />
    <p>{{ pingCommand }}</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import OpenOutline from "@/assets/openOutline.vue";

@Options({
  components: {
    OpenOutline,
  },
})
export default class BotSettingsView extends Vue {
  oauthToken = "";
  clientId = "";
  botUsername = "";
  channelID = "";
  pingCommand = "";
}
</script>
