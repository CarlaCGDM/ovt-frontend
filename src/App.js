import logo from './logo.svg';
import './App.css';

import { Canvas } from '@react-three/fiber';
import TestAPICall from './components/TestAPICall';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <torusKnotGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
      <TestAPICall />
    </>
  );
}

export default App;
