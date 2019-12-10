var vetor = new Array()

for(let i = 0; i < 20; i++)
    vetor[i] = i*2


var numero = 22;

console.log("\n### Vetor original ###")
console.log(vetor)
console.log('*************** ' + remove(numero) + ' ***************') 

insere(11)
console.log(vetor)


console.log('*************** FIM ***************\n') 

// Função insere
// recebe um item e insere ordenado 
function insere(item){
    console.log("Inserção do " + item + " no array");
    vetor.unshift(item)
    let index = 0;

    while(index < vetor.length -1){
        if(vetor[index] > vetor[index+1])
            vetor[index] = vetor[index+1]        
        else
            return
        
        vetor[index+1] = item
        index++;
    }
}

// Função remove um item
// caso não existe retorna false
function remove(item){
    console.log("\nBuscando número " + item + " no vetor para remoção")
    console.log("### Vetor modificado retirada do n° " + item + " ###")
    let check = false
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] == item)
            check = true;
        
        if(check && (i+1) < vetor.length)
            vetor[i] = vetor[i+1]

    }

    if(check){
        vetor.pop()
        return true
    }


    return false;
}

