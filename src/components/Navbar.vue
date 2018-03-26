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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  <img src="/static/img/profile.png">
                  <br>
                  Perfil
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/work" class="nav-link">
                  <img src="/static/img/work.png">
                  <br>
                  Trabajo
                </router-link>
              </li>
              <li class="nav-item">
                  <router-link to="/post" class="nav-link">
                    <img src="/static/img/post.png">
                    <br>
                    Foro
                  </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact" class="nav-link">
                  <img src="/static/img/contact.png">
                  <br>
                  Contacto
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <br>
        <div class="slider">
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
.nav-item{
  padding-left: 30px;
  padding-right: 20px;
  border-radius: 5px;
}
.nav-item:hover{
  box-shadow:1px 9px 34px 0px rgba(0,0,0,0.75);
  transition: all 200ms cubic-bezier(.02, .01, .47, 1);
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
}
#logonav{
  width: 230px;
  height: 230px;
  border-radius: 10px;
}
#logonav:hover{
  box-shadow:1px 9px 34px 0px rgba(0,0,0,0.75);
  transition: all 200ms cubic-bezier(.02, .01, .47, 1);
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
}
.divhide{
  background: transparent;
}
.slider{
  width: 500px;
  height: 100px;
  margin: auto;
  background-size: 100% 100%;
  animation: slider 42s infinite alternate;
}

@keyframes slider {
  0%, 25% {
    background-image: url(/static/img/img01.png);
  }

  30%, 50% {
    background-image: url(/static/img/img02.png);
  }

  55%, 75% {
    background-image: url(/static/img/img03.png);
  }

  80%, 100% {
    background-image: url(/static/img/img04.png);
  }
}
</style>
