
import React from 'react'
import { type XButtonProps, XButton } from '../XButton'
import { cn } from '@utils/tailwindClassMerge'
import { useAlertContext } from './hooks'

interface XButtonPropsType extends XButtonProps { }

export const AlertXButton: React.FC<XButtonPropsType> = ({ ...props }) => {
  const { handleHideAlert } = useAlertContext()

  const className = cn(`absolute right-3 top-3 hover:after:bg-white
  hover:after:w-6 hover:after:h-6 hover:after:top-[-5px] hover:after:left-[-5px]
`, props.className)

  return <XButton className={className} width={props.width} func={handleHideAlert} {...props} />
}

AlertXButton.displayName = 'XButton'