import useWindowSize from "@/hooks/useWindowSize"
import HeaderDesctop from "./HeaderDesctop"
import HeaderMobile from "./HeaderMobile"

const Header = (): JSX.Element => {
  const [widthWindow] = useWindowSize()

  // console.log("size", widthWindow)

  return (
    <>
      {widthWindow > 999.98 && <HeaderDesctop />}
      {widthWindow <= 999.98 && <HeaderMobile />}
    </>
  )
}

export default Header
