import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getData } from "./api";

export default () => {
  useEffect(() => {
    document.body.className = "crew";
  }, []);

  const query = getData();
  if (query.isLoading) return <h1>Loading</h1>;
  console.log(query.data);

  return (
    <main id="main" className="grid-container grid-container--crew flow">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span> Meet your crew
      </h1>

      <div className="flex dot-indicators">
        {query.data?.crew.map((member) => (
          <NavLink to={member.role} key={member.role}>
            <span className="sr-only">{member.role}</span>
          </NavLink>
        ))}
      </div>
      <Outlet />
    </main>
  );
};
