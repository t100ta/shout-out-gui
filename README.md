# shout-out-gui
![favicon](public/icon.png)

## ユーザー向け
### 概要
Twitch配信において、対象のチャンネルにRaidが来た場合に自動でメッセージをチャットに投稿します。
### 導入手順
0. 事前に配信アカウントではない、bot用のサブアカウントを作成し以降の手順を行うことをお勧めします。
1. 「Release」ページからexeファイルをダウンロード・インストールしてください。
2. UIに従って必要な情報を登録してください。(１ページ登録につき１度再起動をお願いします。)
3. 配信開始前などの利用時に起動しっぱなしにしてください。インターネットに接続できていれば、対象のチャンネルに対するRaidを検知し、設定したメッセージをchatに流します。

### どこに書くか保留中のTIPS
- コメントの設定例
```
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ Thanks for the raid! $displayname さん( https://www.twitch.tv/$loginname ). $category | $title ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
