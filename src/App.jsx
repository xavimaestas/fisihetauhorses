import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
import './fonts.css'
import './App.css'
import Main from "./pages/Home.jsx"
import MeetHorses from "./pages/MeetHorses.jsx"
import Pricing from "./pages/Pricing.jsx"
import AboutOwner from "./pages/AboutOwner.jsx"
import Layout from "./components/Layout.jsx"






function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Layout/> }>
      <Route index element={ <Main/> }/>
      <Route path="/meetthehorses" element={ <MeetHorses/>}/>
      <Route path="/pricing" element={ <Pricing/>}/>
      <Route path="/abouttheowner" element={ <AboutOwner/>}/>
    </Route>
  ))
  

  return (
    <RouterProvider router={ router }/>
  )
}

export default App
