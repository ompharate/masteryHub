import { auth, signOut } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();

  console.log("sessin is:-",session);

  return (
    <div>
      {/* {session?.user?.name} */}
      {/* {session?.user?.name} */}

      <form
        action={async () => {
          "use server";
          await signOut( { redirectTo: "/login" });
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  );
};

export default page;
