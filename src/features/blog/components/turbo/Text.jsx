import TextV2 from '@cspl-cars24/text-v2'

const typography = { h1: 'display-1-bold', h2: 'heading-h2-bold', h3: 'heading-h3-bold', p: 'body-2', span: 'body-3' }
const typographyClasses = {
  'display-1-bold': 'text-display-1-bold',
  'heading-h2-bold': 'text-heading-h2-bold',
  'heading-h3-bold': 'text-heading-h3-bold',
  'body-1': 'text-body-1',
  'body-2': 'text-body-2',
  'body-3': 'text-body-3',
}

export default function Text({ text, as = 'span', className, typography: requestedTypography, ...props }) {
  const inverse = className?.includes('inverse') || className?.includes('alpha-white') || className?.includes('text-white')
  const selectedTypography = requestedTypography ?? typography[as] ?? 'body-2'
  return <TextV2 {...props} content={text ?? ''} as={as} typography={selectedTypography} color={inverse ? 'primary-inverse' : 'primary'} className={`${typographyClasses[selectedTypography] ?? ''} ${className ?? ''}`} />
}
