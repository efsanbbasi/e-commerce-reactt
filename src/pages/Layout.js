import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Layout = () => {
    const theme = useSelector((state) => state.theme);

    return (
        <div className={"page-container " + (theme.mode === "light" ? "light" : "dark")} >
            <Header />

            <main>
                <Outlet />      
            </main>

        </div>
    )
};

export default Layout;