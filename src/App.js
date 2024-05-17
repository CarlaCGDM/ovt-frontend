import logo from './logo.svg';
import './App.css';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <p>testing actions runner again</p>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
