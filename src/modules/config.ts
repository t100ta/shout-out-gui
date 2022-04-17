import ShoutOutMessage from "./models/shoutoutMessage";

const config = {
  OAUTH_TOKEN: "",
  CLIENT_ID: "",
  BOT_USERNAME: "",
  CHANNEL_NAME: "",
  PING_COMMAND: "",
  sendPingMessage(username: string) {
    return `Welcome ${username}`;
  },
  sendShoutOutMessage(data: ShoutOutMessage) {
    return `/announceblue GivePLZ Would you kindly follow ${data.displayName} over at https://www.twitch.tv/${data.name}. They were last playing ${data.game}. -"${data.title}" TakeNRG`;
  },
};

config.OAUTH_TOKEN = config.OAUTH_TOKEN?.replace("oauth:", "");

export default config;
