export default function initFetchBtc() {
  const url = 'https://blockchain.info/ticker';
  const btcPreco = document.querySelector('.btc-preco');

  async function fetchBtc() {
    try {
      const promisse = await fetch(url);
      const btc = await promisse.json();
      btcPreco.innerText = `${btc.BRL.symbol} ${(200 / btc.BRL.buy).toFixed(6)}`;
    } catch (erro) {
      console.log(erro);
    }
  }
  if (url && btcPreco){
    fetchBtc();
  }
}
