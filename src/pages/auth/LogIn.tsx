import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/UI/Button'
import { LuEye, LuEyeOff } from 'react-icons/lu'
import { useState } from 'react'
import { useSignUp } from '../../hooks/useSignUp'

type FormValues = {
  name: string
  email: string
  password: string
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const { handleSignUp } = useSignUp()

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
    <div className="w-screen h-full min-h-full box-border flex items-center justify-center bg-bg">
      <div className="w-[480px]">
        <h1 className="text-display text-text-primary font-bold mb-6 font-montserrat text-center">
          Finance App
        </h1>

        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="bg-elevation-1 p-8 rounded-2xl shadow-md space-y-6"
        >
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
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button text="Log In" disabledCondition={!isValid} />
          {/* затычка для будущей кнопки авторизации */}
          <div className="text-lato text-text-primary text-center">
            Already have an account?
          </div>
        </form>

        {/* затычка для простоты перемещения между страницами, потом - убрать */}
        <Link
          to="/"
          className="bg-button-bg hover:bg-button-hover cursor-pointer text-button-text font-lato p-3 rounded-[12px] transition text-body"
        >
          Log In
        </Link>
      </div>
    </div>
  )
}
