import React, { useRef, useState, useContext, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';
import { TotalMetricTonsContext } from "@/app/page";
import * as TWEEN from '@tweenjs/tween.js'

export default function Globe({ ...props }) {
  const { nodes } = useSpline(
    "https://prod.spline.design/NguHyZ5KfoXQRAJx/scene.splinecode",
  );

  // Create a ref for the globe group
  const { totalMetricTons }= useContext(TotalMetricTonsContext)
  const globeGroupRef = useRef();
  const clouds = useRef();
  const clock = new THREE.Clock();
  const GLOBE_SIZE = 1.5;
  const POS_OFFSET = 1.6;
  const ROTATION_SPEED = 0.5;
  const [landColor, setLandColor] = useState('#11ffc3');
  const colorQueueRef = useRef([]);
  let frameCount = 0;

  const landColorRef = useRef(new THREE.Color("#11ffc3"));

  useEffect(() => {
    // Calculate the target color based on totalMetricTons
    const targetColor = calculateTargetColor(totalMetricTons);

    // Create a tween to smoothly transition landColor
    const tween = new TWEEN.Tween(landColorRef.current)
      .to(targetColor, 2000) // Change to your desired duration
      .easing(TWEEN.Easing.Quadratic.Out);

    // Start the tween when totalMetricTons changes
    tween.start();

    return () => {
      // Stop the tween when the component unmounts
      tween.stop();
    };
  }, [totalMetricTons]);

  const calculateTargetColor = (totalMetricTons) => {
    // Example logic: Red for values above 15, green for values below or equal to 15
    return totalMetricTons < 10 ? new THREE.Color("#11ffc3") : totalMetricTons < 20 ? new THREE.Color("#dddddd") : new THREE.Color("#888888");
  };

  // Use useFrame to animate the rotation of the globe
  useFrame(() => {
    TWEEN.update();
    setLandColor(landColorRef.current.getStyle());
    console.log(totalMetricTons);
    if (globeGroupRef.current) {
      const delta = clock.getDelta();
      globeGroupRef.current.rotation.y += ROTATION_SPEED * delta;
      clouds.current.rotation.y += (ROTATION_SPEED - .4) * delta;
    }
  });

  return (
    <>
      <color attach="background" args={["#74757a"]} />
      <group {...props} dispose={null}>
        <group ref={clouds} position={[0, -130, 153]} rotation={[-0.84, 0, 0]}>
            <mesh
              name="Basic 2"
              geometry={nodes['Basic 2'].geometry}
              material={nodes['Basic 2'].material}
              castShadow
              receiveShadow
              position={[-100.37 * POS_OFFSET, 127.88 * POS_OFFSET, -87.03 * POS_OFFSET]}
              rotation={[-0.25, 0.29, 2.44]}
              scale={14 * GLOBE_SIZE}
            />
            <mesh
              name="Basic 3"
              geometry={nodes['Basic 3'].geometry}
              material={nodes['Basic 3'].material}
              castShadow
              receiveShadow
              position={[-30.11 * POS_OFFSET, 276.21 * POS_OFFSET, -101.25 * POS_OFFSET]}
              rotation={[1.98, 0, -0.45]}
              scale={9 * GLOBE_SIZE}
            />
            <mesh
              name="Basic 4"
              geometry={nodes['Basic 4'].geometry}
              material={nodes['Basic 4'].material}
              castShadow
              receiveShadow
              position={[-144.16 * POS_OFFSET, 228.62 * POS_OFFSET, 44.29 * POS_OFFSET]}
              rotation={[-0.26, 0, -2.29]}
              scale={8 * GLOBE_SIZE}
            />
            <mesh
              name="Basic"
              geometry={nodes.Basic.geometry}
              material={nodes.Basic.material}
              castShadow
              receiveShadow
              position={[-36.28 * POS_OFFSET, 203.34 * POS_OFFSET, 194.1 * POS_OFFSET]}
              rotation={[-0.26, 0, 0]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic_+_1"
              geometry={nodes['Basic_+_1'].geometry}
              material={nodes['Basic_+_1'].material}
              castShadow
              receiveShadow
              position={[-124.73 * POS_OFFSET, 104.39 * POS_OFFSET, 118.57 * POS_OFFSET]}
              rotation={[-Math.PI / 2, -0.59, 1.73]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic_+_11"
              geometry={nodes['Basic_+_11'].geometry}
              material={nodes['Basic_+_11'].material}
              castShadow
              receiveShadow
              position={[63.74 * POS_OFFSET, 279.65 * POS_OFFSET, 89.44 * POS_OFFSET]}
              rotation={[-Math.PI / 2, -0.59, -3.02]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic_+_12"
              geometry={nodes['Basic_+_12'].geometry}
              material={nodes['Basic_+_12'].material}
              castShadow
              receiveShadow
              position={[24 * POS_OFFSET, 42.66 * POS_OFFSET, 120.5 * POS_OFFSET]}
              rotation={[0.97, 0.42, 0.89]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic_+_13"
              geometry={nodes['Basic_+_13'].geometry}
              material={nodes['Basic_+_13'].material}
              castShadow
              receiveShadow
              position={[72.93 * POS_OFFSET, 34.2 * POS_OFFSET, -9.26 * POS_OFFSET]}
              rotation={[-Math.PI / 2, -0.59, 0]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic 21"
              geometry={nodes['Basic 21'].geometry}
              material={nodes['Basic 21'].material}
              castShadow
              receiveShadow
              position={[-84.21, 241.82, -88.76]}
              rotation={[-0.58, -1.02, 0.42]}
              scale={7 * GLOBE_SIZE}
            />
            <mesh
              name="Basic1"
              geometry={nodes.Basic1.geometry}
              material={nodes.Basic1.material}
              castShadow
              receiveShadow
              position={[36.6, 312.14, 5.8]}
              rotation={[-0.58, -1.02, -0.16]}
              scale={5 * GLOBE_SIZE}
            />
            <mesh
              name="Basic2"
              geometry={nodes.Basic2.geometry}
              material={nodes.Basic2.material}
              castShadow
              receiveShadow
              position={[136.16, 181.23, -21.18]}
              rotation={[-1.11, 0, 0]}
              scale={5 * GLOBE_SIZE}
            />
          </group>
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
              material={new THREE.MeshMatcapMaterial({ color : landColor})}
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
          intensity={2}
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