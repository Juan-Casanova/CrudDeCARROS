const cars = [
    {
        marca: 'Audi',
        modelo: 'A4',
        color: 'Blanco',
        año: 2020,
        precio: 750000
    },
    {
        marca: 'Bmw',
        modelo: 'i8',
        color: 'negro',
        año: 2019,
        precio: 650000
    },
    {
        marca: 'Chevrolet',
        modelo: 'Aveo',
        color: 'Gris',
        año: 2018,
        precio: 250000
    },
    {
        marca: 'Kia',
        modelo: 'Rio',
        color: 'Rojo',
        año: 2020,
        precio: 350000
    },
    {
        marca: 'Volkswagen',
        modelo: 'Golf',
        color: 'Plata',
        año: 2017,
        precio: 180000
    }
]

const containerCards = document.getElementById('container-cards');

function printAll() {

    containerCards.innerHTML = '';

    cars.forEach((car) => {
        const cartas = 
        `<div class="card card-spaces">
            <div class="card-body">
            <h5 class="card-title tittle-middle">${car.marca}</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Modelo: ${car.modelo}</li>
              <li class="list-group-item">Color: ${car.color}</li>
              <li class="list-group-item">Año: ${car.año}</li>
              <li class="list-group-item">Precio: ${car.precio}</li>
            </ul>
              <div class="container-bottons">
                <a href="#" class="btn btn-primary botton">Editar</a>
                <a href="#" class="btn btn-primary botton">Eleminar</a>
              </div>
          </div>
        </div> `
        containerCards.innerHTML += cartas;
    });
}

printAll();