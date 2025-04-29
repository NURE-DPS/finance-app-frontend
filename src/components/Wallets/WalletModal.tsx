import {
  decimalInputHandler,
  limitedTextHandler,
} from '../../utils/inputHandlers'
import { LuX } from 'react-icons/lu'
import { Button } from '../Button'
import { IconButton } from '../IconButton'

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
        <IconButton onClick={onClose} Icon={LuX} />
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
        <Button
          onClick={onSave}
          text="Save"
          margtop={true}
          isDisabled={true}
          disabledCondition={name.trim() === '' || balance.trim() === ''}
          deftype={true}
        />
      </form>
    </div>
  )
}
