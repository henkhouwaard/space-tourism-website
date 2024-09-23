import { Link, useLocation } from "react-router-dom";

interface Props {
  to: string;
  number: string;
  text: string;
}

export default ({ to, number, text }: Props) => {
  const location = useLocation();
  return (
    <li
      className={location.pathname.toLowerCase().includes(to) ? "active" : ""}
    >
      <Link
        to={to}
        className="uppercase text-white letter-spacing-2 ff-sans-cond"
      >
        <span aria-hidden="true">{number}</span>
        {text}
      </Link>
    </li>
  );
};
