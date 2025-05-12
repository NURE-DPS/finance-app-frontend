//import { deleteTransaction } from '../../api/transactionApi'
import { ModalControl } from '../../../interfaces/Interfaces'
import { Modal } from '../../UI/Modal'

type DeleteTransModalProps = ModalControl & { id: string }

export const DeleteTransModal = ({ open, setOpen }: DeleteTransModalProps) => {
  // const handleDelete = (id: string) => {
  //   console.log('Delete transaction: ', { id })
  //   //const deletedTransaction = deleteTransaction({ id })
  //   setOpen(false)
  // }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div>Delete Transaction</div>
    </Modal>
  )
}
