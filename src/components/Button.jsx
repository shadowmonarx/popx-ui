import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  variant = "primary",
  disabled = false,
}) => {
  if (disabled) {
    return (
      <a href={to} className="btn btn-disabled">
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children}
    </Link>
  );
};

export default Button;
