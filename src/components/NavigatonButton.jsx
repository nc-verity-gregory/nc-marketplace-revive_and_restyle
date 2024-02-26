import { Link } from "react-router-dom";
export const NavigationButton = ({ children }) => {
  const [path, text] = children;
  return (
    <Link to={`/${path}`} className="navLink">
      <div className="navigationButton">
        <h2 className="buttonText">{text}</h2>
      </div>
    </Link>
  );
};
