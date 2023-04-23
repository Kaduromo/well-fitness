import useWindowSize from "@/hooks/useWindowSize"
import HeaderDesctop from "./HeaderDesctop"
import HeaderMobile from "./HeaderMobile"

const Header = (): JSX.Element => {
  const [widthWindow] = useWindowSize()

  return (
    <>
      {widthWindow > 1060 && <HeaderDesctop />}
      {widthWindow <= 1060 && <HeaderMobile />}
    </>
  )
}

export default Header
