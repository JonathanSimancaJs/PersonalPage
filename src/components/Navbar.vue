<template lang="html">
  <div class="container">
    <div class="row">
      <div>
        <router-link to="/">
          <img src="/static/img/logotatan.png" id="logonav">
        </router-link>
      </div>
      <div class="col-sm-1 divhide">
      </div>
      <div class="navbarmain">
        <div class="socials">
          <div id="hexagon">
            <router-link to="/profile"><i class="fa fa-user"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link to="/work"><i class="fa fa-briefcase"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link to="/post"><i class="fa fa-rss-square"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link to="/contact"><i class="fa fa-envelope"></i></router-link>
          </div>
          </div>
          <!--
          <div class="reviews">
          <div id="hexagon">
            <i class="fa fa-linkedin-square"></i>
          </div>
          <div id="hexagon">
            <i class="fa fa-instagram"></i>
          </div>
          <div id="hexagon">
            <i class="fa fa-facebook-square"></i>
          </div>
          <div id="hexagon">
            <i class="fa fa-github"></i>
          </div>
        -->
        </div>

      </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#logonav{
  width: 230px;
  height: 230px;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
}
.divhide{
  background: transparent;
}
</style>
