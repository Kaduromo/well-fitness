import styles from "./Header.module.css"
import { Button, ButtonIcon } from "@/components"
import Menu from "./Menu/Menu"
import MenuIcon from "./menu.svg"

const HeaderNav = ({ widthWindow }): JSX.Element => {
  return (
    <div className={styles.nav}>
      <nav className="container">
        <ul className={styles.catalog}>
          <li>
            <a href="catalog">
              <MenuIcon /> Каталог
            </a>
            <Menu />
          </li>
          {widthWindow >= 999.98 && (
            <li>
              <ButtonIcon icon="search" appearance="primary" />
            </li>
          )}
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
        {widthWindow > 999.98 && (
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
        )}
        {widthWindow <= 999.98 && (
          <>
            <div>
              <a href="tel:78000000000">+7 (800) 000-00-00</a>
              <Button appearance="red">Заказать звонок</Button>
            </div>
            <div>
              <Button appearance="primary">Для дилеров</Button>
              <Button appearance="gray">Become a Partner</Button>
            </div>
          </>
        )}
      </nav>
    </div>
  )
}

export default HeaderNav
