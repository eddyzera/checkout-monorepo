'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { discountCodeSchema } from '@/utils/schema/descountCodeSchema'
import { FormDiscountCodeSchemaType } from '@/utils/types/schemaTypes'

import { TextField } from '../form/textFields'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { BadgeDiscount } from './badgeDiscount'

export const Discounts = () => {
  const form = useForm<FormDiscountCodeSchemaType>({
    resolver: zodResolver(discountCodeSchema),
  })
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <Form {...form}>
        <form className="flex w-full items-center gap-4">
          <div className="w-full space-y-1">
            <TextField<FormDiscountCodeSchemaType>
              name="discount_code"
              placeholder="Discount code"
            />
          </div>
          <Button className="w-20">Apply</Button>
        </form>
      </Form>
      <div className="grid w-full max-w-96 grid-cols-2 gap-2">
        <BadgeDiscount label="SPRINGSALE" />
        <BadgeDiscount label="SPRINGSALE" />
        <BadgeDiscount label="SPRINGSALE" />
      </div>
    </div>
  )
}
