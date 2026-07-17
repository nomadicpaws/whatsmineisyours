import type { CSSProperties } from 'react'
import type { Product } from '@/data/products'

export function ProductVisual({ product }: { product: Product }) {
  return (
    <div
      className={`product-visual product-visual--${product.visual}`}
      style={{ '--product-accent': product.accent } as CSSProperties}
      aria-label={`${product.designer} ${product.name}`}
      role="img"
    >
      <span className="visual-shadow" />
      <span className="visual-object" />
      <span className="visual-detail visual-detail--one" />
      <span className="visual-detail visual-detail--two" />
      <span className="visual-grain" />
    </div>
  )
}
