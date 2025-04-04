import styles from "./Input.module.css";

type InputProps = {
    type?: string;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function InputField({
    type,
    placeholder,
    className,
    style,
}: InputProps) {

    const inputStyles = {
        ...style,
    }

    return <input type={type} placeholder={placeholder} className={`${styles.Input} ${className}`} style={inputStyles} />;
}
