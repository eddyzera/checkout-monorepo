'use client'

import { Tag, X } from 'lucide-react'

import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

interface BadgeDiscountProps {
  label: string
}

export const BadgeDiscount = ({ label }: BadgeDiscountProps) => {
  return (
    <Badge
      className="items-center gap-4 bg-zinc-200 pl-2 pr-0 hover:bg-zinc-200"
      variant="secondary"
    >
      <div className="flex items-center gap-2">
        <Tag className="h-5 w-5" />
        <p className="text-base font-medium uppercase text-foreground">
          {label}
        </p>
      </div>

      <Button className="px-2 py-2" variant="link">
        <X className="h-5 w-5" />
      </Button>
    </Badge>
  )
}
