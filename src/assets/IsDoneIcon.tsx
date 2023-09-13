interface IIsDoneProps {
  color?: string;
}

const IsDoneIcon: React.FC<IIsDoneProps> = ({ color = "#000000" }) => {
  return (
    <svg
      fill={color}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="45px"
      height="45px"
      viewBox="0 0 335.765 335.765"
    >
      <g>
        <g>
          <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 		" />
        </g>
      </g>
    </svg>
  );
};

export default IsDoneIcon;
