interface ButtonProps {
  onClick: () => void
  text: string
  defcolor?: boolean
  fullwidth?: boolean
  defpadding?: boolean
  margtop?: boolean
  isDisabled?: boolean
  disabledCondition?: boolean
  deftype?: boolean //если потом будет необходимо, можно будет вообще убрать этот пропс
  //он нужен только чтобы консоль не ругалась когда нажимаю кнопку Save(пока что только для создания и редактирования кошелька),
  //потому что если не задать type для кнопки в форме, то он автоматически считается Submit и его вручную нужно ставить button
  //я бы мог для всех кнопок тупо поставить тип button, но я решил не перегружать их
  //также я мог просто в WalletModal вынести кнопку за форму, но как я понимаю в будущем кнопка нужна будет именно в форме
}

export const Button = ({
  onClick,
  text,
  defcolor = true,
  fullwidth = true,
  defpadding = true,
  margtop = false,
  isDisabled = false,
  disabledCondition = false,
  deftype = false,
}: ButtonProps) => {
  const baseClasses = 'text-surface rounded-[12px] transition font-lato '

  const widthClass = fullwidth ? 'w-full' : ''
  const pClass = defpadding ? 'p-2' : 'px-4 py-2 mr-4'

  const mtClass = margtop ? 'mt-4' : ''

  const disabled = isDisabled && disabledCondition

  //нужен цвет для наведения на кнопку, а то он такой же как выключенная кнопка
  // также я сделал временный цвет при наведении на красную кнопку

  const variantClass = disabled
    ? 'bg-disabled text-color cursor-not-allowed'
    : defcolor
    ? 'bg-color hover:bg-disabled cursor-pointer'
    : 'bg-error hover:bg-red-300 cursor-pointer'

  const combinedClasses = `${baseClasses} ${variantClass} ${widthClass} ${pClass} ${mtClass}`

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      type={deftype ? 'button' : undefined}
    >
      {text}
    </button>
  )
}
