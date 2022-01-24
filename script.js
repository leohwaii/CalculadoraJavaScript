onload = () => {

                document.querySelector("#bt-0").onclick = () => digito(0)
                document.querySelector("#bt-1").onclick = () => digito(1)
                document.querySelector("#bt-2").onclick = () => digito(2)
                document.querySelector("#bt-3").onclick = () => digito(3)
                document.querySelector("#bt-4").onclick = () => digito(4)
                document.querySelector("#bt-5").onclick = () => digito(5)
                document.querySelector("#bt-6").onclick = () => digito(6)
                document.querySelector("#bt-7").onclick = () => digito(7)
                document.querySelector("#bt-8").onclick = () => digito(8)
                document.querySelector("#bt-9").onclick = () => digito(9)
                document.querySelector('#bt-ac').onclick = allClear
                document.querySelector('#bt-ce').onclick = clearEntry
                document.querySelector('#bt-virgula').onclick = virgula
                document.querySelector('#bt-dividir').onclick = () => operator('/')
                document.querySelector('#bt-menos').onclick = () => operator('-')
                document.querySelector('#bt-multiplicar').onclick = () => operator('*')
                document.querySelector('#bt-somar').onclick = () => operator('+')
                document.querySelector('#bt-igual').onclick = igual

              }   

let initValue = '0'
let statusInitial = true
let operacaoPendente = null;
let proximoValor = 0

const display = () => {
    if(initValue.length > 16){

       Object.freeze(initValue)
   }
      
  else { 
  return document.querySelector('#display').innerText = initValue   
}


}
const digito = (n) => {
   if(statusInitial){

    initValue = '' + n;
    statusInitial = false

   }else initValue += n

  display();

}

const clearEntry = () => {

initValue = initValue.substring(0, initValue.length -1 )   

display();
} 


const virgula = () => {
  if(statusInitial){
    initValue = '0,'
    statusInitial = false
} else if (initValue.indexOf(',') == -1)
     initValue += ','

 display();
}



const allClear = () => {
  
    initValue = '0'
    statusInitial = true
    operacaoPendente = null
    proximoValor = 0
    display();

}

const valorAtual = () => parseFloat(initValue.replace(',', '.'))


const operator = (op) => {
  igual();
  proximoValor = valorAtual();
  operacaoPendente = op
  statusInitial = true
}

const igual = () => {
    if (operacaoPendente != null){
      let resultado;
      switch (operacaoPendente) {
        case '+' : resultado = proximoValor + valorAtual();
        break;
        case '-' : resultado = proximoValor - valorAtual();
        break;
        case '/' : resultado = proximoValor / valorAtual();
        break;
        case '*' : resultado = proximoValor * valorAtual();
        break;
      }

        initValue = resultado.toString().replace('.', ',');
    }

    statusInitial = true
    operacaoPendente = null
    proximoValor = 0
    display();

}