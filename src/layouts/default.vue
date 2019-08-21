<template lang="pug">
.app
  .wrapAll
    template(v-if="false")
      .header
        p header
    .wrapMiddle
      .wrapSide
        .side-title
          n-link(to="/")
            p Kazuki
            p Yoshida
        .side-desc
          p @Tokyo, Japan.
          p I work as a Serverside web developer, and I'm learning Frontend and Embedded system.
        .side-buttons
          n-link(to="/about").button about
          n-link(to="/blog").button blog
      .wrapContent
        nuxt
    .footer © 2019 KazukiYoshida
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@import '../assets/stylesheet/mixins';
$padding-size: 20px;
$hero-image: "../assets/images/bari.jpg";

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-overflow-scrolling: touch;
}

body {
  height: 100vh;
  background-color: black;
  background-image: url($hero-image);
  background-size: cover;
  background-position: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.wrapAll {
  position: relative;
  height: 100vh;
}

.header {
  height: 30px;
  width: 100%;
  background-color: yellow;
}

.wrapMiddle {
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

.wrapSide {
  position: absolute;
  bottom: 50px;
  width: 35%;
  padding: 0 40px 0 40px;
}

.side-title {
  color: white;
  font-weight: bold;
  font-size: 100px;
  line-height: 100px;
  display: inline-block;
  padding: 0 0 20px 0;
}

.side-desc {
  color: white;
  font-size: 20px;
  line-height: 30px;
  display: inline-block;
}

.button {
  font-size: 18px;
  display: block;
  width: 40%;
  padding: 8px;
  margin: 20px 20px 20px 20px;
  text-align: center;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  float: left;
}

.wrapContent {
  width: 65%;
  height: 100vh;
  float: right;
}

.footer {
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;
  color: white;
  text-align: center;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
  font-size: 4px;
}

a:visited, a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

</style>
