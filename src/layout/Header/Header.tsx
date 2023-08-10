import { useState } from "react"
import cn from "classnames"
import useWindowSize from "@/hooks/useWindowSize"
import HeaderLevelUp from "./HeaderLevelUp"
import HeaderNav from "./HeaderNav"
import { HeaderProps } from "./Header.props"
import styles from "./Header.module.css"

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false)
  const [widthWindow] = useWindowSize()

  const handleMenu = () => {
    if (typeof window === "object") {
      menuActive
        ? (document.body.style.overflow = "")
        : (document.body.style.overflow = "hidden")
    }
    setMenuActive(!menuActive)
  }

  return (
    <header
      className={
        menuActive ? cn(styles.header, styles.menu_open) : styles.header
      }
      {...props}
    >
      <HeaderLevelUp widthWindow={widthWindow} handleMenu={handleMenu} />
      <HeaderNav widthWindow={widthWindow} />
    </header>
  )
}

export default Header
