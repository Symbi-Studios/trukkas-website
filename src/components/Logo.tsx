import { Link } from 'react-router-dom'

type LogoProps = {
  compact?: boolean
}

function Logo({ compact = false }: LogoProps) {
  return (
    <Link to="/" className="focus-ring inline-flex items-center gap-2 rounded-card">
      <span className="grid size-8 place-items-center rounded-[6px] bg-trukkas-blue text-white">
        <span className="block h-4 w-4 skew-x-[-12deg] rounded-[2px] bg-white" />
      </span>
      {!compact && (
        <span className="text-[18px] font-bold tracking-[-0.01em] text-trukkas-blue">
          Trukkas
        </span>
      )}
    </Link>
  )
}

export default Logo
