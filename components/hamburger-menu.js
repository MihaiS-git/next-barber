import Link from "next/link";

export default function HamburgerMenu() {
    return (

        <ul>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Treatments</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Barbers</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Cart</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Appointments</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Account</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Contact</Link>
            </li>
            <li className="px-4 py-2 w-60">
                <Link href='/'>Login</Link>
            </li>
        </ul>

    );
}