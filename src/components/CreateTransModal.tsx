import { LuCircleX } from 'react-icons/lu'

export default function CreateTransModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-surface w-[600px] p-6 rounded-2xl shadow-lg mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-h3 text-lato font-bold mb-4">Create Trans</h2>
        <button
          onClick={onClose}
          className="text-color hover:disabled text-h2 leading-none cursor-pointer"
        >
          <LuCircleX />
        </button>
      </div>
      <p>Transaction creation</p>
    </div>
  )
}
