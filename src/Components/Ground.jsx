
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Ground(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/ground/model.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="main">
          <primitive object={nodes.Hips} />
        </group>
        <mesh name="court_court_0" geometry={nodes.court_court_0.geometry} material={materials.court} position={[0, 0, 3.214]} rotation={[0, 1.571, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/ground/model.glb')