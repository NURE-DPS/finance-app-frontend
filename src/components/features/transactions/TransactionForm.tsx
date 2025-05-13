import { useForm, Controller } from 'react-hook-form'
import { Button } from '../../UI/Button'
import {
  TransactionTypeString,
  TransactionTypeStringId,
} from '../../../interfaces/Interfaces'
import * as motion from 'motion/react-client'
import { useWallet } from '../../../hooks/wallets/UseWallet'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../../styles/datepicker-overrides.css'
import { CustomDatePickerInput } from './CustomDatePickerInput'
import useCategories from '../../../hooks/category/useCategories'

interface TransFormProps {
  setOpen: (value: boolean) => void
  onSubmit: (data: TransactionTypeStringId) => void
  defaultValues?: Partial<TransactionTypeStringId>
  showCancel?: boolean
  showWalletSelection?: boolean
}

export const TransactionForm = ({
  setOpen,
  onSubmit,
  defaultValues,
  showCancel,
  showWalletSelection = false,
}: TransFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<TransactionTypeString>({
    mode: 'onChange',
    defaultValues: {
      walletId: defaultValues?.walletId,
      type: defaultValues?.type || 'EXPENSE',
      amount: defaultValues?.amount || '',
      description: defaultValues?.description || '',
      createdAt: defaultValues?.createdAt
        ? new Date(defaultValues.createdAt)
        : new Date(),
    },
  })

  const amountValue = watch('amount')
  const types = ['EXPENSE', 'INCOME']
  // const categories: TransactionCategory[] = [
  //   'food',
  //   'travel',
  //   'clothes',
  //   'entertainment',
  //   'other',
  // ]

  
  // const { categories } = useCategories()

  const { wallets, selectedWallet, setSelectedWalletId, selectedWalletId } =
    useWallet()

  const handleFormSubmit = (data: TransactionTypeString) => {
    //При редактировании добавляем id
    if (defaultValues?.id) {
      onSubmit({ ...data, id: defaultValues.id })
    } else {
      // При создании новой транзакции id не нужен
      onSubmit(data as TransactionTypeStringId)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <Controller
        name="type"
        control={control}
        render={({ field }) => (
          <div className="flex gap-2 border-border border-2 rounded-full">
            {types.map((t) => (
              <motion.button
                whileTap={{ scale: 0.8 }}
                key={t}
                type="button"
                className={`px-4 py-2 rounded-full text-text-primary w-full cursor-pointer ${
                  field.value === t ? 'bg-elevation-1' : 'bg-elevation-2'
                }`}
                onClick={() => field.onChange(t)}
              >
                {t.charAt(0) + t.slice(1).toLowerCase()}
              </motion.button>
            ))}
          </div>
        )}
      />

      <div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-text-secondary">
            Wallet
          </label>
          <select
            {...register('walletId', {
              required: true,
              value: selectedWalletId,
              onChange: (e) => setSelectedWalletId(e.target.value),
            })}
            disabled={!showWalletSelection}
            className={`w-full p-2 border-2 rounded bg-elevation-2 transition text-text-primary
      ${showWalletSelection ? 'border-border cursor-pointer' : 'border-border/50 bg-elevation-1 cursor-not-allowed text-text-secondary'}`}
          >
            {wallets.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name} – {wallet.balance} {wallet.currency}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-text-secondary">
            Amount {!amountValue && <span className="text-error">*</span>}
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="0.00"
              {...register('amount', {
                required: true,
                maxLength: {
                  value: 12,
                  message: 'Max length is 12 characters',
                },
                validate: {
                  isNumeric: (v) =>
                    /^-?\d*[.,]?\d*$/.test(v) ||
                    'Only numeric values are allowed (use . or , as separator)',
                  maxTwoDecimals: (value) => {
                    const [, decimalPart] = value.replace(',', '.').split('.')
                    return (
                      !decimalPart ||
                      decimalPart.length <= 2 ||
                      'Only up to 2 decimal places allowed'
                    )
                  },
                },
              })}
              className="w-full p-2 border-2 border-border rounded pr-14 text-text-primary mt-1 font-lato"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {!showCancel ? selectedWallet?.currency : defaultValues?.currency}
            </span>
          </div>
          {errors.amount && (
            <p className="text-error text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-text-secondary">
            Description
          </label>
          <input
            {...register('description', {
              maxLength: {
                value: 100,
                message: 'Max length is 100 characters',
              },
            })}
            placeholder="Optional description"
            className="w-full p-2 border-2 border-border rounded text-text-primary mt-1"
          />
          {errors.description && (
            <p className="text-error text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-text-secondary">
          Category {!categoryValue && <span className="text-error">*</span>}
        </label>
        <select
          {...register('category', {
            required: true,
          })}
          className={`w-full p-2 border-2 border-border rounded bg-elevation-2 
            mt-1 transition cursor-pointer ${categoryValue ? 'text-text-primary' : 'text-text-secondary'}`}
        >
          <option value="" disabled>
            Select category
          </option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div> */}

      <Controller
        control={control}
        name="createdAt"
        rules={{ required: true }}
        render={({ field }) => (
          <div className="relative w-full">
            <label className="block text-sm font-medium text-text-secondary mb-1">
              Date
            </label>
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat="dd-MM-yyyy"
              className="w-full p-2 border-2 border-border rounded bg-elevation-2 text-text-primary cursor-pointer"
              wrapperClassName="w-full"
              customInput={<CustomDatePickerInput />}
              popperPlacement="bottom-start"
              calendarClassName="custom-datepicker"
            />
          </div>
        )}
      />

      <div className="flex justify-end gap-2 mt-4">
        {showCancel && (
          <Button
            onClick={() => setOpen(false)}
            text="Cancel"
            defcolor={false}
            deftype={true}
          />
        )}
        <Button text="Save" disabledCondition={!isValid} />
      </div>
    </form>
  )
}
