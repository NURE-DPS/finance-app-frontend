import { Button } from '../../UI/Button'
import { Modal } from '../../UI/Modal'

export const DeleteWalletModal = ({
  onClose,
  //defid,
  defname,
  defcurr,
  defbalance,
  open,
  setOpen,
}) => {
  const handleDelete = () => {
    console.log({ defname, defcurr, defbalance })
    //const deletedWallet = deleteWallet({ defid })
    onClose()
  }

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="font-montserrat text-text-primary text-h3">
        Are you sure you want to delete this wallet?
        <p className="text-h2 font-lato font-bold mt-8">
          <span>{defname}: </span>
          <span>
            {defbalance} {defcurr}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 text-surface mt-8 gap-4">
        <Button onClick={handleDelete} text="Yes" defcolor={false} />
        <Button onClick={() => setOpen(false)} text="No" />
      </div>
    </Modal>
  )
}
