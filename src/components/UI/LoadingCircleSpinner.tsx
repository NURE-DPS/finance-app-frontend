import { motion } from 'motion/react'

export const LoadingCircleSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        className="w-[50px] h-[50px] rounded-full border-4 border-solid border-border border-t-accent "
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}
