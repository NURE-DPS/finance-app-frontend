import {
  decimalInputHandler,
  limitedTextHandler,
} from '../../../utils/inputHandlers'
import { LuX } from 'react-icons/lu'
import { Button } from '../../UI/Button'
import { IconButton } from '../../UI/IconButton'
import { Modal } from '../../UI/Modal'

// interface WalletModalProps {
//   title: string
//   name: string
//   setName: (value: string) => void
//   currency: string
//   setCurrency: (value: string) => void
//   balance: string
//   setBalance: (value: string) => void
//   onClose: () => void
//   onSave: () => void
// }

export const BaseWalletModal = ({
  title,
  name,
  setName,
  currency,
  setCurrency,
  balance,
  setBalance,
  open,
  setOpen,
  onSave,
  showCancel = false,
}) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-text-primary text-lg font-semibold font-montserrat">
          {title}
        </h2>
        <IconButton onClick={() => setOpen(false)} Icon={LuX} />
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-text-secondary font-lato">
            Name {name.trim() === '' && <span className="text-error">*</span>}
          </label>
          <input
            type="text"
            value={name}
            onChange={limitedTextHandler(setName, 100)}
            className=" text-text-primary w-full p-2 border border-border rounded mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-text-secondary font-lato">
            Currency
          </label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border border-border rounded mt-1 bg-elevation-2 transition cursor-pointer font-montserrat text-text-primary"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="UAH">UAH</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-text-secondary font-lato">
            Balance{' '}
            {balance.trim() === '' && <span className="text-error">*</span>}
          </label>
          <div className="relative">
            <input
              type="text"
              value={balance}
              onChange={decimalInputHandler(setBalance)}
              className="text-text-primary w-full p-2 border border-border rounded mt-1 pr-16 font-lato"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary font-montserrat">
              {currency}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          {showCancel && (
            <Button
              onClick={() => setOpen(false)}
              text="Cancel"
              defcolor={false}
              deftype
            />
          )}
          <Button
            onClick={onSave}
            text="Save"
            isDisabled={true}
            disabledCondition={name.trim() === '' || balance.trim() === ''}
            deftype
          />
        </div>
      </form>
    </Modal>
  )
}
