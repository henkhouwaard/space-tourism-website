import { Outlet } from "react-router-dom";
import PrimaryNavigationLink from "./PrimaryNavigationLink";

export const Loader = async () => {
  const response = await fetch("../assets/data.json");
  return await response.json();
};

const Layout = () => {
  return (
    <>
      <a className="skip-to-content" href="#main-content">
        Skip to main content
      </a>
      <header className="primary-header flex">
        <div>
          <img
            src="../assets/shared/logo.svg"
            alt="space tourism logo"
            className="logo"
          />
        </div>
        <button
          className="mobile-nav-toggle"
          ari-control="primary-navigation"
          aria-expanded="false"
        >
          <span className="sr-only">menu</span>
        </button>
        <nav>
          <ul
            id="primary-navigation"
            data-visible="false"
            className="flex primary-navigation underline-indicators"
          >
            <PrimaryNavigationLink to="/home" number="01" text="home" />
            <PrimaryNavigationLink
              to="/destination"
              number="02"
              text="destination"
            />
            <PrimaryNavigationLink to="/crew" number="03" text="crew" />
            <PrimaryNavigationLink
              to="/technology"
              number="04"
              text="technology"
            />
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
export default Layout;
