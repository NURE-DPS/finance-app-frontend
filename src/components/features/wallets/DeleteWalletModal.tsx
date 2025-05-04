import { useWallet } from '../../../hooks/UseWallet'
import { OpenModal } from '../../../interfaces/Interfaces'
//import { deleteWallet } from '../../api/walletsApi'
import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'

export const DeleteWalletModal = ({ open, setOpen }: OpenModal) => {
  const { selectedWallet } = useWallet()

  if (!selectedWallet) return null

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
          <span>{selectedWallet.name}: </span>
          <span>
            {selectedWallet.balance} {selectedWallet.currency}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 text-surface mt-8 gap-4">
        <Button
          onClick={() => handleDelete(selectedWallet.id)}
          text="Yes"
          defcolor={false}
        />
        <Button onClick={() => setOpen(false)} text="No" />
      </div>
    </Modal>
  )
}
