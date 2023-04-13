/*
  Project Name: solid-js-sandbox
  License: MIT
  Created by: Lightnet
*/

//import { createEffect } from 'solid-js'
//import { supabase } from '../libs/supabaseclient.js';
//import Auth from '../components/auth/api/Auth.jsx';
//import Account  from '../components/auth/api/Account.jsx';
import Access from '../components/auth/api/AuthAccess.jsx';
import { useAuth } from '../components/auth/api/AuthProvider.jsx';
//import ElMobile from '../components/utilities/ElMobile.jsx';

export default function PageHome() {

  const [session, {user,setSession}] = useAuth();

  return (
    <div>
      <p>
        Godot Engine Test for web socket, database save and load.
      </p>
      <Access>
        <label>Home, {user()} </label>
      </Access>
      
    </div>
  )
}
// <ElMobile/>