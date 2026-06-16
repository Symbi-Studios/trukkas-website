'use client'

import { motion } from 'framer-motion'
import {
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Send,
} from 'lucide-react'
import { type FormEvent, useState } from 'react'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import { imageSrc, type ImageAsset } from '../lib/assets'
import appStoreButton from '../assets/app-store-button-tight.png'
import playStoreButton from '../assets/play-store-button-tight.png'
import truckSunset from '../assets/truck-sunset.png'

const web3FormsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as
  | string
  | undefined

const web3FormsEndpoint = 'https://api.web3forms.com/submit'

const infoCards = [
  {
    title: 'Email us',
    body: ['hello@trukkas.com', 'support@trukkas.com'],
    icon: Mail,
  },
  {
    title: 'Based in Lagos',
    body: ['11B Pelewura way, Airways Bus Stop, Apapa Lagos, Nigeria'],
    icon: MapPin,
  },
  {
    title: 'Response time',
    body: [
      'We respond to all enquiries within one business day. Operational support is available seven days a week.',
    ],
    icon: Clock3,
  },
]

function BluePill({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-trukkas-blue/10 px-3 py-1.5 text-[9px] font-bold text-trukkas-blue md:text-[11px]">
      {children}
    </span>
  )
}

function HeroSection() {
  return (
    <section className="bg-trukkas-bg-alt pb-20 pt-24 md:pb-40 md:pt-[210px]">
      <motion.div
        className="container-shell text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      >
        <BluePill>Get started</BluePill>
        <h1 className="mx-auto mt-6 max-w-[700px] text-[42px] font-bold leading-[0.98] tracking-[-0.02em] text-[#101010] md:text-[86px]">
          Ready to move smarter?
        </h1>
        <p className="mx-auto mt-6 max-w-[670px] text-[13px] font-bold leading-5 text-[#151515] md:text-[18px] md:leading-7">
          Download the app to post your first job or register your fleet. Send us a
          message and we will get back to you within a business day.
        </p>
      </motion.div>
    </section>
  )
}

function TextInput({
  label,
  name,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  placeholder: string
  type?: string
}) {
  return (
    <label className="grid gap-2 text-[13px] font-bold text-[#101010]">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="h-12 rounded-[6px] border border-cool-400 bg-white px-4 text-[14px] font-medium text-[#101010] outline-none transition placeholder:text-cool-600 focus:border-trukkas-blue"
      />
    </label>
  )
}

