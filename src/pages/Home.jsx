import { Canvas } from "@react-three/fiber";
import React from "react";
import Dragon from "../3d_models/Dragon";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    screenScale = [1, 1, 1];
    screenPosition = [3, -3, -3];

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute z-10 bg-opacity-75 text-white h-screen bg-zinc-950 w-1/4 text-6xl font-julius flex flex-col justify-center leading-tight pl-10">
        <TypeAnimation
          style={{ whiteSpace: "pre-line" }}
          sequence={[
            `Hello,\nI'm\nMd.\nSazzad\nSiddique.\nI'm A\nFull\nStack\nDeveloper`,
            1000,
            "",
            1000,
          ]}
          repeat={Infinity}
        />
      </div>
      <Canvas
        className="w-full h-screen bg-transparent bg-cover bg-center"
        camera={{ near: 0.1, far: 1000 }}
        style={{
          backgroundImage: "url('moon-2048727.jpg')",
        }}
      >
        <directionalLight position={[1, 1, 1]} intensity={5} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={5} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={5}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <Dragon
          position={islandPosition}
          rotation={[0, -1, 0]}
          scale={islandScale}
        />
      </Canvas>
    </section>
  );
};

export default Home;
