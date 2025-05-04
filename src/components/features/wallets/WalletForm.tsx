import { useForm } from 'react-hook-form'
import { Button } from '../../UI/Button'

type FormValues = {
  name: string
  currency: string
  balance: string
}

interface WalletFormProps {
  onSubmit: (data: { name: string; currency: string; balance: string }) => void
  defaultValues?: {
    name: string
    currency: string
    balance: string
  }
  setOpen: (value: boolean) => void
  showCancel?: boolean
}

export const WalletForm = ({
  onSubmit,
  defaultValues,
  setOpen,
  showCancel,
}: WalletFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      name: defaultValues?.name || '',
      currency: defaultValues?.currency || 'EUR',
      balance: defaultValues?.balance || '',
    },
  })

  const currency = watch('currency')

  const nameValue = watch('name')
  const balanceValue = watch('balance')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary font-lato">
          Name {!nameValue && <span className="text-error">*</span>}
        </label>
        <input
          {...register('name', {
            required: true,
            maxLength: {
              value: 100,
              message: 'Max length is 100 characters',
            },
          })}
          className=" text-text-primary w-full p-2 border-2 border-border rounded mt-1"
          placeholder="Enter name"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary font-lato">
          Currency
        </label>
        <select
          {...register('currency')}
          className="w-full p-2 border-2 border-border rounded mt-1 bg-elevation-2 transition cursor-pointer font-montserrat text-text-primary"
        >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary font-lato">
          Balance {!balanceValue && <span className="text-error">*</span>}
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="0.00"
            {...register('balance', {
              required: true,
              maxLength: {
                value: 12,
                message: 'Max length is 12 characters',
              },
              validate: {
                isNumeric: (value) =>
                  /^-?\d*[.,]?\d*$/.test(value) ||
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
            className="text-text-primary w-full p-2 border-2 border-border rounded mt-1 pr-16 font-lato"
          />
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-secondary font-montserrat">
            {currency}
          </span>
        </div>
        {errors.balance && (
          <p className="text-error text-sm mt-1">{errors.balance.message}</p>
        )}
      </div>
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
