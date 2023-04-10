import styles from "./styles.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  children,
}) => {
  return (
    <button className={[styles[variant], styles.base].join(" ")}>
      {children}
    </button>
  );
};

export default Button;
