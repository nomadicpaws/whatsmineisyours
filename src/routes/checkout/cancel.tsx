import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="product-page min-h-screen flex items-center justify-center">
      <div className="condition-note text-center max-w-lg block">
        <h1 className="font-[var(--serif)] text-5xl font-normal mb-4">Still considering?</h1>
        <p className="mb-8">Checkout was closed and no charge was made. The piece is waiting if you want another look.</p>
        <Link to="/" className="button-link">Return to the edit</Link>
      </div>
    </div>
  )
}
