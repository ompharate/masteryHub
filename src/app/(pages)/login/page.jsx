import { signIn } from '@/auth';
import React from 'react'

const login = () => {
  return (
    <div>
        <form
        action={async () => {
          "use server";
          await signIn("github",{ redirectTo: "/dashboard" });
        }}
      >
        <button type="submit">Signin with GitHub</button>
      </form>
    </div>
  )
}

export default login