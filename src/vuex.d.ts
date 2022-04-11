import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // ストアのステートを宣言する
  interface SettingsState {
    BOT_SETTINGS: {
      OAUTH_TOKEN: string;
      CLIENT_ID: string;
      BOT_USERNAME: string;
      CHANNEL_NAME: string;
      PING_COMMAND: string;
    };
    SO_COMMENT: string;
  }
  // `this.$store` の型付けを提供する
  interface ComponentCustomProperties {
    $store: Store<SettingsState>;
  }
}
