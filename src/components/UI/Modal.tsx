import { Dialog, DialogPanel } from '@headlessui/react'
import { AnimatePresence, motion } from 'motion/react'

interface ModalProps {
  children: any
  open: boolean
  setOpen: (value: boolean) => void
}

export const Modal = ({ children, open, setOpen }: ModalProps) => {
  return (
    <>
      <AnimatePresence>
        {Boolean(open) && (
          <Dialog
            static
            open={open}
            onClose={() => setOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
              }}
              whileTap={{ scale: 0.9 }}
              className="fixed inset-0 bg-black/30"
            />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                as={motion.div}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                //попробовать bg-elevation-1, как по мне так смотрится лучше
                className="bg-elevation-2 w-[600px] p-6 rounded-2xl shadow-lg"
              >
                {children}
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  )
}
