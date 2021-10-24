const HomeTemplate = `
<div class="row">
  <div class="col">
    <div class="row">
      <div class="col">
        <router-link class="btn btn-primary" to="/create">Crear</router-link>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" >
              <td>{{ user.username }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

`;