interface LogoProps {
  className?: string;
  size?: number;
}

const Logo = ({ className = "", size = 48 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
          <stop offset="100%" stopColor="hsl(199, 89%, 48%)" />
        </linearGradient>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(217, 91%, 45%)" />
          <stop offset="100%" stopColor="hsl(199, 89%, 35%)" />
        </linearGradient>
      </defs>
      
      {/* Outer circle glow */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" opacity="0.1" />
      
      {/* Main compass star - 8 pointed */}
      {/* Cardinal points (N, E, S, W) - larger */}
      <polygon
        points="50,2 54,40 50,50 46,40"
        fill="url(#logoGradient)"
      />
      <polygon
        points="98,50 60,54 50,50 60,46"
        fill="url(#logoGradient)"
      />
      <polygon
        points="50,98 46,60 50,50 54,60"
        fill="url(#logoGradient)"
      />
      <polygon
        points="2,50 40,46 50,50 40,54"
        fill="url(#logoGradient)"
      />
      
      {/* Ordinal points (NE, SE, SW, NW) - smaller, darker */}
      <polygon
        points="84,16 56,44 50,50 44,44"
        fill="url(#logoGradientDark)"
      />
      <polygon
        points="84,84 56,56 50,50 56,44"
        fill="url(#logoGradientDark)"
      />
      <polygon
        points="16,84 44,56 50,50 44,44"
        fill="url(#logoGradientDark)"
      />
      <polygon
        points="16,16 44,44 50,50 56,44"
        fill="url(#logoGradientDark)"
      />
      
      {/* Center circle */}
      <circle cx="50" cy="50" r="8" fill="url(#logoGradient)" />
      <circle cx="50" cy="50" r="4" fill="hsl(222, 47%, 6%)" />
    </svg>
  );
};

export default Logo;
