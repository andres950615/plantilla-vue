// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

const apiUrl = 'http://localhost/plantilla-php/index.php';

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Home = {
	template: HomeTemplate, 
	data: function() {
		return {
			msg: 's',
			todos: [
		      { text: 'Aprender JavaScript' },
		      { text: 'Aprender Vue' },
		      { text: 'Construir algo increíble' }
		    ],
		    users: []
		}
	},
	methods: {
  		getUsers() {
  			const url = apiUrl + '?controller=user&method=index';

  			axios
		      .get(url)
		      .then(response => {
		      	console.log(response);
		      	this.users = response.data;
		      });

  			//console.log('getUsers');
  		}
    },
    created: function () {
	    //console.log('creado');
	    //console.log(apiUrl);
	    this.getUsers();
  	}
};
const Create = {
	template: CreateTemplate, 
	data: function() {
		return {
		    user: {
		    	username: ''
		    }
		}
	},
	methods: {
  		saveUser() {

  			const url = apiUrl;

  			let payload = {
  				controller: 'user',
  				method: 'store',
  				user: this.user
  			}

  			let formData = new FormData();
  			formData.append('controller', 'user');
  			formData.append('method', 'store');
  			formData.append('user', JSON.stringify(this.user));

  			/*const payload = [
  				'test' => 'test'
  			];*/

  			const config = {
  				headers: {
  					'Content-Type': 'application/x-www-form-urlencoded'
  				}
  			};

  			axios
		      .post(url,formData,config)
		      .then(response => {
		      	console.log(response);
		      	this.users = response.data;
		      });

  			console.log(this.user.data);
  			console.log('saveUser');
  		}
    },
    created: function () {
	    //this.getUser();
  	}
};

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/home', component: Home },
  { path: '/create', component: Create },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// Now the app has started!