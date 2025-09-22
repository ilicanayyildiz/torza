import * as React from 'react'
import { cn } from './utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn('flex h-9 w-full rounded-md border border-gray-300 bg-white px-3 py-1 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50', className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'
