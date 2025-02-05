"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense, useState } from "react"
import { motion } from "framer-motion-3d"
import * as THREE from 'three'

function Arch({ isHovered }) {
  return (
    <motion.mesh
      animate={{
        rotateY: isHovered ? Math.PI / 4 : 0,
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshStandardMaterial color="#4B5563" />
    </motion.mesh>
  )
}

export function InteractiveArch() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="h-[400px] w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 5, 5]}
            castShadow
            intensity={1}
            shadow-mapSize={1024}
          />
          <Arch isHovered={isHovered} />
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}

