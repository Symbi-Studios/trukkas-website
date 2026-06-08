'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Check,
  ChevronRight,
  FileText,
} from 'lucide-react'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import { imageSrc, type ImageAsset } from '../lib/assets'
import appStoreButton from '../assets/app-store-button-tight.png'
import heroBottomBar from '../assets/hero-bottom-bar.png'
import driverCardImage from '../assets/hero-driver-card.png'
import documentsCardImage from '../assets/hero-documents-card.png'
import howDocumentsCard from '../assets/how-documents-card.png'
import howEscrowCard from '../assets/how-escrow-card.png'
import howTimelineCard from '../assets/how-timeline-card.png'
import containersImage from '../assets/trukkas-containers-fit.png'
import phoneImage from '../assets/iphone-request.png'
import playStoreButton from '../assets/play-store-button-tight.png'
import truckSunset from '../assets/truck-sunset.png'
import truckField from '../assets/truck-field.png'

const steps = [
  {
    title: 'Submit your job.',
    description:
      'Enter your pickup, destination, container details and TDO. The system checks your TDO is at least 24 hours out. Our ops team reviews your documents before anything moves.',
    image: howDocumentsCard,
  },
  {
    title: 'Pick your trucker.',
    description:
      'Receive offers from verified truckers with their rates and ratings. Accept the one that works. Your payment locks in escrow immediately. 30% mobilizes your driver upfront.',
    image: howEscrowCard,
  },
  {
    title: 'Track it. Confirm it. Done.',
    description:
      'Watch your cargo move on live GPS. At delivery, share your unlock code to start offloading. Confirm completion and the final 70% releases to the trucker automatically.',
    image: howTimelineCard,
  },
]

