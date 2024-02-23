
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function Component() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink as={Link} href="api/auth/signin/github">
                    Sign In
                </NavbarLink>
                <NavbarLink href="/Extra">ExtraPage</NavbarLink>
                <NavbarLink href="/server">Server</NavbarLink>
                <NavbarLink href="/api/auth/signout">Signout</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
