import Link from 'next/link'
import styles from "./Header.module.scss";
import ActiveLink from "./ActiveLink";

export default () => {
  return (
    <header className="App-header">
      <div className={styles.Header}>
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
            </svg>
            <span className="font-semibold text-xl tracking-tight">EA31337</span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-xl lg:flex-grow">
              <ActiveLink href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 cursor-pointer">
                <a>Details</a>
              </ActiveLink>
              <ActiveLink href="/stats" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white mr-4 cursor-pointer">
                <a>Stats</a>
              </ActiveLink>
              <ActiveLink href="/projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white cursor-pointer">
                <a>Projects</a>
              </ActiveLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
