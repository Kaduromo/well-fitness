import { ButtonProps } from "./Button.props"
import styles from "./Button.module.scss"
import cn from "classnames"

const Button = ({
  appearance,
  children,
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
    </button>
  )
}

export default Button
