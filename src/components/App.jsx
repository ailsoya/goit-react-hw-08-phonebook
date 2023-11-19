import { useEffect, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Contacts = lazy(() => import('../pages/Contacts'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  )
}