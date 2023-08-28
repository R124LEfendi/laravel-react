import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import Logo from '../Components/Logo-1.png';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div
                className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <Link href="/">
                    <img src={Logo} style={{ width: "100%" }} />

                </Link>
                {children}
            </div>

            <div >

            </div>
        </div>
    );
}
