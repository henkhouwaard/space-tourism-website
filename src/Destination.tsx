import { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { getData } from "./api";

export const Loader = async () => {
  const response = await fetch("../assets/destinations.json");
  return await response.json();
};

export default () => {
  useEffect(() => {
    document.body.className = "destination";
  }, []);
  const params = useParams();
  const navigate = useNavigate();

  const query = getData();
  if (query.isLoading) return <h1>Loading</h1>;

  return (
    <main
      id="main-content"
      className="grid-container grid-container--destination flow"
    >
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <div className="flex underline-indicators tab-list">
        {query.data!.destinations.map((d) => {
          return (
            <button
              key={d.name}
              onClick={() => {
                navigate(d.name);
              }}
              aria-selected={
                params.name?.toLowerCase() === d.name.toLowerCase()
                  ? "true"
                  : "false"
              }
              className="uppercase text-accent ff-sans-cond letter-spacing2"
            >
              {d.name}
            </button>
          );
        })}
      </div>
      <Outlet />
    </main>
  );
};
