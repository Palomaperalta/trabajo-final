<template lang="html">
<div>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-body">

                <form id="form-mares" @submit.prevent="agregarMar">
                  <div class="form-group">
                    <label for="continentes">Continente</label>
                    <select class="form-control" v-model="continente">
                      <option disabled value="">Seleccione un continente</option>
                      <option>Africa</option>
                      <option>America</option>
                      <option>Asia</option>
                      <option>Europa</option>
                      <option>Oceania</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="mar">Mar</label>
                    <input class="form-control" type="text" id="mar" v-model="mar">
                  </div>
                  <button class="btn btn-primary" type="submit">Enviar</button>
                  <button class="btn btn-danger" id="cancelar" @click="resetForm">Cancelar</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <table id="tabla-mar" class="table"> 
		<tr>
      <th>Nombre del Mar</th>
      <th>Continente</th>
      <th>Acciones</th>
    </tr>
    <tr v-for="mar in mares" :key="mar.id">
      <td v-america="mar.continente">{{mar.nombre | toLowercase | capitalizeFirstLetter}}</td>
      <td>{{mar.continente}}</td>
      <td>
        <button class="btn btn-primary" id="editar" @click="editarMar(mar)">Editar</button>
        <button class="btn btn-danger" id="eliminar" @click="eliminarMar(mar.id)">Eliminar</button>
      </td>
    </tr>
	</table>
  <button type="button" id="btn-agregar-mar" class="btn btn-primary" @click="showModal = true">Agregar mar</button>
</div>
</template>
<script>
export default {
  data() {
    return {
      continente: "",
      mar: "",
      id: undefined,
      showModal: false,
      isEdit: false,
      initialId: 0,
      mares: [],
    };
  },
  methods: {
    agregarMar() {
      if (this.isEdit) {
        let marAEditar = this.mares.findIndex((m) => m.id === this.id);
        this.mares[marAEditar].nombre = this.mar;
        this.mares[marAEditar].continente = this.continente;
      } else {
        this.mares.push({
          id: this.initialId++,
          nombre: this.mar,
          continente: this.continente,
        });
      }
      this.resetForm();
    },
    resetForm() {
      this.mar = "";
      this.continente = "";
      this.id = undefined;
      this.showModal = false;
      this.isEdit = false;
    },
    eliminarMar(id) {
      this.mares.splice(
        this.mares.findIndex((m) => m.id === id),
        1
      );
    },
    editarMar(mar) {
      this.mar = mar.nombre;
      this.continente = mar.continente;
      this.id = mar.id;
      this.isEdit = true;
      this.showModal = true;
    },
  },
  mounted() {
    fetch("https://602c39a330ba720017222cb2.mockapi.io/api/mares")
      .then((resp) => resp.json())
      .then((data) => {
        this.mares = data;
        this.initialId = data.length;
      });
  },
};
</script>
<style lang="css">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>