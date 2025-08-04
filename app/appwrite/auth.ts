import {account, appwriteConfig, database} from "~/appwrite/client"
import { Databases, OAuthProvider, Query ,ID } from "appwrite"
import { redirect } from "react-router"
export const loginWithGoogle = async()=>{
    try {
        account.createOAuth2Session(
            OAuthProvider.Google,
        )
    }catch(e){
        console.log('loginWithGoogle' , e)
    }
}

export const logoutUser = async()=>{
    try {
        await account.deleteSession('current')
        return true

    }catch(e){
        console.log('logoutUser',e)
        return false
    }
}

export const getUser = async()=>{
    try {
        const user = await account.get()
        if(!user) redirect ('/sign-in')

        const { documents } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId
            [
                Query.equal('accountId',user.$id),
                Query.select(['name','email','imageUrl','joinedAt'])
            ]
        )
        
        
    }catch(e){
        console.log(e)
    }
}

export const getUserProfilePhoto = async () => {
    try {
        const session = await account.getSession('current');
        const accessToken = session?.providerAccessToken;
        if (!accessToken) throw new Error("No Google access token found");

        const response = await fetch(
            "https://people.googleapis.com/v1/people/me?personFields=photos",
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        if (!response.ok) throw new Error("Failed to fetch profile photo");
        const data = await response.json();
        return data.photos?.[0]?.url || null;
    } catch (e) {
        console.log("getUserProfilePhoto", e);
        return null;
    }
}

export const storeUserData = async() => {
    try{
        const user = await account.get()
        if(!user) return null

        const imageUrl = await getUserProfilePhoto()
        const newUser = database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId : user.$id,
                email: user.email,
                name: user.name,
                imageUrl : imageUrl || '',
                joinedAt : new Date().toString()
            }
        )
        return newUser

    }catch(e){
        console.log('storeUserData' , e)
    }
}

export const getExistingUser = async(id :string) => {
    try{
        const {documents , total} = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("accountId" , id)]
        )
        return total > 0 ? documents[0]: null
    }catch(e){

    }
}

