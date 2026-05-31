import Button from '../components/Button'
import PageTransition from '../components/PageTransition'
import SectionHeading from '../components/SectionHeading'

function ContactScreen() {
  return (
    <PageTransition>
      <section className="bg-cool-100 py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1fr]">
          <SectionHeading
            eyebrow="Contact"
            title="Booking and lead capture can live here."
            description="Once you send the final UI, this screen can become a polished quote request flow using the same input and button system."
          />
          <form className="rounded-card bg-white p-6 shadow-soft">
            <div className="grid gap-4">
              <input
                className="h-12 rounded-[6px] border border-cool-400 px-4 text-[14px] outline-none transition focus:border-trukkas-blue"
                placeholder="Full name"
              />
              <input
                className="h-12 rounded-[6px] border border-cool-400 px-4 text-[14px] outline-none transition focus:border-trukkas-blue"
                placeholder="Email address"
              />
              <textarea
                className="min-h-32 resize-none rounded-[6px] border border-cool-400 px-4 py-3 text-[14px] outline-none transition focus:border-trukkas-blue"
                placeholder="Tell us what you need moved"
              />
              <Button type="submit">Request a quote</Button>
            </div>
          </form>
        </div>
      </section>
    </PageTransition>
  )
}

export default ContactScreen
