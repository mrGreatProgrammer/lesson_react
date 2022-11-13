import React from "react";

const CustomInp = React.forwardRef(({ label, onChange, name, id }, ref) => {
  const input = React.useRef();
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      input.current.focus();
    },
  }));

  return (
    <div>
      <label> {label}</label>
      <input
      ref={input}
        type="text"
        name={name}
        id={id}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
});

const SeeUseImparativeHandle = () => {
  const [_, setName] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const input = React.useRef();
  React.useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <div>
      <CustomInp ref={input} label={"Name"} onChange={handleNameChange} />
    </div>
  );
};

export default SeeUseImparativeHandle;
