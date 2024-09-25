import { FC, useState } from "react"
import './style.css';

interface Props {
  label: string;
  code: string;
}

export const Btn: FC<Props> = ({ code, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="coupon-container">
      <div className="coupon-wrapper">
        <div className={`label ${isHovered ? 'slide' : ''}`}>
          <button
            className="reveal-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {label}
          </button>
        </div>
        <p className="coupon-code">{code}</p>
      </div>
    </div>
  );
}