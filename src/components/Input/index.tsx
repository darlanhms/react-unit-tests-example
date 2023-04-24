import styles from "./styles.module.css";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input {...rest} />
    </div>
  );
};

export default Input;
