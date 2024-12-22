import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div className="dark bg-background flex items-start justify-center h-full min-h-screen py-[100px]">
            <Outlet />
        </div>
    )
}

export default Layout
