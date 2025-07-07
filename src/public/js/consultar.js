const url = "http://localhost:3030/api";
    let getID_lista = document.getElementById("getId-list")
    let getProduct_form = document.getElementById("getProduct-form")

    getProduct_form.addEventListener("submit", async(e) =>{
        
        e.preventDefault(); //  Previene el envío default del form

        try {
            
            let formData = new FormData(e.target);
            console.log(formData);

            let data = Object.fromEntries(formData.entries());
            console.log(data);

            let idProd = data.idProd;
            console.log(idProd);

            let response = await fetch(`${url}/products/${idProd}`);

            let datos = await response.json();
            console.log(datos);

            let producto = datos.payload[0];
            console.log(producto);

            let htmlProductos = `
            <li class="li-listados productos-listados">
                <img src="." alt="${producto.nombre}" class="img-listados">
                <p>Id: ${producto.id} / Nombre: ${producto.nombre} / <strong>Precio: $${producto.precio}</strong></p>
            </li>
            `;

            getID_lista.innerHTML = htmlProductos;

        } catch (e) {
            
        }
    })