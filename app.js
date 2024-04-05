const valorInput = document.querySelector("#input");
const qrCodigo = document.querySelector("#qrcode");

document.addEventListener("keypress", function(e){
    if(e.key === 'Enter'){
        gerarCodigoQr();
    }
});

document.getElementById("botao").addEventListener("click", () =>{
    gerarCodigoQr();
});

function gerarCodigoQr(){
    if (!valorInput.value){
        return;
    }
    else{
        qrCodigo.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valorInput.value}`;
    }
}