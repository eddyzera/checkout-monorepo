import { z } from 'zod'

export const discountCodeSchema = z.object({
  discount_code: z.string(),
})
