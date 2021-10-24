const CreateTemplate = `
<div class="row">
  <div class="col">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="row" >
          <h2>Crear</h2>
        </div>
        <div class="mb-3">
          <label class="form-label">Username</label>
          <input type="text" v-model="user.username" class="form-control" placeholder="Username">
        </div>
        <button v-on:click="saveUser()" class="btn btn-primary" >Guardar</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</div>
`;