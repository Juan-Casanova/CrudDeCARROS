const cars = [
    {
        id: 1,
        marca: 'Audi',
        modelo: 'A4',
        color: 'Blanco',
        año: 2020,
        precio: 750000
    },
    {
        id: 2,
        marca: 'Bmw',
        modelo: 'i8',
        color: 'negro',
        año: 2019,
        precio: 650000
    },
    {
        id: 3,
        marca: 'Chevrolet',
        modelo: 'Aveo',
        color: 'Gris',
        año: 2018,
        precio: 250000
    },
    {
        id: 4,
        marca: 'Kia',
        modelo: 'Rio',
        color: 'Rojo',
        año: 2020,
        precio: 350000
    },
    {
        id: 5,
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
                <button class="btn btn-primary botton">Editar</button>
                <button class="btn btn-primary botton" onclick="removeUser(${car.id})">Eleminar</button>
              </div>
          </div>
        </div> `
        containerCards.innerHTML += cartas;
    });
}

function addCar() {
    
    const newId = cars.length;

    const newCar = {
        id: newId+1,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        color: document.getElementById('color').value,
        año: document.getElementById('año').value,
        precio: document.getElementById('costo').value
    }

    cars.push(newCar);
    printAll();

    console.log(cars)
}

function removeUser(id) {
    const car = cars.findIndex((car) => car.id===id);
    console.log(car);
    cars.splice(car, 1);
    printAll();
    
}

printAll();