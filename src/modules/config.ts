import ShoutOutMessage from "./models/shoutoutMessage";

const config = {
  OAUTH_TOKEN: "",
  CLIENT_ID: "",
  BOT_USERNAME: "",
  CHANNEL_NAME: "",
  PING_COMMAND: "",
  sendPingMessage(username: string) {
    console.log(`Welcome ${username}`);
    return `Welcome ${username}`;
  },
  sendShoutOutMessage(data: ShoutOutMessage, templateString: string) {
    templateString = templateString
      .replaceAll("$displayname", data.displayName)
      .replaceAll("$loginname", data.name)
      .replaceAll("$category", data.game)
      .replaceAll("$title", data.title);
    const template =
      templateString ??
      `/me ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Thanks for the raid! ${data.displayName} さん( https://www.twitch.tv/${data.name} ). | ${data.game} -"${data.title}" ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`;

    return template;
  },
};

config.OAUTH_TOKEN = config.OAUTH_TOKEN?.replace("oauth:", "");

export default config;
