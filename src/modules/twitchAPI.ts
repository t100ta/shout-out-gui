import axios, { AxiosInstance, AxiosResponse } from "axios";

import config from "./config";
import type Authorization from "./models/twitchAPI/authorization";
import type { Channels } from "./models/twitchAPI/channels";
import type { Users } from "./models/twitchAPI/users";

axios.interceptors.request.use((request) => {
  console.log("Starting Request: ", request);
  return request;
});

axios.interceptors.response.use((response) => {
  console.log("Response: ", response);
  return response;
});

export default class TwitchAPI {
  private instance!: AxiosInstance;
  constructor() {
    this.init();
  }

  public async init(): Promise<void> {
    const res: AxiosResponse = await axios.get(
      "https://id.twitch.tv/oauth2/validate",
      {
        headers: { Authorization: "OAuth " + config.OAUTH_TOKEN },
      }
    );
    const data: Authorization = res.data;
    const clientId: string = data.client_id;
    console.log(`Client-Id: ${clientId}`);

    this.instance = axios.create({
      baseURL: "https://api.twitch.tv/helix",
      headers: {
        Authorization: `Bearer ${config.OAUTH_TOKEN}`,
        "Client-Id": clientId,
      },
    });
  }

  public async getUsers(loginId: string): Promise<Users | null> {
    console.log(loginId);
    try {
      const response: AxiosResponse = await this.instance.get("/users", {
        params: {
          login: loginId,
        },
      });
      const data: Users = response.data;
      return data;
    } catch (error) {
      console.error;
      console.log("getUsers");
      return null;
    }
  }

  public async getChannels(broadcasterId: string): Promise<Channels | null> {
    try {
      const response: AxiosResponse = await this.instance.get("/channels", {
        params: {
          broadcaster_id: broadcasterId,
        },
      });
      const data: Channels = response.data;
      return data;
    } catch (error) {
      console.error;
      console.log("getChannels");
      return null;
    }
  }
}
