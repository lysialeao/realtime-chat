import { useAuthState } from "react-firebase-hooks/auth"

import { auth } from "./services/firebase"
import { SignIn } from "./views/SignIn"
import { Home } from "./views/Home"

import { GlobalStyle } from "../global"

export const App = () => {
  const [ user ] = useAuthState(auth)
  return (
    <>
      {user ? <Home /> : <SignIn />}
      <GlobalStyle />
      </>
  );
}