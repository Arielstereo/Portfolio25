const SectionHeader = ({ label, title }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-14">
      <span className="label text-accent/90">{label}</span>
      <h2 className="heading-2 font-bold text-text-primary text-center text-balance">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
