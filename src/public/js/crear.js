const url = "http://localhost:3030/api";
let altaProducts_form = document.getElementById("altaProducts-form");

altaProducts_form.addEventListener("submit", async(e) =>{
    e.preventDefault();

    let formData = new FormData(e.target);
    console.log([...formData]);

    let data = Object.fromEntries(formData.entries());
    console.log(data);
    console.table(data);
    
    if(!data.name || !data.desc || !data.price){
        alert("Todos los campos son obligatorios")
    }

})