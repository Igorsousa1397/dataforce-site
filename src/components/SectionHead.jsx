import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <Reveal className="max-w-[660px] mb-[54px]">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-[clamp(30px,4.5vw,46px)] my-[14px]">{title}</h2>
      {children && <p className="text-muted text-[17px]">{children}</p>}
    </Reveal>
  )
}
