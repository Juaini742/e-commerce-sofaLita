function Paragraph(props) {
  const {variant, className, children} = props;

  let paragraphStyle = "";
  switch (variant) {
    case "desc-head":
      paragraphStyle += "text-sm text-white font-semibold";
      break;
    case "sub-head-md":
      paragraphStyle += "text-md font-semibold text-primary";
      break;
    case "sub-head-sm":
      paragraphStyle += "text-sm font-semibold text-primary";
      break;
    case "black-sm":
      paragraphStyle += "text-sm";
      break;
    case "black-xs":
      paragraphStyle += "text-xs";
      break;
    default:
      break;
  }
  return (
    <div>
      <p className={`${paragraphStyle} ${className}`}>{children}</p>
    </div>
  );
}

export default Paragraph;
