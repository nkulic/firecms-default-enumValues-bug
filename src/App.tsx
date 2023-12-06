import { useCallback } from "react";

import { User as FirebaseUser } from "firebase/auth";
import { Authenticator, FirebaseCMSApp } from "firecms";

import "@fontsource/ibm-plex-mono";
import "typeface-rubik";

import { showcaseCollection } from "./collections/products.tsx";
import { firebaseConfig } from "./firebase-config.ts";

export default function App() {
  const myAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!");
      }

      console.log("Allowing access to", user?.email);
      // This is an example of retrieving async data related to the user
      // and storing it in the controller's extra field.
      const sampleUserRoles = await Promise.resolve(["admin"]);
      authController.setExtra(sampleUserRoles);

      return true;
    },
    []
  );

  return (
    <FirebaseCMSApp
      name={"My Online Shop"}
      authentication={myAuthenticator}
      collections={[showcaseCollection]}
      firebaseConfig={firebaseConfig}
    />
  );
}
