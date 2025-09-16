const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  ...props
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    />
  );
};

export default Input;
