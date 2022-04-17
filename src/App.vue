<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">botの設定</router-link> |
    <router-link to="comment">コメントの設定</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import tmi from "tmi.js";

import { Vue } from "vue-class-component";
import type ShoutOutMessage from "@/modules/models/shoutoutMessage";
import type { Channels, Channel } from "@/modules/models/twitchAPI/channels";
import type { Users, User } from "@/modules/models/twitchAPI/users";
import config from "@/modules/config";
import TwitchAPI from "@/modules/twitchAPI";

export default class App extends Vue {
  created() {
    const twitchAPI = new TwitchAPI();
    const state = this.$store.state;

    const client: tmi.Client = new tmi.Client({
      connection: {
        reconnect: true,
        secure: true,
      },
      identity: {
        username: state.BOT_SETTINGS.BOT_USERNAME,
        password: state.BOT_SETTINGS.OAUTH_TOKEN,
      },
      channels: [state.BOT_SETTINGS.CHANNEL_NAME],
    });
    client.connect().catch(console.error);

    client.on("connected", (address: string, port: number) => {
      console.log(`Connected! : ${address}:${port}`);
    });

    client.on(
      "message",
      async (
        channel: string,
        tags: tmi.ChatUserstate,
        message: string,
        self: boolean
      ) => {
        if (
          self ||
          !message.startsWith("!") ||
          tags.messageType === "whisper"
        ) {
          return;
        }

        if (message === state.BOT_SETTINGS.PING_COMMAND && tags.username) {
          client.say(channel, config.sendPingMessage(tags.username));
        }
      }
    );

    client.on(
      "raided",
      async (
        channel: string,
        username: string,
        viewer: number,
        loginname: string
      ) => {
        console.log(
          `Detected 'raided'\nchannel: ${channel}\nusername: ${username}\nviewer: ${viewer}\nloginname: ${loginname}`
        );
        const userData: Users | null = await twitchAPI.getUsers(loginname);
        if (!userData || !Object.keys(userData).length) {
          return;
        }
        const firstUserData: User = userData.data[0];
        const channelData: Channels | null = await twitchAPI.getChannels(
          firstUserData.id
        );
        if (!channelData || !Object.keys(channelData).length) {
          return;
        }
        const firstChannelData: Channel = channelData.data[0];

        const data: ShoutOutMessage = {
          displayName: firstUserData.display_name,
          name: firstUserData.login,
          game: firstChannelData.game_name,
          title: firstChannelData.title,
        };
        client.say(
          firstChannelData.broadcaster_name,
          config.sendShoutOutMessage(data)
        );
      }
    );
  }
}
</script>

<style lang="scss">
html {
  background: #030030;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5994ce;
}

nav {
  padding: 30px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #feffef;

    &.router-link-exact-active {
      color: #5994ce;
    }
  }
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  background: #feffef;
  color: #003003;
}
button {
  border-radius: 0.5rem;
  background: #bbbbbb;
  height: 2rem;
  margin: 0.5rem 0.25rem;
}
p {
  color: #feffef;
  font-size: 1.5rem;
  min-height: 1.5rem;
}
</style>
