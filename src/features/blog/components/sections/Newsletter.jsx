import { useState } from 'react'
import TextInput from '../turbo/TextInput'
import Text from '../turbo/Text'
import Button from '../turbo/Button'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) {
      setError('Please enter your email address.')
      return
    }
    if (!emailPattern.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <section id="subscribe" className="mx-auto max-w-7xl px-24">
      <div className="relative overflow-hidden rounded-alt-xl bg-slate-950 px-24 py-64 text-primary-inverse md:px-48 md:py-80">

        <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2>
          <Text text="Never miss a " as="span" typography="display-1-bold" className="text-primary-inverse" />
          <Text text="good drive" as="span" typography="display-1-bold" className="whitespace-nowrap text-mint-green-400" />
        </h2>
        <Text
          text="Get new stories on technology, mobility and the road ahead — straight to your inbox. No spam, unsubscribe anytime."
          as="p"
          typography="body-1"
          className="mx-auto mt-12 max-w-xl text-primary-inverse"
        />

        {done ? (
          <Text text="You’re in. Watch your inbox. 🚗" as="p" typography="body-1" className="mt-32 text-primary-inverse" />
        ) : (
          <form
            className="mx-auto mt-32 flex w-full max-w-xl flex-col gap-12 sm:flex-row sm:items-start"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="min-w-0 flex-1 text-left">
              <TextInput
                className="w-full"
                configuration={{
                  value: email,
                  type: 'email',
                  placeholder: 'you@example.com',
                  size: 'large',
                  variant: 'default',
                  error: Boolean(error),
                  errorText: error,
                }}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError('')
                }}
              />
            </div>
            <div className="w-full shrink-0 sm:w-200">
              <Button cta={{ text: 'Subscribe', variant: 'primary', size: 'medium', type: 'submit' }} />
            </div>
          </form>
        )}
        </div>
      </div>
    </section>
  )
}
