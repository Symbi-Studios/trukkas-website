import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'light'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  href?: string
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-trukkas-blue text-white shadow-button hover:-translate-y-0.5 hover:bg-[#063bd0]',
  secondary:
    'border border-trukkas-blue bg-white text-trukkas-blue hover:-translate-y-0.5 hover:bg-cool-100',
  dark:
    'bg-trukkas-dark-blue text-white hover:-translate-y-0.5 hover:bg-[#07075a]',
  light:
    'bg-trukkas-light-blue text-white hover:-translate-y-0.5 hover:bg-[#61cef8]',
}

function Button({
  children,
  className = '',
  href,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = `focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[14px] font-bold transition duration-300 ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
