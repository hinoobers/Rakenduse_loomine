import { Outlet, Link, useLocation } from "react-router-dom";
import './layout.css'

const Layout = () => {
  const location = useLocation().pathname; // prolly parem viis kuidas seda teho imo

  return (
    <>
      <nav id='navigation_bar'>
        <ul>

        <li className={location === '/' ? 'active_nav' : ''}>
          {/* esileht on kalkulaator */}
          <Link to="/">Kalkulaator</Link>
        </li>
        <li className={location === '/joonised' ? 'active_nav' : ''}>
            <Link to="/joonised">Joonised</Link>
        </li>

        </ul>
      </nav>

      <Outlet />
    </>
  )
}
export default Layout