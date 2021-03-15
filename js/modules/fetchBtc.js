export default function fetchBtc(linkUrl, target) {
  const url = linkUrl;
  const btcPreco = document.querySelector(target);

  async function initfetchBtc() {
    try {
      const promisse = await fetch(url);
      const btc = await promisse.json();
      btcPreco.innerText = `${btc.BRL.symbol} ${(200 / btc.BRL.buy).toFixed(6)}`;
    } catch (erro) {
      console.log(erro);
    }
  }
  if (url && btcPreco) {
    initfetchBtc();
  }
}
