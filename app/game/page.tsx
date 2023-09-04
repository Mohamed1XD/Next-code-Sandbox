
'use client';
import Link from "next/link";
import { useState } from 'react';

function game() {
    var [num, setNum] = useState(0);
    const click = () => {
         setNum(num + 1)
                    };
     return (
        <>
        <h1> <Link href='/'>home</Link> </h1>  
        <h1>Num : {num}</h1>   
        <button onClick={click}>Click</button>
         </>

                      );
                  }

export default game;