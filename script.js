function mostrarColor() {
    const color = document.getElementById("selectColor").value;
    const cuadro = document.getElementById("cuadroColor");

    cuadro.style.backgroundColor = color ? color : "transparent";
}

function mostrarVehiculo() {
    const vehiculo = document.getElementById("selectVehiculo").value;
    const cuadro = document.getElementById("cuadroVehiculo");

    const imagenes = {
        carro: "https://static.retail.autofact.cl/blog/c_url_original.6c3h8m2w48nn5.jpg",
        moto: "https://tse1.mm.bing.net/th/id/OIP.x3dkLGDqr0d3SqJbuzrjqwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
        bicicleta: "https://cdn.pixabay.com/photo/2016/11/18/12/49/bicycle-1834265_1280.jpg"
    };

    if (imagenes[vehiculo]) {
        cuadro.innerHTML = `<img src="${imagenes[vehiculo]}" alt="${vehiculo}">`;
    } else {
        cuadro.innerHTML = "";
    }
}