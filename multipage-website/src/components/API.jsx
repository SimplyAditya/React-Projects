import React from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
export default function API(){
    const data =useLoaderData();
    return(
        <>
        <div className="h-4/5 dark:bg-black dark:text-white">
            <h1 className="flex items-center justify-center text-5xl ">
                GitHub Followers: {data.followers}
            </h1>
            <div className="flex justify-center py-8"><img src={data.avatar_url } alt="Avatar"></img></div>
        </div>
        </>
    )
}


export const githubLoader=async()=>{
    try{
        const user = await axios.get(
            "https://api.github.com/users/simplyaditya"
          );
          user.data.naam="ramesh"
          console.log(user.data);
        return user.data;
    }catch(er){
        console.error(er);
    }
}