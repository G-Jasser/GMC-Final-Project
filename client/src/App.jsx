import { RouterProvider } from "react-router-dom"
import { router } from "./router/index"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { getPost } from "./JS/postSlice/postSlice"


function App() {
  const dispatch=useDispatch()
    useEffect(() => {
      dispatch(getPost())
    }, [])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
