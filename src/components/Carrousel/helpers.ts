import React from 'react'
import { ItemProps } from './Item'

/**
 * Injects an index prop to each child element in the provided React node.
 *
 * @param children - The React node containing the child elements.
 * @returns A new React node with the index prop injected to each child element.
 */
export function injectIndexToChildren(children: React.ReactNode) {
  return React.Children.map(children, (child, itemIndex) => {
    const item = child as React.ReactElement<ItemProps, string | React.JSXElementConstructor<ItemProps>>
    if (React.isValidElement(item)) {
      return React.cloneElement(item, { itemIndex })
    }
    return item
  })
}
