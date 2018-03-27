<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-image: url(/static/img/pexels-photo-373076.jpeg);
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
}
.fadeIn {
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    animation-duration: 0.5s;
    -webkit-animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
    visibility: visible !important;
    opacity: 0;
    -webkit-animation-fill-mode: forwards;
    -moz-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
}
.delay-1 {
    animation-delay: 0.3s;
}
.delay-2 {
    animation-delay: 0.6s;
}
@keyframes fadeIn{
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
}
</style>
