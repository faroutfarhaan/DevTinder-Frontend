// components/Logo.jsx
const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="flameGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FF416C"/>
          <stop offset="100%" stopColor="#FF4B2B"/>
        </linearGradient>
        <linearGradient id="bracketGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="100%" stopColor="#FF4C60"/>
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="32" fill="#111111"/>
      <path d="M120 40 C105 60, 85 80, 95 110 C100 130, 120 140, 120 165 
               C120 140, 140 130, 145 110 C155 80, 135 60, 120 40 Z"
            fill="url(#flameGradient)" />
      <path d="M70 80 C55 110, 55 130, 70 160" stroke="url(#bracketGradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M170 80 C185 110, 185 130, 170 160" stroke="url(#bracketGradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
    </svg>
  );
  
  export default Logo;
  