function ContactForm() {
  const [submitState, setSubmitState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!web3FormsAccessKey) {
      setSubmitState('error')
      setStatusMessage('Web3Forms access key is not configured yet.')
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      access_key: web3FormsAccessKey,
      subject: 'New Trukkas contact form message',
      from_name: 'Trukkas Landing',
      ...Object.fromEntries(formData.entries()),
    }

    setSubmitState('submitting')
    setStatusMessage('')

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? 'Web3Forms submission failed')
      }

      form.reset()
      setSubmitState('success')
      setStatusMessage('Message sent. We will get back to you within one business day.')
    } catch {
      setSubmitState('error')
      setStatusMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  const isSubmitting = submitState === 'submitting'

  return (
    <motion.form
      className="rounded-[22px] bg-white p-8 shadow-[0_20px_55px_rgb(0_0_0/0.10)] md:p-9"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      onSubmit={handleSubmit}
    >
      <h2 className="text-[31px] font-bold leading-tight tracking-[-0.01em] text-[#101010] md:text-[36px]">
        Send us a message
      </h2>
      <p className="mt-5 text-[15px] font-bold leading-6 text-cool-700 md:text-[17px]">
        We respond to every message within one business day.
      </p>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <TextInput label="First name" name="firstName" placeholder="Adaeze" />
          <TextInput label="Last name" name="lastName" placeholder="Obi" />
        </div>
        <TextInput
          label="Email address"
          name="email"
          placeholder="adaeze@example.com"
          type="email"
        />
        <TextInput
          label="Phone number"
          name="phone"
          placeholder="+234 800 000 0000"
          type="tel"
        />

        <label className="grid gap-2 text-[13px] font-bold text-[#101010]">
          I am a...
          <span className="relative">
            <select
              name="role"
              defaultValue=""
              required
              className="h-12 w-full appearance-none rounded-[6px] border border-cool-500 bg-white px-4 pr-11 text-[14px] font-medium text-cool-700 outline-none transition focus:border-trukkas-blue"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option>Freight forwarder</option>
              <option>Owner-driver</option>
              <option>Trucking company</option>
              <option>Other</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#101010]"
              size={18}
            />
          </span>
        </label>

        <label className="grid gap-2 text-[13px] font-bold text-[#101010]">
          Message
          <textarea
            name="message"
            placeholder="Tell us what you need"
            required
            className="min-h-[122px] resize-none rounded-[6px] border border-cool-400 bg-white px-4 py-4 text-[14px] font-medium text-[#101010] outline-none transition placeholder:text-cool-600 focus:border-trukkas-blue"
          />
        </label>

        {statusMessage && (
          <p
            className={`rounded-[6px] px-4 py-3 text-[13px] font-bold ${
              submitState === 'success'
                ? 'bg-success/10 text-success'
                : 'bg-error/10 text-error'
            }`}
            role="status"
          >
            {statusMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="focus-ring mt-1 inline-flex h-12 items-center justify-center gap-3 rounded-[6px] bg-trukkas-blue px-5 text-[14px] font-bold text-white shadow-[0_14px_28px_rgb(2_65_232/0.25)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {isSubmitting ? 'Sending...' : 'Send message'} <Send size={20} />
        </button>
      </div>
    </motion.form>
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

function AppCard() {
  return (
    <motion.article
      id="get-the-app"
      className="rounded-[20px] bg-trukkas-dark-blue p-8 text-white md:p-9"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <h2 className="text-[31px] font-bold leading-tight tracking-[-0.01em] md:text-[36px]">
        Available on iOS & Android
      </h2>
      <p className="mt-6 max-w-[560px] text-[15px] font-medium leading-6 text-white/80 md:text-[17px] md:leading-7">
        Post jobs, compare offers, track your cargo live and manage payments from
        one place.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <StoreBadge href="#contact" image={appStoreButton} label="Download on the App Store" />
        <StoreBadge href="#contact" image={playStoreButton} label="Download on the Play Store" />
      </div>
    </motion.article>
  )
}

function InfoCard({
  title,
  body,
  icon: Icon,
}: {
  title: string
  body: string[]
  icon: typeof Mail
}) {
  return (
    <motion.article
      className="flex gap-6 rounded-[20px] bg-white p-8 shadow-[0_18px_45px_rgb(0_0_0/0.08)]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-[10px] bg-trukkas-blue/10 text-trukkas-blue">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="text-[20px] font-bold leading-tight text-[#101010]">{title}</h3>
        <div className="mt-3 grid gap-1 text-[14px] font-medium leading-6 text-cool-700 md:text-[16px]">
          {body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function ContactDetailsSection() {
  return (
    <section className="bg-trukkas-bg-alt pb-20 md:pb-36">
      <div className="container-shell grid gap-8 md:grid-cols-[0.95fr_1fr] md:items-start md:gap-16">
        <ContactForm />
        <div className="grid gap-7">
          <AppCard />
          {infoCards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AppDownloadSection() {
  return (
    <section className="relative min-h-[470px] overflow-hidden bg-trukkas-dark-blue md:hidden">
      <img
        src={imageSrc(truckSunset)}
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

function ContactScreen() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <GeneralNav activeHref="/contact" />
        <HeroSection />
        <ContactDetailsSection />
        <AppDownloadSection />
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

export default ContactScreen
