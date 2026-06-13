import Link from 'next/link'
import logoFooter from '../assets/trukkas-logo-footer.png'
import { imageSrc } from '../lib/assets'

const footerLinks = {
  Platform: [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Truckers', href: '/for-truckers' },
    { label: 'Safety & Trust', href: '/safety-and-trust' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Escrow Policy', href: '/contact' },
    { label: 'Driver Agreement', href: '/contact' },
  ],
}

function SiteFooter() {
  return (
    <footer id="contact" className="bg-trukkas-dark-blue py-14 text-white md:py-20">
      <div className="container-shell">
        <div className="border-t border-white/10 pt-12">
          <div className="grid gap-12 md:grid-cols-[1fr_0.75fr]">
            <div>
              <img
                src={imageSrc(logoFooter)}
                alt="Trukkas"
                className="h-[70px] w-auto md:h-[62px]"
              />
              <p className="mt-7 max-w-[330px] text-[14px] font-medium leading-7 text-white/75">
                A trusted, transparent freight logistics marketplace connecting freight
                forwarders with verified truckers across Nigeria.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <h3 className="text-[17px] font-bold">{group}</h3>
                  <ul className="mt-6 grid gap-4 text-[13px] font-medium text-white/75">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="transition hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-14 border-t border-white/10 pt-6 text-[12px] text-white/35">
            &copy; 2026 Trukkas. All rights reserved. Lagos, Nigeria.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
