<template>
  <div id="oni">
    <div class="header">
      <div class="logo">oni</div>
      <div class="version">alpha@0.0.1</div>
    </div>
    <div class="app">
      <div class="nav">
        <router-link to="/projects" class="nav__item" active-class="active">проекты</router-link>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#oni {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F1F2F2;
  height: 100vh;
}
.header {
  display: flex;
  padding: 0 60px;
  background-color: #1E212B;
  justify-content: space-between;
  align-items: center;
  color: #F1F2F2;
  .logo {
    font-size: 64px;
    position: relative;
  }

  .logo::after {
    content: '';
    width: 100px;
    height: 1px;
    background-color: #F1F2F2;
    position: absolute;
    top: 50%;
  }
}

.app {
  display: flex;
  height: calc(100% - 72px);
  .nav {
    background-color: #1E212B;
    width: 25%;
    padding: 60px;
    color: #F1F2F2;
    .nav__item {
      font-size: 24px;
      color:#F1F2F2;
      text-decoration: none;
    }
    .nav__item.active {
      position: relative;
    }
    .nav__item.active::after {
      content: '';
      width: 100px;
      height: 1px;
      background-color: #F1F2F2;
      position: absolute;
      top: 50%;
      left: 110%;
    }
  }
  .content {
    padding: 20px 30px;
    width: 100%;
  }
}
</style>
