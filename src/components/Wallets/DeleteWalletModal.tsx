import { ChangeWalletModalProps } from '../../interfaces/ChangeWalletModalProps'
import { Button } from '../Button'

export const DeleteWalletModal = ({
  onClose,
  //defid,
  defname,
  defcurr,
  defbalance,
}: ChangeWalletModalProps) => {
  const handleDelete = () => {
    console.log({ defname, defcurr, defbalance })
    //const deletedWallet = deleteWallet({ defid })
    onClose()
  }

  return (
    <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8 font-lato">
      <div className=" text-h3">
        Are you sure you want to delete this wallet?
        <p className="text-h2 font-bold mt-8">
          <span>{defname}: </span>
          <span>
            {defbalance} {defcurr}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 text-surface mt-8 gap-4">
        <Button onClick={handleDelete} text="Yes" defcolor={false} />
        <Button onClick={onClose} text="No" />
      </div>
    </div>
  )
}
