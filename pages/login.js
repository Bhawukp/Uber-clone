import React,{useEffect} from 'react'
import tw from 'tailwind-styled-components'
import {useRouter} from 'next/router'
import { signInWithPopup,onAuthStateChanged}  from '@firebase/auth'
import {auth,provider} from '../firebase'

const Login = () => {
    const router = useRouter()
    useEffect(() =>{
        onAuthStateChanged(auth,user=>{
            if(user){
                router.push('/')
            }
        })
    },[])
    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
            
            <Title>Login to access your account</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton onClick={()=> signInWithPopup(auth,provider)}>Sign in with Google</SignInButton>
            <Dev>Developed By:Bhawuk Pahuja</Dev>
        </Wrapper>
        
    )
}

export default Login
const Wrapper =tw.div`
flex flex-col h-screen bg-gray-200 p-4`
const SignInButton =tw.button`
bg-black text-white text-center py-4 mt-8 self center w-full `
const UberLogo= tw.img`
h-20 w-auto object-contain self-start `
const Title=tw.div
` text-5xl pt-4 text-gray-500`
const HeadImage=tw.img`
object-contain w-full
`
const Dev =tw.div`
text-md pt-4 text-black-300 items-center self-center
`