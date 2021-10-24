const HomeTemplate = `
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
`;