<template>
  <form class="bot-settings" @submit.prevent="save">
    <div v-for="item in secretItems" :key="item.title">
      <div class="title-wrapper">
        <span class="title">{{ item.title }}</span>
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <span>{{ item.link }}</span>
          <open-outline />
        </a>
      </div>
      <input
        type="password"
        v-model="item.currentValue"
        :placeholder="item.placeholder"
      />
    </div>

    <div v-for="item in items" :key="item.title">
      <div class="title-wrapper">
        <span class="title">{{ item.title }}</span>
      </div>
      <input v-model="item.currentValue" :placeholder="item.placeholder" />
    </div>
    <button type="submit">設定を保存する</button>
  </form>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import OpenOutline from "@/assets/openOutline.vue";
import { Store } from "vuex";
import { SettingsState } from "@vue/runtime-core";

interface item {
  title: string;
  placeholder: string;
  currentValue: string;
}
interface SecretItem extends item {
  link: string;
}

@Options({
  components: {
    OpenOutline,
  },
})
export default class BotSettingsView extends Vue {
  store: Store<SettingsState> = this.$store;
  oauthToken = "";
  clientId = "";
  botUsername = "";
  channelID = "";
  pingCommand = "";

  secretItems: Array<SecretItem> = [];
  items: Array<item> = [];

  save(event: Event) {
    event.preventDefault();

    const target = [];
    for (const item of this.secretItems) {
      target.push(item.currentValue);
    }
    for (const item of this.items) {
      target.push(item.currentValue);
    }

    const validationError: boolean = target.some(function (element) {
      return !element;
    });

    if (validationError) {
      alert("入力できてない箇所があります。ご確認ください。");
      return;
    }

    const payload = {
      OAUTH_TOKEN: target[0],
      CLIENT_ID: target[1],
      BOT_USERNAME: target[2],
      CHANNEL_NAME: target[3],
      PING_COMMAND: target[4],
    };
    this.$store.commit("saveSettings", payload);
    alert("設定を保存しました！");
  }

  mounted() {
    const getters = this.$store.getters;
    this.oauthToken = getters.getOauthToken;
    this.clientId = getters.getClientId;
    this.botUsername = getters.getBotUsername;
    this.channelID = getters.getChannelName;
    this.pingCommand = getters.getPingCommand;

    this.secretItems = [
      {
        title: "OAUTH TOKEN",
        link: "https://twitchapps.com/tmi/",
        placeholder: "「oauth:」以降の文字列",
        currentValue: this.oauthToken,
      },
      {
        title: "CLIENT ID",
        link: "https://dev.twitch.tv/",
        placeholder: "例:5f89ffaw54jjhyam2cuzsz3zi5n9z3",
        currentValue: this.clientId,
      },
    ];

    this.items = [
      {
        title: "通知botの表示名",
        placeholder: "あなたのbot名",
        currentValue: this.botUsername,
      },
      {
        title: "投稿先チャンネルのユーザーID",
        placeholder: "あなたのユーザーID",
        currentValue: this.channelID,
      },
      {
        title: "動作確認用コマンド",
        placeholder: "例:!sobot",
        currentValue: this.pingCommand,
      },
    ];
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
