const Checkbox = ({ checked, onChange, disabled = false, ...props }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
  );
};

export default Checkbox;
