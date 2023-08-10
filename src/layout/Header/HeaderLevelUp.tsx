import cn from "classnames"
import { Button, ButtonIcon } from "@/components"
import LogoIcons from "../logo.svg"
import styles from "./Header.module.css"

const HeaderLevelUp = ({ widthWindow, handleMenu }): JSX.Element => {
  return (
    <div className={cn(styles.container, "container")}>
      <a href="#" className={styles.logo}>
        <LogoIcons />
      </a>

      {widthWindow >= 560 && <div>Moscow</div>}

      {widthWindow <= 999.98 && (
        <>
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
        </>
      )}

      {widthWindow > 999.98 && (
        <>
          <Button appearance="primary">Для дилеров</Button>
          <Button appearance="gray">Become a Partner</Button>
          <a href="tel:78000000000">+7 (800) 000-00-00</a>
          <Button appearance="red">Заказать звонок</Button>
          <ButtonIcon
            className={styles.profile}
            icon="profile"
            appearance="primary"
          >
            Войти
          </ButtonIcon>
        </>
      )}
    </div>
  )
}

export default HeaderLevelUp
