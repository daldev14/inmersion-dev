const $amount = document.querySelector('#amount')
const $convertedAmount = document.querySelector('#convertedAmount')
const $fromCurrency = document.querySelector('#fromCurrency')
const $toCurrency = document.querySelector('#toCurrency')
const exchangeRatesToArray = []

const EXCHANGE_RATES = {
  BRL: {
    currency: 'Real brasilero',
    abr: 'BRL',
    symbol: 'R$',
    rates: {
      EUR: 0.19,
      HNL: 4.93,
      USD: 0.2,
    },
  },
  EUR: {
    currency: 'Euro',
    abr: 'EUR',
    symbol: '€',
    rates: {
      BRL: 5.35,
      HNL: 26.37,
      USD: 1.07,
    },
  },
  HNL: {
    currency: 'Lempira',
    abr: 'HNL',
    symbol: 'L',
    rates: {
      BRL: 0.2,
      EUR: 0.038,
      USD: 0.04,
    },
  },
  USD: {
    currency: 'Dólar estadounidense',
    abr: 'USD',
    symbol: '$',
    rates: {
      BRL: 5.01,
      EUR: 0.94,
      HNL: 24.72,
    },
  },
}

let currentCurrency = EXCHANGE_RATES.HNL.abr
let destinationCurrency = EXCHANGE_RATES.BRL.abr

function convert({ amount, currentCoint, cointToConvert }) {
  if (currentCoint === cointToConvert) return amount
  const rate = EXCHANGE_RATES[currentCoint].rates[cointToConvert]
  const total = (amount * rate).toFixed(2)
  return total
}

function showConvertedCoin({ convertedCoin, input }) {
  input.value = convertedCoin
}

function getCoinToConvert(input) {
  const selectedOption = input.options[input.selectedIndex]
  const selectedValue = selectedOption.value
  return selectedValue
}

function convertCoin(event) {
  const id = event.target.id
  let currentAmount = null
  if (id === 'amount' || id === 'fromCurrency') currentAmount = $amount.value
  else currentAmount = $convertedAmount.value

  if (currentAmount === '') {
    $amount.value = ''
    $convertedAmount.value = ''
    return
  }

  const currentCoin = getCoinToConvert($fromCurrency)
  const coinToConvert = getCoinToConvert($toCurrency)

  const options = {
    amount: currentAmount,
    currentCoint:
      id === 'amount' || id === 'fromCurrency' ? currentCoin : coinToConvert,
    cointToConvert:
      id === 'amount' || id === 'fromCurrency' ? coinToConvert : currentCoin,
  }

  const total = convert(options)
  const options2 = {
    convertedCoin: total,
    input:
      id === 'amount' || id === 'fromCurrency' ? $convertedAmount : $amount,
  }
  showConvertedCoin(options2)
}

$amount.addEventListener('input', convertCoin)
$convertedAmount.addEventListener('input', convertCoin)
$fromCurrency.addEventListener('change', convertCoin)
$toCurrency.addEventListener('change', convertCoin)
