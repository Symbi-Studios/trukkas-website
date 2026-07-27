import Button from '../components/Button'
import GeneralNav from '../components/GeneralNav'
import PageTransition from '../components/PageTransition'
import SiteFooter from '../components/SiteFooter'
import type { PolicyContentBlock, PolicyDocument } from '../data/policies'

type PolicyScreenProps = {
  policy: PolicyDocument
}

function blockClassName(kind: PolicyContentBlock['kind']) {
  switch (kind) {
    case 'title':
      return 'text-[28px] font-bold leading-tight tracking-[-0.01em] text-[#101010] md:text-[36px]'
    case 'subtitle':
      return 'text-[15px] font-bold leading-7 text-trukkas-blue md:text-[17px]'
    case 'section':
      return 'mt-11 text-[24px] font-bold leading-tight tracking-[-0.01em] text-[#101010] md:text-[34px]'
    case 'subsection':
      return 'mt-8 text-[18px] font-bold leading-snug text-[#101010] md:text-[22px]'
    case 'listItem':
      return 'ml-5 text-[14px] font-medium leading-7 text-[#252525] md:text-[16px] md:leading-8'
    default:
      return 'text-[14px] font-medium leading-7 text-[#252525] md:text-[16px] md:leading-8'
  }
}

function PolicyBlock({ block }: { block: PolicyContentBlock }) {
  if (block.kind === 'title') {
    return <h2 className={blockClassName(block.kind)}>{block.text}</h2>
  }

  if (block.kind === 'subtitle') {
    return <p className={blockClassName(block.kind)}>{block.text}</p>
  }

  if (block.kind === 'section') {
    return <h2 className={blockClassName(block.kind)}>{block.text}</h2>
  }

  if (block.kind === 'subsection') {
    return <h3 className={blockClassName(block.kind)}>{block.text}</h3>
  }

  return <p className={blockClassName(block.kind)}>{block.text}</p>
}

function PolicyScreen({ policy }: PolicyScreenProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-trukkas-bg-alt">
        <GeneralNav ctaHref="/#get-the-app" />
        <section className="bg-[linear-gradient(180deg,#78D7FF_0%,#E8ECF1_58%,#EEEFEA_100%)] px-6 pb-16 pt-32 text-center md:pb-24 md:pt-44">
          <div className="mx-auto max-w-[920px]">
            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-trukkas-blue">
              {policy.eyebrow}
            </span>
            <h1 className="mx-auto mt-6 max-w-[850px] text-[42px] font-bold leading-[0.98] tracking-[-0.02em] text-[#101010] md:text-[78px]">
              {policy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-[13px] font-bold leading-6 text-[#151515] md:text-[16px]">
              {policy.description}
            </p>
            <p className="mt-4 text-[12px] font-bold text-[#151515]/65">
              {policy.updatedLabel}
            </p>
          </div>
        </section>

        <section className="bg-trukkas-bg-alt px-5 py-14 md:py-24">
          <article className="mx-auto max-w-[980px] rounded-[18px] bg-white px-5 py-8 shadow-[0_24px_70px_rgb(0_0_0/0.08)] md:px-12 md:py-12">
            {/* <div className="mb-10 flex flex-col gap-4 border-b border-cool-300 pb-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-trukkas-blue">
                  Source document
                </p>
                <p className="mt-2 text-[14px] font-bold text-[#101010]">
                  {policy.sourceFile}
                </p>
              </div>
              <Button href="/" variant="secondary" className="w-fit rounded-[6px]">
                Back home
              </Button>
            </div> */}

            <div className="grid gap-4">
              {policy.content.map((block, index) => (
                <PolicyBlock key={`${block.kind}-${index}-${block.text}`} block={block} />
              ))}
            </div>
          </article>
        </section>
        <SiteFooter />
      </div>
    </PageTransition>
  )
}

export default PolicyScreen
