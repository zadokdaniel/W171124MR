function Input({ label, error, ...rest }) {
  return (
    <div className="mb-3">
      <label htmlFor={rest.name} className="form-label">
        {label}
        {rest.required ? <span className="text-danger ms-1">*</span> : null}
      </label>
      <input
        className={["form-control", error ? "is-invalid" : ""].join(" ")}
        id={rest.name}
        {...rest}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

export default Input;
1;
