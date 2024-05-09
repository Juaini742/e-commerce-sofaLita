function Button(props) {
  const {variant, type, className, children} = props;

  let buttonStyle = "";
  switch (variant) {
    case "primary":
      buttonStyle += "btn-primary";
      break;
    case "primary-outline":
      buttonStyle +=
        "border border-black hover:bg-white hover:text-black trans-300";
      break;
    case "secondary":
      buttonStyle += "btn-secondary";
      break;
    default:
      break;
  }
  return (
    <div>
      <button type={type} className={`${buttonStyle} ${className}`}>
        {children}
      </button>
    </div>
  );
}

export default Button;
