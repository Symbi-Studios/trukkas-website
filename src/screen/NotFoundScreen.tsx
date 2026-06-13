import Button from '../components/Button'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'

function NotFoundScreen() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <GeneralNav ctaHref="/#get-the-app" />
        <section className="grid min-h-[640px] place-items-center bg-[linear-gradient(180deg,#78D7FF_0%,#E8ECF1_54%,#EEEFEA_100%)] px-6 pb-20 pt-32 text-center md:min-h-[720px] md:pt-40">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-trukkas-blue">
              404
            </p>
            <h1 className="mt-4 text-[42px] font-bold leading-[1] tracking-[-0.02em] text-[#101010] md:text-[74px]">
              Page not found.
            </h1>
            <p className="mx-auto mt-5 max-w-[520px] text-[13px] font-bold leading-6 text-[#151515] md:text-[15px]">
              This page is not part of the Trukkas site. Use the main navigation
              or return home to continue.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/">Back home</Button>
            </div>
          </div>
        </section>
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

export default NotFoundScreen
