import PhoneInput from "react-phone-number-input";

const PhoneInputField = ({
    field,
    form
}) => {
    return (
        <div className="input-field">
            <PhoneInput
                placeholder="Enter phone number"
                name={field.name}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
            />
        </div>
    );
};

export default PhoneInputField;