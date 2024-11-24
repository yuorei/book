const Header: React.FC = () => {
  return (
    <header className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-blue-300">
            yuorei books
          </a>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="hover:text-blue-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://techbookfest.org/product/pRrU891w9zJ43YMMqdAq3m?productVariantID=1zDhVeRp7XmAGE8nePj2Zt"
                className="hover:text-blue-300"
              >
                技術書典17
              </a>
            </li>
            <li>
              <a href="/c105" className="hover:text-blue-300">
                C105
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
