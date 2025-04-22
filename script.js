document.getElementById('gasto-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

const descricao = document.getElementById('descricao').value;
const valor = parseFloat(document.getElementById('valor').value);
const categoria = document.getElementById('categoria').value;