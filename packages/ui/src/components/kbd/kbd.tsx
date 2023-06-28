import { clx } from "@/utils/clx"
import React, { ReactNode } from "react"

interface KbdProps extends React.ComponentPropsWithoutRef<"kbd"> {}

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ children, ...props }, ref) => {
    // Any instance in which this could be something else?
    const Component = "kbd"

    return (
      <>
        <Component
          ref={ref}
          {...props}
          className="text-xs font-medium text-subtle font-sans bg-button-neutral-active inline-flex justify-center items-center min-w-[20px] h-[20px] px-1 rounded-md border border-neutral-button"
        >
          {children}
        </Component>
      </>
    )
  }
)

interface KbdContainerProps extends React.ComponentPropsWithoutRef<"div"> {}

export const KbdContainer = React.forwardRef<HTMLDivElement, KbdContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={clx("inline-flex gap-0.5 ml-2", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

KbdContainer.displayName = "KbdContainer"

Kbd.displayName = "Kbd"

export default Kbd
