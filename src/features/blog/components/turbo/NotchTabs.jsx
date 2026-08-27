/** `notch-tabs-v2` always renders icon nodes; this text-only adapter preserves the requested tab behaviour. */
export default function NotchTabs({ items = [], activeIndex = 0, onTabChange, className, layout: _layout, showIcon: _showIcon, ...props }) {
  return (
    <div {...props} role="tablist" className={`flex min-w-0 gap-12 overflow-x-auto border-b border-secondary ${className ?? ''}`}>
      {items.map((item, index) => (
        <button
          key={item.id ?? item.key ?? index}
          type="button"
          role="tab"
          aria-selected={index === activeIndex}
          className={`shrink-0 border-b-2 px-16 py-12 text-label-2-semibold ${index === activeIndex ? 'border-brand-base-alt text-brand-base-alt' : 'border-transparent text-secondary'}`}
          onClick={() => onTabChange?.(index, item)}
        >
          {item.text ?? item.label}
        </button>
      ))}
    </div>
  )
}
