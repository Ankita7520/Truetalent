import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
 const Google=()=>{
    return(
        <div className="google">
      <GoogleOAuthProvider clientId="1038585742528-65mq5obo84ov00eukf1atqik5khri6m8.apps.googleusercontent.com">
        <GoogleLogin
        onSuccess={credentialResponse=>{
          const decode = jwt_decode(credentialResponse.credential)
          console.log(decode);
          console.log(credentialResponse);
        }}
        onError={()=>{
          console.log('Login Failed');
        }}
        
        />
        
      </GoogleOAuthProvider>
    </div>
    )
 }
 export default Google