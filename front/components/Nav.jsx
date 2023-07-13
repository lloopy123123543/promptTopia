"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link';

function Nav() {
  const isUserLoggedIn = true
  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response)
    }
  },[])
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
              <Image src={"/assets/images/avatar.jpg"}
              width={37}
              height={37}
              className="rounded-full"
              alt='profile'
              >

              </Image>
            </Link>
          </div>
        ): (
        <>
        {providers && Object.values(providers).map((provider) => (
        <button
        type='button'
        key={provider.key}
        onClick={()=> signIn(provider.id)}
        className='black_btn'
        >
          Sign In
        </button>
          ))}
        </>

        )}

      </div>
      {/* mobile */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className='flex'>
                    <Image src="/assets/images/avatar.jpg"
                    className="rounded-full"
        alt="Prompt"
        width={37}
        height={37}
        onClick={() => setToggleDropdown((prev) => !prev)}
        >
        </Image>

        {toggleDropdown && (
          <div className="dropdown">
            <Link href={"/profile"}
            className="dropdown_link"
            onClick={() => setToggleDropdown(false)}
            >
              My Profile
            </Link>
            <Link href={"/profile"}
            className="dropdown_link"
            onClick={() => setToggleDropdown(false)}
            >
              Create prompt
            </Link>
            <button
            type='button'
            onClick={() => {
              setToggleDropdown(false)
              signOut();
            }}
            className='mt-5 w-full black_btn'
            >
              Sing out
            </button>

          </div>
        )}
          </div>
        ): (<>
          {providers && Object.values(providers).map((provider) => (
          <button
          type='button'
          key={provider.key}
          onClick={()=> signIn(provider.id)}
          className='black_btn'
          >
            Sign In

          </button>
            ))}
          </>)}

      </div>
    </nav>
  )
}

export default Nav