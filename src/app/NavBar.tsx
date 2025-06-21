'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex space-x-7">
                        <Link href="/" className="flex items-center py-4">
                            <Image
                                src="/printforge-logo.png"
                                alt="PrintForge"
                                width={128}
                                height={32}
                                priority
                            />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                        <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                            About
                        </Link>
                        <Link href="/models" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                            3D Models
                        </Link>
                        <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-gray-900">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
