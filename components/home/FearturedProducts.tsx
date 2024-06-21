import React from 'react'
import { FetchFeacturedProducts } from '@/utils/action'
import EmptyList from '../global/EmptyList'
import SectionTitle from '../global/SectionTitle'
import { Separator } from '../ui/separator'
import ProductsGrid from '../products/ProductsGrid'

const FearturedProducts = async () => {
  const product = await FetchFeacturedProducts()
  const numberofitems = product.length
  if (numberofitems === 0) {
    return <EmptyList/>
  }
  return (
    <section className='pt-24'>
    <SectionTitle text='featured products' />
    <ProductsGrid products={product} />
  </section>
  )
}

export default FearturedProducts