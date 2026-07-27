import { notFound } from 'next/navigation'
import PolicyScreen from '../../screen/PolicyScreen'
import { getPolicy } from '../../data/policies'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/privacy-policy')

export default function PrivacyPolicyPage() {
  const policy = getPolicy('privacy-policy')

  if (!policy) {
    notFound()
  }

  return <PolicyScreen policy={policy} />
}
