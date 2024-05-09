import { useEffect } from 'react';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import imageSource from './a.png';
import ToggleBtn from './ToggleBtn.tsx';

function App() {

  // useEffect(() => {
  //   // Renderer
  //   const canvas = document.querySelector('#canvas');
  //   const renderer = new THREE.WebGLRenderer({
  //     // 캔버스
  //     canvas,
  //     antialias: true
  //   });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  //   renderer.shadowMap.enabled = true; // 그림자를 보여주기 위해 필요한 세팅

  //   // Scene
  //   const scene = new THREE.Scene();

  //   // Camera
  //   const camera = new THREE.PerspectiveCamera(
  //     60, // fov 화각
  //     window.innerWidth / window.innerHeight, // aspect 가로세로 비율
  //     0.1, // near 가장 가까운 거리
  //     1000 // far 가장 먼 거리
  //   );
  //   camera.position.set(-3, 3, 7);
  //   scene.add(camera);

  //   // Controls
  //   const controls = new OrbitControls( camera, renderer.domElement );

  //   // Light
  //   // 조명 1
  //   const ambientLight = new THREE.AmbientLight('white', 1);
  //   scene.add(ambientLight);

  //   // 조명 2
  //   const directionalLight = new THREE.DirectionalLight('white', 3);
  //   directionalLight.position.set(-3, 5, 1);
  //   directionalLight.castShadow = true; // 조명 2에 의한 그림자가 생기도록 castShadow 추가
  //   scene.add(directionalLight);

  //   // *******************************[TEST]*********************************
  //   const textureLoader = new THREE.TextureLoader();
  //   const texture = textureLoader.load(imageSource);
  //   // *******************************[TEST]*********************************

  //   // Mesh
  //   const boxMesh = new THREE.Mesh(
  //     new THREE.BoxGeometry(2,2,2), // geometry
  //     // new THREE.MeshBasicMaterial({color: 'firebrick'}) // material
  //     // new THREE.MeshLambertMaterial({color: 'firebrick'})
  //     new THREE.MeshLambertMaterial({map: texture})
  //   );
  //   boxMesh.position.y = 1;
  //   boxMesh.castShadow = true; // 조명 2에 의한 그림자가 생기도록 castShadow 추가

  //   const groundMesh = new THREE.Mesh(
  //     new THREE.PlaneGeometry(10, 10),
  //     // new THREE.MeshBasicMaterial({color: '#092e66'})
  //     new THREE.MeshLambertMaterial({
  //       color: '#092e66',
  //       side: THREE.DoubleSide // 안보이는 면도 보이게 하기위해 추가
  //     })
  //   )
  //   groundMesh.rotation.x = THREE.MathUtils.degToRad(-90); // 객체 각도 조절
  //   groundMesh.receiveShadow = true;

  //   scene.add(boxMesh, groundMesh);

  //   camera.lookAt(boxMesh.position);

  //   // Draw 
  //   let boxMeshY = 1;
  //   function draw() {
  //     // boxMeshY += 0.01;
  //     boxMesh.position.y = boxMeshY;
  //     renderer.render(scene, camera)
  //     controls.update();

  //     renderer.setAnimationLoop(draw); // 필수화면
  //   }
  //   draw();
  // }, [])
  

  return (
    <div>
      <ToggleBtn/>
      {/* <canvas id='canvas'></canvas> */}
    </div>
  );
}

export default App;
