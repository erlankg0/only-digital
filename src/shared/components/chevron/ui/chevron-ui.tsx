type ChevronUIProps = {
  direction?: 'left' | 'right';
  color?: string;
  size?: number;
  isActive?: boolean;
};

export function ChevronUI({
                            direction = 'right',
                            color = '#42567A',
                            size = 14,
                            isActive = true,
                          }: ChevronUIProps) {
  const rotate = direction === 'left' ? 'rotate(180 5 7)' : undefined;

  return (
    <svg
      width={(size / 14) * 10}
      height={size}
      viewBox="0 0 10 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
        stroke={color}
        strokeWidth="2"
        transform={rotate}
        strokeOpacity={isActive ? 1 : 0.2}
      />
    </svg>
  );
}
