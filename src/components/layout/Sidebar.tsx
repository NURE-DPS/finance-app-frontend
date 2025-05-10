import * as motion from 'motion/react-client'
import {
  LuCircleUserRound,
  LuLayoutDashboard,
  LuLogOut,
  LuSettings,
  LuWallet,
} from 'react-icons/lu'
import { NavLink } from 'react-router-dom'
import { useLogOut } from '../../hooks/auth/useLogOut'

export const Sidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-accent text-text-inverted'
        : 'text-text-secondary hover:bg-elevation-1 hover:text-text-primary'
    }`

  const { handleLogOut } = useLogOut()

  return (
    <div className="basis-1/7 min-h-screen h-full bg-elevation-1 p-6 text-text-primary shadow-inner border-r border-border flex flex-col justify-between">
      <div>
        <h2 className="text-h3 font-bold mb-6 font-montserrat tracking-tight">
          Finance Tracker
        </h2>
        <nav>
          <ul className="space-y-2">
            <motion.li whileTap={{ scale: 0.9 }}>
              <NavLink to="/" className={linkClasses}>
                <div className="flex items-center gap-2">
                  <LuLayoutDashboard size={20} />
                  Dashboard
                </div>
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }}>
              <NavLink to="/wallets" className={linkClasses}>
                <div className="flex items-center gap-2">
                  <LuWallet size={20} />
                  Wallets
                </div>
              </NavLink>
            </motion.li>
            <motion.li whileTap={{ scale: 0.9 }}>
              <NavLink to="/settings" className={linkClasses}>
                <div className="flex items-center gap-2">
                  <LuSettings size={20} />
                  Settings
                </div>
              </NavLink>
            </motion.li>
          </ul>
        </nav>
      </div>
      <div className="space-y-2 mt-6">
        <motion.div whileTap={{ scale: 0.9 }}>
          <NavLink to="/profile" className={linkClasses}>
            <div className="flex items-center gap-2">
              <LuCircleUserRound size={20} />
              Profile
            </div>
          </NavLink>
        </motion.div>
        <motion.div whileTap={{ scale: 0.9 }}>
          <button
            onClick={handleLogOut} // Викликаємо хендлер з хука
            className={linkClasses({ isActive: false })}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <LuLogOut size={20} />
              Log Out
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
