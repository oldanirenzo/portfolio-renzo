import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, footer = true, dark = true }) => {

    const bgColor = dark ? '' : 'bg-light'

    return (
        <div className={bgColor}>
            <Navbar />
            <main className='container py-4'>

                {children}
            </main>
            {footer && <Footer />}
        </div>
    )
}
export default Layout