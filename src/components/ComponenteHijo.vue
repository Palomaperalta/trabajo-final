<template lang="">
    <div>
      <form>
        <div class="form-group">
          <label>{{titulo}}</label>
          <input class="form-control" placeholder="Comentario" v-model="mensajeHijo"/>
          <button type="submit" class="btn btn-primary" @click="mandarMensaje()">Enviar mensaje</button>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    titulo: String,
  },
  data() {
    return {
      mensajeHijo: "",
    };
  },
  methods: {
    mandarMensaje() {
      this.$emit("mensajeDesdeHijo", this.mensajeHijo);
      this.mensajeHijo = "";
    },
  },
};
</script>