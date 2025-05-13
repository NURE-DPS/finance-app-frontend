//import { deleteTransaction } from '../../api/transactionApi'
import { ModalControl } from '../../../interfaces/Interfaces'
import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'

type DeleteTransModalProps = ModalControl & { id: string }

export const DeleteTransModal = ({
  open,
  setOpen,
  id,
}: DeleteTransModalProps) => {
  const handleDelete = (id: string) => {
    console.log('Delete transaction: ', { id })
    //const deletedTransaction = deleteTransaction({ id })
    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="font-montserrat text-text-primary text-h3">
        Are you sure you want to delete this transaction?
      </div>
      <div className="grid grid-cols-2 text-surface mt-8 gap-4">
        <Button onClick={() => handleDelete(id)} text="Yes" defcolor={false} />
        <Button onClick={() => setOpen(false)} text="No" />
      </div>
    </Modal>
  )
}
