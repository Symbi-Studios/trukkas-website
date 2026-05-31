import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

function ServicesScreen() {
  return (
    <PageTransition>
      <section className="bg-cool-100 py-24">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Freight pages are ready for the detailed UI."
            description="This route is wired through React Router and can be expanded into the full service experience when the design arrives."
          />
        </div>
      </section>
    </PageTransition>
  )
}

export default ServicesScreen
