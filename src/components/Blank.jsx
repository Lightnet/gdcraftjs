/*
  Project Name: gdcraftjs
  License: MIT
  Created by: Lightnet
*/

import { createSignal } from 'solid-js';

export default function Blank(){

  const [count, setCount] = createSignal(0)

  return (<>
    <label>Blank</label>
  </>)
};
