import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, redirect, RouterProvider } from 'react-router-dom';
import { GetAllExpenses } from './Data/DataCalls.jsx';


const ExpensesList = lazy(() => import('./components/ExpensesList.jsx'));
const ExpensesForm = lazy(()=>import('./components/ExpensesForm.jsx'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Wait</div >,
    loader: async () => {
      let collection = new Date().toLocaleString("en-GB", { month: "long" });

      return redirect("/" + collection);
    }
  },
  {
    path: "/:collection",
    element: <App />,
    children: [
      {
        path: '/:collection',
        element: <ExpensesList />,
        loader: async ({ params }) => {
          return GetAllExpenses(params.collection)
        }
      },

      {
        path: "/:collection/add",
        element: <ExpensesForm />,
      },
    ]
  }

], { basename: "/Expenses-App/" });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
