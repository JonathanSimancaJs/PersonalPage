<template lang="html">
  <div class="container">
    <div class="row">
      <div>
        <router-link :to="{ name: 'start' }">
          <img src="/static/img/logotatan.png" id="logonav">
        </router-link>
      </div>
      <div class="col-sm-1 divhide">
      </div>
      <div class="navbarmain">
        <div class="navbuttons">
          <div id="hexagon">
            <router-link :to="{ name: 'profile'}"><i class="fa fa-user"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link :to="{ name: 'work' }"><i class="fa fa-briefcase"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link :to="{ name: 'post' }"><i class="fa fa-rss-square"></i></router-link>
          </div>
          <div id="hexagon">
            <router-link :to="{ name: 'contact' }"><i class="fa fa-envelope"></i></router-link>
          </div>
          </div>
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
  width: 150px;
  height: 150px;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 60px 0px rgba(0,0,0,0.75);
}
.divhide{
  background: transparent;
}
</style>
