import { Star } from './Icons'

// Avaliações reais da DataForce (confirmadas pelo cliente).
// Produção: idealmente use os selos/widgets oficiais de cada plataforma
// e aponte cada item para o perfil real de avaliações.
const data = [
  ['Google', '4,8'],
  ['Trustpilot', '4,8'],
  ['Capterra', '4,8'],
]

export default function Ratings() {
  return (
<div className="flex flex-wrap gap-2.5">
      {data.map(([name, score]) => (
        <div
          key={name}
          className="flex items-center gap-2.5 bg-[rgba(180,166,206,0.06)] border border-[var(--line)] rounded-full px-[14px] py-2"
        >
          <span className="text-[12.5px] font-semibold text-ink">{name}</span>
          <span className="flex gap-[2px] text-bronze">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-[13px] h-[13px]" />)}
          </span>
          <span className="text-[12.5px] font-bold text-bronze-soft">{score}</span>
        </div>
      ))}
    </div>
  )
}
