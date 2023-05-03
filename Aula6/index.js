console.log("Inicio do JavaScript");

let dados;
const ul =  document.querySelector("#lista-links");

async function getData(){
    dadosJson = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    let dados = await dadosJson.json();

    console.log("Dados Json: ", dadosJson);
    console.log("Dados: ", dados);
    console.log("Link: ", dados[0].width);
    console.log("Tamanho do Array: ", dados.length);

    array.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.url;

        ul.appendChild(li);
        
    });
}

getData();

