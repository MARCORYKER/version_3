"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <button
        className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
    </div>
  );
}
