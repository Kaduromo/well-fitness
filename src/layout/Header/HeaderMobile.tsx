import { useState } from "react"
import cn from "classnames"

import { HeaderProps } from "./Header.props"
import styles from "./Header.module.css"
import { Button, ButtonIcon } from "@/components"
import useWindowSize from "@/hooks/useWindowSize"

import LogoIcons from "../logo.svg"
import MenuIcon from "./menu.svg"
import Menu from "./Menu/Menu"

const HeaderMobile = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [menuActive, setMenuActive] = useState(false)
  const [widthWindow] = useWindowSize()

  if (typeof window === "object") {
    menuActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "")
  }

  const handleMenu = () => setMenuActive(!menuActive)

  return (
    <header
      className={
        menuActive ? cn(styles.header, styles.menu_open) : styles.header
      }
      {...props}
    >
      <div className={cn(styles.container, "container")}>
        <a href="#" className={styles.logo}>
          <LogoIcons />
        </a>

        {widthWindow >= 560 && <div>Moscow</div>}

        <ButtonIcon
          className={styles.search}
          icon="search"
          appearance="primary"
        />

        <div className={styles.button}>
          <a href="#">
            <ButtonIcon icon="comparison" appearance="primary" />
            <span>15</span>
          </a>
          <a href="#">
            <ButtonIcon icon="heart" appearance="primary" />
            <span>15</span>
          </a>
          <a href="#">
            <ButtonIcon icon="cart" appearance="primary" />
            <span>15</span>
          </a>
        </div>
        <Button
          className={styles.menu}
          appearance="primary"
          onClick={handleMenu}
        >
          <span></span>
        </Button>
      </div>
      <div className={styles.nav}>
        <nav className="container">
          <ul className={styles.catalog}>
            <li>
              Каталог
              <Menu />
            </li>
          </ul>
          <ul className={styles.items}>
            <li>
              <a href="#">Бренды</a>
            </li>
            <li>
              <a href="#">Сервис</a>
            </li>
            <li>
              <a href="#">Услуги</a>
            </li>
            <li>
              <a href="#">Поддержка</a>
            </li>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="#">Блог</a>
            </li>
            <li>
              <a href="#">Где купить</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <div>
            <a href="tel:78000000000">+7 (800) 000-00-00</a>
            <Button appearance="red">Заказать звонок</Button>
          </div>
          <div>
            <Button appearance="primary">Для дилеров</Button>
            <Button appearance="gray">Become a Partner</Button>
          </div>
        </nav>
      </div>
      {/* <div className={styles.category}>
        <div className="container">
          <Button appearance="primary" arrow="down">
            Для дома
          </Button>
          <Button appearance="primary" arrow="down">
            Для фитнес клуба
          </Button>
        </div>
      </div> */}
    </header>
  )
}
export default HeaderMobile
