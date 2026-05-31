import { motion } from 'framer-motion'
import {
  Apple,
  ArrowRight,
  Check,
  ChevronRight,
  Circle,
  FileText,
  Menu,
  Play,
} from 'lucide-react'
import type { ReactNode } from 'react'
import PageTransition from '../components/PageTransition'
import containersImage from '../assets/trukkas-containers.png'
import phoneImage from '../assets/iphone-request.png'
import logoWhite from '../assets/trukkas-logo-white.png'
import truckSunset from '../assets/truck-sunset.png'
import truckField from '../assets/truck-field.png'

const navItems = ['How it works', 'For Truckers', 'Safety & Trust', 'Contact']

const trustItems = [
  'Verified truckers & drivers',
  'Escrow-backed every job',
  'Documents reviewed before dispatch',
  'Real-time job tracking',
  '30% mobilization. No surprises.',
  'Verified truckers & drivers',
]

const steps = [
  {
    title: 'Submit your job.',
    description:
      'Enter your pickup, destination, container details and TDO. The system checks your TDO is at least 24 hours out. Our ops team reviews your documents before anything moves.',
    body: <DocumentsCard />,
  },
  {
    title: 'Pick your trucker.',
    description:
      'Receive offers from verified truckers with their rates and ratings. Accept the one that works. Your payment locks in escrow immediately. 30% mobilizes your driver upfront.',
    body: <EscrowCard />,
  },
  {
    title: 'Track it. Confirm it. Done.',
    description:
      'Watch your cargo move on live GPS. At delivery, share your unlock code to start offloading. Confirm completion and the final 70% releases to the trucker automatically.',
    body: <TimelineCard />,
  },
]

const footerLinks = {
  Platform: ['Home', 'How It Works', 'For Truckers', 'Safety & Trust'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Escrow Policy', 'Driver Agreement'],
}

function LandingNav() {
  return (
    <header className="relative z-30 flex h-16 items-center justify-between px-5 text-white md:px-11">
      <nav className="hidden items-center gap-7 text-[13px] font-bold md:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replaceAll(' ', '-').replace('&', 'and')}`}
            className="opacity-90 transition hover:opacity-100"
          >
            {item}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="focus-ring inline-grid size-10 place-items-center rounded-full bg-white/15 md:hidden"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      <a href="/" className="focus-ring rounded-card">
        <img src={logoWhite} alt="Trukkas" className="h-6 w-auto" />
      </a>

      <a
        href="#get-the-app"
        className="focus-ring inline-flex h-10 items-center gap-2 rounded-[5px] bg-trukkas-blue px-5 text-[13px] font-bold text-white shadow-button transition hover:-translate-y-0.5"
      >
        Get the App <ArrowRight size={15} />
      </a>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="landing-shell overflow-hidden rounded-[24px] bg-trukkas-light-blue">
      <div className="relative min-h-[980px] bg-[linear-gradient(180deg,#58bddf_0%,#b8e9f6_62%,#eef7f8_100%)] md:min-h-[1110px]">
        <LandingNav />

        <div className="relative z-20 mx-auto max-w-4xl px-6 pt-13 text-center md:pt-18">
          <motion.div
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12px] font-bold text-success shadow-soft"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="size-2 rounded-full bg-success" />
            Now operating in Lagos
          </motion.div>

          <motion.h1
            className="mx-auto max-w-3xl text-[56px] font-bold leading-[0.98] tracking-[-0.02em] text-[#111111] md:text-[88px] lg:text-[96px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            Move Goods.
            <br />
            Faster. Smarter.
          </motion.h1>

          <motion.p
            className="mx-auto mt-8 max-w-[590px] text-[17px] font-bold leading-7 text-[#151515]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
          >
            Request a truck in minutes, get matched instantly, and follow every
            step-from document approval to delivery.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55 }}
          >
            <a
              href="#get-the-app"
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-[5px] bg-trukkas-blue px-6 text-[14px] font-bold text-white shadow-button transition hover:-translate-y-0.5"
            >
              Get the App <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="focus-ring inline-flex h-12 items-center gap-2 rounded-[5px] bg-white px-6 text-[14px] font-bold text-trukkas-dark-blue shadow-soft transition hover:-translate-y-0.5"
            >
              How it works <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10">
          <img
            src={containersImage}
            alt=""
            className="h-[405px] w-full object-cover object-bottom md:h-[545px]"
          />
        </div>

        <motion.img
          src={phoneImage}
          alt="Trukkas mobile app requesting a cargo truck"
          className="absolute bottom-0 left-1/2 z-20 w-[360px] max-w-[78vw] -translate-x-1/2 md:w-[520px]"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.7, ease: 'easeOut' }}
        />

        <motion.div
          className="absolute bottom-[150px] left-[7%] z-30 hidden w-[315px] rounded-[12px] bg-white p-7 shadow-[0_20px_50px_rgb(0_0_0/0.18)] md:block"
          initial={{ opacity: 0, x: -30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.55, duration: 0.55 }}
        >
          <h3 className="text-[16px] font-bold text-trukkas-dark-blue">
            Driver heading to terminal.
          </h3>
          <p className="mt-3 text-[11px] leading-4 text-cool-700">
            Your driver is on the way to the pickup terminal. Please ensure your
            cargo is ready.
          </p>
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-cool-200">
            <motion.div
              className="h-full rounded-full bg-trukkas-blue"
              initial={{ width: '12%' }}
              animate={{ width: '78%' }}
              transition={{ delay: 0.75, duration: 1.1, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[118px] right-[8%] z-30 hidden w-[315px] rounded-[12px] bg-white p-6 shadow-[0_20px_50px_rgb(0_0_0/0.18)] lg:block"
          initial={{ opacity: 0, x: 30, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.62, duration: 0.55 }}
        >
          <ProgressList />
        </motion.div>
      </div>

      <TrustTicker />
    </section>
  )
}

