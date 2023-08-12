import { useState } from "react"
import cn from "classnames"
import { Arrow } from "@/components"

import styles from "./SortCategory.module.css"
import useWindowSize from "@/hooks/useWindowSize"

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
  const [widthWindow] = useWindowSize()

  if (widthWindow <= 999.98) {
    return (
      <>
        {[ctg].map(({ link, title, item }) => (
          <div
            key={title}
            className={cn(styles.sort, click ? styles.active : "")}
          >
            <a
              // href={link}
              href="#"
              className={cn(styles.sort, click ? styles.active : "")}
            >
              {title}
              {item.length ? <Arrow onClick={() => setClick(!click)} /> : null}
            </a>
            <div className={styles.sort__item}>
              <div>
                {item.map(({ link, img, text }, idx) => (
                  <a href={link} key={idx + text}>
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }

  return (
    <>
      {[ctg].map(({ link, title, item }) => (
        <div
          key={title}
          className={cn(styles.sort, click ? styles.active : "")}
        >
          <a
            href={link}
            className={cn(styles.sort, click ? styles.active : "")}
          >
            {title}
            {item.length ? <Arrow onClick={() => setClick(!click)} /> : null}
          </a>
          <div className={styles.sort__item}>
            <div>
              {item.map(({ link, img, text }, idx) => (
                <a href={link} key={idx + text}>
                  <img src={img} alt={text} />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default SortCategory
