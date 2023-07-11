"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Nav() {
  const isUserLoggedIn = true
  return (

    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg"
        alt="Prompt"
        width={30}
        height={30}
        >
        </Image>
        <p className="logo_text">Promptopia</p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-propmpt" className="black_btn">
              Create post
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href="/profile">
              <Image src="/assets/images/profile.svg"
              width={37}
              height={37}>

              </Image>
            </Link>
          </div>
        ): (<dvi>login</dvi>)}

      </div>
    </nav>
  )
}

export default Nav