import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    route('sign-in' , 'routes/root/sign-in.tsx'),
    route('auth/callback' ,'routes/auth/callback.tsx'),
    layout("routes/admin/admin-layout.tsx" , [
        route("dashboard", "routes/admin/dashboard.tsx"),
        route("all-users", "routes/admin/all-users.tsx"),
    ])
] satisfies RouteConfig;