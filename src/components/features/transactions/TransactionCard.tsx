import { LuArrowLeftRight, LuEllipsisVertical } from 'react-icons/lu'
import { IconButton } from '../../UI/IconButton'
import { useEffect, useRef, useState } from 'react'
import * as motion from 'motion/react-client'
import { EditTransModal } from './EditTransModal'
import { DeleteTransModal } from './DeleteTransModal'
import { TransactionTypeNumberId } from '../../../interfaces/Interfaces'


export const TransactionCard = ({
  id,
  walletId,
  amount,
  type,
  description,
  //categoryId,
  createdAt,
  currency,
}: TransactionTypeNumberId) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isEditTransModalOpen, setIsEditTransModalOpen] = useState(false)
  const [isDeleteTransModalOpen, setIsDeleteTransModalOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const getAmountStyle = () => {
    switch (type) {
      case 'EXPENSE':
        return 'text-error'
      case 'INCOME':
        return 'text-success'
      default:
        return 'text-text-primary'
    }
  }
  const getSign = () => {
    switch (type) {
      case 'EXPENSE':
        return '-'
      case 'INCOME':
        return '+'
      default:
        return ''
    }
  }

  //реализация того, чтобы менюшка закрывалась, если кликнул вне нее
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full bg-surface rounded-2xl shadow-md p-4 flex items-center justify-between mb-4"
    >
      <div className="flex items-center">
        <LuArrowLeftRight className="text-text-secondary w-6 h-6 mr-4" />
        <div>
          <p className={`text-h2 font-bold font-lato ${getAmountStyle()}`}>
            {getSign()}
            {amount} {currency}
          </p>
          <p className="text-text-secondary text-body font-montserrat">
            {type.charAt(0) + type.slice(1).toLowerCase()}
          </p>
        </div>
      </div>
      <div className="relative" ref={menuRef}>
        <IconButton onClick={toggleMenu} Icon={LuEllipsisVertical} />
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-24 bg-elevation-1 shadow-lg rounded-xl border-border border-2 z-10 p-2">
            <motion.button
              className="w-full text-left p-2 text-text-secondary rounded-[12px] transition font-lato bg-elevation-1 hover:bg-elevation-2 hover:text-text-primary cursor-pointer"
              onClick={() => setIsEditTransModalOpen(true)}
              whileTap={{ scale: 0.8 }}
            >
              Edit
            </motion.button>
            <motion.button
              className="w-full text-left p-2 text-text-secondary rounded-[12px] transition font-lato bg-elevation-1 hover:bg-elevation-2 hover:text-text-primary cursor-pointer"
              onClick={() => setIsDeleteTransModalOpen(true)}
              whileTap={{ scale: 0.8 }}
            >
              Delete
            </motion.button>
          </div>
        )}
        <EditTransModal
          open={isEditTransModalOpen}
          setOpen={setIsEditTransModalOpen}
          id={id}
          walletId={walletId}
          type={type}
          amount={amount.toString()}
          description={description}
          currency={currency}
          //category={category}
          createdAt={createdAt}
        />
        <DeleteTransModal
          open={isDeleteTransModalOpen}
          setOpen={setIsDeleteTransModalOpen}
          id={id}
        />
      </div>
    </motion.div>
  )
}
