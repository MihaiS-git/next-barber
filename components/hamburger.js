'use client';

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import HamburgerMenu from "./hamburger-menu";
import { Button } from "@/components/ui/button";

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
                    className="lg:hidden m-4 py-2 w-8 h-8 space-y-1 md:py-3 md:w-12 md:h-12 md-pace-y-2 bg-zinc-950 rounded shadow flex flex-col justify-between"
                    onClick={toggleOpenState}
                >
                    <span className="block mx-auto w-6 md:w-7 h-0.5 md:h-0.5 bg-zinc-50 animate-pulse"></span>
                    <span className="block mx-auto w-6 md:w-7 h-0.5 md:h-0.5 bg-zinc-50 animate-pulse"></span>
                    <span className="block mx-auto w-6 md:w-7 h-0.5 md:h-0.5 bg-zinc-50 animate-pulse"></span>
                </div>
            )}
            {/* <div className="relative"> */}
            <div
                className={`fixed inset-x-0 top-0 overflow-y-auto bg-zinc-800 text-zinc-50 flex flex-col items-center justify-start z-50 p-4 transform transition-all duration-500 ease-in-out 
                    ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95 pointer-events-none"} 
                `}
            >
                
                    {memoizedMenu}
                
                <div className="fixed bottom-4 right-4">
                    <Button
                        variant="secondary"
                        className="w-4 h-4 p-4 font-bold"
                        onClick={toggleOpenState}
                    >X</Button>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}