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
import { Ground } from "./Ground";
import { Fence } from "./Fence";
import { Projects } from "./Projects";

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
      
      <directionalLight position={[0, 3, 1]} intensity={0.1} />
      <Background />
      <group position-y={-1}>
        <motion.group
          position={[0, -1.5, -10]}
          transition={ {type: "spring",
          damping: 10,
          stiffness: 100, duration: 0.6,}}
         
        animate={"" + section}
        variants={{
          0: {
            y: -0.9 ,
            x: -1,
            z: -1.6,
          },
          1: {
            y: -viewport.height ,
            x: 2.2,
            z: -6.3,
            scale:1.5
          },
          2: {
            x: 1,
            y: -viewport.height * 2 + 0.5,
            z: 4,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 - 12,
            x: -4,
            rotateX: 0,
            rotateY: Math.PI / 4,
            rotateZ: 0,
            scale:8
          },
        }}
        >
          <Avatar
            animation={section === 0 ? "Typing" : section === 1?"Parkour":   section === 2 ? "Standing" :
            "Dance"}
            rotation-y={section===0?Math.PI * 0.5:Math.PI * -0.05}
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
        {section===1?<Ground position-y={-11} position-x={1} scale={5} />:""}
        {section===1?<Fence position-y={-11} position-x={1} scale={0.9} />:""}
      </group>
      <Projects/>
    </>
  );
};

export default HeroSection;
