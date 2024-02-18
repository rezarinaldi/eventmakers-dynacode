import Link from "next/link";

export const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/"
                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href={`/#events`}
                className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          🎪 DynaVent
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href={`/#events`}
              className="font-semibold hover:text-white hover:bg-neutral text-[16px]"
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href={`/auth/login`}
              className="font-semibold text-neutral hover:text-white hover:bg-neutral text-[16px]"
            >
              Log In
            </Link>
          </li>
          <li>
            <Link
              href={`/auth/register`}
              className="font-semibold text-primary hover:text-white hover:bg-primary text-[16px]"
            >
              Register
            </Link>
          </li>
          {/* <li>
            <details>
              <summary className="font-semibold text-[16px]">
                🎫 User Dynacode
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <button
                    onClick={""}
                    className="font-semibold text-[16px] hover:text-white hover:bg-neutral"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
  );
};
