import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'; 
import { RouterProvider } from 'react-router/dom';
import './styles/global.css'; 

import Home from './routes/Home';
import Team from './routes/Team';
import Publications from './routes/Publications';
import Resources from './routes/Resources';
import News from './routes/News';
import Join from './routes/Join';

const router = createBrowserRouter([
  {path: "/", element: <Home /> },
  {path: "/team", element: <Team /> },
  {path: "/publications", element: <Publications /> },
  {path: "/resources", element: <Resources /> },
  {path: "/news", element: <News /> },
  {path: "/join", element: <Join /> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
