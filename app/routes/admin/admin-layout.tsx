import { Outlet } from "react-router";

function  AdminLayout() {
    return ( 
        <div className="admin-layout">
            
            <aside className="w-full max-w-[28-px] hidden lg:block">Sidebar</aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
     );
}

export default AdminLayout;