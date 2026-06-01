import { Route, Routes } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import AboutScreen from './screen/AboutScreen'
import ContactScreen from './screen/ContactScreen'
import HowItWorksScreen from './screen/HowItWorksScreen'
import HomeScreen from './screen/HomeScreen'
import NotFoundScreen from './screen/NotFoundScreen'
import ServicesScreen from './screen/ServicesScreen'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="how-it-works" element={<HowItWorksScreen />} />
        <Route path="services" element={<ServicesScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Route>
    </Routes>
  )
}

export default App
