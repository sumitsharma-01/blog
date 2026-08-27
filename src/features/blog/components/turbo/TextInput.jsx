import TextInputV2 from '@cspl-cars24/text-input-v2'

export default function TextInput({ configuration = {}, onChange, ...props }) {
  return <TextInputV2 {...props} value={configuration.value} type={configuration.type} placeholder={configuration.placeholder} error={configuration.error} errorText={configuration.errorText} size={configuration.size === 'large' ? 'lg' : 'sm'} onChange={onChange} />
}
