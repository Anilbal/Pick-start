interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Dropdown: React.FC<IconProps> = ({
  className = "",
  ...props
}) => (
  <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${className}`}
    {...props}
  >
    <path d="M0 0h48v48H0z" fill="none" />
    <g id="Shopicon">
      <polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586 	" />
    </g>
  </svg>
);
