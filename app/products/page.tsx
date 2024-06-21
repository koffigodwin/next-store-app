import React from 'react'
import ProductsContainer from '@/components/products/ProductsContainer';

const page = ({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  return (
    <>
       <ProductsContainer layout={layout} search={search}/>
    </>
  )
}

export default page