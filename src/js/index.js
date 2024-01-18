document.getElementById("botao-gerar-conselho").addEventListener('click', ()=>{
    gerarConselho();
});

async function gerarConselho(){
    const url = await fetch ("https://api.adviceslip.com/advice");
    const conselho = await url.json();
    document.getElementById('advice-id').innerHTML = `Advice #${conselho.slip.id}`;
    document.getElementById('advice-text').innerHTML = `"${conselho.slip.advice}"`;

};

gerarConselho();