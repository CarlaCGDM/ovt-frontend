import logo from './logo.svg';
import './App.css';

import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import TestSelector from './components/TestSelector';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
      <TestSelector />
    </>
  );
}

export default App;
