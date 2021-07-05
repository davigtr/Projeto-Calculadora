function criaCalculadora() {
  
  return{

    /* atributos */

    display: document.getElementById('visor'),

    btnClear: document.querySelector('.btn-clear'),


    /* métodos */

    get inicia(){
      console.log('to aqui')
      this.cliqueBtn()
    },

    clearDisplay(){
      this.display.value = ' '
    },

    deleteUm(){
      this.display.value = this.display.value.slice(0, -1)
    },

    realizaConta(){
      let conta = this.display.value

      try {
        conta = eval(conta)

        if(conta === " " || Number.isNaN(conta) ||typeof(conta) !== 'number'){
          alert('Erro1')
          return
        }
        
        this.display.value = String(conta)

      } catch (e) {
        alert('Erro')
      }
    },

    cliqueBtn(){
      document.addEventListener('click', function(e) {
        const el = e.target
        console.log(this)

        if( el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText)
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay()
        }

        if(el.classList.contains('btn-del')){
          this.deleteUm()
        }

        if(el.classList.contains('btn-igual')){
          this.realizaConta()
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