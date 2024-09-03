'use client'
import { MoveDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const ListProduct = () => {
  const [isVisible, setIsVisible] = useState(true)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentElement = elementRef.current
      if (currentElement) {
        const { scrollTop, scrollHeight, clientHeight } = currentElement

        if (scrollTop + clientHeight < scrollHeight) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
    }

    const currentElement = elementRef.current
    if (currentElement) {
      console.log('Adding scroll listener')
      currentElement.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const productsMock = Array.from(Array(3))

  return (
    <div className="relative flex w-full flex-col gap-4">
      <div className="h-72 w-full overflow-auto" ref={elementRef}>
        <ul className="flex w-full flex-col items-center gap-4">
          {productsMock.map((_, index) => (
            <li
              className="flex w-full items-center justify-between"
              key={index}
            >
              <div className="flex items-center gap-4">
                <div className="relative flex items-center">
                  <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-700 text-xs text-white">
                    6
                  </div>
                  <img
                    className="rounded-md border object-fill"
                    src="https://files.cdn.printful.com/products/12/product_1550594502.jpg"
                    alt="T-Shirt"
                    width={62}
                    height={62}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm text-foreground">
                    Unisex Staple T-Shirt | Bella + Canvas 3001"
                  </p>
                  <small className="text-xs text-zinc-600">Gildan</small>
                </div>
              </div>
              <p>$59.00</p>
            </li>
          ))}
        </ul>
      </div>
      {isVisible && productsMock.length > 4 && (
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4">
          <Button className="max-w-[213px] items-center gap-4 rounded-full bg-zinc-700 text-sm text-white">
            Scroll for more items{' '}
            <MoveDown className="h-5 w-5 animate-bounce" />
          </Button>
          <Separator />
        </div>
      )}
    </div>
  )
}
