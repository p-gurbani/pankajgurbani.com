const StageCard = ({ subtitle, title, features, children, className }) => {
  return (
    <div className={`card py-12 ${className}`}>
      <p className="text-sm tracking-widest uppercase">{subtitle}</p>
      {/* Title */}
      <h3 className="heading-3">{title}</h3>
      <ul className="list-disc list-inside flex flex-col space-y-4 pt-4">
        {features.map((feature, index) => (
          <li className="flex space-x-3" key={index}>
            <div width="20">
              <svg
                fill="none"
                stroke="currentColor"
                className="text-body dark:text-night-body"
                strokeWidth={1.5}
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default StageCard;
