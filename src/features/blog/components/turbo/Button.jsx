import ButtonV2 from '@cspl-cars24/button-v2'

export default function Button({ cta = {}, onClick, ...props }) {
  return (
    <ButtonV2
      {...props}
      text={cta.text ?? props.text ?? ''}
      variant={cta.variant === 'white' ? 'primary' : (cta.variant ?? 'primary')}
      size={cta.size ?? 'medium'}
      type={cta.type ?? 'button'}
      onAction={onClick}
    />
  )
}
