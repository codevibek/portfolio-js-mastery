import React,{Suspense} from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from "../Loader"

const Earth = () => {

  const earth = useGLTF("./planet/scene.gltf")

  return (
   
    <primitive 
    object={earth.scene}
    scale={1.5}
    position-y={0}
    rotation-y={0}
    
    />
  )
}


const EarthCanvas=()=>{
return(
  <Canvas
  frameloop='demand'
  shadows
  gl={{preserveDrawingBuffer:true}}
  camera={{position:[-4,3,6], fov:25,near:0.1,far:100}}>
    <Suspense fallback = {<CanvasLoader/>}>
      <OrbitControls 
      autoRotate
      maxPolarAngle={Math.PI/2}
      minPolarAngle={Math.PI/2}
      enableZoom = {false}/>
      <Earth />
    </Suspense>
  </Canvas>
)
}
export default EarthCanvas