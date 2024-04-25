const digit  = document.getElementById('digit')

function addInputTodigi(input) {
  const digiValue = digit.value
  digit.value = digiValue + input
}

function calculate() {
  if (digit.value === '') return

  const result = eval(digit.value)
  digit.value = result
}

function resetdigiValue() {
  digit.value = ""
}

function removeLastInput() {
  digit.value = digit.value.slice(0, -1)
}