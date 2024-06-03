'use client'
import { cn } from '@utils/tailwindClassMerge'
import React, { useMemo } from 'react'
import { AlertXButton } from './AlertXbutton'
import { AlertContext, useAlert } from './hooks'
import getChildrenOnDisplayName from '@utils/getComponentChildrens'
import { Balancer } from '../Balancer'

interface AlertProps {
  children: React.ReactNode
  className?: string
  show?: boolean
  hideFunction?: () => void
  balanceText?: boolean
}

export const Alert = ({ children, className, hideFunction, show = undefined, balanceText = false }: AlertProps) => {
  const alertContext = useAlert(show, hideFunction)

  const xButton = useMemo(() => getChildrenOnDisplayName(children, 'XButton'), [children])

  const { controlledShow } = alertContext

  if (!controlledShow) return null

  return (
    <AlertContext.Provider value={alertContext}>
      <div className={cn('p-4 pr-5 bg-light-yellow my-2 rounded-xl relative', className)}>
        {xButton}
        <Balancer balance={balanceText}>
          {children}
        </Balancer>
      </div>
    </AlertContext.Provider>
  )
}

Alert.XButton = AlertXButton
