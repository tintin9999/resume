import './App.css';

import { Cylinder, OrbitControls, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


function Scene() {
  const texture = useTexture('/resume.png');

  return (<>
      <Cylinder args={[2, 2, 10, 100, 1, true]}>
        <meshStandardMaterial map={texture} transparent />
      </Cylinder>
      <OrbitControls enableDamping={false} enablePan={false} enableRotate={false} autoRotate={true} autoRotateSpeed={-3} />
    </>);
}


function App() {
  return (
    <Canvas camera={{ position: [-0.22, 0, -8.3], type: 'orthographic' }}>
      <Scene />
    </Canvas>
  )
}

export default App
