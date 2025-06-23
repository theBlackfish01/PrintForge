    'use client';

    import Link from 'next/link';
    import Image from 'next/image';
    import PFLogo from '@/public/printforge-logo.png';
    import PFLogoIcon from '@/public/printforge-logo-icon.svg';

    export default function NavBar() {
        return (
            <header className="w-full bg-white">
                <nav className="flex justify-between px-6 py-4 items-center">
                    <div className="relative"><Link href="/">
                        {/* Desktop Logo */}
                        <Image
                            src={PFLogo}
                            alt="PrintForge Logo"
                            className="hidden md:block w-[200px] h-auto"
                            priority
                        />
                        {/* Mobile Logo */}
                        <Image
                            src={PFLogoIcon}
                            alt="PrintForge Logo Icon"
                            className="block md:hidden w-[40px] h-auto"
                            priority
                        />
                        </Link>
                    </div>

                    <ul className="flex items-center gap-6">
                        <li>
                            <Link
                                href="/models"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                3D Models
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className="text-gray-700 hover:text-gray-900"
                            >
                                About
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>
        );
    }
