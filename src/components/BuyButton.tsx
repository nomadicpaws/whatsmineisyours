import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  productId,
  className = '',
}: {
  productId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    if (stripeEnabled === false) {
      setMessage('Checkout opens once Stripe is connected.')
      return
    }
    setLoading(true)
    try {
      const url = await createCheckoutSession({ data: productId })
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      setMessage('Checkout could not open. Please try again in a moment.')
      setLoading(false)
    }
  }

  return (
    <div className="buy-button-wrap">
      <button
        onClick={handleClick}
        disabled={loading || stripeEnabled === null}
        className={className}
        type="button"
      >
        {loading ? 'Opening checkout…' : 'Buy this piece'}
      </button>
      {message && <p className="checkout-message" role="status">{message}</p>}
    </div>
  )
}
