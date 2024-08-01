const url = ; // colocar o link da API!!!

const elementoCarregar = document.querySelector("#carregar");
const 


// Pegar os posts
async function pegarPosts(){

    const response = await fetch(url);

    const data = await response.json();


    console.log(response);

    console.log(data);

    elementoCarregar.classList.add("hide");

    data.map( (resposta) =>{

        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("h2")
        const link = document.createElement("h2")
        const imagem = document.createElement("img")

        title.innerText = resposta.title
        body.innerText = resposta.body

        link.innerText = "Ver local"
        link.setAttribute("href", `/post.html?id=${resposta.id}`) //buscar no html o ID da local

        imagem.setAttribute("alt", `Imagem de ${resposta}`)
        imagem.setAttribute("src",`/post.html?id=${resposta.imagem}`) //buscar no html a imagem do local

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)
        div.appendChild(imagem)

        principal.appendChild(div);
    });
}

