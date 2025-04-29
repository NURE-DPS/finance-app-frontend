import { decimalInputHandler, limitedTextHandler } from '../utils/inputHandlers'
import { LuX } from 'react-icons/lu'

interface WalletModalProps {
  title: string
  name: string
  setName: (value: string) => void
  currency: string
  setCurrency: (value: string) => void
  balance: string
  setBalance: (value: string) => void
  onClose: () => void
  onSave: () => void
}

export const WalletModal = ({
  title,
  name,
  setName,
  currency,
  setCurrency,
  balance,
  setBalance,
  onClose,
  onSave,
}: WalletModalProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold font-montserrat">{title}</h2>
        <button
          onClick={onClose}
          className="text-color hover:text-disabled text-2xl leading-none cursor-pointer"
        >
          <LuX />
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-subtext font-lato">
            Name {name.trim() === '' && <span className="text-error">*</span>}
          </label>
          <input
            type="text"
            value={name}
            onChange={limitedTextHandler(setName, 100)}
            className="w-full p-2 border border-border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-subtext font-lato">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-border rounded mt-1 bg-surface transition cursor-pointer font-montserrat"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-subtext font-lato">
            Balance{' '}
            {balance.trim() === '' && <span className="text-error">*</span>}
          </label>
          <div className="relative">
            <input
              type="text"
              value={balance}
              onChange={decimalInputHandler(setBalance)}
              className="w-full p-2 border border-border rounded mt-1 pr-16 font-lato"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-subtext font-montserrat">
              {currency}
            </span>
          </div>
        </div>
        {/* нужен цвет для наведения на кнопку, а то он такой же как выключенная кнопка */}
        <button
          type="button"
          onClick={onSave}
          disabled={name.trim() === '' || balance.trim() === ''}
          className={`w-full p-2 rounded-[12px] mt-4 transition font-lato
                ${
                  name.trim() === '' || balance.trim() === ''
                    ? 'bg-disabled text-color cursor-not-allowed'
                    : 'bg-color text-surface hover:bg-gray-400 cursor-pointer'
                }
              `}
        >
          Save
        </button>
      </form>
    </div>
  )
}
