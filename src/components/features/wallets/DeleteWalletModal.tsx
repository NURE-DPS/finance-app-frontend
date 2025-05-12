//import { deleteWallet } from '../../api/walletsApi'
import {
  ModalControl,
  WalletTypeNumberId,
} from '../../../interfaces/Interfaces'
import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'

type ChangeWalletProps = ModalControl & WalletTypeNumberId

export const DeleteWalletModal = ({
  open,
  setOpen,
  id,
  name,
  currency,
  balance,
}: ChangeWalletProps) => {
  const handleDelete = (id: string) => {
    console.log('Delete wallet: ', { id })
    //const deletedWallet = deleteWallet({ id })
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="font-montserrat text-text-primary text-h3">
        Are you sure you want to delete this wallet?
        <p className="text-h2 font-lato font-bold mt-8">
          <span>{name}: </span>
          <span>
            {balance} {currency}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 text-surface mt-8 gap-4">
        <Button onClick={() => handleDelete(id)} text="Yes" defcolor={false} />
        <Button onClick={() => setOpen(false)} text="No" />
      </div>
    </Modal>
  )
}
