import { ButtonIconProps, icons } from "./ButtonIcon.props"
import styles from "./ButtonIcon.module.css"
import cn from "classnames"

const ButtonIcon = ({
  appearance,
  icon,
  children,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  const IconComp = icons[icon]
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
      <IconComp />
    </button>
  )
}

export default ButtonIcon
