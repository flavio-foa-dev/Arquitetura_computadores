const fs = require('fs')

printProduto("tabela.csv");

function printProduto(nameArquivo){
  const arquivo = geraLinhas(nameArquivo)

  for( let linha of arquivo){
    printProduto(linha)
  }
}

function geraLinhas(nameArquivo) {
  const tabela = fs.readFileSync(nameArquivo, 'utf8')
  return tabela.split('\n')
}

const linhas = []

for await (let linha of linhas){
  imprimir(linha)
}

function geraLinhas(arquivo ) {
  return fs.readFile.createInterfaces({
    input: fs.createReadStream(arquivo),
    crlfDelay: Infinity,
  })
}