import { LuCalendar } from 'react-icons/lu'
import { forwardRef, Ref } from 'react'

export const CustomDatePickerInput = forwardRef<
  HTMLDivElement,
  { value?: string; onClick?: () => void; placeholder?: string }
>(({ value, onClick, placeholder }, ref: Ref<HTMLDivElement>) => (
  <div
    onClick={onClick}
    ref={ref}
    className="w-full p-2 pl-3 pr-10 border-2 border-border rounded bg-elevation-2 text-text-primary cursor-pointer relative font-lato"
  >
    {value || <span className="text-text-secondary">{placeholder}</span>}
    <LuCalendar
      size={22}
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-primary pointer-events-none"
    />
  </div>
))
