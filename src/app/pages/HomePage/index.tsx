import * as React from 'react';
import { Helmet } from 'react-helmet-async';
// import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Plane } from '@react-three/drei';
import Tesla from '../../Tesla';
import BlackTesla from 'app/BlackTesla';
import { useState } from 'react';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Home page of the auto visulization softwares"
        />
      </Helmet>
      <Canvas
        style={{
          height: '100vh',
          width: '100vw',
        }}
        shadows
      >
        <Scene />
      </Canvas>
    </>
  );
}

function Scene() {
  // black tesla forward position
  const [BTFP, setBTFP] = useState(0);
  // black tesla side position
  const [BTSP, setBTSP] = useState(0);
  // white tesla side position
  const [WTSP, setWTSP] = useState(0);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    setBTFP(Math.sin(a * 1.3));
    setBTSP(Math.cos(a * 1.3));
    setWTSP(Math.cos(-a + 2 * 1.2));
  });

  return (
    <>
      {/* <React.Suspense> */}
      {/* CAMERA */}
      <PerspectiveCamera
        makeDefault
        position={[0, 10, 15]}
        rotation={[-Math.PI / 6, 0, 0]}
      />
      {/* <OrbitControls /> */}

      {/* LIGHTING */}
      <ambientLight intensity={0.5} />

      <fog attach="fog" args={['white', 0, 100]} />
      <directionalLight
        castShadow
        position={[-5, 10, 10]}
        intensity={1.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* <mesh position-y={0.5} castShadow>
            <boxGeometry />
            <meshPhongMaterial color={'grey'} />
          </mesh> */}

      {/* FLOOR */}
      <Plane receiveShadow rotation-x={-Math.PI / 2} args={[1000, 1000]}>
        <meshPhongMaterial color={'white'} />
      </Plane>

      {/* LANE LINES */}
      <Plane
        rotation-x={-Math.PI / 2}
        args={[0.2, 100]}
        position={[-3, 0.1, 0]}
      >
        <meshPhongMaterial color={'#3D9EFF'} />
      </Plane>
      <Plane rotation-x={-Math.PI / 2} args={[0.2, 100]} position={[3, 0.1, 0]}>
        <meshPhongMaterial color={'#3D9EFF'} />
      </Plane>

      <Plane rotation-x={-Math.PI / 2} args={[0.1, 100]} position={[9, 0.1, 0]}>
        <meshPhongMaterial color={'#A5D0E5'} />
      </Plane>

      <Plane
        rotation-x={-Math.PI / 2}
        args={[0.1, 100]}
        position={[-9, 0.1, 0]}
      >
        <meshPhongMaterial color={'#A5D0E5'} />
      </Plane>

      {/* VEHICELS */}
      <Tesla scale={0.02} position={[0 + WTSP * 0.1, 1.5, 0]} />

      <BlackTesla
        scale={0.021}
        rotation={[Math.PI / 2, Math.PI, 0]}
        position={[0 + BTSP * 0.2, 1.4, -20 + BTFP]}
      />

      {/* OTHER ELEMENTS */}
      {/* </React.Suspense> */}
      {/* <React.Suspense> */}
      {/* CAMERA */}
      <PerspectiveCamera
        makeDefault
        position={[0, 10, 15]}
        rotation={[-Math.PI / 6, 0, 0]}
      />
      {/* <OrbitControls /> */}

      {/* LIGHTING */}
      <ambientLight intensity={0.5} />

      <fog attach="fog" args={['white', 0, 100]} />
      <directionalLight
        castShadow
        position={[-5, 10, 10]}
        intensity={1.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* <mesh position-y={0.5} castShadow>
            <boxGeometry />
            <meshPhongMaterial color={'grey'} />
          </mesh> */}

      {/* FLOOR */}
      <Plane receiveShadow rotation-x={-Math.PI / 2} args={[1000, 1000]}>
        <meshPhongMaterial color={'white'} />
      </Plane>

      {/* LANE LINES */}
      <Plane
        rotation-x={-Math.PI / 2}
        args={[0.2, 100]}
        position={[-3, 0.1, 0]}
      >
        <meshPhongMaterial color={'#3D9EFF'} />
      </Plane>
      <Plane rotation-x={-Math.PI / 2} args={[0.2, 100]} position={[3, 0.1, 0]}>
        <meshPhongMaterial color={'#3D9EFF'} />
      </Plane>

      <Plane rotation-x={-Math.PI / 2} args={[0.1, 100]} position={[9, 0.1, 0]}>
        <meshPhongMaterial color={'#A5D0E5'} />
      </Plane>

      <Plane
        rotation-x={-Math.PI / 2}
        args={[0.1, 100]}
        position={[-9, 0.1, 0]}
      >
        <meshPhongMaterial color={'#A5D0E5'} />
      </Plane>

      {/* OTHER ELEMENTS */}
      {/* </React.Suspense> */}
    </>
  );
}