function TrustTicker() {
  return (
    <div className="hide-scrollbar flex gap-10 overflow-x-auto bg-trukkas-blue px-4 py-3 text-white">
      {[...trustItems, ...trustItems].map((item, index) => (
        <div
          key={`${item}-${index}`}
          className="flex shrink-0 items-center gap-3 text-[13px] font-bold"
        >
          <Circle size={9} />
          {item}
        </div>
      ))}
    </div>
  )
}

function DocumentsCard() {
  const docs = [
    ['TDO_Apapa_May14.pdf', 'Approved', 'success'],
    ['Terminal_Exit_Note.pdf', 'Approved', 'success'],
    ['Gate_Pass.pdf', 'Under review', 'review'],
  ]

  return (
    <div className="grid gap-3">
      {docs.map(([name, status, type]) => (
        <div
          key={name}
          className="flex items-center justify-between rounded-[7px] bg-cool-100 px-4 py-3"
        >
          <div className="flex items-center gap-3">
            <span
              className={`grid size-7 place-items-center rounded-full ${
                type === 'success'
                  ? 'bg-success/10 text-success'
                  : 'bg-trukkas-blue/10 text-trukkas-blue'
              }`}
            >
              {type === 'success' ? <Check size={15} /> : <FileText size={14} />}
            </span>
            <span className="text-[12px] font-bold text-trukkas-dark-blue">{name}</span>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[9px] font-bold ${
              type === 'success'
                ? 'bg-success/10 text-success'
                : 'bg-trukkas-blue/10 text-trukkas-blue'
            }`}
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  )
}

function EscrowCard() {
  return (
    <div>
      <div className="mb-5 flex items-start justify-between">
        <div>
          <p className="text-[14px] font-bold text-trukkas-dark-blue">Escrow locked</p>
          <p className="mt-1 text-[11px] text-cool-600">Payment protected</p>
        </div>
        <p className="text-[17px] font-bold text-trukkas-blue">NGN 840,000</p>
      </div>
      <div className="h-4 overflow-hidden rounded-full bg-success/20">
        <div className="h-full w-[32%] rounded-full bg-trukkas-blue" />
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] font-bold">
        <span className="text-trukkas-blue">30% mobilized - NGN 252k</span>
        <span className="text-success">70% held - NGN 588k</span>
      </div>
      <div className="mt-5 flex gap-3">
        <span className="rounded-full bg-success/10 px-3 py-1.5 text-[10px] font-bold text-success">
          Offer accepted
        </span>
        <span className="rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[10px] font-bold text-trukkas-blue">
          Payment locked in escrow
        </span>
      </div>
    </div>
  )
}

function ProgressList() {
  const events = [
    ['Documents submitted', 'Documents received - 3:18 pm', true],
    ['Documents verified', 'Documents approved - 3:28 pm', true],
    ['Driver assigned', 'Driver assigned - 3:38 pm', true],
    ['Driver heading to pickup', 'In progress', false],
  ] as const

  return (
    <div className="relative grid gap-5 pl-7">
      <div className="absolute bottom-5 left-[9px] top-3 w-0.5 bg-trukkas-blue/30" />
      {events.map(([title, description, complete]) => (
        <div key={title} className="relative">
          <span
            className={`absolute -left-7 top-0 grid size-5 place-items-center rounded-full ${
              complete ? 'bg-trukkas-blue text-white' : 'bg-cool-200 text-cool-600'
            }`}
          >
            {complete ? <Check size={12} /> : <Circle size={8} />}
          </span>
          <p className="text-[13px] font-bold text-trukkas-dark-blue">{title}</p>
          <p className="mt-1 text-[10px] text-cool-600">{description}</p>
        </div>
      ))}
    </div>
  )
}

function TimelineCard() {
  return <ProgressList />
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-trukkas-bg-alt py-24 md:py-32">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-start">
          <div>
            <span className="rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
              How it works
            </span>
            <h2 className="mt-8 max-w-[560px] text-[46px] font-bold leading-[1.02] tracking-[-0.02em] text-[#111111] md:text-[64px]">
              From request
              <br />
              to delivery.
              <br />
              No guesswork.
            </h2>
          </div>
          <div className="pt-2 md:pt-18">
            <p className="max-w-[340px] text-[15px] font-bold leading-6 text-trukkas-dark-blue">
              Structured from the first request to the last kilometre. You stay
              informed at every stage.
            </p>
            <a
              href="#request-flow"
              className="focus-ring mt-6 inline-flex h-10 items-center gap-2 rounded-[5px] border border-cool-400 bg-white px-4 text-[12px] font-bold text-trukkas-dark-blue transition hover:-translate-y-0.5"
            >
              See full flow <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div id="request-flow" className="mt-24 grid gap-9 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
            >
              <span className="mb-6 grid size-8 place-items-center rounded-full bg-trukkas-blue text-[15px] font-bold text-white">
                {index + 1}
              </span>
              <div className="min-h-[188px] rounded-[10px] bg-white p-5 shadow-soft">
                {step.body}
              </div>
              <h3 className="mt-7 text-[24px] font-bold tracking-[-0.01em] text-[#111111]">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[340px] text-[14px] leading-6 text-cool-700">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AudienceSection() {
  const panels = [
    {
      label: 'For Freight Forwarders',
      title: 'You set the job. We handle the rest.',
      body: 'Create a request in minutes. Accept an offer from a verified trucker, track your container in real time, and pay only when delivery is confirmed and your container is back at dock.',
      button: 'See full flow',
      image: truckSunset,
    },
    {
      label: 'For Truckers',
      title: 'Earn more. Keep more.',
      body: 'Accept jobs that fit your fleet. Receive 30% mobilization upfront to cover fuel and prep with the remainder paid immediately on confirmed delivery.',
      button: 'Register your fleet',
      image: truckField,
    },
  ]

  return (
    <section id="for-truckers" className="grid md:grid-cols-2">
      {panels.map((panel) => (
        <motion.article
          key={panel.title}
          className="relative min-h-[470px] overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={panel.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_54/0.08),rgb(0_0_54/0.78))]" />
          <div className="relative z-10 flex h-full max-w-[560px] flex-col justify-end px-8 pb-16 pt-32 text-white md:px-16">
            <span className="mb-5 w-fit rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
              {panel.label}
            </span>
            <h2 className="text-[36px] font-bold leading-[1.04] tracking-[-0.02em] md:text-[46px]">
              {panel.title}
            </h2>
            <p className="mt-5 text-[15px] font-medium leading-7 text-white/90">
              {panel.body}
            </p>
            <a
              href="#get-the-app"
              className="focus-ring mt-7 inline-flex h-11 w-fit items-center gap-2 rounded-[5px] bg-trukkas-blue px-5 text-[13px] font-bold text-white transition hover:-translate-y-0.5"
            >
              {panel.button} <ArrowRight size={15} />
            </a>
          </div>
        </motion.article>
      ))}
    </section>
  )
}

function AppStoreButton({
  icon,
  eyebrow,
  label,
}: {
  icon: ReactNode
  eyebrow: string
  label: string
}) {
  return (
    <a
      href="#contact"
      className="focus-ring inline-flex h-14 min-w-[170px] items-center justify-center gap-3 rounded-[5px] bg-trukkas-blue px-5 text-left text-white shadow-button transition hover:-translate-y-0.5"
    >
      {icon}
      <span>
        <span className="block text-[9px] font-bold uppercase leading-none">
          {eyebrow}
        </span>
        <span className="mt-1 block text-[16px] font-bold leading-none">{label}</span>
      </span>
    </a>
  )
}

function RouteCard() {
  const routes = [
    ['Tin Can Island', 'Tin Can Island, Lagos', true],
    [
      'Sagamu Industrial Logistics Park',
      'Sagamu-Benin Expressway, Sagamu, Ogun State',
      false,
    ],
  ] as const

  return (
    <div className="rounded-[12px] bg-white p-4 shadow-soft">
      {routes.map(([title, subtitle, active]) => (
        <div
          key={title}
          className="flex items-center justify-between gap-3 rounded-[8px] px-3 py-4"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className={`size-3 rounded-full ${active ? 'bg-trukkas-blue' : 'bg-success'}`}
            />
            <div className="min-w-0">
              <p className="truncate text-[13px] font-bold text-trukkas-dark-blue">
                {title}
              </p>
              <p className="truncate text-[10px] text-cool-600">{subtitle}</p>
            </div>
          </div>
          <ChevronRight className="shrink-0 text-cool-700" size={16} />
        </div>
      ))}
    </div>
  )
}

function AppSection() {
  return (
    <section id="get-the-app" className="relative overflow-hidden bg-trukkas-bg-alt py-28 md:py-40">
      <motion.div
        className="absolute right-8 top-12 hidden w-[320px] md:block"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <DocumentsCard />
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-8 hidden w-[350px] md:block"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <RouteCard />
      </motion.div>

      <div className="container-shell relative z-10 text-center">
        <span className="rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
          Get the app
        </span>
        <h2 className="mx-auto mt-9 max-w-[720px] text-[46px] font-bold leading-[1.02] tracking-[-0.02em] text-[#111111] md:text-[66px]">
          The freight marketplace in your pocket.
        </h2>
        <p className="mx-auto mt-6 max-w-[500px] text-[15px] font-medium leading-7 text-cool-700">
          Request trucks, track jobs, manage documents, confirm deliveries - all
          from one app. Available on iOS and Android.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AppStoreButton
            icon={<Apple size={24} />}
            eyebrow="Download on the"
            label="App Store"
          />
          <AppStoreButton
            icon={<Play size={22} fill="currentColor" />}
            eyebrow="Download on the"
            label="Play Store"
          />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-trukkas-dark-blue py-16 text-white md:py-24">
      <div className="container-shell">
        <div className="border-t border-white/10 pt-14">
          <div className="grid gap-14 md:grid-cols-[1fr_0.75fr]">
            <div>
              <img src={logoWhite} alt="Trukkas" className="h-14 w-auto" />
              <p className="mt-8 max-w-[330px] text-[15px] font-medium leading-7 text-white/75">
                A trusted, transparent freight logistics marketplace connecting
                freight forwarders with verified truckers across Nigeria.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              {Object.entries(footerLinks).map(([group, links]) => (
                <div key={group}>
                  <h3 className="text-[18px] font-bold">{group}</h3>
                  <ul className="mt-7 grid gap-4 text-[13px] font-medium text-white/75">
                    {links.map((link) => (
                      <li key={link}>
                        <a href="/" className="transition hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-6 text-[12px] text-white/35">
            (c) 2026 Trukkas. All rights reserved. Lagos, Nigeria.
          </div>
        </div>
      </div>
    </footer>
  )
}

function HomeScreen() {
  return (
    <PageTransition>
      <div className="bg-trukkas-bg-alt pt-6">
        <HeroSection />
        <HowItWorksSection />
        <AudienceSection />
        <AppSection />
        <Footer />
      </div>
    </PageTransition>
  )
}

export default HomeScreen
