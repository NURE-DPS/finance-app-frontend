import * as motion from 'motion/react-client'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-lg font-medium transition-colors ${
      isActive
        ? 'bg-accent text-text-inverted'
        : 'text-text-secondary hover:bg-elevation-1 hover:text-text-primary'
    }`

  return (
    <div className="basis-1/7 min-h-screen h-full bg-elevation-1 p-6 text-text-primary shadow-inner border-r border-border">
      <h2 className="text-xl font-bold mb-6 font-montserrat tracking-tight">
        Finance Tracker
      </h2>
      <nav>
        <ul className="space-y-2">
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink to="/" className={linkClasses}>
              Dashboard
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink to="/wallets" className={linkClasses}>
              Wallets
            </NavLink>
          </motion.li>
          <motion.li whileTap={{ scale: 0.9 }}>
            <NavLink to="/settings" className={linkClasses}>
              Settings
            </NavLink>
          </motion.li>
        </ul>
      </nav>
    </div>
  )
}
