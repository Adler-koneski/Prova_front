document.getElementById('gasto-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const descricaoInput = document.getElementById('descricao');
    const valorInput = document.getElementById('valor');
    const categoriaInput = document.getElementById('categoria');

    const descricao = descricaoInput.value.trim(); 
    const valor = parseFloat(valorInput.value);
    const categoria = categoriaInput.value.trim();

    if (!descricao || isNaN(valor)) {
        alert("Por favor, preencha a descrição e um valor válido.");
        return; // Impede a adição do gasto se a validação falhar
    }

  
    const li = document.createElement('li');
    li.textContent = `${descricao}: R$ ${valor.toFixed(2)} (${categoria})`;

    if (valor > 100) {
        li.classList.add('high');
    }

    
    const listaGastos = document.getElementById('lista-gastos');
    listaGastos.appendChild(li);

   
    const totalGastosElement = document.getElementById('total-gastos');
    const totalAtual = parseFloat(totalGastosElement.textContent);
    const novoTotal = totalAtual + valor;
    totalGastosElement.textContent = novoTotal.toFixed(2);

    
    document.getElementById('gasto-form').reset();
});