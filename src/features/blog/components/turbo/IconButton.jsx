import IconButtonV2 from '@cspl-cars24/icon-button-v2'

export default function IconButton({ theme, size, iconSize: _iconSize, className, ...props }) {
  const dark = theme?.includes('inverse')
  const selected = theme === 'brand'
  const action = size === 'action'
  return <IconButtonV2 {...props} className={[action ? 'h-40 w-40' : '', className].filter(Boolean).join(' ')} theme={dark ? 'dark' : 'light'} variant={selected ? 'solid-primary' : 'outline-black'} size={action ? 'md' : ({ base: 'md', small: 'sm', large: 'lg' }[size] ?? size ?? 'md')} />
}
