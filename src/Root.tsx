import "./index.css";
import { Composition } from "remotion";
import { MyComposition } from "./remotion/Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={300}
        fps={30}
        width={720}
        height={1280}
      />
    </>
  );
};
