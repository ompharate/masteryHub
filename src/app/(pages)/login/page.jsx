"use client"
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  const githubLogin = async () => {
    await signIn("github", { redirectTo: "/" });
  };

  const googleLogin = async () => {
    await signIn("google", { redirectTo: "/" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={googleLogin}
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Sign in with Google
        </button>

        <button
          onClick={githubLogin}
          className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-transform transform hover:scale-105"
        >
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49.5.09.68-.217.68-.483 0-.237-.008-.868-.013-1.704-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.068-.607.068-.607 1.003.07 1.531 1.03 1.531 1.03.891 1.528 2.341 1.087 2.91.831.09-.647.349-1.087.635-1.337-2.22-.252-4.555-1.11-4.555-4.946 0-1.092.39-1.985 1.03-2.683-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0112 6.844c.85.004 1.705.115 2.505.337 1.91-1.293 2.75-1.025 2.75-1.025.546 1.376.202 2.393.1 2.646.64.698 1.03 1.591 1.03 2.683 0 3.846-2.337 4.692-4.565 4.94.36.31.68.92.68 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.18.58.688.482A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"
            />
          </svg>
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
