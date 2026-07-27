import HomeScreen from '../screen/HomeScreen'
import { routeMetadata } from '../lib/seo'

export const metadata = routeMetadata('/')

export default function HomePage() {
  return <HomeScreen />
}
