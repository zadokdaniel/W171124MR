function PageHeader({ title, description }) {
  return (
    <div className="my-3">
      <h1>{title}</h1>

      <div>{description}</div>
    </div>
  );
}

export default PageHeader;
