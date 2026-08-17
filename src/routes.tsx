import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Account } from "./pages/Account"
import { useContext } from "react"
import { AppContext } from "./components/Context/AppContext"
import { UserInfo } from "./pages/UserInfo"

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/account/:id' element={ isLoggedIn ? <Account /> : <Home />} />
      <Route path='/user' element={ isLoggedIn ? <UserInfo /> : <Home />} />
    </Routes>
  )
}