import React from 'react'
import { cn } from '@/lib/utils'

const EmptyList = ({heading="NO Item Found", className}: {heading?:string, className?:string}) => {
  return (
    <h2 className={cn('text-xl ', className)}>{heading}</h2>
  )
}

export default EmptyList