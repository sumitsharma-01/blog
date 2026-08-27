/** Turbo UI v2 has no published Slider composite; this preserves accessible scroll-snap carousel behaviour. */
export default function Slider({ children, gap = '1rem', edgeGap = '0px', className = '' }) {
  return <div className={`flex snap-x snap-mandatory overflow-x-auto ${className}`} style={{ gap, paddingInline: edgeGap }}>{children}</div>
}
