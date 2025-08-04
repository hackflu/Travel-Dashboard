import { Outlet } from "react-router";
import {SidebarComponent} from '@syncfusion/ej2-react-navigations';

import { Navbar , MobileSidebar} from "~/components";
function  AdminLayout() {
    return ( 
        <div className="admin-layout">
            <MobileSidebar />
            <aside className="w-full max-w-[280px] hidden lg:block">
                <SidebarComponent className="h-full">
                    <Navbar /> 
                </SidebarComponent>
            </aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
     );
}

export default AdminLayout;