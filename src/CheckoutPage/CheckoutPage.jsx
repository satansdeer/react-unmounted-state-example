import { OrderForm } from "./OrderForm"
import {Header} from "./Header"
import {OrderSummary} from "./OrderSummary"

export const CheckoutPage = () => {
  return <>
  {/* Header should be in the root of the app */}
    <Header/>
    <OrderSummary/>
    {/* <OrderForm/> */}
  </>
}