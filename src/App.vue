<template>
  <div class="nav">
    <router-link to="/">
      <div class="logo">
        <img class="logo__icon" src="../src/images/logo.png">
        <span class="logo__name">Pizza</span>
      </div>
    </router-link>
  </div>
  <router-view/>
</template>

<style >
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 2.5rem;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
}

.nav a {
  font-weight: bold;
  color: #d5a25f;
  text-decoration: none;
}

.logo__icon{
  height: 15%;
  width: 15%;
}

.logo{
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 1.5rem;
  font-size: 2rem;

}

@media screen and (max-width : 870px) {
  .logo__icon{
    height: 20%;
    width: 20%;
  }

  .logo{
    justify-content: center;
  }
}

@media screen and (max-width : 600px) {
  .nav {
    padding: 2.5rem;
    justify-content: center;
  }
}
</style>
