import { useState } from 'react'
import TextInput from '../turbo/TextInput'
import Text from '../turbo/Text'
import '../../styles/hero.css'

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
      <div className="relative overflow-hidden rounded-alt-xl bg-slate-950 px-24 py-66 text-primary-inverse md:px-48 md:py-80">
        {/* Liquid-glass distortion filter — animated turbulence displaces the
            caustic light so it ripples and flows like liquid behind glass. */}
        <svg aria-hidden width="0" height="0" className="absolute">
          <filter id="nl-liquid" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.006 0.011" numOctaves="2" seed="4" result="noise">
              <animate attributeName="baseFrequency" dur="18s" values="0.006 0.011;0.013 0.017;0.006 0.011" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="36" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
        {/* Caustics — drifting light blobs, displaced by the turbulence, so the
            liquid glass shows moving refracted light on the dark base. */}
        <div className="nl-caustics pointer-events-none absolute" aria-hidden />
        {/* Glass sheen — a top highlight and inset edge that read as a pane of
            glass sitting over the rippling liquid. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-alt-xl"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 22%, rgba(255,255,255,0) 45%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 0 0 1px rgba(255,255,255,0.06)',
          }}
        />

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
            className="mx-auto mt-32 flex w-full max-w-[29.5rem] flex-col gap-12 sm:flex-row sm:items-start"
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
            {/* Button v2 has no white-surface variant. This compact control
                preserves the required reference treatment until one exists. */}
            <button type="submit" className="h-44 w-full shrink-0 rounded-alt-lg bg-primary text-label-1-semibold text-primary sm:w-[9.375rem]">
              Subscribe
            </button>
          </form>
        )}
        </div>
      </div>
    </section>
  )
}
