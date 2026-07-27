import Button from '../components/Button'
import PageTransition from '../components/PageTransition'

function NotFoundScreen() {
  return (
    <PageTransition>
      <section className="grid min-h-[70vh] place-items-center bg-cool-100 px-6 text-center">
        <div>
          <p className="text-[14px] font-bold uppercase tracking-[0.14em] text-trukkas-blue">
            404
          </p>
          <h1 className="mt-3 text-[44px] font-bold tracking-[-0.01em] text-trukkas-dark-blue">
            Page not found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-cool-700">
            That route is not part of the Trukkas site yet.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/">Back home</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default NotFoundScreen
