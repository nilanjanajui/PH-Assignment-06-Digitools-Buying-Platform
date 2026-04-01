import { ShoppingCart } from "lucide-react";

export default function Navbar({ cartCount }) {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center gap-1">
                        <span className="text-2xl font-extrabold text-violet-600 tracking-tight">
                            Digi
                        </span>
                        <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                            Tools
                        </span>
                    </div>

                    <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
                        {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map(
                            (item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="hover:text-violet-600 transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            )
                        )}
                    </div>

                    <div className="flex items-center gap-3">

                        <div className="relative cursor-pointer">
                            <ShoppingCart
                                size={22}
                                className="text-gray-700 hover:text-violet-600 transition-colors"
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        <a
                            href="#"
                            className="hidden sm:block text-sm font-medium text-gray-700 hover:text-violet-600 transition-colors"
                        >
                            Login
                        </a>

                        <a
                            href="#"
                            className="bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                        >
                            Get Started
                        </a>
                    </div>
                </div >
            </div >
        </nav >
    );
};
