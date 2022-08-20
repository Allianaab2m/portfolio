import type { NextPage } from "next";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <a className="link link-hover">About Me</a>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Works</a>
      </div>
    </footer>  
  )
} 
