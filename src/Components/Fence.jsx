
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Fence(props) {
  const { nodes, materials } = useGLTF('/models/fence/model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_5.geometry} material={materials.Rope_Post__Rope_Post_AO} position={[3.532, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Rope__Rope_AO} position={[-0.009, 2.448, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Rope_Post__Rope_Post_AO} position={[-3.562, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/fence/model.glb')