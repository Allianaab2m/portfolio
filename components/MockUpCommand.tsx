import { ReactNode } from "react"

type Props ={
  prefix: '$' | '>',
  visible: boolean,
  children: ReactNode
}
export const MockUpCommand = (props: Props) => {
  if (!props.visible) return null
  return (
    <pre data-prefix={props.prefix}>
      <code>{props.children}</code>
    </pre>
  )
}
