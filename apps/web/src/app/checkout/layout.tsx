import { OrderSummary } from '@/components/orderSummary'

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div>{children}</div>
      <OrderSummary />
    </div>
  )
}
