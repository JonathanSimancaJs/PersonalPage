<template lang="html">
  <div class="container">
    <div class="row">
      <div>
        <router-link to="/">
          <img src="/static/img/logotatan.png" id="logonav">
        </router-link>
      </div>
      <div class="col-sm-1">
      </div>
      <div class="navbarmain">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto order-0">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <img src="/static/img/usuario.png">
                  Perfil
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/work" class="nav-link">
                  <img src="/static/img/engrane.png">
                  Mi trabajo
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/post" class="nav-link">
                  <img src="/static/img/publicarlo.png">
                  Foro
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  <img src="/static/img/contacto.png">
                  Contacto
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
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
}
.navbarmain{
  padding-top: 80px;
  border-radius: 10px;
  font-size: 20px;
  color: #000;
}
.col-sm-1{
  background: transparent;
}
.contmain{
  background: transparent;
}
a:hover{
  background: #fff;
  border-radius: 5px;
}
</style>
