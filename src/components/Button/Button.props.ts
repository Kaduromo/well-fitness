import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react"

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  appearance:
    | "primary"
    | "gray"
    | "red"
    | "bg_red"
    | "border_red"
    | "border_white"
    | "border_gray"
  arrow?: "up" | "down" | "right" | "none"
}
