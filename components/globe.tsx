import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, PresentationControls } from "@react-three/drei";

export default function Globe({ ...props }) {
  const { nodes } = useSpline(
    "https://prod.spline.design/NguHyZ5KfoXQRAJx/scene.splinecode",
  );

  // Create a ref for the globe group
  const globeGroupRef = useRef();
  const GLOBE_SIZE = 1.5;

  // Use useFrame to animate the rotation of the globe
  useFrame(() => {
    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y += 0.02; // Adjust the rotation speed as needed
    }
  });

  return (
    <>
      <color attach="background" args={["#74757a"]} />
      <group {...props} dispose={null}>
        <group name="globe" ref={globeGroupRef}>
          {/* Your existing mesh components */}
          {/* ... */}

          {/* Adjust the rotation of each mesh component if needed */}
          <PresentationControls
            config={{ mass: 4, tension: 500 }}
            snap={{ mass: 4, tension: 500 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <mesh
              name="Ice_Land"
              geometry={nodes.Ice_Land.geometry}
              material={nodes.Ice_Land.material}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100 * GLOBE_SIZE}
            />
            <mesh
              name="Ocean"
              geometry={nodes.Ocean.geometry}
              material={nodes.Ocean.material}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100 * GLOBE_SIZE}
            />
            <mesh
              name="Sphere"
              geometry={nodes.Sphere.geometry}
              material={nodes.Sphere.material}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={140 * GLOBE_SIZE}
            />
            <mesh
              name="Base_Land"
              geometry={nodes.Base_Land.geometry}
              material={nodes.Base_Land.material}
              castShadow
              receiveShadow
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100 * GLOBE_SIZE}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={nodes.Cylinder.material}
              castShadow
              receiveShadow
              position={[0, -3.7, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[100 * GLOBE_SIZE, 100 * GLOBE_SIZE, 98.99 * GLOBE_SIZE]}
            />
          </PresentationControls>
        </group>

        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[200, 300, 300]}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={10000}
          near={-50000}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
        />
      </group>
    </>
  );
}