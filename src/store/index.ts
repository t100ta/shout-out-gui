import { SettingsState } from "vue";
import { createStore } from "vuex";
import createPersistredState from "vuex-persistedstate";

export default createStore({
  state: {
    BOT_SETTINGS: {
      OAUTH_TOKEN: "",
      CLIENT_ID: "",
      BOT_USERNAME: "",
      CHANNEL_NAME: "",
      PING_COMMAND: "!sobot",
    },
    SO_COMMENT: "",
  },
  getters: {
    getOauthToken(state: SettingsState) {
      return state.BOT_SETTINGS.OAUTH_TOKEN;
    },
    getClientId(state: SettingsState) {
      return state.BOT_SETTINGS.CLIENT_ID;
    },
    getBotUsername(state: SettingsState) {
      return state.BOT_SETTINGS.BOT_USERNAME;
    },
    getChannelName(state: SettingsState) {
      return state.BOT_SETTINGS.CHANNEL_NAME;
    },
    getPingCommand(state: SettingsState) {
      return state.BOT_SETTINGS.PING_COMMAND;
    },
    getSoComment(state: SettingsState) {
      return state.SO_COMMENT;
    },
  },
  mutations: {
    saveSettings(state: SettingsState, obj) {
      const settings = state.BOT_SETTINGS;
      settings.OAUTH_TOKEN = obj?.OAUTH_TOKEN;
      settings.CLIENT_ID = obj?.CLIENT_ID;
      settings.BOT_USERNAME = obj?.BOT_USERNAME;
      settings.CHANNEL_NAME = obj?.CHANNEL_NAME;
      settings.PING_COMMAND = obj?.PING_COMMAND;
    },
    saveSOComment(state, obj) {
      state.SO_COMMENT = obj?.SO_COMMENT;
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistredState({
      key: "autoShoutOUt",
      storage: window.localStorage,
    }),
  ],
});
