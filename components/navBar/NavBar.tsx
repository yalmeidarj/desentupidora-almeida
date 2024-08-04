'use client'
import React, { useState } from 'react'
import Head from 'next/head'
import SideBar from '@/components/navBar/SideBar'
import MenuBarMobile from '@/components/navBar/MenuBarMobile';

type NavBarProps = {
    pageTitle?: string
}

export default function NavBar({ pageTitle }: NavBarProps) {
    // Concatenate page title (if exists) to site title
    let titleConcat = "Vocaber";
    if (pageTitle) titleConcat = pageTitle + " | " + titleConcat;

    // Mobile sidebar visibility state
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {/* <Head>
                <title>{titleConcat}</title>
            </Head> */}
            <div className=" z-50 fixed w-full ">
                <div className="flex">
                    <MenuBarMobile setter={setShowSidebar} />
                    <SideBar show={showSidebar} setter={setShowSidebar} />
                </div>
            </div>
        </>
    )
}
