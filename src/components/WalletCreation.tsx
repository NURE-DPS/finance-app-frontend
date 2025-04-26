import { useState } from 'react'

export default function WalletCreation({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [balance, setBalance] = useState('0.00')

  const handleSave = () => {
    console.log('Wallet Added:', { name, currency, balance })
    onClose()
  }

  const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    // Заменяем запятую на точку
    value = value.replace(',', '.')

    // Если введена только точка, делаем "0."
    if (value === '.') {
      value = '0.'
    }

    // Проверяем: только цифры, максимум одна точка
    if (/^\d*\.?\d*$/.test(value)) {
      if (value.includes('.')) {
        // Если есть точка
        const [, decimalPart] = value.split('.')
        // Ограничиваем дробную часть двумя знаками
        if (decimalPart.length > 2) {
          return
        }
      }
      //ограничиваем число 12 символами
      if (value.length > 12) {
        return
      }
      setBalance(value)
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Ограничиваем длину 100 символами
    if (value.length <= 100) {
      setName(value)
    }
  }

  const isBalanceEmpty = () => {
    const numericBalance = parseFloat(balance)
    return balance.trim() === '' || numericBalance === 0
  }

  return (
    <div className="bg-black/70 w-[600px] p-6 rounded-2xl shadow-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Wallet</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-500 text-2xl leading-none"
        >
          &times;
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Name {name.trim() === '' && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-black/70" /*вот тут - я либо не ставил цвет, либо поставил такой же как в остальной части */
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Balance{' '}
            {isBalanceEmpty() && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <input
              type="text"
              value={balance}
              onChange={handleBalanceChange}
              className="w-full p-2 border border-gray-300 rounded mt-1 pr-16"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              {currency}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          disabled={name.trim() === '' || balance.trim() === ''}
          className={`w-full p-2 rounded-[12px] mt-4 transition
    ${
      name.trim() === '' || isBalanceEmpty()
        ? 'bg-gray-400 text-white cursor-not-allowed'
        : 'bg-white text-black hover:bg-gray-300'
    }
  `}
        >
          Save
        </button>
      </form>
    </div>
  )
}
