import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'

function AboutScreen() {
  return (
    <PageTransition>
      <>
        <section className="bg-cool-100 py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="About"
              title="A dedicated company page is in place."
              description="The structure is prepared for brand story, operations proof, team details, and any assets you send."
            />
          </div>
        </section>
        <SiteFooter />
      </>
    </PageTransition>
  )
}

export default AboutScreen
