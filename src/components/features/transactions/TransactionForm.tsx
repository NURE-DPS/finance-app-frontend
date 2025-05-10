import { useForm, Controller } from 'react-hook-form'
import { Button } from '../../UI/Button'
import { Transaction, TransactionType } from '../../../interfaces/Interfaces'
import { TransactionCategory } from '../../../stores/transactions'
import * as motion from 'motion/react-client'
import { useWallet } from '../../../hooks/UseWallet'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../../../styles/datepicker-overrides.css'
import { CustomDatePickerInput } from './CustomDatePickerInput'

interface TransFormProps {
  setOpen: (value: boolean) => void
  onSubmit: (data: Transaction) => void
  defaultValues?: Partial<Transaction>
  showCancel?: boolean
}

export const TransactionForm = ({
  setOpen,
  onSubmit,
  defaultValues,
  showCancel,
}: TransFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
  } = useForm<Transaction>({
    mode: 'onChange',
    //вроде нормально сделал тут дату, но вообще хз будет ли оно нормально работать при связи с бэкэндом
    // (тут кстати должна быть по дефолту в дате Date.now() вместо new Date(), я хз как оно без нее работает)
    defaultValues: {
      type: defaultValues?.type || 'expense',
      amount: defaultValues?.amount || '',
      description: defaultValues?.description || '',
      category: defaultValues?.category || '',
      date: defaultValues?.date ? new Date(defaultValues.date) : new Date(),
    },
  })

  const { selectedWallet } = useWallet()

  const amountValue = watch('amount')
  const categoryValue = watch('category')
  const types: TransactionType[] = ['expense', 'income', 'transfer']
  const categories: TransactionCategory[] = [
    'food',
    'travel',
    'clothes',
    'entertainment',
    'other',
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </motion.button>
            ))}
          </div>
        )}
      />

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
              {selectedWallet?.currency}
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

      <div>
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
      </div>

      {/* вот эта часть - это просто похороны.... */}
      <Controller
        control={control}
        name="date"
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
