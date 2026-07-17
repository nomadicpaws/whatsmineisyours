import { Link, createFileRoute } from '@tanstack/react-router'
import { ArrowDown, ArrowUpRight, Heart, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ProductVisual } from '@/components/ProductVisual'
import products, { type ProductCategory } from '@/data/products'

export const Route = createFileRoute('/')({
  component: ProductsIndex,
})

const categories: Array<'All' | ProductCategory> = [
  'All',
  'Clothing',
  'Bags',
  'Shoes',
  'Home',
]

function ProductsIndex() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('All')
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState<number[]>([])
  const [sortNewest, setSortNewest] = useState(true)

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesQuery =
        !normalizedQuery ||
        `${product.name} ${product.designer} ${product.category}`.toLowerCase().includes(normalizedQuery)
      return matchesCategory && matchesQuery
    })

    return sortNewest ? filtered : [...filtered].sort((a, b) => a.price - b.price)
  }, [activeCategory, query, sortNewest])

  const toggleFavorite = (productId: number) => {
    setFavorites((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  return (
    <>
      <section className="hero" id="new">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Curated resale, considered well</p>
          <h1>Beautiful things,<br /><em>one more time.</em></h1>
          <p className="hero-intro">
            Clothing and objects chosen for character, condition, and the stories still ahead of them.
          </p>
          <a className="text-link" href="#shop">
            Explore the latest drop <ArrowDown size={17} />
          </a>
        </div>
        <div className="hero-composition" aria-label="Featured resale finds">
          <div className="hero-card hero-card--main">
            <ProductVisual product={products[0]} />
            <div className="hero-card-caption">
              <span>Just in</span>
              <strong>{products[0].designer}</strong>
            </div>
          </div>
          <div className="hero-card hero-card--small">
            <ProductVisual product={products[1]} />
          </div>
          <p className="hero-note">Selected slowly.<br />Sent onward.</p>
          <span className="hero-number">01</span>
        </div>
      </section>

      <section className="trust-strip" aria-label="Marketplace benefits">
        <span>Condition checked</span>
        <span>Independent sellers</span>
        <span>Lower-impact shopping</span>
        <span>Secure checkout</span>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> The current edit</p>
            <h2>Pieces worth<br />passing on.</h2>
          </div>
          <p>Small-batch listings from thoughtful wardrobes and trusted vintage sellers.</p>
        </div>

        <div className="catalog-tools">
          <div className="category-tabs" role="group" aria-label="Filter by category">
            {categories.map((category) => (
              <button
                type="button"
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
                key={category}
              >
                {category}
              </button>
            ))}
          </div>
          <label className="search-field">
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search products</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search the edit"
            />
          </label>
          <button className="sort-button" type="button" onClick={() => setSortNewest((value) => !value)}>
            {sortNewest ? 'Newest first' : 'Price: low to high'}
            <ArrowDown size={14} />
          </button>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <article className={`product-card product-card--${(index % 3) + 1}`} key={product.id}>
                <div className="product-image-wrap">
                  <Link to="/products/$productId" params={{ productId: product.id.toString() }}>
                    <ProductVisual product={product} />
                  </Link>
                  <button
                    type="button"
                    className={`favorite-button ${favorites.includes(product.id) ? 'is-favorite' : ''}`}
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={`${favorites.includes(product.id) ? 'Remove' : 'Add'} ${product.name} ${favorites.includes(product.id) ? 'from' : 'to'} favorites`}
                  >
                    <Heart size={18} fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                  </button>
                  <span className="condition-pill">{product.condition}</span>
                </div>
                <div className="product-card-copy">
                  <div>
                    <p>{product.designer}</p>
                    <Link to="/products/$productId" params={{ productId: product.id.toString() }}>
                      <h3>{product.name}</h3>
                    </Link>
                    <span>{product.size}</span>
                  </div>
                  <strong>${product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Sparkles size={28} strokeWidth={1.3} />
            <h3>Nothing in this edit—yet.</h3>
            <p>Try another category or a broader search.</p>
            <button type="button" onClick={() => { setQuery(''); setActiveCategory('All') }}>
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="story-section" id="how-it-works">
        <div className="story-quote">
          <span>“</span>
          <blockquote>We keep good design in motion.</blockquote>
        </div>
        <div className="story-steps">
          <p className="eyebrow"><span /> How it works</p>
          <ol>
            <li><span>01</span><div><strong>List thoughtfully</strong><p>Share clear details, honest condition notes, and the piece’s story.</p></div></li>
            <li><span>02</span><div><strong>Find the right next home</strong><p>Buyers discover fewer, better pieces through a carefully edited marketplace.</p></div></li>
            <li><span>03</span><div><strong>Send it onward</strong><p>Secure checkout gives each piece a simple, protected path to its next chapter.</p></div></li>
          </ol>
          <a className="button-link" href="mailto:hello@secondstory.market">
            Start selling <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <section className="newsletter-section">
        <p className="eyebrow"><span /> The Sunday send</p>
        <h2>New stories,<br /><em>before they’re gone.</em></h2>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input id="newsletter-email" type="email" required placeholder="Your email address" />
          <button type="submit">Join the list <ArrowUpRight size={17} /></button>
        </form>
      </section>
    </>
  )
}
