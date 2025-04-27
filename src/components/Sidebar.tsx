import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (

    <div className="basis-1/7 min-h-screen h-full text-color p-6">
      <h2 className="text-xl font-bold mb-6 font-montserrat">Finance Tracker</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="hover:text-disabled">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/wallets" className="hover:text-gray-300">
              Wallets
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/settings" className="hover:text-disabled">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
