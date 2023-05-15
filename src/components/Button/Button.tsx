import cn from "classnames"

import { ButtonProps } from "./Button.props"
import styles from "./Button.module.css"

import ArrowIcon from "./arrow.svg"

const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(className, styles.button, {
        [styles.primary]: appearance === "primary",
        [styles.gray]: appearance === "gray",
        [styles.red]: appearance === "red",
        [styles.bg_red]: appearance === "bg_red",
        [styles.border_red]: appearance === "border_red",
        [styles.border_white]: appearance === "border_white",
        [styles.border_gray]: appearance === "border_gray",
      })}
      {...props}
    >
      {children}

      {arrow !== "none" && (
        <span
          className={cn(styles.span, styles.arrow, {
            [styles.up]: arrow === "up",
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  )
}

export default Button
