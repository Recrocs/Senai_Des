let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
document.getElementById("modal").style.display = "block";
}

function fecharModal(){
document.getElementById("modal").style.display = "none";
limparCampos();
}

function salvarFilme(){

const titulo = document.getElementById("titulo").value.trim();
const genero = document.getElementById("genero").value;
const ano = document.getElementById("ano").value;
const capa = document.getElementById("capa").value;

if(!titulo){
alert("Título é obrigatório!");
return;
}

const novoFilme = {
id: Date.now(),
titulo,
genero,
ano,
capa
};

filmes.push(novoFilme);

atualizarLocalStorage();
renderizarTabela();
fecharModal();

}

function renderizarTabela(lista = filmes){

const tabela = document.getElementById("dados");

tabela.innerHTML = "";

lista.forEach(filme =>{

tabela.innerHTML += `
<tr>

<td>
<img src="${filme.capa}" width="60">
</td>

<td>${filme.titulo}</td>
<td>${filme.genero}</td>
<td>${filme.ano}</td>

<td>
<button onclick="excluirFilme(${filme.id})">Excluir</button>
</td>

</tr>
`;

});

}

function excluirFilme(id){

if(!confirm("Deseja excluir?")) return;

filmes = filmes.filter(f => f.id !== id);

atualizarLocalStorage();
renderizarTabela();

}

function pesquisarFilme(){

const texto = document.getElementById("pesquisa").value.toLowerCase();

const filtrados = filmes.filter(f =>
f.titulo.toLowerCase().includes(texto)
);

renderizarTabela(filtrados);

}

function filtrarGenero(){

const genero = document.getElementById("filtroGenero").value;

if(genero === ""){
renderizarTabela();
return;
}

const filtrados = filmes.filter(f => f.genero === genero);

renderizarTabela(filtrados);

}

function atualizarLocalStorage(){
localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos(){

document.getElementById("titulo").value = "";
document.getElementById("ano").value = "";
document.getElementById("capa").value = "";

}