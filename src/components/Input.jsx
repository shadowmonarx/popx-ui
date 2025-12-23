const Input = ({ label, type = "text", placeholder }) => {
  return (
    <div className="input-wrapper">
      <span className="floating-label">{label}</span>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
