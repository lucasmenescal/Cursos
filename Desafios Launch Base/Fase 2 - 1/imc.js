const Pessoa = {
    name: "Lucas",
    peso: 63,
    altura: 1.64
}

const imc = Pessoa.peso / (Pessoa.altura * Pessoa.altura)

if (imc >= 30){
    console.log(`${Pessoa.name} voce está acima do peso`)
} else {
    console.log(`${Pessoa.name} voce NÃO está acima do peso`)
}