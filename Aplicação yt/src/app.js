const url = "https://api-desafio5-tdmay.vercel.app/atracao"

const principal = document.querySelector("#principal")

// Pegar os posts
async function pegarPosts() {
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    data.forEach((local) => {

        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const descricao = document.createElement("p")
        const cidade = document.createElement("p")
        const imagemUm = document.createElement("img")
        const imagemDois = document.createElement("img")
        const imagens = document.createElement("div")

        nome.innerText = local.nome;
        descricao.innerText = local.descricao;
        cidade.innerText = "Cidade: " + local.endereco;

        //Adicionando Imagens
        if (local.imagens && local.imagens.length > 0) {
            imagemUm.src = local.imagens[0];
            if (local.imagens.length > 1) {
                imagemDois.src = local.imagens[1];
            }
        }

        // Adicionando mapas
        const divMapa = document.createElement("div");
        divMapa.setAttribute("id", "map" + local._id);
        divMapa.style.height = "180px";


        div.appendChild(nome);
        div.appendChild(descricao);
        div.appendChild(cidade);
        imagens.appendChild(imagemUm);
        imagens.appendChild(imagemDois);
        div.appendChild(imagens);
        div.appendChild(divMapa);

        principal.appendChild(div);
        
        //Organizando pro css
        div.classList.add("local")
        nome.classList.add("nome")
        descricao.classList.add("descricao")
        cidade.classList.add("cidade")
        imagemUm.classList.add("imagemUnica")
        imagemDois.classList.add("imagemUnica")
        imagens.classList.add("localImagens")
        divMapa.classList.add("mapa")

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
