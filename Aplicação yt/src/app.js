const url = "https://api-desafio5-tdmay.vercel.app/atracao"

const elementoCarregar = document.querySelector("#carregar")
const principal = document.querySelector("#principal")

// Pegar os posts
async function pegarPosts(){
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    elementoCarregar.classList.add("esconder");

    data.map((local) => {
        
        const div = document.createElement("div")
        const nome = document.createElement("h2")
        const imagemUm = document.createElement("img")
        const imagemDois = document.createElement("img")
        const imagemTres = document.createElement("img");
        const imagemQuatro = document.createElement("img");

        nome.innerText = local.nome;
        
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

        div.appendChild(nome);
        div.appendChild(imagemUm);
        div.appendChild(imagemDois);
        div.appendChild(imagemTres);
        div.appendChild(imagemQuatro);

        principal.appendChild(div);
    })
}

pegarPosts()
