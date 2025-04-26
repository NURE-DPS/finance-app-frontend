import { useState } from 'react'

export default function WalletCreation({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [balance, setBalance] = useState(0.0)

  const handleSave = () => {
    console.log('Wallet Added:', { name, currency, balance })
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
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            Balance
          </label>
          <div className="relative">
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(parseFloat(e.target.value))}
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
          className="w-full p-2 bg-white text-black rounded-[12px] mt-4 hover:bg-gray-300 transition"
        >
          Save
        </button>
      </form>
    </div>
  )
}
