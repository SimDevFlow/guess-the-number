import GuessNumberGame from "./pages/GuessNumberGame"
import Home from "./pages/Home"
import DifficultyPage from "./pages/Difficulty"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Home />
  },
  {
    path: '/Play',
    element: <GuessNumberGame/>
  },
  {
    path: '/difficulty',
    element: <DifficultyPage/>
  }
])
function App() {

  return <RouterProvider router={router}/>
}

export default App
