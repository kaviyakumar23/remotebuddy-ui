"use client";
// app/page.js

import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated, useQuery } from "convex/react";

function App() {
  return (
    <main>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        <Content />
        <SignOutButton />
      </Authenticated>
    </main>
  );
}

function Content() {
  return <div>Authenticated content</div>;
}

export default App;
