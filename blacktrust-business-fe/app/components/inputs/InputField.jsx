const InputField = ({
  label,
  inputType,
  startIcon,
  endIcon,
  placeHolder,
  value,
  borderColor,
  placeHolderColor,
  onChange,
  name,
  labelColor,
  textArea,
}) => {
  return (
    <main className="w-full">
      {label && (
        <label
          htmlFor="label"
          className={`font-semibold text-sm ${labelColor && labelColor}`}
        >
          {label}
        </label>
      )}
      {!textArea && (
        <div
          className={`flex gap-2 ${
            borderColor && borderColor
          } border hover:border-btGold p-2 w-full items-center rounded-md mt-2`}
        >
          {startIcon && <span>{startIcon}</span>}
          <input
            type={inputType ? inputType : "text"}
            name={name}
            value={value}
            className={`w-full focus:outline-none text-sm bg-transparent ${
              placeHolderColor && placeHolderColor
            }`}
            placeholder={placeHolder}
            onChange={onChange}
          />
          {endIcon && <span className="text-btOutLine">{endIcon}</span>}
        </div>
      )}
      {textArea && (
        <textarea
          name={name}
          value={value}
          rows="5"
          className={`w-full focus:outline-none text-sm border hover:border-btGold rounded-md mt-2 p-2 ${
            placeHolderColor && placeHolderColor
          } ${borderColor && borderColor}`}
          placeholder={placeHolder}
          onChange={onChange}
        ></textarea>
      )}
    </main>
  );
};

export default InputField;
