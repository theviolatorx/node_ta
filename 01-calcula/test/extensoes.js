const calculaValor = require('../src/calcula-valor.js')

expect.extend({
  tenhaSomaDeValoresIgual (itens, soma) {
    const somaReal = calculaValor.arredondar(itens.reduce((a, t) => a + t))
    const passou = somaReal === calculaValor.arredondar(soma)

    return {
      message: () => `A soma ${somaReal} deve ser igual a ${soma}`,
      pass: passou
    }
  },

  sejaDecrescente (itens) {
    for (let i = 0; i < itens.length - 1; i++) {
      if (itens[i] < itens[i + 1]) {
        return {
          message: () => 'O array deve estar em ordem decrescente!',
          pass: false
        }
      }
      // expect(itens[i]).toBeGreaterThanOrEqual(itens[i + 1]);
    }

    return {
      message: () => 'O array deve estar em ordem decrescente!',
      pass: true
    }
  }
})
