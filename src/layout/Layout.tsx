import { LayoutProps } from "./Layout.props"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
