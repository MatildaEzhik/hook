import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
export const RootTemplate = () => {
    
    return (
        <main>
            <Header valute="BTC" count={100} />
            <Outlet />
            {/* FOOTER */}
        </main>
    )
}