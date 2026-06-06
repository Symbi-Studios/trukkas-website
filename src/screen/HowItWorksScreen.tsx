'use client'

import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckSquare,
  CircleDollarSign,
  FileText,
  Globe2,
  Lock,
  Search,
  Truck,
  User,
  Users,
} from 'lucide-react'
import { type ComponentType, useMemo, useState } from 'react'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import { imageSrc, type ImageAsset } from '../lib/assets'
import appStoreButton from '../assets/app-store-button-tight.png'
import orderPhoneImage from '../assets/iphone-order-details.png'
import playStoreButton from '../assets/play-store-button-tight.png'
import logoFooter from '../assets/trukkas-logo-footer.png'
import truckSunset from '../assets/truck-sunset.png'

type Audience = 'forwarders' | 'truckers'

type TimelineStep = {
  title: string
  description: string
  icon: ComponentType<{ size?: number; strokeWidth?: number }>
}

const footerLinks = {
  Platform: ['Home', 'How It Works', 'For Truckers', 'Safety & Trust'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Escrow Policy', 'Driver Agreement'],
}

const timelineCopy: Record<Audience, TimelineStep[]> = {
  forwarders: [
    {
      title: 'Create your account',
      description:
        'Register, verify your identity and fund your wallet. Your wallet covers the job cost and is checked before your request goes live.',
      icon: User,
    },
    {
      title: 'Submit your job request',
      description:
        'Enter your pickup port, destination and container details. Upload your TDO and Terminal Exit Note. Your TDO must be at least 24 hours out before your request is submitted.',
      icon: FileText,
    },
    {
      title: 'Documents reviewed by our ops team',
      description:
        "Our ops team reviews your TDO and Terminal Exit Note before any driver is dispatched. If something is wrong, you're told exactly what can and cannot be fixed without restarting.",
      icon: CheckSquare,
    },
    {
      title: 'Receive offers pick your trucker',
      description:
        'Verified truckers send you offers with their rating, truck type and price. Compare them side by side and accept the best one before the timer runs out.',
      icon: Lock,
    },
    {
      title: 'Driver assigned. Job begins.',
      description:
        'The trucker assigns a driver and truck. 30% is released upfront to cover mobilization costs. The remaining 70% stays in escrow until you confirm delivery.',
      icon: Truck,
    },
    {
      title: 'Track every milestone in real time',
      description:
        'Track your truck on live GPS from the moment it departs the terminal. Every checkpoint is logged and timestamped so you always know where your cargo is.',
      icon: Globe2,
    },
    {
      title: 'Driver arrives.',
      description:
        'When your driver arrives, you share a unique unlock code to begin offloading. You have 48 hours from arrival to complete offloading before demurrage charges kick in.',
      icon: FileText,
    },
    {
      title: 'Offloading confirmed. Job closed. 70% released.',
      description:
        'Once offloading is complete and the container is returned to the terminal, the remaining 70% is released to the trucker automatically.',
      icon: CircleDollarSign,
    },
  ],
  truckers: [
    {
      title: 'Register as individual or company',
      description:
        'Complete verification with your NIN, driver licence, truck registration and roadworthiness certificate. Companies also need their CAC certificate and director ID.',
      icon: User,
    },
    {
      title: 'Register and get your trucks approved',
      description:
        'Register each truck with its plate number, year, make and model. Attach roadworthiness certificates so our team can approve each truck individually.',
      icon: Truck,
    },
    {
      title: 'Invite your drivers',
      description:
        'Generate invite codes for your drivers. They sign up, complete their own verification, and enter your code to join your company.',
      icon: Users,
    },
    {
      title: 'Go online and send offers',
      description:
        'Go online to start receiving job offers. Each one shows the route, cargo details and payout. Accept listed rates or submit a counter-offer.',
      icon: Search,
    },
    {
      title: 'Assign your driver get paid immediately',
      description:
        'Assign a driver and truck to the job. As soon as the assignment is confirmed, 30% of the job value is credited to your wallet.',
      icon: User,
    },
    {
      title: 'Execute the job',
      description:
        'Head to the pickup terminal, review shipping documents and capture proof before departing. At delivery, the forwarder shares an unlock code.',
      icon: Truck,
    },
    {
      title: 'Confirm offloading and return container',
      description:
        'Confirm offloading in the app once everything is unloaded. The container is then returned to the terminal and the return is logged.',
      icon: FileText,
    },
    {
      title: 'Final payment to your wallet.',
      description:
        'The remaining 70% is credited to your Trukkas wallet automatically once the job closes. Withdraw to your bank account whenever you are ready.',
      icon: CircleDollarSign,
    },
  ],
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-trukkas-bg-alt pb-13 pt-25 md:min-h-[760px] md:pb-20 md:pt-[150px]">
      <div className="container-shell grid items-center gap-5 md:grid-cols-[1.18fr_0.82fr] md:gap-12">
        <motion.div
          className="relative z-10 max-w-[700px] pt-8 md:pt-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e9fff0] px-2 py-1 text-[8px] font-bold text-success md:text-[11px]">
            <span className="size-1.5 rounded-full bg-success" />
            How it works
          </span>
          <h1 className="mt-5 max-w-[720px] text-[43px] font-bold leading-[0.94] tracking-[-0.02em] text-[#101010] md:mt-8 md:text-[74px] lg:text-[82px]">
            Every step.
            <br />
            Visible. Verified.
          </h1>
          <p className="mt-5 max-w-[560px] text-[13px] font-bold leading-5 text-[#151515] md:mt-8 md:text-[17px] md:leading-7">
            Trukkas isn&apos;t just a booking platform. It&apos;s an end-to-end freight
            execution system built to eliminate delays, disputes, and payment friction.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto h-[330px] w-full max-w-[420px] overflow-hidden md:h-[590px] md:max-w-[470px]"
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.65, ease: 'easeOut' }}
        >
          <img
            src={imageSrc(orderPhoneImage)}
            alt="Trukkas app order details screen showing driver arrival progress"
            className="absolute left-1/2 top-0 w-[300px] -translate-x-1/2 md:w-[470px]"
          />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgb(238_239_234/0),#eeefea_82%)] md:h-48" />
        </motion.div>
      </div>
    </section>
  )
}

