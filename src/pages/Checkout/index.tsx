/* eslint-disable no-unused-vars */
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutForm } from './components/CheckoutForm'
import { OrderPreview } from './components/OrderPreview'
import { CheckoutContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

// eslint-disable-next-line no-unused-vars
enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe uma Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const { cleanCart } = useCart()
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <OrderPreview />
      </CheckoutContainer>
    </FormProvider>
  )
}
