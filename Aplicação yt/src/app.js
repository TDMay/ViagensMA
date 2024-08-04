const url = "https://api-desafio5-tdmay.vercel.app/atracao"

const elementoCarregar = document.querySelector("#carregar")
const principal = document.querySelector("#principal")

// Pegar os posts
async function pegarPosts() {
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    elementoCarregar.classList.add("esconder");

    data.forEach((local) => {

        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const descricao = document.createElement("p")
        const cidade = document.createElement("p")
        const imagemUm = document.createElement("img")
        const imagemDois = document.createElement("img")
        const imagemTres = document.createElement("img")
        const imagemQuatro = document.createElement("img")

        nome.innerText = local.nome;
        descricao.innerText = local.descricao;
        cidade.innerText = "Cidade: " + local.endereco;

        //Adicionando Imagens
        if (local.imagens && local.imagens.length > 0) {
            imagemUm.src = local.imagens[0];
            if (local.imagens.length > 1) {
                imagemDois.src = local.imagens[1];
            }
            if (local.imagens.length > 2) {
                imagemTres.src = local.imagens[2];
            }
            if (local.imagens.length > 3) {
                imagemQuatro.src = local.imagens[3];
            }
        }

        // Adicionando mapas
        const divMapa = document.createElement("div");
        divMapa.setAttribute("id", "map" + local._id); // Usar um ID único para cada mapa
        divMapa.style.height = "180px";


        div.appendChild(nome);
        div.appendChild(descricao);
        div.appendChild(cidade);
        div.appendChild(imagemUm);
        div.appendChild(imagemDois);
        div.appendChild(imagemTres);
        div.appendChild(imagemQuatro);
        div.appendChild(divMapa);

        principal.appendChild(div);

        // Inicializar o mapa após adicionar o divMapa ao DOM
        var map = L.map('map' + local._id).setView([local.latitude, local.longitude], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([local.latitude, local.longitude]).addTo(map)
            .bindPopup(local.nome)
            .openPopup();
    })
}

pegarPosts()
