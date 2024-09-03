'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { BadgeDiscount } from '@/components/blocks/orderSummaryBlocks/discounts/badgeDiscount'
import { CustomField } from '@/components/global/form/customField'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { discountCodeSchema } from '@/utils/schema/descountCodeSchema'
import { FormDiscountCodeSchemaType } from '@/utils/types/schemaTypes'

export const Discounts = () => {
  const form = useForm<FormDiscountCodeSchemaType>({
    resolver: zodResolver(discountCodeSchema),
  })
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <Form {...form}>
        <form className="flex w-full items-center gap-4">
          <div className="w-full space-y-1">
            <CustomField<FormDiscountCodeSchemaType>
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
