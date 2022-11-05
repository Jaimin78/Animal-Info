let url = "https://zoo-animal-api.herokuapp.com/animals/rand/10"

let p = fetch(url)

p.then((response)=>{
  return response.json()
}).then((animal)=>{
    ihtml = ""
  for(i in animal){ 
     //console.warn(animal[i])
    ihtml += `
          <div class="card text-bg-dark my-4 m-auto" style="width: 18rem;">
  <img src="${animal[i].image_link}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${animal[i].name} | ${animal[i].animal_type}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Habitats: ${animal[i].habitat}</li>
    <li class="list-group-item">Life Span: ${animal[i].lifespan} years</li>
    <li class="list-group-item">Geo Range: ${animal[i].geo_range}</li>
    <li class="list-group-item">Max Length: ${animal[i].length_max}</li>
    <li class="list-group-item">Max Weight: ${animal[i].weight_max}</li>
  </ul>
</div>
    `
  }
  container.innerHTML = ihtml;
})