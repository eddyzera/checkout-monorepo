import { Discounts } from '../discounts'
import { ListProduct } from '../listProduct'

export const OrderSummary = () => {
  return (
    <div className="bg-zinc-100 pl-10 pr-44 pt-10">
      <div className="flex flex-col items-start gap-5">
        <ListProduct />
        <Discounts />
      </div>
    </div>
  )
}
