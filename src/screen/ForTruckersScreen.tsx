import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Menu,
  User,
  X,
} from 'lucide-react'
import { type ComponentType, useEffect, useRef, useState } from 'react'
import PageTransition from '../components/PageTransition'
import appStoreButton from '../assets/app-store-button-tight.png'
import playStoreButton from '../assets/play-store-button-tight.png'
import logoBlue from '../assets/trukkas-logo-blue.png'
import logoFooter from '../assets/trukkas-logo-footer.png'
import truckSunset from '../assets/truck-sunset.png'
import whyDetailsIcon from '../assets/why-details-icon.png'
import whyDisputesIcon from '../assets/why-disputes-icon.png'
import whyReputationIcon from '../assets/why-reputation-icon.png'
import whySettlementIcon from '../assets/why-settlement-icon.png'
import whyUpfrontIcon from '../assets/why-upfront-icon.png'

type IconType = ComponentType<{ size?: number; strokeWidth?: number }>

const navItems = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'For Truckers', href: '/for-truckers' },
  { label: 'Safety & Trust', href: '/#safety-and-trust' },
  { label: 'Contact', href: '/contact' },
]

const footerLinks = {
  Platform: [
    { label: 'Home', href: '/' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Truckers', href: '/for-truckers' },
    { label: 'Safety & Trust', href: '/#safety-and-trust' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Escrow Policy', href: '/contact' },
    { label: 'Driver Agreement', href: '/contact' },
  ],
}

const benefitCards: Array<{
  title: string
  description: string
  icon: string
}> = [
  {
    title: '30% upfront every single job',
    description:
      'Your driver is assigned and 30% hits your wallet before the truck moves. Fuel, port costs and prep are covered before you start.',
    icon: whyUpfrontIcon,
  },
  {
    title: 'Automatic settlement',
    description:
      'The remaining 70% is credited to your wallet automatically on job completion. Withdraw to your bank whenever you are ready.',
    icon: whySettlementIcon,
  },
  {
    title: 'Full details before you commit',
    description:
      'See the route, cargo type, container size and payout before you accept. No surprises after the fact.',
    icon: whyDetailsIcon,
  },
  {
    title: 'Disputes are handled properly',
    description:
      'Every dispute goes through a formal resolution process. No arbitrary payment holds, no unilateral decisions.',
    icon: whyDisputesIcon,
  },
  {
    title: 'Your reputation works for you',
    description:
      'A strong completion record and consistent GPS compliance means more job offers and better visibility on the platform.',
    icon: whyReputationIcon,
  },
]

const accountTypes: Array<{
  title: string
  description: string
  icon: IconType
}> = [
  {
    title: 'Individual Owner-Driver',
    description:
      'You own a truck and you drive it. Complete your verification, get approved and start receiving job offers. No company structure required.',
    icon: User,
  },
  {
    title: 'Trucking Company',
    description:
      'Manage your fleet from a single dashboard. Invite drivers, assign jobs and track deliveries across your entire operation. All earnings go into one company wallet.',
    icon: Building2,
  },
]

const requirementGroups = [
  {
    title: 'All truckers',
    items: [
      'NIN (National Identification Number)',
      "Driver's licence (upload required)",
      'Truck registration details',
      'Truck year: 2002 or newer',
      'CAC certificate of incorporation',
    ],
  },
  {
    title: 'Companies (Additional)',
    items: [
      'CAC certificate of incorporation',
      "Director's government-issued ID",
      'Bank introduction letter',
    ],
  },
]

function TruckersNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 md:px-0">
      <div className="container-shell flex h-10 items-center justify-between rounded-[8px] bg-white px-3 shadow-[0_18px_55px_rgb(0_0_0/0.14)] md:h-[76px] md:rounded-[26px] md:px-8">
        <nav className="hidden items-center gap-6 text-[12px] font-bold text-[#0d1017] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition hover:text-trukkas-blue ${
                item.href === '/for-truckers' ? 'text-trukkas-blue' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/" className="focus-ring rounded-card md:absolute md:left-1/2 md:-translate-x-1/2">
          <img src={logoBlue} alt="Trukkas" className="h-[19px] w-auto md:h-[28px]" />
        </a>

        <a
          href="#get-the-app"
          className="focus-ring hidden h-12 items-center gap-2 rounded-[5px] bg-trukkas-blue px-6 text-[13px] font-bold text-white shadow-[0_4px_40px_rgb(2_65_232/0.3)] transition hover:-translate-y-0.5 md:inline-flex"
        >
          Get the App <ArrowRight size={16} />
        </a>

        <button
          type="button"
          className="focus-ring grid size-7 place-items-center rounded text-trukkas-blue md:hidden"
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
              <a href="/" className="focus-ring rounded-card" onClick={() => setMenuOpen(false)}>
                <img src={logoBlue} alt="Trukkas" className="h-7 w-auto" />
              </a>
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`w-fit transition hover:text-trukkas-blue ${
                    item.href === '/for-truckers' ? 'text-trukkas-blue' : ''
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-success md:text-[11px]">
      <span className="size-1.5 rounded-full bg-success" />
      {children}
    </span>
  )
}

function BluePill({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[9px] font-bold text-trukkas-blue md:text-[11px]">
      {children}
    </span>
  )
}

function HeroSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#55b9d8_0%,#b9e2e9_48%,#eeefea_100%)] pb-26 pt-24 md:min-h-[760px] md:pb-34 md:pt-[250px]">
      <motion.div
        className="container-shell text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <Eyebrow>For truckers</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-[920px] text-[43px] font-bold leading-[0.95] tracking-[-0.02em] text-[#101010] md:text-[92px]">
          Your truck.
          <br />
          Your terms. Real pay.
        </h1>
        <p className="mx-auto mt-5 max-w-[610px] text-[13px] font-bold leading-5 text-[#151515] md:text-[17px] md:leading-7">
          See the job before you commit. Get paid to mobilize. Earn the rest on
          confirmed delivery.
        </p>
      </motion.div>
    </section>
  )
}

function BenefitsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollCards = (direction: 'left' | 'right') => {
    scrollerRef.current?.scrollBy({
      left: direction === 'left' ? -360 : 360,
      behavior: 'smooth',
    })
  }

  return (
    <section className="overflow-hidden bg-trukkas-bg-alt pb-18 md:pb-28">
      <div className="container-shell text-center">
        <BluePill>Why Trukkas</BluePill>
        <h2 className="mx-auto mt-6 max-w-[670px] text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-[#101010] md:text-[58px]">
          Built in your favour.
        </h2>
        <p className="mx-auto mt-5 max-w-[360px] text-[12px] font-bold leading-5 text-[#151515] md:text-[15px] md:leading-6">
          Designed so that doing the job well is the same as doing well financially.
        </p>
      </div>

      <div className="mt-12 bg-trukkas-bg-alt md:mt-20">
        <div
          ref={scrollerRef}
          className="hide-scrollbar flex snap-x gap-5 overflow-x-auto pb-8 pl-[calc((100vw-286px)/2)] pr-4 pt-1 md:gap-7 md:pl-[max(96px,calc((100vw-1200px)/2+72px))] md:pr-8 md:pb-10"
        >
          {benefitCards.map((card, index) => {
            return (
              <motion.article
                  key={card.title}
                  className="min-h-[218px] w-[286px] shrink-0 snap-start rounded-[12px] bg-white p-7 text-left shadow-[0_16px_34px_rgb(0_0_54/0.10)] md:min-h-[215px] md:w-[350px] md:p-7"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
                >
                  <img src={card.icon} alt="" className="size-12 md:size-13" />
                  <h3 className="mt-7 text-[20px] font-bold leading-tight tracking-[-0.01em] text-[#101010] md:text-[21px]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[12px] font-medium leading-5 text-cool-700 md:text-[13px] md:leading-5">
                    {card.description}
                  </p>
                </motion.article>
              )
            })}
        </div>

        <div className="container-shell mt-0 flex justify-end gap-3">
          <button
            type="button"
            className="focus-ring grid size-10 place-items-center rounded-full bg-trukkas-blue/10 text-trukkas-blue transition hover:bg-trukkas-blue hover:text-white"
            aria-label="Previous benefit"
            onClick={() => scrollCards('left')}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            type="button"
            className="focus-ring grid size-10 place-items-center rounded-full bg-trukkas-blue/10 text-trukkas-blue transition hover:bg-trukkas-blue hover:text-white"
            aria-label="Next benefit"
            onClick={() => scrollCards('right')}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

function GetStartedSection() {
  return (
    <section className="bg-trukkas-bg-alt py-16 md:py-24">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_0.58fr] md:items-end">
          <div>
            <BluePill>Get started</BluePill>
            <h2 className="mt-6 max-w-[520px] text-[43px] font-bold leading-[1.02] tracking-[-0.02em] text-[#101010] md:text-[60px]">
              One truck or a full fleet. Both welcome.
            </h2>
          </div>
          <div className="md:pb-5">
            <p className="max-w-[370px] text-[13px] font-bold leading-6 text-[#151515] md:text-[15px]">
              Register as an individual or as a company managing multiple trucks and drivers.
            </p>
            <a
              href="/how-it-works#for-truckers"
              className="focus-ring mt-5 inline-flex h-10 items-center gap-2 rounded-[5px] border border-gray-400 bg-transparent px-4 text-[12px] font-bold text-[#101010] transition hover:-translate-y-0.5 hover:bg-white/35"
            >
              See full flow <ArrowRight size={15} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-7 md:mt-18 md:grid-cols-2 md:gap-10">
          {accountTypes.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.article
                key={card.title}
                className="rounded-[18px] bg-white p-8 shadow-[0_20px_55px_rgb(0_0_0/0.13)] md:min-h-[280px] md:p-9"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
              >
                <span className="grid size-14 place-items-center rounded-[10px] bg-trukkas-blue/10 text-trukkas-blue">
                  <Icon size={25} strokeWidth={2.3} />
                </span>
                <h3 className="mt-12 text-[27px] font-bold leading-tight tracking-[-0.01em] text-[#101010] md:text-[31px]">
                  {card.title}
                </h3>
                <p className="mt-5 max-w-[560px] text-[13px] font-medium leading-6 text-cool-700 md:text-[15px] md:leading-7">
                  {card.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function RequirementsSection() {
  return (
    <section className="bg-trukkas-bg-alt pb-20 pt-10 md:pb-34 md:pt-28">
      <div className="container-shell grid gap-12 md:grid-cols-[0.85fr_1fr] md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <BluePill>What you'll need</BluePill>
          <h2 className="mt-7 max-w-[440px] text-[43px] font-bold leading-[1.02] tracking-[-0.02em] text-[#101010] md:text-[58px]">
            Registration requirements.
          </h2>
          <p className="mt-6 max-w-[390px] text-[13px] font-bold leading-6 text-[#151515] md:text-[15px]">
            Everything we ask for exists to protect the jobs you take on. Here is
            exactly what is required.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-start md:gap-7">
          {requirementGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className={`rounded-[12px] bg-white p-7 shadow-[0_20px_55px_rgb(0_0_0/0.12)] ${
                index === 1 ? 'md:mt-0' : ''
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
            >
              <h3 className="text-[22px] font-bold tracking-[-0.01em] text-[#101010] md:text-[24px]">
                {group.title}
              </h3>
              <ul className="mt-7 grid gap-5">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-4 text-[13px] font-medium leading-5 text-cool-700 md:text-[14px]">
                    <Check className="mt-0.5 shrink-0 text-trukkas-blue" size={18} strokeWidth={2.6} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoreBadge({
  href,
  image,
  label,
}: {
  href: string
  image: string
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="focus-ring inline-flex h-12 w-[159px] items-center justify-center rounded-[6px] transition hover:-translate-y-0.5"
    >
      <img src={image} alt={label} className="h-full w-full rounded-[6px]" />
    </a>
  )
}

function AppDownloadSection() {
  return (
    <section id="get-the-app" className="relative min-h-[470px] overflow-hidden bg-trukkas-dark-blue md:hidden">
      <img
        src={truckSunset}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_54/0.16),rgb(0_0_54/0.38))]" />
      <div className="container-shell relative z-10 flex min-h-[470px] flex-col items-center justify-center px-2 py-18 text-center text-white">
        <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
          Get the app
        </span>
        <h2 className="mt-6 max-w-[360px] text-[39px] font-bold leading-[1.02] tracking-[-0.02em]">
          The freight marketplace in your pocket.
        </h2>
        <p className="mt-5 max-w-[340px] text-[13px] font-medium leading-6 text-white/90">
          Request trucks, track jobs, manage documents, confirm deliveries - all
          from one app. Available on iOS and Android.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <StoreBadge href="#contact" image={appStoreButton} label="Download on the App Store" />
          <StoreBadge href="#contact" image={playStoreButton} label="Download on the Play Store" />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-trukkas-dark-blue py-14 text-white md:py-20">
      <div className="container-shell">
        <div className="border-t border-white/10 pt-12">
          <div className="grid gap-12 md:grid-cols-[1fr_0.75fr]">
            <div>
              <img src={logoFooter} alt="Trukkas" className="h-[70px] w-auto md:h-[62px]" />
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
                        <a href={link.href} className="transition hover:text-white">
                          {link.label}
                        </a>
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

function ForTruckersScreen() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <TruckersNav />
        <HeroSection />
        <BenefitsSection />
        <GetStartedSection />
        <RequirementsSection />
        <AppDownloadSection />
        <Footer />
      </div>
    </PageTransition>
  )
}

export default ForTruckersScreen
