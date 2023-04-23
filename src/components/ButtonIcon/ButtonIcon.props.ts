import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

import search from "./search.svg"
import comparison from "./comparison.svg"
import heart from "./heart.svg"
import like from "./like.svg"
import news from "./news.svg"
import percent from "./percent.svg"
import profile from "./profile.svg"
import cart from "./cart.svg"

export const icons = {
  search,
  comparison,
  heart,
  like,
  news,
  percent,
  profile,
  cart,
}
export type IconName = keyof typeof icons

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode
  icon: IconName
  appearance:
    | "primary"
    | "white"
    | "gray"
    | "red"
    | "bg_red"
    | "border_red"
    | "border_white"
    | "border_gray"
}
