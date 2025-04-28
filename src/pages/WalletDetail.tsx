import { wallets } from '../stores/wallets'
import { useNavigate, useParams } from 'react-router-dom'
import { /*useEffect,*/ useState } from 'react'
import CreateTransModal from '../components/CreateTransModal'
import { LuTrash2, LuFolderPen } from 'react-icons/lu'
import { EditWalletModal } from '../components/EditWalletModal'
import { DeleteWalletModal } from '../components/DeleteWalletModal'

export const WalletDetail = () => {
  const [isWalletEditing, setIsWalletEditing] = useState(false)
  const [isWalletDeleting, setIsWalletDeleting] = useState(false)

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  //сделал работу со строчными айди - хз правильно или нет
  const [selectedWalletId, setSelectedWalletId] = useState<string>(id || '')
  const [isTransCreation, setIsTransCreation] = useState(false)

  // Затычка на потом - Найти текущий выбранный кошелек
  const selectedWallet = wallets.find(
    (wallet) => wallet.id === selectedWalletId,
  )

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = event.target.value
    setSelectedWalletId(newId)
    navigate(`/wallets/${newId}`)
  }

  return (
    <div className="flex p-8 text-color gap-8">
      <div className="w-3/5">
        <div className="mb-6 w-full flex items-center justify-between">
          <select
            value={selectedWalletId}
            onChange={handleWalletChange}
            className="w-1/3 p-2 bg-surface text-color font-lato text-h3 rounded-lg"
          >
            {/*тут в идеале нужно написать свой компонент для выпадающего списка*/}
            {wallets.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name} - {wallet.balance} {wallet.currency}
              </option>
            ))}
          </select>
          <div className="grid grid-cols-2 mr-4">
            <button
              onClick={() => setIsWalletEditing(true)}
              className="text-color hover:text-disabled text-h2 p-2 leading-none transition cursor-pointer"
            >
              <LuFolderPen />
            </button>
            {isWalletEditing && selectedWallet && (
              <div className="fixed inset-0 flex items-start justify-center bg-background/40">
                <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8">
                  <EditWalletModal
                    onClose={() => setIsWalletEditing(false)}
                    defname={selectedWallet.name}
                    defcurr={selectedWallet.currency}
                    defbalance={selectedWallet.balance.toString()}
                  />
                  {/* сделал временный цвет при наведении на красную кнопку */}
                  <button
                    onClick={() => setIsWalletEditing(false)}
                    className="w-full p-2 rounded-[12px] mt-2 transition font-lato bg-error text-surface hover:bg-red-300 cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
            <button
              onClick={() => setIsWalletDeleting(true)}
              className="text-color hover:text-disabled text-h2 p-2 leading-none transition cursor-pointer"
            >
              <LuTrash2 />
            </button>
            {isWalletDeleting && selectedWallet && (
              <div className="fixed inset-0 flex items-start justify-center bg-background/40">
                <DeleteWalletModal
                  onClose={() => setIsWalletDeleting(false)}
                  defid={selectedWallet.id}
                  defname={selectedWallet.name}
                  defcurr={selectedWallet.currency}
                  defbalance={selectedWallet.balance.toString()}
                />
              </div>
            )}
          </div>
        </div>
        {/* затычка на потом - баланс скорее всего перемещу в правую часть */}
        {/* <div className="w-full">
          {selectedWallet ? (
            <div>
              <p className="mb-2 font-lato font bold text-h3 text-color">
                <span>
                  {selectedWallet.balance} {selectedWallet.currency}
                </span>
              </p>
            </div>
          ) : (
            <div>Wallet not found</div>
          )}
        </div> */}

        <div className="w-full flex items-center justify-between">
          <div className="text-subtext font-bold font-lato text-h3">
            Transactions
          </div>
          <button
            onClick={() => setIsTransCreation(true)}
            className="px-4 py-2 mr-4 bg-color text-surface rounded-[12px] hover:bg-disabled transition cursor-pointer font-lato"
          >
            Add Transaction
          </button>
        </div>
        {isTransCreation && (
          <div className="fixed inset-0 flex items-start justify-center bg-background/40">
            <CreateTransModal onClose={() => setIsTransCreation(false)} />
          </div>
        )}
        {/* Здесь будут транзакции */}
        <div>
          <p className="text-center text-subtext mt-10">
            No transactions yet...
          </p>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-2/5 ">{/* Пока пусто */}</div>
    </div>
  )
}
