import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-blue-300">
            yuorei books
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/techbookfest17" className="hover:text-blue-300">
                技術書典17
              </Link>
            </li>
            <li>
              <Link href="/c105" className="hover:text-blue-300">
                C105
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
