const form = document.querySelector("form")
const listado = []
form.addEventListener("submit", function (event) {
  event.preventDefault()

  let marca = event.target.marca.value
  let modelo = event.target.modelo.value
  let nuevo = event.target.nuevo.value



  listado.push({ marca: marca, modelo: modelo, nuevo: nuevo })
   console.log(listado)

  let caja = document.querySelector(".caja");
  caja.innerHTML = `
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Modelo</th>
        <th scope="col">Marca</th>
        <th scope="col">Nuevo</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>`
  ;

  let tbody = document.querySelector(".table tbody");

  for (let i = 0; i < listado.length; i++) {
    tbody.innerHTML += `
    <tr>
      <th scope="row">${i}</th>
      <td>${listado[i].modelo}</td>
      <td>${listado[i].marca}</td>
      <td>${listado[i].nuevo}</td>
    </tr>`;
  }

})




