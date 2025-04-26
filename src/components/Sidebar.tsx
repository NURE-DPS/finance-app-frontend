import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="basis-1/7 min-h-screen h-full text-white p-6 ">
      <h2 className="text-xl font-bold mb-6">Finance Tracker</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link to="/" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settings" className="hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
