const HomeTemplate = `
<table class="table">
  <thead>
    <tr>
      <th scope="col">Last</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="todo in todos" >
      <td>{{ todo.text }}</td>
    </tr>
  </tbody>
</table>
`;