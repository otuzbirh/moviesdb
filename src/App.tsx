import './App.scss'
import { Route, Routes} from 'react-router-dom'
import Homepage from './views/home/index'
import ApplicationContext from "./context/Context";
import DetailPreview from './views/detail-preview'


function App() {

  return (
    <>
     <Routes>
        <Route  path='/'  element={ 
          <ApplicationContext>
           <Homepage /> 
          </ApplicationContext>
           } />
        <Route  path='/item/:type/:id'  element={
          <ApplicationContext>
            <DetailPreview />
            </ApplicationContext>
            } />
          </Routes>
    </>
  )
}

export default App
