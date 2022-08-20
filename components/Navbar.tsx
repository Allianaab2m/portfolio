import type { NextPage } from 'next'
import Link from 'next/link'
import { FC } from 'react'

export const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Alliana</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><a>About Me</a></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><a>Works</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
