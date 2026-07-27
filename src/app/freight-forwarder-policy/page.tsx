import { notFound } from 'next/navigation'
import PolicyScreen from '../../screen/PolicyScreen'
import { getPolicy } from '../../data/policies'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/freight-forwarder-policy')

export default function FreightForwarderPolicyPage() {
  const policy = getPolicy('freight-forwarder-policy')

  if (!policy) {
    notFound()
  }

  return <PolicyScreen policy={policy} />
}
