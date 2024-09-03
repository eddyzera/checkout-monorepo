import { OrderSummarySections } from '@/components/sections/orderSummarySections'

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div>{children}</div>
      <OrderSummarySections />
    </div>
  )
}
