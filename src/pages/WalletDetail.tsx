import { wallets } from '../stores/wallets'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import CreateTransModal from '../components/CreateTransModal'

export const WalletDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  //пока в качестве затычки работают только с числовыми айди
  const [selectedWalletId, setSelectedWalletId] = useState<number>(Number(id))
  const [isTransCreation, setIsTransCreation] = useState(false)

  const handleWalletChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = Number(event.target.value)
    setSelectedWalletId(newId)
    navigate(`/wallets/${newId}`)
  }

  return (
    <div className="flex p-8 text-color gap-8">
      <div className="w-3/5">
        <div className="mb-6">
          <select
            value={selectedWalletId}
            onChange={handleWalletChange}
            className="w-1/3 p-2 bg-surface text-color font-lato text-h3 rounded-lg"
          >
            {wallets.map((wallet) => (
              <option key={wallet.id} value={wallet.id}>
                {wallet.name} - {wallet.balance} {wallet.currency}
              </option>
            ))}
          </select>
        </div>

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
      <div className="w-2/5 p-6 ">{/* Пока пусто */}</div>
    </div>
  )
}
