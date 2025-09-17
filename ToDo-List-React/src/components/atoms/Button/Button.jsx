const Button = ({ onClick, children, variant = "primary" }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
