import ServicesScreen from '../../screen/ServicesScreen'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/services')

export default function ServicesPage() {
  return <ServicesScreen />
}
