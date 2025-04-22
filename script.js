document.getElementById('gasto-form').addEventListener('submit', function(event) {
    event.preventDefault();
});

const descricao = document.getElementById('descricao').value;
const valor = parseFloat(document.getElementById('valor').value);
const categoria = document.getElementById('categoria').value;

const li = document.createElement('li');
li.textContent = `${descricao}: R$ ${valor.toFixed(2)} (${categoria})`;
const listaGastos = document.getElementById('lista-gastos');
listaGastos.appendChild(li);

const totalGastos = document.getElementById('total-gastos');
const total = parseFloat(totalGastos.textContent) + valor;
totalGastos.textContent = total.toFixed(2);