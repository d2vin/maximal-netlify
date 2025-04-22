import type { User } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import '../styles/navbar.css';

interface NavbarProps {
  pathname: string;
  user: User | null;
}

const Navbar = ({ pathname, user }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProfileMenuOpen, setMobileProfileMenuOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("hasVisited")) {
      setShowAnimation(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <nav className="absolute bg-white left-0 w-screen">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center lg:hidden z-50">
              {/* Mobile menu button */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`block h-6 w-6 ${
                    mobileMenuOpen ? 'hidden' : 'block'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? 'block' : 'hidden'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-shrink-0 items-center">
              <a href="/" className="text-gray-900 hover:text-gray-700">
              <h1 className={`${showAnimation ? "fade-in-up" : ""} font-light text-2xl font-serif text-blue-900`}>
                Maximal
              </h1>
              </a>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
              {/* Navigation links with conditional styling */}
              <a
                href="/about"
                className={`${showAnimation ? "fade-in-up" : ""}  rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === '/about'
                    ? 'bg-zinc-900 text-white'
                    : 'text-black hover:bg-zinc-900 hover:text-white'
                }`}
              >
                About
              </a>
              <a
                href="/contact"
                className={`${showAnimation ? "fade-in-up" : ""}  rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === '/contact'
                    ? 'bg-zinc-900 text-white'
                    : 'text-black hover:bg-zinc-900 hover:text-white'
                }`}
              >
                Contact
              </a>
              <a
                href="/jobs"
                className={`${showAnimation ? "fade-in-up" : ""}  rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === '/jobs'
                    ? 'bg-zinc-900 text-white'
                    : 'text-black hover:bg-zinc-900 hover:text-white'
                }`}
              >
                Jobs
              </a>
              <a
                href="/team"
                className={`${showAnimation ? "fade-in-up" : ""}  rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === '/team'
                    ? 'bg-zinc-900 text-white'
                    : 'text-black hover:bg-zinc-900 hover:text-white'
                }`}
              >
                Team
              </a>
              <a
                href="/service-providers"
                className={`${showAnimation ? "fade-in-up" : ""}  rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === '/service-providers'
                    ? 'bg-zinc-900 text-white'
                    : 'text-black hover:bg-zinc-900 hover:text-white'
                }`}
              >
                Service Providers
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a
                href="/contact"
                className="relative inline-flex items-center gap-x-1.5 rounded-md bg-zinc-800 px-3 py-2 mr-2 lg:mr-0 text-sm font-semibold text-white shadow-sm hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ml-0.5 h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                Contact
              </a>
            </div>
            <div className="hidden lg:ml-4 lg:flex lg:flex-shrink-0 lg:items-center">
              {/* Profile dropdown */}
              <div className="relative">
                {user ? (
                  <>
                    <button
                      type="button"
                      className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={mobileProfileMenuOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setMobileProfileMenuOpen(!mobileProfileMenuOpen)
                      }
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.user_metadata.avatar_url}
                        alt=""
                      />
                    </button>
                    {/* Dropdown menu, show/hide based on menu state */}
                    {mobileProfileMenuOpen && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                        tabIndex={-1}
                      >
                        {/* <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                        >
                          Your Profile
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex={-1}
                        >
                          Settings
                        </a> */}
                        <form action="/api/auth/signout" method="get">
                          <button
                            type="submit"
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700"
                            tabIndex={-1}
                          >
                            Sign out
                          </button>
                        </form>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href="/signin"
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-zinc-800 px-3 py-2 mr-2 lg:mr-0 text-sm font-semibold text-white shadow-sm hover:bg-zinc-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-800"
                  >
                    Investor Login
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {mobileMenuOpen && (
        <div className="lg:hidden shadow-lg border-b" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a
              href="/about"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === '/about'
                  ? 'bg-zinc-900 text-white'
                  : 'text-black hover:bg-zinc-900 hover:text-white'
              }`}
              aria-current="page"
            >
              About
            </a>
            <a
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === '/'
                  ? 'bg-zinc-900 text-white'
                  : 'text-black hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href="/jobs"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === '/jobs'
                  ? 'bg-zinc-900 text-white'
                  : 'text-black hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Jobs
            </a>
            <a
              href="/team"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === '/team'
                  ? 'bg-zinc-900 text-white'
                  : 'text-black hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Team
            </a>
            <a
              href="/contact"
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                pathname === '/contact'
                  ? 'bg-zinc-900 text-white'
                  : 'text-black hover:bg-zinc-900 hover:text-white'
              }`}
            >
              Contact
            </a>
          </div>
          {user && (
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.user_metadata.avatar_url}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-400">
                    {user.user_metadata.full_name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-zinc-900 hover:text-white"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-zinc-900 hover:text-white"
                >
                  Settings
                </a>
                <form action="/api/auth/signout" method="get">
                  <button
                    type="submit"
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-400 hover:bg-zinc-900 hover:text-white"
                  >
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;