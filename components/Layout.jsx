import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>PeGaSusEng</title>
                <meta name='description' content='Blinder making it simple for you to build and grow your SaaS applications, or any business idea' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link 
                rel="icon" 
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='transparent'/><text x='50%' y='50%' dominant-baseline='central' text-anchor='middle' font-size='80' fill='black'>P</text></svg>"
                type="image/svg+xml"
                />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout