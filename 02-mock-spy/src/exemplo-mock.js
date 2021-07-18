function realizarParaAdultos(pessoas, callback) {
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].idade >= 18) {
      callback(pessoas[i]);
    }
  }
}

function aguardarTimer(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
}

function subtrair(a, b) {
  return a - b;
}

function somar(a, b) {
  return a + b;
}

module.exports = {
  realizarParaAdultos,
  aguardarTimer,
  subtrair,
  somar,
};
