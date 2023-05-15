import { useState } from "react"
import cn from "classnames"

import styles from "./SortCategory.module.css"
import { Arrow } from "@/components"

const SortCategory = (ctg: {
  link: string
  title: string
  item: {
    link: string
    text: string
    img: string
  }[]
}): JSX.Element => {
  const [click, setClick] = useState(false)

  return (
    <>
      {[ctg].map(({ link, title, item }) => (
        <li key={title} className={cn(styles.sort, click ? styles.active : "")}>
          <a href={link}>
            {title}
            {item.length ? <Arrow onClick={() => setClick(!click)} /> : null}
          </a>
          <ul className={styles.sort__item}>
            {item.length >= 9
              ? item.slice(0, 8).map(({ link,img, text }, idx) => (
                  <li key={idx}>
                    <a href={link}>
                      <img src={img} alt={text} />
                      <span>{text}</span>
                    </a>
                  </li>
                ))
              : item.map(({ link, img, text }, idx) => (
                  <li key={idx}>
                    <a href={link}>
                      <img src={img} alt={text} />
                      <span>{text}</span>
                    </a>
                  </li>
                ))}
            <a href="#">{item.length >= 9 && "Смотреть ещё"}</a>
          </ul>
        </li>
      ))}
    </>
  )
}

export default SortCategory
