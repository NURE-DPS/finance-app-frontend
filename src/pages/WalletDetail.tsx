import { wallets } from '../stores/wallets'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import CreateTransModal from '../components/CreateTransModal'
import { LuTrash2, LuFolderPen } from 'react-icons/lu'
import { EditWalletModal } from '../components/Wallets/EditWalletModal'
import { DeleteWalletModal } from '../components/Wallets/DeleteWalletModal'
import { Button } from '../components/Button'
import { IconButton } from '../components/IconButton'

export const WalletDetail = () => {
  const [isWalletEditing, setIsWalletEditing] = useState(false)
  const [isWalletDeleting, setIsWalletDeleting] = useState(false)

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  //сделал работу со строчными айди - хз правильно или нет
  const [selectedWalletId, setSelectedWalletId] = useState<string>(id || '')
  const [isTransCreation, setIsTransCreation] = useState(false)

  // Затычка (Найти текущий выбранный кошелек) - потом скорее всего поменяется, когда будет
  //делаться привязка к бэкэнду
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
            <IconButton
              onClick={() => setIsWalletEditing(true)}
              Icon={LuFolderPen}
              isPadding={true}
            />
            {isWalletEditing && selectedWallet && (
              <div className="fixed inset-0 flex items-start justify-center bg-background/40">
                <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8">
                  <EditWalletModal
                    onClose={() => setIsWalletEditing(false)}
                    defid={selectedWallet.id}
                    defname={selectedWallet.name}
                    defcurr={selectedWallet.currency}
                    defbalance={selectedWallet.balance.toString()}
                  />
                  <Button
                    onClick={() => setIsWalletEditing(false)}
                    text="Cancel"
                    defcolor={false}
                    margtop={true}
                  />
                </div>
              </div>
            )}
            <IconButton
              onClick={() => setIsWalletDeleting(true)}
              Icon={LuTrash2}
              isPadding={true}
            />
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
          <Button
            onClick={() => setIsTransCreation(true)}
            text="Add Transaction"
            fullwidth={false}
            defpadding={false}
          />
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
