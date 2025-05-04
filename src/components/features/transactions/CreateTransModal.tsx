import { LuX } from 'react-icons/lu'
import { IconButton } from '../../UI/IconButton'
import { Modal } from '../../UI/Modal'
import { OpenModal } from '../../../interfaces/Interfaces'

export const CreateTransModal = ({ open, setOpen }: OpenModal) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="flex justify-between items-center mb-4 text-text-primary">
        <h2 className="text-h3 text-lato font-bold mb-4">Create Trans</h2>
        <IconButton onClick={() => setOpen(false)} Icon={LuX} />
      </div>
      <p className="text-text-primary">Transaction creation</p>
    </Modal>
  )
}
