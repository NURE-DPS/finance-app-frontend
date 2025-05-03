import { wallets } from '../../stores/wallets'
import { useNavigate, useParams } from 'react-router-dom'
import { /*useEffect,*/ useState } from 'react'
import CreateTransModal from '../../components/features/transactions/CreateTransModal'
import { LuTrash2, LuFolderPen } from 'react-icons/lu'
import { EditWalletModal } from '../../components/features/wallets/EditWalletModal'
import { DeleteWalletModal } from '../../components/features/wallets/DeleteWalletModal'
import { Button } from '../../components/UI/Button'
import { IconButton } from '../../components/UI/IconButton'

export const WalletDetail = () => {
  const [isEditWalletModalOpen, setIsEditWalletModalOpen] = useState(false)
  const [isDeleteWalletModalOpen, setIsDeleteWalletModalOpen] = useState(false)

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  //сделал работу со строчными айди - хз правильно или нет
  const [selectedWalletId, setSelectedWalletId] = useState<string>(id || '')
  const [isCreateTransactionModelOpen, setIsCreateTransactionModelOpen] =
    useState(false)

  // Затычка (Найти текущий выбранный кошелек) - потом скорее всего поменяется, когда будет
  //делаться привязка к бэкэнду
  const selectedWallet = wallets.find(
    (wallet) => wallet.id === selectedWalletId,
  )

  const handleWalletChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newId = event.target.value
    setSelectedWalletId(newId)
    await navigate(`/wallets/${newId}`)
  }

  return (
    <div className="flex text-text-primary gap-8">
      <div className="w-3/5">
        <div className="mb-6 w-full flex items-center justify-between">
          <select
            value={selectedWalletId}
            onChange={handleWalletChange}
            className="w-1/3 p-2 bg-surface text-text-primary font-lato text-h3 rounded-lg"
          >
            {/*тут в идеале нужно написать свой компонент для выпадающего списка*/}
            {wallets.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name} - {wallet.balance} {wallet.currency}
              </option>
            ))}
          </select>

          <div className="grid grid-cols-2 mr-4">
            <IconButton
              onClick={() => setIsEditWalletModalOpen(true)}
              Icon={LuFolderPen}
              isPadding={true}
            />
            <EditWalletModal
              defid={selectedWallet.id}
              defname={selectedWallet.name}
              defcurr={selectedWallet.currency}
              defbalance={selectedWallet.balance.toString()}
              open={isEditWalletModalOpen}
              setOpen={setIsEditWalletModalOpen}
            />

            <IconButton
              onClick={() => setIsDeleteWalletModalOpen(true)}
              Icon={LuTrash2}
              isPadding={true}
            />
            <DeleteWalletModal
              defid={selectedWallet.id}
              defname={selectedWallet.name}
              defcurr={selectedWallet.currency}
              defbalance={selectedWallet.balance.toString()}
              open={isDeleteWalletModalOpen}
              setOpen={setIsDeleteWalletModalOpen}
            />
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
          <div className="text-text-secondary font-bold font-montserrat text-h3">
            Transactions
          </div>
          <Button
            onClick={() => setIsCreateTransactionModelOpen(true)}
            text="Add Transaction"
            fullwidth={false}
            defpadding={false}
          />
        </div>
        <CreateTransModal
          open={isCreateTransactionModelOpen}
          setOpen={setIsCreateTransactionModelOpen}
        />
        {/* Здесь будут транзакции */}
        <div>
          <p className="text-center text-text-secondary mt-10">
            No transactions yet...
          </p>
        </div>
      </div>

      {/* Правая часть */}
      <div className="w-2/5 ">{/* Пока пусто */}</div>
    </div>
  )
}
