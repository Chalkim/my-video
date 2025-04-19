import { AbsoluteFill } from "remotion";
import Background from "./Background";
 
export const MyComposition = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        backgroundColor: 'white',
      }}
    >
      <Background />
    </AbsoluteFill>
  );
};
