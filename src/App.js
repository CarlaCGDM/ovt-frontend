import logo from './logo.svg';
import './App.css';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function App() {
  return (
    <>
      <Canvas>
        <mesh position={[2,2,2]}>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