function AudienceTabs({
  audience,
  setAudience,
}: {
  audience: Audience
  setAudience: (audience: Audience) => void
}) {
  const options: Array<{ id: Audience; label: string }> = [
    { id: 'forwarders', label: 'For Freight Forwarders' },
    { id: 'truckers', label: 'For Truckers & Drivers' },
  ]

  return (
    <div id="for-truckers" className="flex justify-center bg-trukkas-bg-alt">
      <div className="inline-flex rounded-[5px] bg-white p-1 shadow-[0_1px_0_rgb(0_0_0/0.08)]">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`h-8 rounded-[4px] px-3 text-[10px] font-bold transition md:h-9 md:px-4 md:text-[12px] ${
              audience === option.id
                ? 'bg-trukkas-blue text-white shadow-button'
                : 'text-[#111111] hover:text-trukkas-blue'
            }`}
            onClick={() => setAudience(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

function Timeline({ audience }: { audience: Audience }) {
  const steps = useMemo(() => timelineCopy[audience], [audience])

  return (
    <section className="bg-trukkas-bg-alt pb-22 pt-18 md:pb-36 md:pt-24">
      <div className="container-shell">
        <div className="relative mx-auto max-w-[1100px]">
          <span className="absolute left-7 top-5 h-[calc(100%-12px)] w-0.5 bg-trukkas-blue md:left-1/2 md:-translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              className="grid gap-13 md:gap-20"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
            >
              {steps.map((step, index) => {
                const Icon = step.icon
                const isLeft = index % 2 === 0

                return (
                  <motion.article
                    key={`${step.title}-${index}`}
                    className={`relative grid grid-cols-[56px_minmax(0,1fr)] gap-x-4 md:grid-cols-[1fr_72px_1fr] md:items-start md:gap-x-0 ${
                      isLeft ? '' : 'md:text-left'
                    }`}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35, margin: '-80px 0px' }}
                    transition={{
                      duration: 0.55,
                      ease: 'easeOut',
                      delay: Math.min(index * 0.04, 0.18),
                    }}
                  >
                    <div className="relative z-10 col-start-1 row-start-1 grid size-11 place-items-center justify-self-center rounded-full border-[3px] border-trukkas-blue bg-trukkas-bg-alt text-trukkas-blue md:absolute md:left-1/2 md:top-0 md:size-[58px] md:-translate-x-1/2">
                      <Icon size={22} strokeWidth={2.25} />
                    </div>

                    <div
                      className={`col-start-2 min-w-0 ${
                        isLeft ? 'md:col-start-1 md:pr-20' : 'md:col-start-3 md:pl-20'
                      }`}
                    >
                      <p className="text-[11px] font-bold uppercase text-trukkas-blue md:text-[12px]">
                        Step {String(index + 1).padStart(2, '0')}
                      </p>
                      <h2 className="mt-3 max-w-[360px] text-[22px] font-bold leading-[1.12] tracking-[-0.01em] text-[#101010] md:text-[24px]">
                        {step.title}
                      </h2>
                      <p className="mt-4 max-w-[390px] text-[12px] font-medium leading-5 text-cool-700 md:text-[13px] md:leading-6">
                        {step.description}
                      </p>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </AnimatePresence>
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
  image: ImageAsset
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="focus-ring inline-flex h-12 w-[159px] items-center justify-center rounded-[6px] transition hover:-translate-y-0.5"
    >
      <img src={imageSrc(image)} alt={label} className="h-full w-full rounded-[6px]" />
    </a>
  )
}

function AppDownloadSection() {
  return (
    <section id="get-the-app" className="relative min-h-[470px] overflow-hidden bg-trukkas-dark-blue md:min-h-[610px]">
      <img
        src={imageSrc(truckSunset)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_54/0.16),rgb(0_0_54/0.35))]" />
      <div className="container-shell relative z-10 flex min-h-[470px] flex-col items-center justify-center px-2 py-18 text-center text-white md:min-h-[610px]">
        <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
          Get the app
        </span>
        <h2 className="mt-6 max-w-[620px] text-[39px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[58px]">
          The freight marketplace in your pocket.
        </h2>
        <p className="mt-5 max-w-[580px] text-[13px] font-medium leading-6 text-white/90 md:text-[15px]">
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
              <img src={imageSrc(logoFooter)} alt="Trukkas" className="h-[70px] w-auto md:h-[62px]" />
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
                      <li key={link}>
                        <a
                          href={
                            link === 'Home'
                              ? '/'
                              : link === 'For Truckers'
                                ? '/for-truckers'
                                : link === 'Safety & Trust'
                                  ? '/safety-and-trust'
                                  : '/how-it-works'
                          }
                          className="transition hover:text-white"
                        >
                          {link}
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

function HowItWorksScreen() {
  const [audience, setAudience] = useState<Audience>('forwarders')

  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <GeneralNav activeHref="/how-it-works" />
        <HeroSection />
        <AudienceTabs audience={audience} setAudience={setAudience} />
        <Timeline audience={audience} />
        <AppDownloadSection />
        <Footer />
      </div>
    </PageTransition>
  )
}

export default HowItWorksScreen
