import React from 'react'
import ReactBalancer from 'react-wrap-balancer'

interface BalancerProps {
  children: React.ReactNode
  balance?: boolean
}

export const Balancer: React.FC<BalancerProps> = ({ children, balance }) => {
  if (!balance) return <>{children}</>

  return (
    <ReactBalancer>
      {children}
    </ReactBalancer>
  )
}
