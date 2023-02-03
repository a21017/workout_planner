
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';


function App() {

  const router = createBrowserRouter([
    {path:'/',element:<HomePage/>},
    {path:'/profile/:profileId',element:<ProfilePage/>}
  ])

  return (
    <RouterProvider router={router}/>

  );
}

export default App;



