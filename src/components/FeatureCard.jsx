const FeatureCard = ({ children, heading }) => {
  return (
    <div className="feature-card">
      {/* Title */}
      <h3 className="heading-3">{heading}</h3>
      <p>{children}</p>
    </div>
  );
};
export default FeatureCard;
