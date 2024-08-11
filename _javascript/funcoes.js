// Funções JS
function mudarIconeCab(arquivo) {
    document.getElementById('cab-icone').src = arquivo
}
function calc_total() {
    var qnt = parseInt(document.getElementById('quantidade-ped-form').value);
    tot = qnt * 1500;
    document.getElementById('preco-ped-form').value = tot;
}