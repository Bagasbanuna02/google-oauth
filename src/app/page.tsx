/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Avatar, Button, Image, Stack } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Stack h="100vh" align="center" justify="center">
        <p>Welcome, {session.user?.name}</p>
        <Avatar
          src={
            session.user?.image ||
            "https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"
          }
          alt=""
        />
        <Button onClick={() => signOut()}>Logout</Button>
      </Stack>
    );
  }

  return (
    <>
      <Stack h="100vh" align="center" justify="center">
        <Button onClick={() => signIn("google")}>Login with Google</Button>
      </Stack>
    </>
  );
}
