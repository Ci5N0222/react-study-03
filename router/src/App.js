import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import NotFound from './page/NotFound';
import Videos from './page/Videos';
import Root from './page/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: 'videos', element: <Videos />}
    ]
  },
  {
    path: '/videos',
    element: <Videos />
  }
]);

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
