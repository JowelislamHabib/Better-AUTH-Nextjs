"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }
  console.log(data);

  const user = data?.user;
  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">Better Auth</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/auth/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/auth/signup">Sign Up</Link>
            </li>
            <li>
              <Link href="/auth/signin">Sign In</Link>
            </li>
          </ul>
          <div>
            {user ? (
              <>
                <div className="flex justify-center items-center gap-8">
                  <p>Welcome, {user.name}!</p>
                  <Button onClick={() => signOut()}>SignOut</Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center gap-8">
                  <p>No user found</p>
                  <Link href={"/auth/signup"}>
                    <Button variant="secondary">Sign Up</Button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
