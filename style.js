var res= fetch("https://jsonplaceholder.typicode.com/users");
res.then((data)=>data.json()).then((value)=> bar(value))

var container=document.createElement("div");
container.className="container"
var row=document.createElement("div");
row.className="row"
container.append(row);

function bar(value) {
	console.log(value);
	for(i=0; i<value.length;i++) {
		row.innerHTML+=`
		<div class="col-3">
  <div class="card-text-white bg-primary mb-3">
  <div class="card-body">
            <p class="card-text">ID:${value[i].id}</p> 
             <p class="card-text">Name:${value[i].name}</p>
             <p class="card-text">Username:${value[i].username}</p> 
             <p class="card-text">Email:${value[i].email}</p>
             <p class="card-text">Address:${value[i].address.city}</p>
             <p class="card-text">Street:${value[i].address.street}</p>  
             <p class="card-text">Suite:${value[i].address.suite}</p>
             <p class="card-text">ZipCode:${value[i].address.zipcode}</p> 
             <p class="card-text">Lat:${value[i].address.geo.lat}</p> 
             <p class="card-text">Lng:${value[i].address.geo.lng}</p>
             <p class="card-text">Phone:${value[i].phone}</p>
             <p class="card-text">Website:${value[i].website}</p>
             <p class="card-text">Company Name:${value[i].company.name}</p>
             <p class="card-text">CatchPhrase:${value[i].company.catchPhrase}</p>
             <p class="card-text">BS:${value[i].company.bs}</p>  
             </div>  
             </div>
             </div>

		`
	}
	document.body.append(container)
}