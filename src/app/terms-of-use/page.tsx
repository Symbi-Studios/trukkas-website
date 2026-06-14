import { notFound } from 'next/navigation'
import PolicyScreen from '../../screen/PolicyScreen'
import { getPolicy } from '../../data/policies'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/terms-of-use')

export default function TermsOfUsePage() {
  const policy = getPolicy('terms-of-use')

  if (!policy) {
    notFound()
  }

  return <PolicyScreen policy={policy} />
}
