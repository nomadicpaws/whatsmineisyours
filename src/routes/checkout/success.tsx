import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/success')({
  component: CheckoutSuccess,
})

function CheckoutSuccess() {
  return (
    <div className="product-page min-h-screen flex items-center justify-center">
      <div className="condition-note text-center max-w-lg block">
        <div className="text-4xl mb-5">&#10003;</div>
        <h1 className="font-[var(--serif)] text-5xl font-normal mb-4">The story continues.</h1>
        <p className="mb-8">Your payment is complete. The seller now prepares your piece for its next chapter.</p>
        <Link to="/" className="button-link">Return to the edit</Link>
      </div>
    </div>
  )
}
