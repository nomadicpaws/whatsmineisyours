import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, Check, MapPin, ShieldCheck, Truck } from 'lucide-react'
import products from '../../data/products'
import { BuyButton } from '@/components/BuyButton'
import { ProductVisual } from '@/components/ProductVisual'

export const Route = createFileRoute('/products/$productId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    const product = products.find((item) => item.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function RouteComponent() {
  const product = Route.useLoaderData()

  return (
    <div className="product-page">
      <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to the edit</Link>
      <div className="product-detail-grid">
        <div className="product-detail-visual">
          <ProductVisual product={product} />
          <span className="product-index">SS—{String(product.id).padStart(3, '0')}</span>
        </div>
        <div className="product-detail-copy">
          <p className="eyebrow"><span /> {product.category} · {product.condition}</p>
          <p className="product-designer">{product.designer}</p>
          <h1>{product.name}</h1>
          <p className="product-price">${product.price} <s>${product.originalPrice}</s></p>
          <p className="product-description">{product.description}</p>

          <dl className="product-facts">
            <div><dt>Size</dt><dd>{product.size}</dd></div>
            <div><dt>Condition</dt><dd>{product.condition}</dd></div>
            <div><dt>Seller</dt><dd>{product.seller}</dd></div>
            <div><dt>Listed</dt><dd>{product.listed}</dd></div>
          </dl>

          <BuyButton productId={product.id} className="buy-button" />

          <div className="purchase-assurances">
            <p><ShieldCheck size={19} /><span><strong>Buyer protection</strong>Secure payment and support if the item isn’t as described.</span></p>
            <p><Truck size={19} /><span><strong>Tracked delivery</strong>Shipping is coordinated directly with the seller after purchase.</span></p>
            <p><MapPin size={19} /><span><strong>Ships from</strong>{product.location}</span></p>
          </div>
        </div>
      </div>
      <aside className="condition-note">
        <Check size={21} />
        <div><strong>Condition checked</strong><p>Every listing includes seller-supplied condition details so you can buy with clarity.</p></div>
      </aside>
    </div>
  )
}
