import { cn } from '@utils/tailwindClassMerge'

type SkeletonProps = React.ComponentProps<'div'>

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted bg-slate-200', className)}
      {...props}
    />
  )
}

