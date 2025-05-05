import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { Button } from '../../UI/Button'
import { FormValues } from '../../../interfaces/Interfaces'

type SignUpFormProps = {
  onSubmit: (data: FormValues) => void
  showNameField?: boolean
  buttonText?: string
  bottomText?: string
  onBottomTextClick: () => void
}

export const SignUpForm = ({
  onSubmit,
  showNameField = true,
  buttonText = 'Sign Up',
  bottomText = 'Already have an account?',
  onBottomTextClick,
}: SignUpFormProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  })

  const nameValue = watch('name')
  const emailValue = watch('email')
  const passwordValue = watch('password')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-elevation-1 p-8 rounded-2xl shadow-md space-y-6"
    >
      {showNameField && (
        <div>
          <label className="block text-sm font-medium font-lato text-text-secondary mb-1">
            Name {!nameValue && <span className="text-error">*</span>}
          </label>
          <input
            {...register('name', {
              required: true,
              minLength: {
                value: 5,
                message: 'Minimum 5 characters',
              },
              maxLength: {
                value: 30,
                message: 'Maximum 30 characters',
              },
            })}
            className="w-full p-2 border-2 border-border rounded text-text-primary"
            placeholder="Enter name"
          />
          {errors.name && (
            <p className="text-error text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium font-lato text-text-secondary mb-1">
          Email {!emailValue && <span className="text-error">*</span>}
        </label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
            validate: {
              onlyLatin: (value) =>
                /^[\x00-\x7F]+$/.test(value) || 'Only Latin characters allowed',
            },
          })}
          className="w-full p-2 border-2 border-border rounded text-text-primary"
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="text-error text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium font-lato text-text-secondary mb-1">
          Password {!passwordValue && <span className="text-error">*</span>}
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 5,
                message: 'Minimum 5 characters',
              },
              maxLength: {
                value: 30,
                message: 'Maximum 30 characters',
              },
              validate: {
                noSpaces: (value) =>
                  !/\s/.test(value) || 'Password must not contain spaces',
                onlyLatin: (value) =>
                  /^[\x00-\x7F]+$/.test(value) ||
                  'Only Latin characters allowed',
              },
            })}
            className="w-full p-2 border-2 border-border rounded text-text-primary"
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-text-secondary hover:text-text-primary transition"
          >
            {showPassword ? <LuEye size={24} /> : <LuEyeOff size={24} />}
          </button>
        </div>

        {errors.password && (
          <p className="text-error text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <Button text={buttonText} disabledCondition={!isValid} />
      <div
        className="text-lato text-text-primary text-center cursor-pointer hover:underline hover:text-text-secondary"
        onClick={onBottomTextClick}
      >
        {bottomText}
      </div>
    </form>
  )
}
