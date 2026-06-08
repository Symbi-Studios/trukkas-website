import AboutScreen from '../../screen/AboutScreen'
import { routeMetadata } from '../../lib/seo'

export const metadata = routeMetadata('/about')

export default function AboutPage() {
  return <AboutScreen />
}
