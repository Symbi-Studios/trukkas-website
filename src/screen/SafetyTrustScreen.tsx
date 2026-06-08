'use client'

import { motion } from 'framer-motion'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import { imageSrc, type ImageAsset } from '../lib/assets'
import appStoreButton from '../assets/app-store-button-tight.png'
import playStoreButton from '../assets/play-store-button-tight.png'
import safetyDocumentsCard from '../assets/safety-documents-card.png'
import safetyEscrowCard from '../assets/safety-escrow-card.png'
import safetyProgressCard from '../assets/safety-progress-card.png'
import safetyVerificationCard from '../assets/safety-verification-card.png'
import truckSunset from '../assets/truck-sunset.png'

const trustSteps = [
  {
    number: '01',
    title: 'Everyone on the platform has been checked.',
    description:
      'Every trucker and driver verifies their identity, licence and truck before going live. Each vehicle is individually reviewed. Drivers must be linked to a registered company before they can accept a job. Every account is reviewed by our ops team. Nothing goes live automatically.',
    image: safetyVerificationCard,
    imageFirst: true,
  },
  {
    number: '02',
    title: 'Your money is held until the job is actually done.',
    description:
      'When you accept an offer, your full payment goes into escrow. 30% releases to get your driver moving. The remaining 70% stays locked until you confirm offloading is complete and the container is returned. The terms are clear before you ever confirm a job.',
    image: safetyEscrowCard,
    imageFirst: false,
  },
  {
    number: '03',
    title: 'No truck moves on bad paperwork.',
    description:
      'Your TDO and Terminal Exit Note are reviewed before any driver is dispatched. If a document fails review, you get a specific reason and can fix it without starting over. At the pickup terminal, the driver confirms documents in-app before touching the cargo.',
    image: safetyDocumentsCard,
    imageFirst: true,
  },
  {
    number: '04',
    title: 'Visibility from the port gate to your door.',
    description:
      'Track your cargo on live GPS from the moment the truck leaves the terminal. The driver photographs the loaded container at pickup. At delivery, your unlock code starts offloading. Every step is logged. Drivers who go dark lose standing for future jobs.',
    image: safetyProgressCard,
    imageFirst: false,
  },
]

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-success md:text-[11px]">
      <span className="size-1.5 rounded-full bg-success" />
      {children}
    </span>
  )
}

function HeroSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#55b9d8_0%,#b9e2e9_48%,#eeefea_100%)] pb-24 pt-24 md:min-h-[760px] md:pb-32 md:pt-[250px]">
      <motion.div
        className="container-shell text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <Eyebrow>For truckers</Eyebrow>
        <h1 className="mx-auto mt-6 max-w-[880px] text-[38px] font-bold leading-[0.98] tracking-[-0.02em] text-[#101010] md:text-[82px]">
          Trust isn&apos;t assumed.
          <br />
          It&apos;s built in.
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-[12px] font-bold leading-5 text-[#151515] md:text-[15px] md:leading-6">
          Verified drivers. Escrowed payments. Logged movements. Accountability is
          not a feature on Trukkas it is how the platform works.
        </p>
      </motion.div>
    </section>
  )
}

function TrustStep({
  step,
  index,
}: {
  step: (typeof trustSteps)[number]
  index: number
}) {
  const textBlock = (
    <div className="max-w-[520px]">
      <span className="block text-[92px] font-bold leading-none tracking-[-0.04em] text-[#c5d5ff] md:text-[128px]">
        {step.number}
      </span>
      <h2 className="mt-5 text-[31px] font-bold leading-[0.98] tracking-[-0.02em] text-[#101010] md:text-[42px]">
        {step.title}
      </h2>
      <p className="mt-6 text-[12px] font-bold leading-5 text-[#151515] md:text-[14px] md:leading-6">
        {step.description}
      </p>
    </div>
  )

  const imageBlock = (
    <img
      src={imageSrc(step.image)}
      alt=""
      className="mx-auto w-full max-w-[380px] rounded-[16px] md:max-w-[465px]"
    />
  )

  return (
    <motion.article
      className="grid gap-8 md:grid-cols-2 md:items-center md:gap-22"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: Math.min(index * 0.04, 0.12), duration: 0.55, ease: 'easeOut' }}
    >
      <div className={step.imageFirst ? 'md:order-1' : 'md:order-2'}>{imageBlock}</div>
      <div className={step.imageFirst ? 'md:order-2' : 'md:order-1'}>{textBlock}</div>
    </motion.article>
  )
}

function TrustSystemSection() {
  return (
    <section className="bg-trukkas-bg-alt pb-20 pt-8 md:pb-34 md:pt-4">
      <div className="container-shell grid gap-16 md:gap-24">
        {trustSteps.map((step, index) => (
          <TrustStep key={step.number} step={step} index={index} />
        ))}
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
    <section id="get-the-app" className="relative min-h-[470px] overflow-hidden bg-trukkas-dark-blue md:min-h-[560px]">
      <img
        src={imageSrc(truckSunset)}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_54/0.14),rgb(0_0_54/0.4))]" />
      <div className="container-shell relative z-10 flex min-h-[470px] flex-col items-center justify-center px-2 py-18 text-center text-white md:min-h-[560px]">
        <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
          Get the app
        </span>
        <h2 className="mt-6 max-w-[760px] text-[35px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[52px]">
          A platform you can trust with your cargo and your money.
        </h2>
        <p className="mt-5 max-w-[680px] text-[13px] font-medium leading-6 text-white/90 md:text-[15px]">
          The same rules apply to every job, every trucker and every forwarder on
          the platform.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <StoreBadge href="#contact" image={appStoreButton} label="Download on the App Store" />
          <StoreBadge href="#contact" image={playStoreButton} label="Download on the Play Store" />
        </div>
      </div>
    </section>
  )
}

function SafetyTrustScreen() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <GeneralNav activeHref="/safety-and-trust" />
        <HeroSection />
        <TrustSystemSection />
        <AppDownloadSection />
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

export default SafetyTrustScreen
