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

        nome.innerText = local.nome;

        div.appendChild(nome);

        principal.appendChild(div);
    })
}

pegarPosts()
