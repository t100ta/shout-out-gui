<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/settings">botの設定</router-link> |
    <router-link to="comment">コメントの設定</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
body {
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
  border-radius: 1rem;
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
