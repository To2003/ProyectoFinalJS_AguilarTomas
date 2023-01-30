/* Inicio.html script */
const constJson = async (valor) => {
    //const grupo = document.querySelector("#partidos"+valor);

    const resp = await fetch("../grupoA.json");
    const data = await resp.json();
    
    var grupoA = data.filter(function(el) {
        return (el.grupo === valor);
    });    

    /*const div = document.createElement("div");
    div.innerHTML = `
    <h2 class="tituloGrupos"><a href="./pages/grupo${valor}.html">GRUPO ${valor}</a></h2>
    <ul id="listado${valor}"></ul>
    `;

    grupo.append(div);*/

    const listado = document.querySelector("#partidos"+valor);

    grupoA.forEach((post)=> {
        const form = document.createElement("form");
        form.innerHTML = `
        <form class="partido uno">

                    <div class="equipo local"> 
                        <label class="nom-equipo">${post.local}</label>
                        <input type="number" id="localUno" class="goles" min="0" value="0">
                        </input>
                    </div>
                    
                    <div class="equipo visitante">
                        <input type="number"name="goles" id="visitaUno" class="goles" min="0" value="0">
                        </input>
                        <label class="nom-equipo">${post.visitante}</label>
                    </div>
                    
                </form>

                <p class="info">${post.description}</p>    
        `;

        listado.append(form);
    });
};
constJson("A");

