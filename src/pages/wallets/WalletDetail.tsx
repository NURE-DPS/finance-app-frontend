import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CreateTransModal } from '../../components/features/transactions/CreateTransModal'
import { LuTrash2, LuFolderPen } from 'react-icons/lu'
import { EditWalletModal } from '../../components/features/wallets/EditWalletModal'
import { DeleteWalletModal } from '../../components/features/wallets/DeleteWalletModal'
import { Button } from '../../components/UI/Button'
import { IconButton } from '../../components/UI/IconButton'
import { useWallet } from '../../hooks/wallets/UseWallet'
import { transactions } from '../../stores/transactions'
import { TransactionList } from '../../components/features/transactions/TransactionsList'

export const WalletDetail = () => {
  const [isEditWalletModalOpen, setIsEditWalletModalOpen] = useState(false)
  const [isDeleteWalletModalOpen, setIsDeleteWalletModalOpen] = useState(false)

  const { wallets, selectedWalletId, selectedWallet, setSelectedWalletId } =
    useWallet()

  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [isCreateTransactionModelOpen, setIsCreateTransactionModelOpen] =
    useState(false)

  useEffect(() => {
    if (id) setSelectedWalletId(id)
  }, [id])

  const handleWalletChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newId = event.target.value
    setSelectedWalletId(newId)
    await navigate(`/wallets/${newId}`)
  }
  if (!selectedWallet)
    return (
      <div className="font-montserrat text-display text-center">
        Page not found
      </div>
    )

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.walletId === selectedWalletId,
  )

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
              open={isEditWalletModalOpen}
              setOpen={setIsEditWalletModalOpen}
              id={selectedWalletId}
              name={selectedWallet.name}
              currency={selectedWallet.currency}
              balance={selectedWallet.balance}
            />

            <IconButton
              onClick={() => setIsDeleteWalletModalOpen(true)}
              Icon={LuTrash2}
              isPadding={true}
            />
            <DeleteWalletModal
              open={isDeleteWalletModalOpen}
              setOpen={setIsDeleteWalletModalOpen}
              id={selectedWalletId}
              name={selectedWallet.name}
              currency={selectedWallet.currency}
              balance={selectedWallet.balance}
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
          walletId={selectedWalletId}
        />
        <TransactionList transactions={filteredTransactions} />
      </div>

      {/* Правая часть */}
      <div className="w-2/5 ">{/* Пока пусто */}</div>
    </div>
  )
}
