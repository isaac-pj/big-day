const Icon = ({ name, size, color }) => {
  return (
    <span
      className="material-symbols-outlined"
      style={{ fontSize: size, color }}
    >
      {name}
    </span>
  );
};

export default Icon;
