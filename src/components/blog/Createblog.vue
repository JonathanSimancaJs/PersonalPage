<template lang="html">
  <div>
    <Navbar/>
      <div class="container mt-5">
        <div class="card col-sm-8">
          <div class="card-header">
            <h1>Crear Blog</h1>
          </div>
          <div class="card-body">
            <form role="form" v-on:submit.prevent='addblog'>
              <div class="form-group">
                <input v-model="newBlog.title" type="text" class="form-control" placeholder="Titulo Blog">
              </div>
              <div class="form-group">
                <label for="ejemplo_password_1">Contenido</label>
                <textarea v-model="newBlog.content" rows="8" cols="80"></textarea>
              </div>
              <div class="form-group">
                <input v-model="newBlog.image" type="text" class="form-control" placeholder="Url imagen">
              </div>
              <div class="form-group">
                <label for="exampleSelect1">Categoria</label>
                <select v-model="newBlog.category" class="form-control" id="exampleSelect1">
                  <option>Programación</option>
                  <option>Hardware</option>
                  <option>Peliculas</option>
                  <option>Series</option>
                  <option>Novedades</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import {db} from '../../firebase';

let blogsRef = db.ref('blogs');

export default {
  components: {
    Navbar,
    Footer
  },
  firebase: {
    blogs: blogsRef
  },
  data(){
    return{
      newBlog: {
        title:'',
        content:'',
        category:'',
        image:'',
        date:''
      }
    }
  },
  methods:{
    addblog: function(){
      var time = new Date();
      var hour = time.getHours();
      var min = time.getMinutes();

      var dn = "AM";

      if (hour>12) {
        dn = "PM";
        hour = hour -12;
      }
      if (hour==0) {
        hour = 12;
      }
      if (hour<=9) {
        hour = "0" + hour;
      }
      if (min<=9) {
        min = "0" + min;
      }

      var month = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
      "Octubre", "Noviembre", "Diciembre");
      var today = new Date();
      var year = today.getFullYear();
      var dt = today.getDate() + "-" + month[today.getMonth()] + "-" + year + "-";
      var script, total;
      script = dt+hour+":"+min+dn;
      total=script;
      this.newBlog.date=total;
      blogsRef.push(this.newBlog);
    }
  }
}
</script>

<style lang="css">
</style>
