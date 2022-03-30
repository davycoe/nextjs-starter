const enum Size {
  sm = "px-2",
  md = "px-4",
  lg = "px-8",
  xl = "px-16",
}

const enum Variant {
  default = "bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-800 ",
  primary = "bg-blue-600 text-white hover:bg-blue-700 hover:text-white",
  success = "bg-green-500 text-white hover:bg-green-600 hover:text-white",
  info = "bg-blue-500 text-white hover:bg-blue-600 hover:text-white",
  warning = "bg-yellow-400 text-white hover:bg-yellow-500 hover:text-white",
  danger = "bg-red-500 text-white hover:bg-red-600 hover:text-white",
  dark = "bg-gray-800 text-white hover:bg-gray-900 hover:text-white",
  disabled = "cursor-not-allowed opacity-50 hover:cursor-not-allowed hover:opacity-50",
}

// interface to declare all our prop types
interface Props {
  children: string;
  onClick?: () => void;
  variant: string; // default, primary, info, success, warning, danger, dark
  size: string; // sm, md, lg, xl
  disabled?: boolean;
}

// button component, consuming props
const Button = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  disabled,
}: Props) => {
  switch (variant) {
    case "disabled":
      variant = Variant.disabled;
      break;
    case "primary":
      variant = Variant.primary;
      break;
    case "info":
      variant = Variant.info;
      break;
    case "warning":
      variant = Variant.warning;
      break;
    case "success":
      variant = Variant.success;
      break;
    case "danger":
      variant = Variant.danger;
      break;
    case "dark":
      variant = Variant.dark;
      break;
    default:
      variant = Variant.default;
      break;
  }
  switch (size) {
    case "sm":
      size = Size.sm;
      break;
    case "lg":
      size = Size.lg;
      break;
    case "xl":
      size = Size.xl;
      break;
    default:
      size = Size.md;
      break;
  }

  console.log(disabled);
  return (
    <button
      className={`m-2 rounded py-2 font-bold ${variant} ${size} ${
        disabled ? "disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
