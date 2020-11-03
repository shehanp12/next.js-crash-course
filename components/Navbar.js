import Link from 'next/link'
import React from "react";

const Navbar = () =>(
   <div>
       <ul>
           <li><Link href="/"><a>Home</a></Link></li>
           <li><Link href="/about"><a>About</a></Link></li>
       </ul>
      <style jsx>{`
      ul{
      background:#FFFF00;
      color:#fff;
      list-style:none;
      display:flex;
      }
      
      ul li{
      font-size:18px;
      margin-right:20px;
      
      }
      
      
      
      
      `}
      </style>
   </div>

);
export default Navbar;