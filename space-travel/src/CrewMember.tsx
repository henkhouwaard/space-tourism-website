import { useParams } from "react-router-dom";
import { CrewMember } from "./SpaceData";
import { getData } from "./api";

export default () => {
  const query = getData();
  if (query.isLoading) return <h1>Loading...</h1>;

  const params = useParams();
  const role = params.role;
  let crewMember: CrewMember;
  if (!role) crewMember = query.data!.crew[0];
  else
    crewMember = query.data!.crew.filter(
      (c) => c.role.toLowerCase() === role.toLowerCase(),
    )[0];

  return (
    <>
      <article className="crew-info flow">
        <header className="flow flow--space-small">
          <h2 className="fs-600 uppercase ff-serif">{crewMember.role}</h2>
          <p className="fs-700 uppercase ff-serif">{crewMember.name}</p>
        </header>
        <p>{crewMember.bio}</p>
      </article>
      <img src={crewMember.images.png} alt={crewMember.name} />
    </>
  );
};
