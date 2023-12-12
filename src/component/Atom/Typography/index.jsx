function Title(props) {
  const {variant, type, className, children} = props;

  let buttonStyle = "";
  switch (variant) {
    case "primary":
      buttonStyle += "text-3xl text-primary font-bold";
      break;
    default:
      break;
  }
  return (
    <div>
      <div className={`${buttonStyle} ${className}`}>{children}</div>
    </div>
  );
}

export default Title;
