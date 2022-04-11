<template>
  <div class="bot-settings">
    <div class="title-wrapper">
      <span class="title">OAUTH TOKEN</span>
      <a
        href="https://twitchapps.com/tmi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>https://twitchapps.com/tmi/</span>
        <open-outline />
      </a>
    </div>
    <input v-model="oauthToken" placeholder="oauth:..." />
    <p>{{ oauthToken }}</p>
    <div class="title-wrapper">
      <span class="title">CLIENT ID</span>
      <a
        href="https://dev.twitch.tv/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>https://dev.twitch.tv/</span>
        <open-outline />
      </a>
    </div>
    <input v-model="clientId" placeholder="例:5f89ffaw54jjhyam2cuzsz3zi5n9z3" />
    <p>{{ clientId }}</p>

    <div class="title-wrapper">
      <span class="title">通知botの表示名</span>
    </div>
    <input v-model="botUsername" placeholder="あなたのbot名" />
    <p>{{ botUsername }}</p>

    <div class="title-wrapper">
      <span class="title">投稿先チャンネルのユーザーID</span>
    </div>
    <input v-model="channelID" placeholder="あなたのユーザーID" />
    <p>{{ channelID }}</p>

    <div class="title-wrapper">
      <span class="title">動作確認用コマンド</span>
    </div>
    <input v-model="pingCommand" placeholder="!sobot" />
    <p>{{ pingCommand }}</p>

    <button v-on:click="save()">設定を保存する</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import OpenOutline from "@/assets/openOutline.vue";
import { Store } from "vuex";
import { SettingsState } from "@vue/runtime-core";

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

  save() {
    const store: Store<SettingsState> = this.$store;
    const payload = {
      OAUTH_TOKEN: this.oauthToken,
      CLIENT_ID: this.clientId,
      BOT_USERNAME: this.botUsername,
      CHANNEL_NAME: this.channelID,
      PING_COMMAND: this.pingCommand,
    };
    store.commit("saveSettings", payload);
    alert("設定を保存しました！");
  }

  mounted() {
    const store: Store<SettingsState> = this.$store;
    const state: SettingsState = store.state;

    this.oauthToken = state.BOT_SETTINGS.OAUTH_TOKEN;
    this.clientId = state.BOT_SETTINGS.CLIENT_ID;
    this.botUsername = state.BOT_SETTINGS.BOT_USERNAME;
    this.channelID = state.BOT_SETTINGS.CHANNEL_NAME;
    this.pingCommand = state.BOT_SETTINGS.PING_COMMAND;
  }
}
</script>
<style lang="scss">
.title-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin-left: 5%;

  .title {
    font-weight: bold;
    font-size: 1.5rem;
  }
  a {
    color: #a970ff;
  }
}

input {
  font-size: 1.5rem;
  width: 90%;
}
</style>
