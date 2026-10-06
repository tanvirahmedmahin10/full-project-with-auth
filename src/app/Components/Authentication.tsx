'use client'


import { signOut, useSession } from '@/lib/auth-client';
import { Spinner } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Authentication = () => {
  const router = useRouter();
       const { data: session,isPending } =useSession()
        if(isPending){
             return(
         <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
      </div>
        )
        }
     
      
     const handleSignOut = async () => {
    await signOut();
    router.refresh();
  };
  
    return (
        <div>
            {session?.user?<div className="flex items-center gap-4 justify-center m-5">
  <p>Welcome {session?.user.name}</p>
   <button onClick={handleSignOut}
    className="px-5 py-2.5 rounded-lg bg-blue-500 text-gray-700 font-medium hover:bg-gray-600 transition-colors"
  >
    Sign Out
  </button>
  </div>:<div className="flex justify-center items-center gap-3 m-5">
  <Link href='/sign-in'><button className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
    Sign In
  </button></Link>
  <Link href='/sign-up'>
  <button className="px-5 py-2.5 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shadow-sm">
   Sign Up
  </button></Link>
</div>}
        </div>
    );
};

export default Authentication;