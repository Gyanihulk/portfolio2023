
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Loading(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/loader/loading.glb')
  const { actions } = useAnimations(animations, group)
  console.log(actions)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" position={[0, -0.292, -0.286]} rotation={[-0.021, 0, 0]}>
          <group name="Root">
            <group name="Text" scale={1.1}>
              <mesh name="Text_0" geometry={nodes.Text_0.geometry} material={materials.blue} />
            </group>
            <group name="Text001" position={[1.477, 0.243, 0.017]}>
              <mesh name="Text001_0" geometry={nodes.Text001_0.geometry} material={materials.blue} />
            </group>
            <group name="Text002" position={[1.477, 0.243, 0.017]}>
              <mesh name="Text002_0" geometry={nodes.Text002_0.geometry} material={materials.blue} />
            </group>
            <group name="Text003" position={[1.477, 0.243, 0.017]}>
              <mesh name="Text003_0" geometry={nodes.Text003_0.geometry} material={materials.blue} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/loader/loading.glb')
