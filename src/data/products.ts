export type ProductCategory = 'Clothing' | 'Bags' | 'Shoes' | 'Home'

export interface Product {
  id: number
  name: string
  category: ProductCategory
  designer: string
  description: string
  shortDescription: string
  price: number
  originalPrice: number
  condition: string
  size: string
  seller: string
  location: string
  listed: string
  accent: string
  visual: 'coat' | 'bag' | 'loafer' | 'chair' | 'dress' | 'lamp'
  featured?: boolean
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'Wool wrap coat',
    category: 'Clothing',
    designer: 'Mara Hoffman',
    description:
      'A beautifully weighted, double-faced wool coat with a relaxed shoulder and removable tie belt. The warm camel tone works across seasons, and the minimal construction makes it especially easy to layer. Professionally cleaned and ready for its next chapter.',
    shortDescription: 'Double-faced wool with a relaxed shoulder and removable belt.',
    price: 218,
    originalPrice: 695,
    condition: 'Excellent',
    size: 'US 6',
    seller: 'June M.',
    location: 'Brooklyn, NY',
    listed: '2 days ago',
    accent: '#c99b79',
    visual: 'coat',
    featured: true,
  },
  {
    id: 2,
    name: 'Half-moon shoulder bag',
    category: 'Bags',
    designer: 'Aesther Ekme',
    description:
      'A sculptural half-moon bag in smooth oxblood leather. The magnetic closure and softly structured profile make it an effortless everyday piece. Light signs of use appear at the base, with a pristine interior.',
    shortDescription: 'Sculptural oxblood leather with a softly structured profile.',
    price: 164,
    originalPrice: 470,
    condition: 'Very good',
    size: 'One size',
    seller: 'Simone R.',
    location: 'Chicago, IL',
    listed: '5 hours ago',
    accent: '#7c3839',
    visual: 'bag',
    featured: true,
  },
  {
    id: 3,
    name: 'Square-toe loafers',
    category: 'Shoes',
    designer: 'Hereu',
    description:
      'Handmade Spanish loafers in deep espresso calfskin with a softly squared toe. Worn only a handful of times and protected with a fresh rubber sole. Includes the original dust bag.',
    shortDescription: 'Handmade calfskin loafers with an understated square toe.',
    price: 142,
    originalPrice: 395,
    condition: 'Excellent',
    size: 'EU 39',
    seller: 'Nadia K.',
    location: 'Austin, TX',
    listed: 'Yesterday',
    accent: '#5a4035',
    visual: 'loafer',
    featured: true,
  },
  {
    id: 4,
    name: 'Postmodern accent chair',
    category: 'Home',
    designer: 'Vintage, 1980s',
    description:
      'A playful postmodern chair with a lacquered tubular frame and newly upholstered bouclé seat. Its compact footprint works well in a bedroom corner, entryway, or reading nook. Local pickup is preferred.',
    shortDescription: 'Lacquered tubular frame with fresh cream bouclé upholstery.',
    price: 286,
    originalPrice: 640,
    condition: 'Restored',
    size: '28 × 25 in',
    seller: 'The Annex',
    location: 'Portland, OR',
    listed: '4 days ago',
    accent: '#3e6256',
    visual: 'chair',
  },
  {
    id: 5,
    name: 'Bias-cut silk dress',
    category: 'Clothing',
    designer: 'St. Agni',
    description:
      'A fluid bias-cut midi in washed olive silk. The narrow straps adjust at the back and the neckline drapes naturally. An elegant warm-weather piece with no visible marks or pulls.',
    shortDescription: 'Washed olive silk cut on the bias for an easy, fluid drape.',
    price: 128,
    originalPrice: 349,
    condition: 'Like new',
    size: 'US 4',
    seller: 'Elena P.',
    location: 'Los Angeles, CA',
    listed: '8 hours ago',
    accent: '#87906c',
    visual: 'dress',
  },
  {
    id: 6,
    name: 'Mushroom table lamp',
    category: 'Home',
    designer: 'Murano-style, 1970s',
    description:
      'A warm amber glass table lamp with the softly rounded profile associated with 1970s Italian design. The glass is free of chips and the wiring has been professionally updated for US outlets.',
    shortDescription: 'Amber glass with a warm, low glow and updated wiring.',
    price: 196,
    originalPrice: 420,
    condition: 'Very good',
    size: '14 in tall',
    seller: 'Archive West',
    location: 'Santa Fe, NM',
    listed: '1 week ago',
    accent: '#d89a52',
    visual: 'lamp',
  },
]

export default products
