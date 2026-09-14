const SectionHeader = ({ label, title, description, spacing = "mb-4" }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${spacing}`}>
      <span className="label text-accent/90">{label}</span>
      <h2 className="heading-2 font-bold text-text-primary text-center text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-1 max-w-md text-center text-text-secondary text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
