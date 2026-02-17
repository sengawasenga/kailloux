"use client"

import Image from "next/image"
import logoImg from "@/public/img/kailloux-logo-dark.svg"
import Link from "next/link"
import { Button } from "@heroui/react"

const MainNavbar = () => {
  return (
    <div className="absolute left-0 top-0 w-full z-50">
      <nav className='flex items-center justify-between max-w-7xl mx-auto py-6 mt-6 rounded-full bg-white/80 backdrop-blur-md px-12'>
        <div><Image src={logoImg} alt="Logo" className="h-[40px] w-auto" /></div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-4">
            <li><Link href="/" className="text-foreground/65 hover:text-primary transition duration-200">Accueil</Link></li>
            <li><Link href="/a-propos" className="text-foreground/65 hover:text-primary transition duration-200">A propos</Link></li>
            <li><Link href="/comment-ca-marche" className="text-foreground/65 hover:text-primary transition duration-200">Comment ça marche ?</Link></li>
            <li><Link href="/blogs" className="text-foreground/65 hover:text-primary transition duration-200">Blogs</Link></li>
            <li><Link href="/contact" className="text-foreground/65 hover:text-primary transition duration-200">Contact</Link></li>
          </ul>
          <div>
            <Button variant="danger">Commencer</Button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MainNavbar