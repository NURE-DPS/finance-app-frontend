import * as motion from 'motion/react-client'

interface ButtonProps {
  onClick?: () => void
  text: string
  defcolor?: boolean
  fullwidth?: boolean
  defpadding?: boolean
  margtop?: boolean
  disabledCondition?: boolean
  deftype?: boolean //если потом будет необходимо, можно будет вообще убрать этот пропс
  //он нужен только чтобы консоль не ругалась когда нажимаю кнопку Save(пока что только для создания и редактирования кошелька),
  //потому что если не задать type для кнопки в форме, то он автоматически считается Submit и его вручную нужно ставить button
  //я бы мог для всех кнопок тупо поставить тип button, но я решил не перегружать их
}

export const Button = ({
  onClick,
  text,
  defcolor = true,
  fullwidth = true,
  defpadding = true,
  margtop = false,
  disabledCondition = false,
  deftype = false,
}: ButtonProps) => {
  const baseClasses = 'text-button-text rounded-[12px] transition font-lato '

  const widthClass = fullwidth ? 'w-full' : ''
  const pClass = defpadding ? 'p-2' : 'px-4 py-2 mr-4'

  const mtClass = margtop ? 'mt-4' : ''

  const disabled = disabledCondition

  const variantClass = disabled
    ? 'bg-button-disabled !text-text-disabled cursor-not-allowed'
    : defcolor
      ? 'bg-button-bg hover:bg-button-hover cursor-pointer'
      : 'bg-error hover:bg-red-300 cursor-pointer'

  const combinedClasses = `${baseClasses} ${variantClass} ${widthClass} ${pClass} ${mtClass}`

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      type={deftype ? 'button' : undefined}
    >
      {text}
    </motion.button>
  )
}
