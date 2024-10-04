"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/DashButton";

export const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 shadow-lg">
      <div className="text-white font-bold text-lg">MyApp</div>
      <div className="flex items-center space-x-4">
        {/* Display Sign In/Out buttons based on session status */}
        {status === "authenticated" ? (
          <>
            <Button
              onClick={() => signOut()}
            >
              Sign Out
            </Button>
            <span className="text-gray-300">{session.user?.name}</span>
          </>
        ) : (
          <Button
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
};
