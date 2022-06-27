const form = document.getElementById('form');
const professor= document.getElementById('professor');
const sala = document.getElementById('sala');
const problema = document.getElementById('problema');
const btn = document.getElementById('do');

btn.addEventListener('click', function onClick() {
  
  postTeams();
  cadastro();
  
 
});

 form.addEventListener('submit', (e)=>{
     e.preventDefault();
   
    postTeams();
 });

 function cadastro(){
  alert('A mensagem foi enviada com sucesso');
}

 function teste(){
     console.log("O professor " + professor.value + " está solicitando ajuda na sala " + sala.value + ". Problema: " +problema.value)
 }

 function postTeams(){
    const data = { text: "O professor " + professor.value + " está solicitando ajuda na sala " + sala.value + ". Problema: " +problema.value};
// teams link 
// this link is fake 
fetch("https:///89b98a0024f4fb7a188d18572ee7d98/c1f93acb-bcb0-4b8f-ac60-fb9161776450?", {

      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso");
      })
      .catch((error) => {
        console.error("Erro" + error);
      });
 }





