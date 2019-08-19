<template lang="pug">
.app
  .hero
    header.header
      transition(appear, name="title")
        .header__title
          n-link(to="/")
            p.first
              | Kazuki
            p.last
              | Yoshida
      transition(appear, name="menu")
        p.header__description
          | @Tokyo, Japan. <br />
          | I work as a Backend web developer, and I'm learning Frontend and Embedded system.
      transition(appear, name="menu")
        nav.menu
          ul.menu-container
            .menu-button
              n-link(class="menu-button__link" to="/about")
                span
                  | about
            .menu-button
              n-link(class="menu-button__link" to="/blog")
                span
                  | blog
    nuxt
    footer.footer
      .footer__copyright
        | © 2018 KazukiYoshida
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

.hero {
  padding: $padding-size;
}

.header {
  width: 25%;
  position: fixed;
  bottom: 12%;
  left: 6.5%;

  color: white;
  text-decoration: none;

  @include sp {
  width: 88%;
  position: fixed;
  top: 3%;
  left: 6.5%;
  }

  > .header__title {
    font-weight: bold;

    @include sp {
      font-size: 32px;
      line-height: 32px;
    }
    @include pc {
      font-size: 50px;
      line-height: 50px;
    }
  }

  > .header__description {
    @include sp {
      display: none;
    }

    font-size: 14px;
    line-height: 24px;
  }
}

.menu {
  position: fixed;
  @include sp {
    bottom: 8%;
    width: 90%;
  }
  @include pc {
    bottom: 6%;
    width: 23%;
  }

  > .menu-container {
    display:flex;
    justify-content: space-around;

    @include sp {
      font-size: 14px;
    }
    @include pc {
      font-size: 14px;
    }
  }
}

.menu-button__link {
  display: block;
  width: 90px;
  padding: 8px;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  transition: .4s;

  &:hover {
    background: white;
    color: #000;
  }
}

footer.footer {
  position: fixed;
  bottom: $padding-size;
  height: 1%;
  width: calc(100% - 40px);
  color: white;
  text-align: center;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
  @include sp {
    font-size: 6px;
  }
  @include pc {
    font-size: 4px;
  }
}

a:visited, a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}


/*************************************/
/*            transition             */
/*************************************/
.title-enter-active, .title-leave-active {
    transition: opacity 1s;
}
.title-enter, .title-leave-to {
    opacity: 0;
}

.desc-enter-active, .desc-leave-active {
    transition: opacity 3s;
}
.desc-enter, .desc-leave-to {
    opacity: 0;
}

.menu-enter-active, .menu-leave-active {
    transition: opacity 3s;
}
.menu-enter, .menu-leave-to {
    opacity: 0;
}

</style>
