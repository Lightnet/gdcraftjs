/*
  Project Name: gdcraftjs
  License: MIT
  Created by: Lightnet
*/

import { 
  createSignal
, createMemo
, createEffect 
, onCleanup
} from 'solid-js';

import { Link, useLocation } from '@solidjs/router';
import ToggleTheme from './theme/ToggleTheme';

const IndexMenus = () => {

  const location = useLocation();

  const pathname = createMemo(() => location.pathname);

  //for menu display
  let whitelist = [
    "/",
    "/about",
    "/account",
    "/signin",
    "/signup",
    "/signout",
    "/testlab",
    "/publicchat"
  ];

  const displayMenu = createMemo(()=>{
    //console.log("FIND:",whitelist.find((item)=>{
      //return item === pathname()      
    //}))
    if(
      whitelist.find((item)=>{return item === pathname()})
    ){
      //console.log("FOUND")
      // <ToggleTheme /> //does not work here layer?
      // <Link class="btnLink" href="/game">Game</Link><span> | </span>
      return ( <div>
        <Link class="btnLink" href="/">Home</Link><span> | </span>
        <Link class="btnLink" href="/about">About</Link><span> | </span>
        <Link class="btnLink" href="/account">Account</Link><span> | </span>
        <ToggleTheme />
        </div>)
    }else{
      //console.log("NOT FOUND")
      return (<>
      </>)
    }
  })

  return (<>
  {displayMenu}
  </>)

}

export default IndexMenus;