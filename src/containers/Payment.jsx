import React from 'react'
import '../styles/components/Payment.css'

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del Pedido: </h3>
        <button className="Payment-button">
          Boton de pago con Paypal
        </button>
      </div>
    </div>
  )
}

export default Payment