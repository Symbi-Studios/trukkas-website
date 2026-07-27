'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode, useState } from 'react'
import Logo from '../components/Logo'
import { navigationItems } from '../data/navigation'

type RootLayoutProps = {
  children: ReactNode
}

function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isLandingPage =
    pathname === '/' ||
    pathname === '/how-it-works' ||
    pathname === '/for-truckers' ||
    pathname === '/safety-and-trust' ||
    pathname === '/contact'

  const navLinkClass = (isActive: boolean) =>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(pathname === item.href)}
                >
                  {item.label}
                </Link>
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
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass(pathname === item.href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </header>
      )}

      {children}
    </div>
  )
}

export default RootLayout
