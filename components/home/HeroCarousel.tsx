import React from 'react'
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image'
import hero1 from '@/public/Images/hero1.jpg'
import hero2 from '@/public/Images/hero2.jpg'
import hero3 from '@/public/Images/hero3.jpg'
import hero4 from '@/public/Images/hero4.jpg'
import hero5 from '@/public/Images/hero5.jpg'
const carouselImages = [hero1, hero2, hero3, hero4, hero5];

const HeroCarousel = () => {
  
 return (
  <Carousel className="">
      <CarouselContent>
        {carouselImages.map((image, index) => {
          return (
            <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className='p-2'>
                  <Image src={image} alt='hero' className='w-full h-[24rem] rounded-md object-cover'/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      )} )}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default HeroCarousel