const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <p className="text-sm">© 2024 yuorei books. All Rights Reserved.</p>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://twitter.com/yuorei71"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                X (Twitter)
              </a>
            </li>
            {/* <li>
                <a
                  href="/privacy"
                  className="hover:text-blue-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-400"
                >
                  Terms of Service
                </a>
              </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
