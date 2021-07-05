function criaCalculadora() {
  
  return{

    /* atributos */

    display: document.getElementById('visor'),


    /* métodos */

    get inicia(){
      console.log('to aqui')
      this.cliqueBtn()
    },

    cliqueBtn(){
      document.addEventListener('click', function(e) {
        const el = e.target
        console.log(this)

        if( el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText)
        }
      }.bind(this) )
    },

    btnParaDisplay(v){
      this.display.value += v
    }


  }
}

const calculadora = criaCalculadora()
calculadora.inicia

calculadora.display.innerHTML = 'chora'