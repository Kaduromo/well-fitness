import styles from "./Arrow.module.css"
import { ArrowProps } from "./Arrow.props"

const Arrow = ({ className, ...props }: ArrowProps): JSX.Element => {
  return (
    <div className={styles.arrow} {...props}>
      <div />
    </div>
  )
}

export default Arrow
