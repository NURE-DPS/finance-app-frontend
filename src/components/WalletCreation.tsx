import { useState } from 'react'
import { decimalInputHandler, limitedTextHandler } from '../utils/InputHandlers'
import { LuCircleX /*LuX*/ } from 'react-icons/lu' //2 options to choose from, I prefer LuCircleX
import { createWallet } from '../api/walletsApi'

export default function WalletCreation({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState('')
  const [currency, setCurrency] = useState('EUR')
  const [balance, setBalance] = useState('0.00')

  //передать добро
  const handleSave = () => {
    const createdWallet = createWallet({ name, currency, balance })
    onClose()
  }
  return (
    <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Wallet</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-500 text-2xl leading-none cursor-pointer"
        >
          <LuCircleX />
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
            onChange={limitedTextHandler(setName, 100)}
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
            className="w-full p-2 border border-gray-300 rounded mt-1 bg-surface transition cursor-pointer"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Balance{' '}
            {balance.trim() === '' && <span className="text-red-500">*</span>}
          </label>
          <div className="relative">
            <input
              type="text"
              value={balance}
              onChange={decimalInputHandler(setBalance)} // to disable removing zeros: decimalInputHandler(setBalance, false)
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
          className={` w-full p-2 rounded-[12px] mt-4 transition cursor-pointer
    ${
      name.trim() === '' || balance.trim() === ''
        ? 'bg-gray-400 text-white cursor-not-allowed'
        : 'bg-white text-surface hover:bg-gray-300'
    }
  `}
        >
          Save
        </button>
      </form>
    </div>
  )
}
