import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from "./pages/Home/Home.jsx";
// import MovieDetail from "./pages/MovieDetail/MovieDetail.jsx";
import App from './App.jsx';
import './index.scss';
import {  BrowserRouter } from "react-router-dom";


// import {  createBrowserRouter,  RouterProvider } from "react-router-dom";
/* este bloco comentado não dá pra ser utilizado quando preciso de passar algum 
valor do componente filho para o pai. */
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     // errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/movie/:id",
//         element: <MovieDetail />,
//       },
//     ],
//   }, 
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
