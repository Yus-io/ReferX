
import React from 'react'
import { SignIn } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC]">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md rounded-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">ReferX Admin</h1>
          <p className="text-muted-foreground mb-6">Secure Admin Access</p>
        
          <SignIn 
            path="/admin-login" 
            routing="path" 
            signUpUrl="/sign-up"
            afterSignUpUrl='/admin-dashboard'
            afterSignInUrl='/admin-dashboard'
            afterSignOutUrl='/admin-login'
          />
        </div>
      </div>
    </div>
  )
}

export default AdminLogin;