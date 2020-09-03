const Pessoa = {
    nome: 'Lucas',
    sexo: 'M',
    anodenascimento: 1990,
    contribuicao: 10,
    idade: 'null'
}
Pessoa.idade = 2020 - Pessoa.anodenascimento;
console.table(Pessoa)

if (Pessoa.sexo == 'M' && Pessoa.contribuicao >= 35 && ((Pessoa.idade + Pessoa.contribuicao) >= 95) || 
    Pessoa.sexo == 'F' && Pessoa.contribuicao >= 30 && ((Pessoa.idade + Pessoa.contribuicao) >= 85 ))
    {    
    console.log(`${Pessoa.nome}, voce pode se aposentar `)
} else {
    console.log(`${Pessoa.nome}, voce NÃO pode se aposentar.`)
}



