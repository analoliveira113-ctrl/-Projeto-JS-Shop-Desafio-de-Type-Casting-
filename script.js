function calcular() {
  let inputPreco = document.getElementById("preco").value;
  let inputQtd = document.getElementById("quantidade").value;
  let inputCupom = document.getElementById("cupom").value;

  // Converte strings do formulário em números via parseFloat() e parseInt()
  let preco = parseFloat(inputPreco); // String → Number (decimal) 
  let quantidade = parseInt(inputQtd); // String → Number (inteiro) 
  let cupom = (inputCupom === "true");

  // VALIDAÇÃO: isNaN() detecta se a conversão falhou (sem números válidos)
  if (isNaN(preco) || isNaN(quantidade)) {
    console.log("Valores inválidos!");
    document.getElementById("resultado").textContent =
      "⚠️ Insira valores válidos!";
    return;
  }

  // OPERAÇÃO: Multiplica números convertidos
  let subtotal = preco * quantidade;
  let total = cupom ? subtotal * 0.9 : subtotal;

  let totalFormatado = "R$ " + total.toFixed(2);

  // NO CONSOLE
  console.log("Preço:", preco);
  console.log("Quantidade:", quantidade);
  console.log("Subtotal:", subtotal);
  console.log("Cupom aplicado:", cupom);
  console.log("Total final:", totalFormatado);

  document.getElementById("resultado").textContent =
    "Total da compra: " + totalFormatado;
}