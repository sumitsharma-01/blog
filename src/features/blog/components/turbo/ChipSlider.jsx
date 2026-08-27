import ChipV2 from '@cspl-cars24/chip-v2'

export default function ChipSlider({ items = [], selectedIds = [], onChipClick }) {
  return <div className="flex min-w-0 gap-12 overflow-x-auto">{items.flat().map((item) => <ChipV2 key={item.id} label={item.label} selected={selectedIds.includes(item.id)} onClick={() => onChipClick?.(item.id)} />)}</div>
}
