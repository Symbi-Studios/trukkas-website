import { notFound } from 'next/navigation'
import PolicyScreen from '../../screen/PolicyScreen'
import { getPolicy } from '../../data/policies'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/driver-policy')

export default function DriverPolicyPage() {
  const policy = getPolicy('driver-policy')

  if (!policy) {
    notFound()
  }

  return <PolicyScreen policy={policy} />
}
