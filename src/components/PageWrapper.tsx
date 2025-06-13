// PageWrapper.tsx - Reusable wrapper for smooth transitions
// PageWrapper.tsx - Reusable wrapper for smooth transitions
import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
}

export default function PageWrapper({ children, className = '' }: PageWrapperProps) {
  return (
    <div className={`
      animate-in 
      fade-in-0 
      slide-in-from-bottom-4 
      duration-500 
      ease-out
      ${className}
    `}>
      {children}
    </div>
  )
}
