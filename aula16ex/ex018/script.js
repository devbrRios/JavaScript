let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n)>=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value,valores)){
        //window.alert('Tudo OK')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)       
        res.innerHTML = '' 
    } else {
        window.alert('Valor inválido ou já localizado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length ==0) {
        window.alert('Adicione valores antes de finalizar"')
    } else {
        let tot = valores.length
        
        valores.sort(Comparar)
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        
        res.innerHTML += `<p>O menor valor é ${valores[0]}.</p>`
        res.innerHTML += `<p>O maior valor é ${valores[tot-1]}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores é ${media}. </p>`
        num.focus()
    }
}

function Comparar(a,b) {
    return a - b;
}