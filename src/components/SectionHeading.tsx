'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: ReactNode
  align?: 'left' | 'center'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && (
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.14em] text-trukkas-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[32px] font-bold leading-[1.12] tracking-[-0.01em] text-trukkas-dark-blue md:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-7 text-cool-700">{description}</p>
      )}
    </motion.div>
  )
}

export default SectionHeading
