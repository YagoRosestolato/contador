function contador (){
  var ini = document.getElementById('txtInicio')
  var fim = document.getElementById('txtFim')
  var passo = document.getElementById('txtPasso')
  var res = document.getElementById('res')
  
  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    alert('Erro, preencha todo os campos')
  }else {
    res.innerHTML = 'Contando: '
    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (p <= 0 ){
      alert('Passo invalido! Considerando passo 1')
      p = 1
    }

    if (i < f){
      for(c = i; c <= f; c+=p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }else{
      for(c = i; c>= f; c -= p){
        res.innerHTML += `${c} \u{1F449}`
      }
    }

    
  }

 
}