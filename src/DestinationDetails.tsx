import { useParams } from "react-router-dom";
import { getData } from "./api";

export default () => {
  const query = getData();
  if (query.isLoading) return <h1>Loading</h1>;
  const params = useParams();

  const destination = query.data!.destinations.find(
    (d) => d.name.toLowerCase() === params.name!.toLowerCase(),
  );

  if (!destination) return <h1>Not found!</h1>;

  return (
    <>
      {/*<img src={destination.images.png} alt={destination.name} />*/}
      <article className="destination-info">
        <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>
        <p>{destination.description}</p>
        <div className="destination-meta flex">
          <div>
            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
            <p className="ff-serif uppercase">{destination.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
            <p className="ff-serif uppercase">{destination.travel}</p>
          </div>
        </div>
      </article>
    </>
  );
};
