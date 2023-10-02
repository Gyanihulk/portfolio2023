import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Scroll,
  ScrollControls,
  Html,
  useProgress,
} from "@react-three/drei";
import HeroSection from "./Components/HeroSection";
import Interface from "./Components/Interface";
import "./index.css";
import { Menu } from "./Components/Menu";
import { useEffect, useState } from "react";
import { Leva } from "leva";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";
import { ScrollManager } from "./Components/ScrollManager";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import Loader from "./Components/Loader";
// function Loader() {
//   const { active, progress, errors, item, loaded, total } = useProgress();
//   return <Html center>{progress} % loaded</Html>;
// }

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas shadows camera={{ position: [3, 3, 3] }}>
          <color attach="background" args={["#ececec"]} />
          <Suspense fallback={<Loader />}>
            <ScrollControls pages={4} damping={0.1}>
              <ScrollManager section={section} onSectionChange={setSection} />

              <Scroll>
                <HeroSection section={section} menuOpened={menuOpened} />
              </Scroll>

              <Scroll html>
                <Interface />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
        <Leva hidden />
      </MotionConfig>
    </>
  );
}

export default App;
