import styles from "./Input.module.css";

type InputProps = {
    type?: string;
    placeholder?: string;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
    name?: string;
};

export default function InputField({
    type,
    placeholder,
    className,
    style,
    id,
    name,
}: InputProps) {

    const inputStyles = {
        ...style,
    }

    return <input autoComplete="off" id={id} name={name} type={type} placeholder={placeholder} className={`${styles.Input} ${className}`} style={inputStyles} />;
}