function HeroSection() {
  return (
    <section className="landing-shell overflow-hidden rounded-[24px] bg-trukkas-light-blue">
      <div className="relative h-[560px] overflow-hidden bg-[linear-gradient(180deg,#58bddf_0%,#b8e9f6_62%,#eef7f8_100%)] md:h-[calc(100svh-68px)] md:min-h-[760px] lg:min-h-[860px] xl:min-h-[920px]">
        <GeneralNav />

        <div className="relative z-20 mx-auto max-w-4xl px-5 pt-18 text-center md:px-6 md:pt-22">
          <motion.div
            className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[8px] font-bold text-success shadow-soft md:mb-6 md:px-4 md:py-1.5 md:text-[12px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="size-2 rounded-full bg-success" />
            Now operating in Lagos
          </motion.div>

          <motion.h1
            className="mx-auto max-w-4xl text-[32px] font-bold leading-[1.02] tracking-[-0.02em] text-[#111111] sm:text-[44px] md:text-[76px] lg:text-[86px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6, ease: 'easeOut' }}
          >
            Move Goods.
            <br />
            Faster. Smarter.
          </motion.h1>

          <motion.p
            className="mx-auto mt-4 max-w-[330px] text-[10px] font-bold leading-4 text-[#151515] md:mt-5 md:max-w-[590px] md:text-[16px] md:leading-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.55 }}
          >
            Request a truck in minutes, get matched instantly, and follow every
            step-from document approval to delivery.
          </motion.p>

          <motion.div
            className="mt-5 flex items-center justify-center gap-3 sm:gap-4 md:mt-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.55 }}
          >
            <a
              href="#get-the-app"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-[5px] bg-trukkas-blue px-4 text-[12px] font-bold text-white shadow-[0px_4px_40px_0px_#0241E84D] transition hover:-translate-y-0.5 sm:px-6 md:h-11 md:text-[13px]"
            >
              Get the App <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="focus-ring inline-flex h-10 items-center gap-2 rounded-[5px] bg-white px-4 text-[12px] font-bold text-trukkas-dark-blue shadow-[0px_4px_40px_0px_#0241E84D] transition hover:-translate-y-0.5 sm:px-6 md:h-11 md:text-[13px]"
            >
              How it works <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-[-22px] z-10 overflow-hidden md:bottom-[-36px] lg:bottom-[-44px]">
          <img
            src={imageSrc(containersImage)}
            alt=""
            className="mx-auto h-[190px] w-full object-cover object-bottom sm:h-[230px] md:h-auto md:w-full md:max-w-none"
          />
        </div>

        <motion.div
          className="absolute left-1/2 top-[290px] z-20 h-[280px] w-[min(1040px,calc(100%-20px))] -translate-x-1/2 sm:top-[325px] md:top-[480px] md:h-[430px] lg:top-[505px]"
          initial={{ opacity: 0, y: 70, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.34, duration: 0.75, ease: 'easeOut' }}
        >
          <img
            src={imageSrc(phoneImage)}
            alt="Trukkas mobile app requesting a cargo truck"
            className="absolute left-1/2 top-0 w-[292px] max-w-[82vw] -translate-x-1/2 sm:w-[330px] md:w-[440px] lg:w-[510px]"
          />
          <img
            src={imageSrc(driverCardImage)}
            alt=""
            className="absolute left-[-76px] top-[132px] w-[225px] drop-shadow-2xl md:left-[4%] md:top-[168px] md:w-[285px] lg:top-[185px] lg:w-[340px]"
          />
          <img
            src={imageSrc(documentsCardImage)}
            alt=""
            className="absolute right-[-150px] top-[58px] w-[260px] drop-shadow-2xl md:right-[-70px] md:top-[178px] md:w-[330px] lg:right-[2%] lg:top-[235px] lg:w-[360px] xl:w-[420px]"
          />
        </motion.div>
      </div>

      <TrustTicker />
    </section>
  )
}

function TrustTicker() {
  return (
    <div
      id="safety-and-trust"
      className="h-[30px] overflow-hidden bg-trukkas-blue md:h-[46px]"
    >
      <img
        src={imageSrc(heroBottomBar)}
        alt=""
        className="h-full w-full max-w-none object-cover object-left"
      />
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

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-trukkas-bg-alt py-14 md:py-32">
      <div className="container-shell">
        <div className="grid gap-8 md:grid-cols-[1fr_0.55fr] md:items-start">
          <div>
            <span className="rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
              How it works
            </span>
            <h2 className="mt-6 max-w-[560px] text-[38px] font-bold leading-[1.02] tracking-[-0.02em] text-[#111111] md:mt-8 md:text-[64px]">
              From request
              <br />
              to delivery.
              <br />
              No guesswork.
            </h2>
          </div>
          <div className="pt-0 md:pt-18">
            <p className="max-w-[340px] text-[13px] font-bold leading-5 text-trukkas-dark-blue md:text-[15px] md:leading-6">
              Structured from the first request to the last kilometre. You stay
              informed at every stage.
            </p>
            <a
              href="#request-flow"
              className="focus-ring mt-5 inline-flex h-8 items-center gap-2 rounded-[5px] border border-gray-400/70 bg-transparent px-3 text-[11px] font-bold text-trukkas-dark-blue transition hover:-translate-y-0.5 md:mt-6 md:h-10 md:px-4 md:text-[12px]"
            >
              See full flow <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div
          id="request-flow"
          className="relative mt-13 grid gap-10 md:mt-24 md:grid-cols-3 md:gap-9"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              className="relative pl-8 md:pl-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: 'easeOut' }}
            >
              <div className="mb-5 hidden items-center gap-3 md:flex">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-trukkas-blue text-[15px] font-bold text-white">
                  {index + 1}
                </span>
                <span className="h-px flex-1 bg-trukkas-blue/45" />
              </div>
              <span className="absolute left-0 top-0 z-10 grid size-7 place-items-center rounded-full bg-trukkas-blue text-[13px] font-bold text-white md:hidden">
                {index + 1}
              </span>
              <span
                className="absolute left-[13px] top-[39px] w-0.5 bg-trukkas-blue/45 md:hidden"
                style={{
                  height:
                    index < steps.length - 1 ? 'calc(100% - 9px)' : 'calc(100% - 44px)',
                }}
              />
              <img
                  src={imageSrc(step.image)}
                alt=""
                className="w-full rounded-[10px] drop-shadow-[0_18px_38px_rgb(0_0_0/0.08)]"
              />
              <h3 className="mt-6 text-[22px] font-bold tracking-[-0.01em] text-[#111111] md:mt-7 md:text-[24px]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[340px] text-[13px] leading-5 text-cool-700 md:mt-4 md:text-[14px] md:leading-6">
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
          className="relative min-h-[600px] overflow-hidden md:min-h-[470px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <img
            src={imageSrc(panel.image)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_54/0.02)_0%,rgb(0_0_54/0.25)_45%,rgb(0_0_54/0.88)_100%)] md:bg-[linear-gradient(180deg,rgb(0_0_54/0.08),rgb(0_0_54/0.78))]" />
          <div className="relative z-10 flex h-full max-w-[560px] flex-col justify-end px-5 pb-12 pt-64 text-white md:px-16 md:pb-16 md:pt-32">
            <span className="mb-5 w-fit rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-trukkas-blue md:bg-white">
              {panel.label}
            </span>
            <h2 className="max-w-[360px] text-[31px] font-bold leading-[1.1] tracking-[-0.02em] md:max-w-none md:text-[46px] md:leading-[1.04]">
              {panel.title}
            </h2>
            <p className="mt-5 max-w-[350px] text-[15px] font-medium leading-6 text-white md:max-w-none md:leading-7 md:text-white/90">
              {panel.body}
            </p>
            <a
              href="#get-the-app"
              className="focus-ring mt-6 inline-flex h-9 w-[146px] items-center justify-center gap-[6px] whitespace-nowrap rounded-[6px] bg-trukkas-blue px-4 py-2 text-[11px] font-bold text-white shadow-[0px_4px_40px_0px_#0241E84D] transition hover:-translate-y-0.5 md:mt-7 md:h-11 md:w-fit md:rounded-[5px] md:px-5 md:py-0 md:text-[13px]"
            >
              {panel.button} <ArrowRight size={14} className="md:size-[15px]" />
            </a>
          </div>
        </motion.article>
      ))}
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
      <img
        src={imageSrc(image)}
        alt={label}
        className="h-full w-full rounded-[6px]"
      />
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
        <div className="mt-6 flex items-center justify-center gap-3 sm:mt-8 md:gap-3">
          <StoreBadge
            href="#contact"
            image={appStoreButton}
            label="Download on the App Store"
          />
          <StoreBadge
            href="#contact"
            image={playStoreButton}
            label="Download on the Play Store"
          />
        </div>
      </div>
    </section>
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
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

export default HomeScreen
