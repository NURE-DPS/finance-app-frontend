import * as motion from 'motion/react-client'

import type { ElementType } from 'react'

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
    'text-text-primary hover:text-text-disabled text-h2 transition cursor-pointer'
  const paddingClass = isPadding ? 'p-2' : ''
  const combinedClasses = `${baseClasses} ${paddingClass}`

  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
      className={combinedClasses}
    >
      <Icon />
    </motion.button>
  )
}
