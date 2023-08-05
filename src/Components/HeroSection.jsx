import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
  Text,
} from "@react-three/drei";
import React, { useEffect, useMemo, useRef } from "react";
import { Background } from "./Background";

import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Group } from "three";
import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Room } from "./Room";
import { Desktop } from "./Desktop";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";

const HeroSection = (props) => {
  const { section ,menuOpened  } = props;
  const { viewport } = useThree();

  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Backflip", "Falling", "Standing"],
    },
  });
  const cameraPositionZ = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionZ, menuOpened ? 0 : 5, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
    console.log(cameraPositionZ.get())
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.z = cameraPositionZ.get();
    // state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  return (
    <>
      {/* <OrbitControls /> */}
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      <Background />
      <group position-y={-1}>
        <motion.group
          position={[0, -1.5, -10]}
          transition={ {type: "spring",
          damping: 10,
          stiffness: 100}}
          animate={{
            z: section === 1 ? 0 : -1.6,
            y: section === 1 ? -viewport.height : -0.9,
            x: section === 1 ? 0 : -1,
            scale: section === 0 ? 1 : 2,
          }}
        >
          <Avatar
            animation={section === 0 ? "Typing" : "Standing"}
            rotation-y={Math.PI * 0.5}
          />
        </motion.group>
        {/* {animation==="Typing" &&(
        <mesh scale={[0.8,0.5,0.8]} position-y={-0.83}>
          <boxGeometry/>
          <meshStandardMaterial color="white"/>
        </mesh>
      )} */}
        <Desktop
          scale={0.1}
          rotation-y={-Math.PI * 1}
          position={[-0.2, -0.2, -1.3]}
        />
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-1}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <Room section={section} position-y={-1} position-x={2} />
      </group>
    </>
  );
};

export default HeroSection;
