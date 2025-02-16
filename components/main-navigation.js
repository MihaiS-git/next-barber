import Link from "next/link";

export default function MainNavigation() {
    return (
        <nav className="hidden lg:flex w-8/12 items-center">
            <ul className="flex flex-row justify-end w-full">
              <li className="px-4">
                <Link href='/'>Treatments</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Barbers</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Cart</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Appointments</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Account</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Contact</Link>
              </li>
              <li className="px-4">
                <Link href='/'>Login</Link>
              </li>
            </ul>
          </nav>
    );
}