'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PageTransitionProps = {
  children: ReactNode
}

function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
