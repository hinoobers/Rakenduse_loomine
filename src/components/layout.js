import { Outlet, Link } from "react-router-dom";
import './layout.css'

const Layout = () => {
  return (
    <>
      <nav id='navigation_bar'>
        <ul>

        <li className='active_nav'>
          {/* esileht on kalkulaator */}
          <Link to="/">Kalkulaator</Link>
        </li>
        <li className=''>
            <Link to="/joonised">Joonised</Link>
        </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
}
export default Layout