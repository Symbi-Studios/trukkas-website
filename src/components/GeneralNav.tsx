'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import logoBlue from '../assets/trukkas-logo-blue.png'
import { imageSrc } from '../lib/assets'

type GeneralNavItem = {
  label: string
  drawerLabel?: string
  href: string
}

type GeneralNavProps = {
  activeHref?: string
  ctaHref?: string
  items?: GeneralNavItem[]
}

const defaultItems: GeneralNavItem[] = [
  { label: 'How it works', drawerLabel: 'How It Works', href: '/how-it-works' },
  {
    label: 'For Truckers',
    drawerLabel: 'For Truckers & Drivers',
    href: '/for-truckers',
  },
  {
    label: 'Safety & Trust',
    drawerLabel: 'Safety & Trust',
    href: '/safety-and-trust',
  },
  { label: 'Contact', drawerLabel: 'Contact', href: '/contact' },
]

function GeneralNav({
  activeHref,
  ctaHref = '#get-the-app',
  items = defaultItems,
}: GeneralNavProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="absolute inset-x-0 top-3 z-50 px-4 md:top-4 md:px-6">
      <div className="mx-auto flex h-11 max-w-[1300px] items-center justify-between rounded-[20px] bg-white/20 px-4 shadow-[inset_0_1px_0_rgb(255_255_255/0.24)] backdrop-blur-md md:h-14 md:rounded-[20px] md:px-6">
        <Link href="/" className="focus-ring inline-flex items-center rounded-card">
          <img src={imageSrc(logoBlue)} alt="Trukkas" className="h-[19px] w-auto md:h-6" />
        </Link>

        <nav className="hidden items-center gap-5 text-[11px] font-bold text-[#061034] md:ml-auto md:flex lg:gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition hover:text-trukkas-blue ${
                item.href === activeHref ? 'text-trukkas-blue' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={ctaHref}
          className="focus-ring hidden h-10 items-center gap-2 rounded-[5px] bg-trukkas-blue px-5 text-[13px] font-bold text-white shadow-[0px_4px_40px_0px_#0241E84D] transition hover:-translate-y-0.5 md:ml-7 md:inline-flex"
        >
          Get the App <ArrowRight size={15} />
        </a>

        <button
          type="button"
          className="focus-ring grid size-8 place-items-center rounded-full bg-white/45 text-trukkas-blue md:hidden"
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-trukkas-bg-alt px-7 py-10 text-[#090909]"
            initial={{ opacity: 0, x: '12%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '8%' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="focus-ring rounded-card"
                onClick={() => setMenuOpen(false)}
              >
                <img src={imageSrc(logoBlue)} alt="Trukkas" className="h-7 w-auto" />
              </Link>
              <button
                type="button"
                className="focus-ring grid size-10 place-items-center rounded-full text-trukkas-blue"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mt-14 grid gap-5 text-[27px] font-bold leading-tight">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`w-fit transition hover:text-trukkas-blue ${
                    item.href === activeHref ? 'text-trukkas-blue' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.drawerLabel ?? item.label}
                </a>
              ))}
            </nav>

            <a
              href={ctaHref}
              className="focus-ring mt-7 inline-flex h-11 items-center gap-2 rounded-[5px] bg-trukkas-blue px-5 text-[15px] font-bold text-white shadow-[0px_4px_40px_0px_#0241E84D]"
              onClick={() => setMenuOpen(false)}
            >
              Get the App <ArrowRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default GeneralNav
