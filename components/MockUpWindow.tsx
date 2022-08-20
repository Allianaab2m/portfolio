import { ReactNode } from "react"

type Props = {
  className?: string
  children?: ReactNode
}

export const MockUpWindow = (props: Props) => {
  return (
    <div className={"mockup-code " + props.className} >
      {props.children}
    </div>
  )
}
