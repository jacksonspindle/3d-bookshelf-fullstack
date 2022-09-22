import React,{useRef, useState} from 'react'
import { books } from './store'
import { useSelector, useDispatch } from 'react-redux'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, Decal, Text, RenderTexture, PerspectiveCamera, useTexture } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'


const Book = (props) => {
    const textRef = useRef()
    // const cover = useTexture(props.frontCover)
    // const cover = useLoader(TextureLoader, props.frontCover)

    const cover = useTexture((`./assets/bookCovers/${props.frontCover}`))
    const pagesTexture = useTexture('./assets/bookCovers/bookPages.jpeg')

    const bookRef = useRef();
    const [rotation, setRotation] = useState(0)
    const [position, setPosition] = useState(0)

    useFrame(() => {
        bookRef.current.rotation.y += rotation;
        bookRef.current.position.z = position
    });


    return(
        <mesh 
            scale={[props.length / 3 , 9/2, 6/2 ]} 
            ref={bookRef} 
            position={[props.position - 10,0,position]} 
            onPointerEnter={() => {
                    setRotation(0.01);
                }} 
            onPointerLeave={() => {setRotation(0); }}
                           
        >
            {/* <meshStandardMaterial/> */}
            <boxGeometry ></boxGeometry>
            
            <Decal>
                <Text 
                    rotation={[0,0,Math.PI /2]} 
                    position={[0,0,.52]} 
                    scale={[1, 5, 0]}  
                    color="black">
                {props.title}
                </Text>
            </Decal>

           <Decal  
                position={[-.65,0,0]} 
                rotation={[0, 1, 0]} 
                scale={[1,1,.8]}>
                <meshStandardMaterial 
                    roughness={0.6} 
                    transparent 
                    polygonOffset 
                    polygonOffsetFactor={-20}>
                    <RenderTexture 
                        attach="map" 
                        anisotropy={16}>
                        <PerspectiveCamera 
                            makeDefault 
                            manual 
                            aspect={0.9 / 0.25} 
                            position={[0, 0, 5]} />
                        <color 
                            attach="background" 
                            args={['#000000']} />
                        <Text 
                            maxWidth={10} 
                            position={[1,0,0]} 
                            rotation={[0, Math.PI, 0]} 
                            ref={textRef} fontSize={.3} 
                            color="white">
                        {props.description}
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </Decal>

             <Decal  
                position={[.7,0,0]} 
                rotation={[0,Math.PI / 2,0]} 
                scale={.999} 
                map={cover} 
                map-anisotropy={16}  />
           
             <Decal  
                position={[0,0,-1]} 
                rotation={[Math.PI / 2,0,0]} 
                scale={[4, 1, 1]} 
                map={pagesTexture} 
                map-anisotropy={16}  />
            
        </mesh>
    )
}

export default Book