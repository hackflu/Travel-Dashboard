import { handleCallback } from "~/appwrite/auth";
import { redirect } from "react-router";  
import type { Route } from "./+types/callback";

export async function clientLoader({ request }: Route.LoaderArgs) {
    try {
        const url = new URL(request.url);
        const secret = url.searchParams.get("secret");
        const userId = url.searchParams.get("userId");
        
        console.log("OAuth callback received");
        console.log("UserId present:", !!userId);
        console.log("Secret present:", !!secret);
        
        if (!userId || !secret) {
            console.error("Missing OAuth parameters");
            return redirect("/sign-in?error=missing_oauth_params");
        }

        console.log("Creating session...");
        const user = await handleCallback(userId, secret);
        console.log("✅ Session created for:", user.email);
        
        await new Promise(resolve => setTimeout(resolve, 3000));

        return redirect("/");
        
    } catch (error) {
        console.log("❌ Callback authentication failed:", error);
    }
}

export default function Callback() {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh',
            gap: '1rem',
            fontFamily: 'system-ui, sans-serif'
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #3498db',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
            <h2>Authenticating...</h2>
            <p>Please wait while we complete your sign-in process.</p>
            
            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
