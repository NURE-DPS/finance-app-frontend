import { ModalControl } from '../../../interfaces/Interfaces'
import { Modal } from '../../UI/Modal'

export const DeleteTransModal = ({ open, setOpen }: ModalControl) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div>Delete Transaction</div>
    </Modal>
  )
}
