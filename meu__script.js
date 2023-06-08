let gmailHtml = document.querySelector('.span__gmail__usuario')
let nomeHtml = document.querySelector('.span__nome__usuario')
let nomeUsuario = 'MARCIO JOSE C.'
let email = 'mcarvalho873@gmail.c'
if(nomeUsuario && email){
    gmailHtml.innerHTML = email
    nomeHtml.innerHTML = nomeUsuario
}
if(!email || !nomeUsuario){
    nomeHtml.innerHTML = 'fazer login'
}
