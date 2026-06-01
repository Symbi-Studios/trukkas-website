import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Logo from '../components/Logo'
import { navigationItems } from '../data/navigation'

function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isLandingPage =
    pathname === '/' || pathname === '/how-it-works' || pathname === '/for-truckers'

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-[14px] font-medium transition ${
      isActive
        ? 'bg-trukkas-blue text-white'
        : 'text-cool-700 hover:bg-white hover:text-trukkas-dark-blue'
    }`

  return (
    <div className="min-h-screen bg-cool-100">
      {!isLandingPage && (
        <header className="sticky top-0 z-50 border-b border-cool-300/80 bg-cool-100/90 backdrop-blur-xl">
          <div className="container-shell flex h-20 items-center justify-between">
            <Logo />

            <nav className="hidden items-center gap-1 rounded-full border border-cool-300 bg-white/70 p-1 md:flex">
              {navigationItems.map((item) => (
                <NavLink key={item.href} to={item.href} className={navLinkClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <a
              href="mailto:hello@trukkas.com"
              className="focus-ring hidden rounded-full bg-trukkas-dark-blue px-5 py-3 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#07075a] md:inline-flex"
            >
              Book a truck
            </a>

            <button
              type="button"
              className="focus-ring inline-grid size-11 place-items-center rounded-full border border-cool-300 bg-white text-trukkas-dark-blue md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="container-shell grid gap-2 pb-5 md:hidden">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          )}
        </header>
      )}

      <Outlet />
    </div>
  )
}

export default RootLayout
