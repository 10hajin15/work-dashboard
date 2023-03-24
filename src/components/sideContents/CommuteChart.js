import styled, { keyframes } from "styled-components";

function CommuteChart({ color, percent, size }) {
  return (
    <Chart size={size}>
      <AniSvg viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="white"
          strokeWidth="20"
        />
        <AnimatedCircle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke={color}
          strokeWidth="20"
          strokeDasharray={`${2 * Math.PI * 90 * percent} ${
            2 * Math.PI * 90 * (1 - percent)
          }`}
          strokeDashoffset={2 * Math.PI * 90 * 0.25}
        />
      </AniSvg>
      <Percent color={color}>{percent * 100}%</Percent>
    </Chart>
  );
}

export default CommuteChart;

const Chart = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  padding: 10px;
`;

const AniSvg = styled.svg`
  position: relative;
`;

const circleFill = keyframes`
    0%{
        stroke-dasharray:0 ${2 * Math.PI * 90};
    }
`;

const AnimatedCircle = styled.circle`
  animation: ${circleFill} 2s ease;
`;

const Percent = styled.span`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 27px;
  color: white;
`;
