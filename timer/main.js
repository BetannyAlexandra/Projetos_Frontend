function relogio(){
   function getTimaFromSec(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
         hour12: false,
         timeZone: 'GMT'
      })
   }
   
   
   console.log(getTimaFromSec(10));
   const relogio = document.querySelector('.relogio');
   const zerar = document.querySelector('.zerar');
   const pausar = document.querySelector('.pausar');
   const iniciar = document.querySelector('.iniciar');
   let seconds = 0;
   let timer;
   function inciaRelogio() {
      timer = setInterval(function () {
         seconds++;
         relogio.innerHTML = getTimaFromSec(seconds);
      }, 1000);
   }
   
   iniciar.addEventListener('click', function (e) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
   
      inciaRelogio()
   })
   
   pausar.addEventListener('click', function (e) {
      clearInterval(timer);
      relogio.classList.add('pausado')
   
   })
   
   zerar.addEventListener('click', function (e) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00'
      seconds=0;
   })
}



relogio();