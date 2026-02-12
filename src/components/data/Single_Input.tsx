import type { ChangeEvent } from "react";

function SingleInput<T>({
    className,
    inputType = "text",
    text,
    disabled=false,
    placeholder="",
    value,
    handleChange
}: {
    className: string,
    inputType?: string,
    text: string,
    disabled?: boolean,
    placeholder?: string,
    value: T,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
}) {
    return (
        <>
            <label htmlFor={className}>{text} </label>
            <br />
            <input
                type={inputType}
                className={className}
                placeholder={placeholder}
                disabled={disabled}
                value={value as string | number}
                onChange={handleChange}
            />
            <br />
        </>
    );
}

export default SingleInput;