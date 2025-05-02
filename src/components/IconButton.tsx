import { ElementType } from 'react'

interface IconButtonProps {
  onClick: () => void
  Icon: ElementType
  isPadding?: boolean
}

export const IconButton = ({
  onClick,
  Icon,
  isPadding = false,
}: IconButtonProps) => {
  const baseClasses =
    'text-color hover:text-disabled text-h2 transition cursor-pointer'
  const paddingClass = isPadding ? 'p-2' : ''
  const combinedClasses = `${baseClasses} ${paddingClass}`

  return (
    <button onClick={onClick} className={combinedClasses}>
      <Icon />
    </button>
  )
}
