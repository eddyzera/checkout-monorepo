import { z } from 'zod'

import { discountCodeSchema } from '@/utils/schema/descountCodeSchema'

export type FormDiscountCodeSchemaType = z.infer<typeof discountCodeSchema>
