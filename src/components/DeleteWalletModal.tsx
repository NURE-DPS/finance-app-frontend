import { DeleteWalletModalProps } from '../interfaces/ChangeWalletModalProps'

export const DeleteWalletModal = ({
  onClose,
  //defid,
  defname,
  defcurr,
  defbalance,
}: DeleteWalletModalProps) => {
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
        <button
          onClick={handleDelete}
          className="w-full bg-error rounded-[12px] p-2 hover:bg-red-300 transition cursor-pointer"
        >
          Yes
        </button>
        <button
          onClick={onClose}
          className="w-full bg-color rounded-[12px] p-2 hover:bg-disabled transition cursor-pointer"
        >
          No
        </button>
      </div>
    </div>
  )
}
