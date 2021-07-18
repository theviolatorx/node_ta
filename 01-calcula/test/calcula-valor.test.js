require('./extensoes')
const calculaValor = require('../src/calcula-valor')

test('Uma prestação o montante é igual ao capital', () => {
  // Operação
  const montante = calculaValor.calcularMontante(100, 0.0175, 1)

  // Resultado ou Comportamento esperado
  expect(montante).toBe(100)
})

test('Com 4 prestações o montante é acrescido de juros', () => {
  // Operação
  const montante = calculaValor.calcularMontante(500, 0.025, 4)

  // Resultado ou comportamente esperado:
  expect(montante).toBeCloseTo(538.45)
})

describe('arredondar', () => {
  test('Arredondar em duas casas decimais', () => {
    const resultado = calculaValor.arredondar(538.4453124999998)
    expect(resultado).toBe(538.45)
  })

  test('1.005 deve retornar 1.01', () => {
    const resultado = calculaValor.arredondar(1.005)
    expect(resultado).toBe(1.01)
  })
})

describe('calcularPrestacoes', () => {
  test('O número de parcelas é igual ao número de prestações', () => {
    // Premissa
    const numeroPrestacoes = 6

    // Operação
    const prestacoes = calculaValor.calcularPrestacoes(200, numeroPrestacoes)

    // Resultado esperado
    expect(prestacoes.length).toBe(numeroPrestacoes)
  })

  test('Unica prestação, valor igual ao montante', () => {
    // Premissa
    const numeroPrestacoes = 1

    // Operações
    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

    // resultado
    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(50)
  })

  test('Com diuas prestações, valor é igual a metade montante', () => {
    // Premissa
    const numeroPrestacoes = 2

    // Operações
    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

    // resultado
    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(50 / numeroPrestacoes)
    expect(prestacoes[1]).toBe(25)
  })

  test('Valor da soma das prestações deve ser igual ao montante com duas casas decimais', () => {
    // Dado (given)
    const numeroPrestacoes = 3
    const montante = 100

    // Quando (when)
    const prestacoes = calculaValor.calcularPrestacoes(
      montante,
      numeroPrestacoes
    )

    // Então (then)
    expect(prestacoes.length).toBe(numeroPrestacoes)
    const soma = calculaValor.arredondar(
      prestacoes[0] + prestacoes[1] + prestacoes[2]
    )
    expect(soma).toBe(montante)

    //
    expect(prestacoes).sejaDecrescente()
    // for (let i = 0; i < prestacoes.length - 1; i++) {
    //   const j = i + 1
    //   expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
    // }
  })

  test('Desafio semi-final', () => {
    // Para debugar:
    // debugger;
    // Para processar:
    // node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand

    // Given
    const numeroPrestacoes = 3
    const montante = 101.994

    // When
    const prestacoes = calculaValor.calcularPrestacoes(
      montante,
      numeroPrestacoes
    )

    // Then
    expect(prestacoes.length).toBe(numeroPrestacoes)

    //
    expect(prestacoes).tenhaSomaDeValoresIgual(montante)
    // const soma = calculaValor.arredondar(
    //   prestacoes[0] + prestacoes[1] + prestacoes[2]
    // );
    // expect(soma).toBe(calculaValor.arredondar(montante));

    //
    expect(prestacoes).sejaDecrescente()

    // for (let i = 0; i < prestacoes.length - 1; i++) {
    //   const j = i + 1;
    //   expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j]);
    // }
  })
})
