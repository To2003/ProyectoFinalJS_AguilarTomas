/* Inicio.html script */
const constJson = async (valor) => {
    const grupo = document.querySelector("#grupo"+valor);

    const resp = await fetch("./teams.json");
    const data = await resp.json();
    
    var grupoA = data.filter(function(el) {
        return (el.grupo === valor);
    });    

 // CAMBIAR <h2 class="tituloGrupos"><a href="./pages/grupoC.html">GRUPO ${valor}</a></h2> POR <h2 class="tituloGrupos"><a href="./pages/grupo${valor}.html">GRUPO ${valor}</a></h2> 

    const div = document.createElement("div");
    div.innerHTML = `
    <h2 class="tituloGrupos"><a href="./pages/grupoC.html">GRUPO ${valor}</a></h2> 
    <ul id="listado${valor}"></ul>
    `;

    grupo.append(div);

    const listado = document.querySelector("#listado"+valor);

    grupoA.forEach((post)=> {
        const li = document.createElement("li");
        li.innerHTML = `
            <section class="sectionPaises">
                <img src=${post.bandera} alt="Bandera de ${post.pais}">
                <p class="paises">${post.pais}</p>
            </section>
        `;

        listado.append(li);
    });
};
constJson("A");
constJson("B");
constJson("C");
constJson("D");
constJson("E");
constJson("F");
constJson("G");
constJson("H");
