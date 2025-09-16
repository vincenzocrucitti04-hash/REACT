const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  ...props
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
