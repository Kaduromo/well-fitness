import { useState, useLayoutEffect } from "react"

import HeaderDesctop from "./HeaderDesctop"
import HeaderMobile from "./HeaderMobile"

const Header = (): JSX.Element => {
  const [widthWindow] = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0])

    useLayoutEffect(() => {
      const updateSize = () => {
        setSize([window.innerWidth])
      }

      window.addEventListener("resize", updateSize)

      updateSize()

      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }

  return (
    <>
      {widthWindow > 1060 && <HeaderDesctop />}
      {widthWindow <= 1060 && <HeaderMobile />}
    </>
  )
}

export default Header
