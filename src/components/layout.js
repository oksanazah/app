import Header from "./header";
import Footer from "./footer";
import { Children } from "react";

const Layout = ({children}) => (
    <>
    <Header/>
    {children}
    <Footer />
    </>

);

export default Layout;