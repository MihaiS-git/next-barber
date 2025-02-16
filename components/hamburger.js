'use client';

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import HamburgerMenu from "./hamburger-menu";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpenState = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const memoizedMenu = useMemo(() => <HamburgerMenu />, []);

    return (
        <div>
            {!isOpen && (
                <div
                    className="lg:hidden m-4 py-2 w-8 h-8 space-y-1 sm:py-3 sm:w-12 sm:h-12 sm-pace-y-2 bg-zinc-950 rounded shadow flex flex-col justify-between"
                    onClick={toggleOpenState}
                >
                    <span className="block mx-auto w-6 sm:w-7 h-0.5 sm:h-0.5 bg-zinc-50 animate-pulse"></span>
                    <span className="block mx-auto w-6 sm:w-7 h-0.5 sm:h-0.5 bg-zinc-50 animate-pulse"></span>
                    <span className="block mx-auto w-6 sm:w-7 h-0.5 sm:h-0.5 bg-zinc-50 animate-pulse"></span>
                </div>
            )}
            {isOpen && (
                <div className="fixed -inset-x-1 bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center z-50 p-4">
                    <Link href='/'>
                        <h1 className="text-3xl mb-8">Barber Shop</h1>
                    </Link>
                    {memoizedMenu}
                    <button
                        className="bg-zinc-800 hover:bg-zinc-400 text-zinc-100 hover:text-zinc-900 w-6 h-6 align-bottom self-end font-bold mt-4"
                        onClick={toggleOpenState}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    );
}