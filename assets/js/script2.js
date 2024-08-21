const form = document.querySelector('form');
const divEquipos = document.querySelector('#equipos');
const imagen = './assets/img/no_image.jpg';


let equiposFutbol = [];

form.addEventListener('submit', function(event){

    event.preventDefault();
    const nombreEquipo =  event.target.txtEquipo.value;
    const pais =  event.target.txtPais.value;
    const dt =  event.target.txtDt.value;
    
    
    equiposFutbol.push([{
        equipo : equipo,
        pais : pais,
        dt: dt
    }]);

    const card = document.createElement('div');
    equiposFutbol.forEach(equipo =>{
            card.innerHTML = `
            <div class="container">
             <div class="card" style="width: 18rem;">
                <img src=${imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombreEquipo}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Pais : ${pais}</li>
                    <li class="list-group-item">DT : ${dt}</li>
                </ul>
            </div>
            </div>
         `
         divEquipos.appendChild(card); 
    })
  
})