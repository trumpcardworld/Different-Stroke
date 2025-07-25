// "use client"
// import Link from 'next/link';
// import  { useState } from 'react';
// import { ArrowRight, Play } from 'lucide-react';

// const modelsSection = () => {
//   const [isHoveredConsult, setIsHoveredConsult] = useState(false);
//   const [isHoveredPortfolio, setIsHoveredPortfolio] = useState(false);

//   return (
//     <div className="relative h-screen w-full overflow-hidden mt-28">
//       {/* Video Background */}
//       <div className="absolute inset-0">
//         <video 
//           autoPlay 
//           loop 
//           muted 
//           playsInline
//           className="w-full h-full object-cover"
//         >
//           <source 
//             src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.3/js/swiper.min.js" 
//             type="video/mp4"
//           />
//         </video>
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col justify-center items-center h-full text-center">
//           {/* Main Text */}
//           <div 
//             className="max-w-3xl mx-auto space-y-6"
//             style={{
//               opacity: 1,
//               transform: 'translateY(0)',
//               transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
//             }}
//           >
//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
//               Crafting Exceptional
//               <span className="block mt-2 text-blue-400">Exhibition Experiences</span>
//             </h1>

//             <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
//               Transform your brand presence with our innovative exhibition stands and 
//               immersive booth designs that capture attention and drive engagement.
//             </p>

//             {/* Buttons Container */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
//               {/* Consultation Button */}
//               <button
//                 className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-medium inline-flex items-center justify-center overflow-hidden"
//                 onMouseEnter={() => setIsHoveredConsult(true)}
//                 onMouseLeave={() => setIsHoveredConsult(false)}
//               >
//                 <Link href="/contact" className="relative z-10 flex items-center">
//                   Book Consultation
//                   <ArrowRight 
//                     className={`w-5 h-5 ml-2 transition-transform duration-300 ${
//                       isHoveredConsult ? 'translate-x-1' : ''
//                     }`}
//                   />
//                 </Link> 
//                 <div 
//                   className="absolute inset-0 bg-blue-700 transform -translate-x-full transition-transform duration-300"
//                   style={{
//                     transform: isHoveredConsult ? 'translateX(0)' : 'translateX(-100%)'
//                   }}
//                 />
//               </button>

//               {/* Portfolio Button */}
//               <button
//                 className="group relative px-8 py-4 bg-transparent text-white rounded-lg font-medium inline-flex items-center justify-center border-2 border-white overflow-hidden"
//                 onMouseEnter={() => setIsHoveredPortfolio(true)}
//                 onMouseLeave={() => setIsHoveredPortfolio(false)}
//               >
//                 <Link href="/ourworks/international" className="relative z-10 flex items-center">
//                   <Play 
//                     className={`w-5 h-5 mr-2 transition-transform duration-300 ${
//                       isHoveredPortfolio ? 'scale-110' : ''
//                     }`}
//                   />
//                   View Portfolio
//                 </Link>
//                 <div 
//                   className="absolute inset-0 bg-white/10 transform -translate-y-full transition-transform duration-300"
//                   style={{
//                     transform: isHoveredPortfolio ? 'translateY(0)' : 'translateY(-100%)'
//                   }}
//                 />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
//     </div>
//   );
// };

// export default modelsSection;










































// "use client"
// import { useState, useEffect } from 'react';
// import { ChevronRight, Phone, Layers, Grid, Award, ArrowRight } from 'lucide-react';

// export default function ExhibitionmodelsSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isAnimated, setIsAnimated] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true);
//     }, 500);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-70' : 'translate-y-20 opacity-0'}`} 
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}></div>
//       <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-50' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}></div>
//       <div className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-40' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div className={`transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls 
//               that turn visitors into customers and elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//           <div className="relative">
//             {/* Main Exhibition Booth Image - Placeholder */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-orange-600 to-orange-400 shadow-xl overflow-hidden relative">
//               {/* 3D Booth Model would go here */}
//               <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
//                 3D Exhibition Booth Preview
//               </div>

//               {/* Grid pattern for design feel */}
//               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

//               {/* Design elements */}
//               <div className="absolute top-4 left-4 h-6 w-24 bg-orange-300/20 rounded-full"></div>
//               <div className="absolute bottom-4 right-4 h-6 w-32 bg-orange-300/20 rounded-full"></div>
//               <div className="absolute top-1/4 right-8 h-16 w-16 bg-orange-300/30 rounded-lg transform rotate-45"></div>
//             </div>

//             {/* Floating Feature Cards */}
//             <div className="absolute -bottom-6 -left-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Custom Design</h3>
//               <p className="text-gray-300 text-sm">Tailored to your brand identity and exhibition goals</p>
//             </div>

//             <div className="absolute -top-6 -right-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Interactive Elements</h3>
//               <p className="text-gray-300 text-sm">Engage visitors with cutting-edge technology</p>
//             </div>
//           </div>

//           {/* CTA for consultation */}
//           <div className="mt-20 flex justify-center">
//             <a href="#contact" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium group">
//               <Phone size={18} />
//               Schedule a free consultation
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom curve decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="url(#paint0_linear)"/>
//           <defs>
//             <linearGradient id="paint0_linear" x1="720" y1="50" x2="720" y2="120" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#EA580C" stopOpacity="0.2"/>
//               <stop offset="1" stopColor="#EA580C" stopOpacity="0"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }

























































// "use client"
// import { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Phone, Layers, Grid, Award, ArrowRight, RotateCcw, Upload, ZoomIn, ZoomOut } from 'lucide-react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// export default function ExhibitionmodelsSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isAnimated, setIsAnimated] = useState(false);
//   const [isModelLoaded, setIsModelLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [viewMode, setViewMode] = useState('3d'); // '3d' or 'wireframe'
//   const [modelPath, setModelPath] = useState('/models/exhibition_booth.obj'); // Path to your 3D model
//   const [materialPath, setMaterialPath] = useState('/models/exhibition_booth.mtl'); // Path to your material file

//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const controlsRef = useRef(null);
//   const modelRef = useRef(null);

//   // Handle scroll animations
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true);
//     }, 500);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Initialize Three.js scene
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Create scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x1a1a1a);
//     sceneRef.current = scene;

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       45, 
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight, 
//       0.1, 
//       1000
//     );
//     camera.position.z = 5;
//     camera.position.y = 2;
//     cameraRef.current = camera;

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true
//     });
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.outputEncoding = THREE.sRGBEncoding;
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2;
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     rendererRef.current = renderer;

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5);
//     directionalLight.castShadow = true;
//     directionalLight.shadow.mapSize.width = 1024;
//     directionalLight.shadow.mapSize.height = 1024;
//     scene.add(directionalLight);

//     const spotLight = new THREE.SpotLight(0xff9000, 1);
//     spotLight.position.set(-5, 8, -5);
//     spotLight.castShadow = true;
//     scene.add(spotLight);

//     // Add controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.rotateSpeed = 0.8;
//     controls.enableZoom = true;
//     controls.enablePan = true;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5;
//     controls.target.set(0, 1, 0);
//     controlsRef.current = controls;

//     // Add grid helper
//     const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0x555555);
//     scene.add(gridHelper);

//     // Load the OBJ model
//     loadModel(modelPath, materialPath);

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (controlsRef.current) controlsRef.current.update();
//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;

//       const width = canvasRef.current.clientWidth;
//       const height = canvasRef.current.clientHeight;

//       cameraRef.current.aspect = width / height;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//       if (sceneRef.current) {
//         sceneRef.current.clear();
//       }
//     };
//   }, [modelPath, materialPath]);

//   // Function to load the OBJ model
//   const loadModel = (objPath, mtlPath) => {
//     if (!sceneRef.current) return;

//     setIsLoading(true);

//     // If there's an existing model, remove it
//     if (modelRef.current) {
//       sceneRef.current.remove(modelRef.current);
//       modelRef.current = null;
//     }

//     // Create a new OBJ loader
//     const objLoader = new OBJLoader();

//     // Try to load materials if provided
//     if (mtlPath) {
//       const mtlLoader = new MTLLoader();
//       mtlLoader.load(
//         mtlPath,
//         (materials) => {
//           materials.preload();
//           objLoader.setMaterials(materials);
//           loadOBJ(objLoader, objPath);
//         },
//         (xhr) => {
//           console.log(`Material ${mtlPath} ${(xhr.loaded / xhr.total * 100)}% loaded`);
//         },
//         (error) => {
//           console.error('Error loading MTL:', error);
//           // Fall back to loading without materials
//           loadOBJ(objLoader, objPath);
//         }
//       );
//     } else {
//       loadOBJ(objLoader, objPath);
//     }
//   };

//   // Helper function to load OBJ
//   const loadOBJ = (objLoader, objPath) => {
//     objLoader.load(
//       objPath,
//       (object) => {
//         // Center the model
//         const box = new THREE.Box3().setFromObject(object);
//         const center = box.getCenter(new THREE.Vector3());
//         const size = box.getSize(new THREE.Vector3());

//         // Set position and scale
//         object.position.set(-center.x, -center.y, -center.z);
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 4 / maxDim; // Scale to fit in a 4x4x4 cube
//         object.scale.set(scale, scale, scale);

//         // Apply shadow settings
//         object.traverse((child) => {
//           if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;

//             // If model has no materials, add a default one
//             if (!child.material) {
//               child.material = new THREE.MeshStandardMaterial({
//                 color: 0xea580c,
//                 roughness: 0.7,
//                 metalness: 0.2
//               });
//             }
//           }
//         });

//         // Create a group to hold the model
//         const modelGroup = new THREE.Group();
//         modelGroup.add(object);

//         // Add a floor plane if needed
//         const floorGeometry = new THREE.PlaneGeometry(20, 20);
//         const floorMaterial = new THREE.MeshStandardMaterial({ 
//           color: 0x333333,
//           roughness: 0.8,
//           metalness: 0.2
//         });
//         const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//         floor.rotation.x = -Math.PI / 2;
//         floor.position.y = -1;
//         floor.receiveShadow = true;
//         modelGroup.add(floor);

//         // Add the model group to the scene
//         sceneRef.current.add(modelGroup);
//         modelRef.current = modelGroup;

//         setIsModelLoaded(true);
//         setIsLoading(false);
//       },
//       (xhr) => {
//         console.log(`Model ${objPath} ${(xhr.loaded / xhr.total * 100)}% loaded`);
//       },
//       (error) => {
//         console.error('Error loading OBJ:', error);
//         setIsLoading(false);

//         // Create a fallback model if loading fails
//         createDefaultBoothModel();
//       }
//     );
//   };

//   // Create a default booth model as placeholder
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current) return;

//     const booth = new THREE.Group();

//     // Base/Floor
//     const floorGeom = new THREE.BoxGeometry(6, 0.2, 6);
//     const floorMat = new THREE.MeshStandardMaterial({ 
//       color: 0xea580c,
//       roughness: 0.8 
//     });
//     const floor = new THREE.Mesh(floorGeom, floorMat);
//     floor.position.y = -0.1;
//     floor.receiveShadow = true;
//     booth.add(floor);

//     // Back Wall
//     const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2);
//     const wallMat = new THREE.MeshStandardMaterial({ 
//       color: 0xffffff,
//       roughness: 0.7
//     });
//     const backWall = new THREE.Mesh(backWallGeom, wallMat);
//     backWall.position.set(0, 1.5, -3);
//     backWall.castShadow = true;
//     backWall.receiveShadow = true;
//     booth.add(backWall);

//     // Side Walls
//     const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6);
//     const leftWall = new THREE.Mesh(leftWallGeom, wallMat);
//     leftWall.position.set(-3, 1.5, 0);
//     leftWall.castShadow = true;
//     leftWall.receiveShadow = true;
//     booth.add(leftWall);

//     const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6);
//     const rightWall = new THREE.Mesh(rightWallGeom, wallMat);
//     rightWall.position.set(3, 1.5, 0);
//     rightWall.castShadow = true;
//     rightWall.receiveShadow = true;
//     booth.add(rightWall);

//     // Display Counter
//     const counterGeom = new THREE.BoxGeometry(4, 1, 1);
//     const counterMat = new THREE.MeshStandardMaterial({ 
//       color: 0x333333,
//       roughness: 0.5
//     });
//     const counter = new THREE.Mesh(counterGeom, counterMat);
//     counter.position.set(0, 0.5, 1.5);
//     counter.castShadow = true;
//     counter.receiveShadow = true;
//     booth.add(counter);

//     // Logo Display
//     const logoGeom = new THREE.BoxGeometry(2, 1, 0.1);
//     const logoMat = new THREE.MeshStandardMaterial({ 
//       color: 0xea580c,
//       emissive: 0xea580c,
//       emissiveIntensity: 0.5,
//       roughness: 0.3
//     });
//     const logo = new THREE.Mesh(logoGeom, logoMat);
//     logo.position.set(0, 2, -2.9);
//     logo.castShadow = true;
//     booth.add(logo);

//     // Display Stands
//     const standGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
//     const standMat = new THREE.MeshStandardMaterial({ 
//       color: 0x666666,
//       metalness: 0.8,
//       roughness: 0.2
//     });

//     const standPositions = [[-2, 0, -1.5], [0, 0, -1.5], [2, 0, -1.5]];
//     standPositions.forEach(pos => {
//       const stand = new THREE.Mesh(standGeom, standMat);
//       stand.position.set(pos[0], 1, pos[1]);
//       stand.castShadow = true;
//       stand.receiveShadow = true;
//       booth.add(stand);

//       // Display item on top of stand
//       const itemGeom = new THREE.SphereGeometry(0.3, 32, 32);
//       const itemMat = new THREE.MeshStandardMaterial({ 
//         color: Math.random() * 0xffffff,
//         roughness: 0.3,
//         metalness: 0.5
//       });
//       const item = new THREE.Mesh(itemGeom, itemMat);
//       item.position.set(pos[0], 2.2, pos[1]);
//       item.castShadow = true;
//       booth.add(item);
//     });

//     // Add lighting fixtures
//     const lightFixtureGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16);
//     const lightFixtureMat = new THREE.MeshStandardMaterial({ 
//       color: 0x333333 
//     });

//     for (let x = -2; x <= 2; x += 2) {
//       const lightFixture = new THREE.Mesh(lightFixtureGeom, lightFixtureMat);
//       lightFixture.position.set(x, 3, -1);
//       booth.add(lightFixture);

//       // Add point light
//       const pointLight = new THREE.PointLight(0xffffff, 0.5, 5);
//       pointLight.position.set(x, 2.8, -1);
//       booth.add(pointLight);
//     }

//     // Add booth to scene
//     booth.position.y = 0;
//     booth.castShadow = true;
//     booth.receiveShadow = true;
//     sceneRef.current.add(booth);
//     modelRef.current = booth;
//     setIsModelLoaded(true);
//   };

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return;

//     const newMode = viewMode === '3d' ? 'wireframe' : '3d';
//     setViewMode(newMode);

//     modelRef.current.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.wireframe = newMode === 'wireframe';
//       }
//     });
//   };

//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current) return;

//     cameraRef.current.position.set(0, 2, 5);
//     controlsRef.current.target.set(0, 1, 0);
//     controlsRef.current.update();
//   };

//   // Handle file upload
//   const handleFileUpload = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     // Create a URL for the uploaded file
//     const objectURL = URL.createObjectURL(file);

//     // Check file extension
//     const fileExtension = file.name.split('.').pop().toLowerCase();

//     if (fileExtension === 'obj') {
//       // For OBJ files, we'll attempt to load them directly
//       setModelPath(objectURL);
//       setMaterialPath(''); // Clear material path when uploading

//       // Clean up old object URL when done
//       return () => URL.revokeObjectURL(objectURL);
//     } else {
//       alert('Only OBJ files are supported for upload in this preview. Please upload an OBJ file.');
//     }
//   };

//   // Set a specific model path
//   const setSpecificModel = (path, mtlPath = '') => {
//     setModelPath(path);
//     setMaterialPath(mtlPath);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-70' : 'translate-y-20 opacity-0'}`} 
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}></div>
//       <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-50' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}></div>
//       <div className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-40' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div className={`transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls 
//               that turn visitors into customers and elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//           <div className="relative">
//             {/* 3D Exhibition Booth Viewer */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//               {/* Loading overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
//                   <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-orange-500 font-medium">Loading 3D Preview...</p>
//                 </div>
//               )}

//               {/* 3D Canvas */}
//               <canvas 
//                 ref={canvasRef} 
//                 className="w-full h-full touch-none"
//               />

//               {/* Model selection buttons */}
//               <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center gap-2">
//                 <button 
//                   onClick={() => setSpecificModel('/models/Epic.obj', '/models/Epic.mtl')}
//                   className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm"
//                 >
//                   Booth Design 1
//                 </button>
//                 <button 
//                   onClick={() => setSpecificModel('/models/Epic1.obj', '/models/Epic1.mtl')}
//                   className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm"
//                 >
//                   Corner Booth
//                 </button>
//                 <button 
//                   onClick={() => setSpecificModel('/models/Epic2.obj', '/models/Epic2.mtl')}
//                   className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm"
//                 >
//                   Island Design
//                 </button>
//               </div>

//               {/* Instructions */}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white text-sm p-2 rounded-md backdrop-blur-sm flex justify-between items-center">
//                 <span>Click and drag to rotate • Scroll to zoom • Right-click to pan</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">360° View</span>
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Feature Cards */}
//             <div className="absolute -bottom-6 -left-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Custom Design</h3>
//               <p className="text-gray-300 text-sm">Tailored to your brand identity and exhibition goals</p>
//             </div>

//             <div className="absolute -top-6 -right-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Interactive Elements</h3>
//               <p className="text-gray-300 text-sm">Engage visitors with cutting-edge technology</p>
//             </div>
//           </div>

//           {/* Additional controls and supported formats */}
//           <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//             <h3 className="text-white font-medium mb-2">Current Model Details</h3>
//             <p className="text-gray-300 text-sm mb-2">
//               {isModelLoaded ? 
//                 `Currently viewing: ${modelPath.split('/').pop()}` : 
//                 'Loading model...'
//               }
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 OBJ Format
//               </span>
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 360° Interactive View
//               </span>
//             </div>
//           </div>

//           {/* CTA for consultation */}
//           <div className="mt-8 flex justify-center">
//             <a href="#contact" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium group">
//               <Phone size={18} />
//               Schedule a free consultation
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom curve decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="url(#paint0_linear)"/>
//           <defs>
//             <linearGradient id="paint0_linear" x1="720" y1="50" x2="720" y2="120" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#EA580C" stopOpacity="0.2"/>
//               <stop offset="1" stopColor="#EA580C" stopOpacity="0"/>
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }

















































// "use client"
// import { useState, useEffect, useRef } from 'react';
// import { ChevronRight, Phone, Layers, Grid, Award, ArrowRight, RotateCcw, Upload, ZoomIn, ZoomOut } from 'lucide-react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

// export default function ExhibitionmodelsSection() {
//   const [scrollY, setScrollY] = useState(0);
//   const [isAnimated, setIsAnimated] = useState(false);
//   const [isModelLoaded, setIsModelLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [viewMode, setViewMode] = useState('3d'); // '3d' or 'wireframe'
//   const [modelPath, setModelPath] = useState('/models/exhibition_booth.obj'); // Default path
//   const [materialPath, setMaterialPath] = useState('/models/exhibition_booth.mtl'); // Default material path
//   const [loadingStatus, setLoadingStatus] = useState('');
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const cameraRef = useRef(null);
//   const rendererRef = useRef(null);
//   const controlsRef = useRef(null);
//   const modelRef = useRef(null);

//   // Handle scroll animations
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true);
//     }, 500);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Initialize Three.js scene
//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // Create scene
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x1a1a1a);
//     sceneRef.current = scene;

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;
//     camera.position.y = 2;
//     cameraRef.current = camera;

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true
//     });
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.outputEncoding = THREE.sRGBEncoding;
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2;
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     rendererRef.current = renderer;

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5);
//     directionalLight.castShadow = true;
//     directionalLight.shadow.mapSize.width = 1024;
//     directionalLight.shadow.mapSize.height = 1024;
//     scene.add(directionalLight);

//     const spotLight = new THREE.SpotLight(0xff9000, 1);
//     spotLight.position.set(-5, 8, -5);
//     spotLight.castShadow = true;
//     scene.add(spotLight);

//     // Add controls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
//     controls.rotateSpeed = 0.8;
//     controls.enableZoom = true;
//     controls.enablePan = true;
//     controls.autoRotate = true;
//     controls.autoRotateSpeed = 0.5;
//     controls.target.set(0, 1, 0);
//     controlsRef.current = controls;

//     // Add grid helper
//     const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0x555555);
//     scene.add(gridHelper);

//     // Load the initial model
//     // Set to a specific booth model instead of the default
//     setSpecificModel('/models/Epic.obj', '/models/Epic.mtl');

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (controlsRef.current) controlsRef.current.update();
//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current);
//       }
//     };

//     animate();

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return;

//       const width = canvasRef.current.clientWidth;
//       const height = canvasRef.current.clientHeight;

//       cameraRef.current.aspect = width / height;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//       if (sceneRef.current) {
//         sceneRef.current.clear();
//       }
//     };
//   }, []); // Only run on mount, specific model loading handled by setSpecificModel

//   // Function to load the OBJ model
//   const loadModel = (objPath, mtlPath) => {
//     if (!sceneRef.current) return;

//     setIsLoading(true);
//     setLoadingStatus('Starting model load...');
//     setLoadingProgress(0);

//     if (modelRef.current) {
//       sceneRef.current.remove(modelRef.current);
//       modelRef.current = null;
//     }

//     const objLoader = new OBJLoader();

//     if (mtlPath) {
//       setLoadingStatus('Loading materials...');
//       const mtlLoader = new MTLLoader();

//       mtlLoader.setPath('/models/');
//       mtlLoader.load(
//         'Epic.mtl',
//         (materials) => {
//           setLoadingStatus('Materials loaded');
//           setLoadingProgress(30);

//           materials.preload();
//           objLoader.setMaterials(materials);
//           objLoader.setPath('/models/');
//           loadOBJ(objLoader, 'Epic.obj');
//         },
//         (xhr) => {
//           const progress = Math.floor((xhr.loaded / xhr.total) * 30);
//           setLoadingProgress(progress);
//           setLoadingStatus(`Loading materials: ${progress}%`);
//         },
//         (error) => {
//           console.error('Error loading MTL:', error);
//           setLoadingStatus('Failed to load materials');
//         }
//       );
//     }
//   };


//   // Helper function to load OBJ
//   const loadOBJ = (objLoader, objPath) => {
//     setLoadingStatus('Loading 3D model...');

//     objLoader.load(
//       objPath,
//       (object) => {
//         setLoadingStatus('Model loaded successfully');
//         setLoadingProgress(100);

//         // Center the model
//         const box = new THREE.Box3().setFromObject(object);
//         const center = box.getCenter(new THREE.Vector3());
//         const size = box.getSize(new THREE.Vector3());

//         // Set position and scale
//         object.position.set(-center.x, -center.y, -center.z);
//         const maxDim = Math.max(size.x, size.y, size.z);
//         const scale = 4 / maxDim; // Scale to fit in a 4x4x4 cube
//         object.scale.set(scale, scale, scale);

//         // Apply shadow settings
//         object.traverse((child) => {
//           if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;

//             // If model has no materials, add a default one
//             if (!child.material) {
//               child.material = new THREE.MeshStandardMaterial({
//                 color: 0xea580c,
//                 roughness: 0.7,
//                 metalness: 0.2
//               });
//             }
//           }
//         });

//         // Create a group to hold the model
//         const modelGroup = new THREE.Group();
//         modelGroup.add(object);

//         // Add a floor plane if needed
//         const floorGeometry = new THREE.PlaneGeometry(20, 20);
//         const floorMaterial = new THREE.MeshStandardMaterial({
//           color: 0x333333,
//           roughness: 0.8,
//           metalness: 0.2
//         });
//         const floor = new THREE.Mesh(floorGeometry, floorMaterial);
//         floor.rotation.x = -Math.PI / 2;
//         floor.position.y = -1;
//         floor.receiveShadow = true;
//         modelGroup.add(floor);

//         // Add the model group to the scene
//         sceneRef.current.add(modelGroup);
//         modelRef.current = modelGroup;

//         setIsModelLoaded(true);
//         setIsLoading(false);
//         console.log('Model successfully loaded and added to scene');
//       },
//       (xhr) => {
//         const progress = Math.floor(30 + (xhr.loaded / xhr.total * 70));
//         setLoadingProgress(progress);
//         setLoadingStatus(`Loading model: ${progress}%`);
//         console.log(`Model ${objPath} ${(xhr.loaded / xhr.total * 100).toFixed(2)}% loaded`);
//       },
//       (error) => {
//         console.error('Error loading OBJ:', error);
//         setLoadingStatus(`Error loading model: ${error.message}. Falling back to default.`);
//         setIsLoading(false);

//         // Create a fallback model if loading fails
//         createDefaultBoothModel();
//       }
//     );
//   };

//   // Create a default booth model as placeholder
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current) return;
//     console.log('Creating default booth model as fallback');

//     const booth = new THREE.Group();

//     // Base/Floor
//     const floorGeom = new THREE.BoxGeometry(6, 0.2, 6);
//     const floorMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       roughness: 0.8
//     });
//     const floor = new THREE.Mesh(floorGeom, floorMat);
//     floor.position.y = -0.1;
//     floor.receiveShadow = true;
//     booth.add(floor);

//     // Back Wall
//     const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2);
//     const wallMat = new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.7
//     });
//     const backWall = new THREE.Mesh(backWallGeom, wallMat);
//     backWall.position.set(0, 1.5, -3);
//     backWall.castShadow = true;
//     backWall.receiveShadow = true;
//     booth.add(backWall);

//     // Side Walls
//     const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6);
//     const leftWall = new THREE.Mesh(leftWallGeom, wallMat);
//     leftWall.position.set(-3, 1.5, 0);
//     leftWall.castShadow = true;
//     leftWall.receiveShadow = true;
//     booth.add(leftWall);

//     const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6);
//     const rightWall = new THREE.Mesh(rightWallGeom, wallMat);
//     rightWall.position.set(3, 1.5, 0);
//     rightWall.castShadow = true;
//     rightWall.receiveShadow = true;
//     booth.add(rightWall);

//     // Display Counter
//     const counterGeom = new THREE.BoxGeometry(4, 1, 1);
//     const counterMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.5
//     });
//     const counter = new THREE.Mesh(counterGeom, counterMat);
//     counter.position.set(0, 0.5, 1.5);
//     counter.castShadow = true;
//     counter.receiveShadow = true;
//     booth.add(counter);

//     // Logo Display
//     const logoGeom = new THREE.BoxGeometry(2, 1, 0.1);
//     const logoMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       emissive: 0xea580c,
//       emissiveIntensity: 0.5,
//       roughness: 0.3
//     });
//     const logo = new THREE.Mesh(logoGeom, logoMat);
//     logo.position.set(0, 2, -2.9);
//     logo.castShadow = true;
//     booth.add(logo);

//     // Display Stands
//     const standGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16);
//     const standMat = new THREE.MeshStandardMaterial({
//       color: 0x666666,
//       metalness: 0.8,
//       roughness: 0.2
//     });

//     const standPositions = [[-2, 0, -1.5], [0, 0, -1.5], [2, 0, -1.5]];
//     standPositions.forEach(pos => {
//       const stand = new THREE.Mesh(standGeom, standMat);
//       stand.position.set(pos[0], 1, pos[1]);
//       stand.castShadow = true;
//       stand.receiveShadow = true;
//       booth.add(stand);

//       // Display item on top of stand
//       const itemGeom = new THREE.SphereGeometry(0.3, 32, 32);
//       const itemMat = new THREE.MeshStandardMaterial({
//         color: Math.random() * 0xffffff,
//         roughness: 0.3,
//         metalness: 0.5
//       });
//       const item = new THREE.Mesh(itemGeom, itemMat);
//       item.position.set(pos[0], 2.2, pos[1]);
//       item.castShadow = true;
//       booth.add(item);
//     });

//     // Add lighting fixtures
//     const lightFixtureGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16);
//     const lightFixtureMat = new THREE.MeshStandardMaterial({
//       color: 0x333333
//     });

//     for (let x = -2; x <= 2; x += 2) {
//       const lightFixture = new THREE.Mesh(lightFixtureGeom, lightFixtureMat);
//       lightFixture.position.set(x, 3, -1);
//       booth.add(lightFixture);

//       // Add point light
//       const pointLight = new THREE.PointLight(0xffffff, 0.5, 5);
//       pointLight.position.set(x, 2.8, -1);
//       booth.add(pointLight);
//     }

//     // Add booth to scene
//     booth.position.y = 0;
//     booth.castShadow = true;
//     booth.receiveShadow = true;
//     sceneRef.current.add(booth);
//     modelRef.current = booth;
//     setIsModelLoaded(true);

//     setLoadingStatus('Loaded default booth model');
//   };

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return;

//     const newMode = viewMode === '3d' ? 'wireframe' : '3d';
//     setViewMode(newMode);

//     modelRef.current.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.wireframe = newMode === 'wireframe';
//       }
//     });
//   };

//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current) return;

//     cameraRef.current.position.set(0, 2, 5);
//     controlsRef.current.target.set(0, 1, 0);
//     controlsRef.current.update();
//   };

//   // Set a specific model path and load it
//   const setSpecificModel = (path, mtlPath = '') => {
//     console.log(`Setting specific model: ${path} with material: ${mtlPath}`);
//     setModelPath(path);
//     setMaterialPath(mtlPath);
//     loadModel(path, mtlPath);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-70' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}></div>
//       <div className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-50' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}></div>
//       <div className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? 'translate-y-0 opacity-40' : 'translate-y-20 opacity-0'}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div className={`transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls
//               that turn visitors into customers and elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
//           <div className="relative">
//             {/* 3D Exhibition Booth Viewer */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//               {/* Loading overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
//                   <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-orange-500 font-medium">Loading 3D Preview: {loadingProgress}%</p>
//                   <p className="text-gray-400 text-xs mt-2">{loadingStatus}</p>
//                 </div>
//               )}

//               {/* Debug Info (can be removed in production) */}
//               {!isLoading && (
//                 <div className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs p-2 rounded">
//                   <p>Model: {modelPath.split('/').pop()}</p>
//                   <p>Material: {materialPath ? materialPath.split('/').pop() : 'None'}</p>
//                 </div>
//               )}

//               {/* 3D Canvas */}
//               <canvas
//                 ref={canvasRef}
//                 className="w-full h-full touch-none"
//               />

//               {/* Control buttons */}
//               <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//                 <button
//                   onClick={resetCamera}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Reset Camera"
//                 >
//                   <RotateCcw size={16} className="text-white" />
//                 </button>

//                 <button
//                   onClick={toggleViewMode}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Toggle Wireframe Mode"
//                 >
//                   {viewMode === '3d' ?
//                     <Layers size={16} className="text-white" /> :
//                     <Grid size={16} className="text-white" />
//                   }
//                 </button>
//               </div>

//               {/* Model selection buttons */}
//               <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center gap-2">
//                 <button
//                   onClick={() => setSpecificModel('/models/Epic.obj', '/models/Epic.mtl')}
//                   className={`${modelPath === '/models/Epic.obj' ? 'bg-orange-500 text-white' : 'bg-white/10 text-white'} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Epic Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel('/models/Epic.obj', '/models/Epic.mtl')}
//                   className={`${modelPath === '/models/Epic.obj' ? 'bg-orange-500 text-white' : 'bg-white/10 text-white'} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Corner Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel('/models/Epic.obj', '/models/Epic.mtl')}
//                   className={`${modelPath === '/models/Epic.obj' ? 'bg-orange-500 text-white' : 'bg-white/10 text-white'} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Island Design
//                 </button>
//               </div>

//               {/* Instructions */}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white text-sm p-2 rounded-md backdrop-blur-sm flex justify-between items-center">
//                 <span>Click and drag to rotate • Scroll to zoom • Right-click to pan</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">360° View</span>
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Feature Cards */}
//             <div className="absolute -bottom-6 -left-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Custom Design</h3>
//               <p className="text-gray-300 text-sm">Tailored to your brand identity and exhibition goals</p>
//             </div>

//             <div className="absolute -top-6 -right-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Interactive Elements</h3>
//               <p className="text-gray-300 text-sm">Engage visitors with cutting-edge technology</p>
//             </div>
//           </div>
//           <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//             <h3 className="text-white font-medium mb-2">Current Model Details</h3>
//             <p className="text-gray-300 text-sm mb-2">
//               {isModelLoaded ?
//                 `Currently viewing: ${modelPath.split('/').pop()}` :
//                 'Loading model...'
//               }
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 OBJ Format
//               </span>
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 360° Interactive View
//               </span>
//             </div>
//           </div>

//           {/* CTA for consultation */}
//           <div className="mt-8 flex justify-center">
//             <a href="#contact" className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium group">
//               <Phone size={18} />
//               Schedule a free consultation
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom curve decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="url(#paint0_linear)" />
//           <defs>
//             <linearGradient id="paint0_linear" x1="720" y1="50" x2="720" y2="120" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#EA580C" stopOpacity="0.2" />
//               <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   );
// }


































// "use client"
// import { useState, useEffect, useRef } from "react"
// import { ChevronRight, Phone, Layers, Grid, Award, ArrowRight, RotateCcw } from "lucide-react"
// import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

// export default function ExhibitionmodelsSection() {
//   const [scrollY, setScrollY] = useState(0)
//   const [isAnimated, setIsAnimated] = useState(false)
//   const [isModelLoaded, setIsModelLoaded] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [viewMode, setViewMode] = useState("3d") // '3d' or 'wireframe'
//   const [modelPath, setModelPath] = useState("/models/exhibition_booth.obj") // Default path
//   const [materialPath, setMaterialPath] = useState("/models/exhibition_booth.mtl") // Default material path
//   const [loadingStatus, setLoadingStatus] = useState("")
//   const [loadingProgress, setLoadingProgress] = useState(0)

//   const canvasRef = useRef(null)
//   const sceneRef = useRef(null)
//   const cameraRef = useRef(null)
//   const rendererRef = useRef(null)
//   const controlsRef = useRef(null)
//   const modelRef = useRef(null)

//   // Handle scroll animations
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener("scroll", handleScroll)

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true)
//     }, 500)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Initialize Three.js scene
//   useEffect(() => {
//     if (!canvasRef.current) return

//     // Create scene
//     const scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x1a1a1a)
//     sceneRef.current = scene

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       0.1,
//       1000,
//     )
//     camera.position.z = 5
//     camera.position.y = 2
//     cameraRef.current = camera

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//     })
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
//     renderer.setPixelRatio(window.devicePixelRatio)
//     renderer.outputEncoding = THREE.sRGBEncoding
//     renderer.toneMapping = THREE.ACESFilmicToneMapping
//     renderer.toneMappingExposure = 1.2
//     renderer.shadowMap.enabled = true
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap
//     rendererRef.current = renderer

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
//     scene.add(ambientLight)

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
//     directionalLight.position.set(5, 5, 5)
//     directionalLight.castShadow = true
//     directionalLight.shadow.mapSize.width = 1024
//     directionalLight.shadow.mapSize.height = 1024
//     scene.add(directionalLight)

//     const spotLight = new THREE.SpotLight(0xff9000, 1)
//     spotLight.position.set(-5, 8, -5)
//     spotLight.castShadow = true
//     scene.add(spotLight)

//     // Add controls
//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true
//     controls.dampingFactor = 0.05
//     controls.rotateSpeed = 0.8
//     controls.enableZoom = true
//     controls.enablePan = true
//     controls.autoRotate = true
//     controls.autoRotateSpeed = 0.5
//     controls.target.set(0, 1, 0)
//     controlsRef.current = controls

//     // Add grid helper
//     const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0x555555)
//     scene.add(gridHelper)

//     // Load the initial model with correct paths
//     setSpecificModel("/models/epic.obj", "/models/epic.mtl")

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate)
//       if (controlsRef.current) controlsRef.current.update()
//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current)
//       }
//     }

//     animate()

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return

//       const width = canvasRef.current.clientWidth
//       const height = canvasRef.current.clientHeight

//       cameraRef.current.aspect = width / height
//       cameraRef.current.updateProjectionMatrix()
//       rendererRef.current.setSize(width, height)
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       if (rendererRef.current) {
//         rendererRef.current.dispose()
//       }
//       if (sceneRef.current) {
//         sceneRef.current.clear()
//       }
//     }
//   }, []) // Only run on mount, specific model loading handled by setSpecificModel

//   // Function to load the OBJ model
//   const loadModel = (objPath, mtlPath) => {
//     if (!sceneRef.current) return

//     setIsLoading(true)
//     setLoadingStatus("Starting model load...")
//     setLoadingProgress(0)

//     if (modelRef.current) {
//       sceneRef.current.remove(modelRef.current)
//       modelRef.current = null
//     }

//     const objLoader = new OBJLoader()

//     if (mtlPath) {
//       setLoadingStatus("Loading materials...")
//       const mtlLoader = new MTLLoader()

//       mtlLoader.load(
//         mtlPath,
//         (materials) => {
//           setLoadingStatus("Materials loaded")
//           setLoadingProgress(30)

//           materials.preload()
//           objLoader.setMaterials(materials)
//           objLoader.load(
//             objPath,
//             (object) => {
//               setLoadingStatus("Model loaded successfully")
//               setLoadingProgress(100)

//               // Center the model
//               const box = new THREE.Box3().setFromObject(object)
//               const center = box.getCenter(new THREE.Vector3())
//               const size = box.getSize(new THREE.Vector3())

//               // Set position and scale
//               object.position.set(-center.x, -center.y, -center.z)
//               const maxDim = Math.max(size.x, size.y, size.z)
//               const scale = 4 / maxDim // Scale to fit in a 4x4x4 cube
//               object.scale.set(scale, scale, scale)

//               // Apply shadow settings
//               object.traverse((child) => {
//                 if (child.isMesh) {
//                   child.castShadow = true
//                   child.receiveShadow = true

//                   // If model has no materials, add a default one
//                   if (!child.material) {
//                     child.material = new THREE.MeshStandardMaterial({
//                       color: 0xea580c,
//                       roughness: 0.7,
//                       metalness: 0.2,
//                     })
//                   }
//                 }
//               })

//               // Create a group to hold the model
//               const modelGroup = new THREE.Group()
//               modelGroup.add(object)

//               // Add a floor plane if needed
//               const floorGeometry = new THREE.PlaneGeometry(20, 20)
//               const floorMaterial = new THREE.MeshStandardMaterial({
//                 color: 0x333333,
//                 roughness: 0.8,
//                 metalness: 0.2,
//               })
//               const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//               floor.rotation.x = -Math.PI / 2
//               floor.position.y = -1
//               floor.receiveShadow = true
//               modelGroup.add(floor)

//               // Add the model group to the scene
//               sceneRef.current.add(modelGroup)
//               modelRef.current = modelGroup

//               setIsModelLoaded(true)
//               setIsLoading(false)
//               console.log("Model successfully loaded and added to scene")
//             },
//             (xhr) => {
//               const progress = Math.floor(30 + (xhr.loaded / xhr.total) * 70)
//               setLoadingProgress(progress)
//               setLoadingStatus(`Loading model: ${progress}%`)
//               console.log(`Model ${objPath} ${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`)
//             },
//             (error) => {
//               console.error("Error loading OBJ:", error)
//               setLoadingStatus(`Error loading model: ${error.message}. Falling back to default.`)
//               setIsLoading(false)

//               // Create a fallback model if loading fails
//               createDefaultBoothModel()
//             },
//           )
//         },
//         (xhr) => {
//           const progress = Math.floor((xhr.loaded / xhr.total) * 30)
//           setLoadingProgress(progress)
//           setLoadingStatus(`Loading materials: ${progress}%`)
//         },
//         (error) => {
//           console.error("Error loading MTL:", error)
//           setLoadingStatus("Failed to load materials")
//           // Try loading the OBJ without materials
//           loadOBJWithoutMaterials(objLoader, objPath)
//         },
//       )
//     } else {
//       // Load OBJ without materials
//       loadOBJWithoutMaterials(objLoader, objPath)
//     }
//   }

//   // Helper function to load OBJ without materials
//   const loadOBJWithoutMaterials = (objLoader, objPath) => {
//     setLoadingStatus("Loading 3D model without materials...")

//     objLoader.load(
//       objPath,
//       (object) => {
//         setLoadingStatus("Model loaded successfully (without materials)")
//         setLoadingProgress(100)

//         // Center the model
//         const box = new THREE.Box3().setFromObject(object)
//         const center = box.getCenter(new THREE.Vector3())
//         const size = box.getSize(new THREE.Vector3())

//         // Set position and scale
//         object.position.set(-center.x, -center.y, -center.z)
//         const maxDim = Math.max(size.x, size.y, size.z)
//         const scale = 4 / maxDim // Scale to fit in a 4x4x4 cube
//         object.scale.set(scale, scale, scale)

//         // Apply shadow settings and default material
//         object.traverse((child) => {
//           if (child.isMesh) {
//             child.castShadow = true
//             child.receiveShadow = true
//             child.material = new THREE.MeshStandardMaterial({
//               color: 0xea580c,
//               roughness: 0.7,
//               metalness: 0.2,
//             })
//           }
//         })

//         // Create a group to hold the model
//         const modelGroup = new THREE.Group()
//         modelGroup.add(object)

//         // Add a floor plane
//         const floorGeometry = new THREE.PlaneGeometry(20, 20)
//         const floorMaterial = new THREE.MeshStandardMaterial({
//           color: 0x333333,
//           roughness: 0.8,
//           metalness: 0.2,
//         })
//         const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//         floor.rotation.x = -Math.PI / 2
//         floor.position.y = -1
//         floor.receiveShadow = true
//         modelGroup.add(floor)

//         // Add the model group to the scene
//         sceneRef.current.add(modelGroup)
//         modelRef.current = modelGroup

//         setIsModelLoaded(true)
//         setIsLoading(false)
//         console.log("Model successfully loaded without materials")
//       },
//       (xhr) => {
//         const progress = Math.floor((xhr.loaded / xhr.total) * 100)
//         setLoadingProgress(progress)
//         setLoadingStatus(`Loading model: ${progress}%`)
//       },
//       (error) => {
//         console.error("Error loading OBJ without materials:", error)
//         setLoadingStatus(`Error loading model: ${error.message}. Falling back to default.`)
//         setIsLoading(false)

//         // Create a fallback model if loading fails
//         createDefaultBoothModel()
//       },
//     )
//   }

//   // Create a default booth model as placeholder
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current) return
//     console.log("Creating default booth model as fallback")

//     const booth = new THREE.Group()

//     // Base/Floor
//     const floorGeom = new THREE.BoxGeometry(6, 0.2, 6)
//     const floorMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       roughness: 0.8,
//     })
//     const floor = new THREE.Mesh(floorGeom, floorMat)
//     floor.position.y = -0.1
//     floor.receiveShadow = true
//     booth.add(floor)

//     // Back Wall
//     const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2)
//     const wallMat = new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.7,
//     })
//     const backWall = new THREE.Mesh(backWallGeom, wallMat)
//     backWall.position.set(0, 1.5, -3)
//     backWall.castShadow = true
//     backWall.receiveShadow = true
//     booth.add(backWall)

//     // Side Walls
//     const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const leftWall = new THREE.Mesh(leftWallGeom, wallMat)
//     leftWall.position.set(-3, 1.5, 0)
//     leftWall.castShadow = true
//     leftWall.receiveShadow = true
//     booth.add(leftWall)

//     const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const rightWall = new THREE.Mesh(rightWallGeom, wallMat)
//     rightWall.position.set(3, 1.5, 0)
//     rightWall.castShadow = true
//     rightWall.receiveShadow = true
//     booth.add(rightWall)

//     // Display Counter
//     const counterGeom = new THREE.BoxGeometry(4, 1, 1)
//     const counterMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.5,
//     })
//     const counter = new THREE.Mesh(counterGeom, counterMat)
//     counter.position.set(0, 0.5, 1.5)
//     counter.castShadow = true
//     counter.receiveShadow = true
//     booth.add(counter)

//     // Logo Display
//     const logoGeom = new THREE.BoxGeometry(2, 1, 0.1)
//     const logoMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       emissive: 0xea580c,
//       emissiveIntensity: 0.5,
//       roughness: 0.3,
//     })
//     const logo = new THREE.Mesh(logoGeom, logoMat)
//     logo.position.set(0, 2, -2.9)
//     logo.castShadow = true
//     booth.add(logo)

//     // Display Stands
//     const standGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16)
//     const standMat = new THREE.MeshStandardMaterial({
//       color: 0x666666,
//       metalness: 0.8,
//       roughness: 0.2,
//     })

//     const standPositions = [
//       [-2, 0, -1.5],
//       [0, 0, -1.5],
//       [2, 0, -1.5],
//     ]
//     standPositions.forEach((pos) => {
//       const stand = new THREE.Mesh(standGeom, standMat)
//       stand.position.set(pos[0], 1, pos[1])
//       stand.castShadow = true
//       stand.receiveShadow = true
//       booth.add(stand)

//       // Display item on top of stand
//       const itemGeom = new THREE.SphereGeometry(0.3, 32, 32)
//       const itemMat = new THREE.MeshStandardMaterial({
//         color: Math.random() * 0xffffff,
//         roughness: 0.3,
//         metalness: 0.5,
//       })
//       const item = new THREE.Mesh(itemGeom, itemMat)
//       item.position.set(pos[0], 2.2, pos[1])
//       item.castShadow = true
//       booth.add(item)
//     })

//     // Add lighting fixtures
//     const lightFixtureGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16)
//     const lightFixtureMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//     })

//     for (let x = -2; x <= 2; x += 2) {
//       const lightFixture = new THREE.Mesh(lightFixtureGeom, lightFixtureMat)
//       lightFixture.position.set(x, 3, -1)
//       booth.add(lightFixture)

//       // Add point light
//       const pointLight = new THREE.PointLight(0xffffff, 0.5, 5)
//       pointLight.position.set(x, 2.8, -1)
//       booth.add(pointLight)
//     }

//     // Add booth to scene
//     booth.position.y = 0
//     booth.castShadow = true
//     booth.receiveShadow = true
//     sceneRef.current.add(booth)
//     modelRef.current = booth
//     setIsModelLoaded(true)

//     setLoadingStatus("Loaded default booth model")
//   }

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return

//     const newMode = viewMode === "3d" ? "wireframe" : "3d"
//     setViewMode(newMode)

//     modelRef.current.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.wireframe = newMode === "wireframe"
//       }
//     })
//   }

//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current) return

//     cameraRef.current.position.set(0, 2, 5)
//     controlsRef.current.target.set(0, 1, 0)
//     controlsRef.current.update()
//   }

//   const setSpecificModel = (path, mtlPath = "") => {
//     console.log(`Setting specific model: ${path} with material: ${mtlPath}`)
//     setModelPath(path)
//     setMaterialPath(mtlPath)
//     loadModel(path, mtlPath)
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div
//         className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-70" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}
//       ></div>
//       <div
//         className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-50" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
//       ></div>
//       <div
//         className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-40" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
//       ></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div
//             className={`transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
//           >
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls that turn visitors into customers and
//               elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div
//             className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div
//           className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
//         >
//           <div className="relative">
//             {/* 3D Exhibition Booth Viewer */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//               {/* Loading overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
//                   <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-orange-500 font-medium">Loading 3D Preview: {loadingProgress}%</p>
//                   <p className="text-gray-400 text-xs mt-2">{loadingStatus}</p>
//                 </div>
//               )}

//               {/* Debug Info (can be removed in production) */}
//               {!isLoading && (
//                 <div className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs p-2 rounded">
//                   <p>Model: {modelPath.split("/").pop()}</p>
//                   <p>Material: {materialPath ? materialPath.split("/").pop() : "None"}</p>
//                 </div>
//               )}

//               {/* 3D Canvas */}
//               <canvas ref={canvasRef} className="w-full h-full touch-none" />

//               {/* Control buttons */}
//               <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//                 <button
//                   onClick={resetCamera}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Reset Camera"
//                 >
//                   <RotateCcw size={16} className="text-white" />
//                 </button>

//                 <button
//                   onClick={toggleViewMode}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Toggle Wireframe Mode"
//                 >
//                   {viewMode === "3d" ? (
//                     <Layers size={16} className="text-white" />
//                   ) : (
//                     <Grid size={16} className="text-white" />
//                   )}
//                 </button>
//               </div>

//               {/* Model selection buttons */}
//               <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center gap-2">
//                 <button
//                   onClick={() => setSpecificModel("/models/epic.obj", "/models/epic.mtl")}
//                   className={`${modelPath === "/models/epic.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Epic Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/exhibition_booth.obj", "/models/exhibition_booth.mtl")}
//                   className={`${modelPath === "/models/exhibition_booth.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Corner Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/island_booth.obj", "/models/island_booth.mtl")}
//                   className={`${modelPath === "/models/island_booth.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Island Design
//                 </button>
//               </div>

//               {/* Instructions */}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white text-sm p-2 rounded-md backdrop-blur-sm flex justify-between items-center">
//                 <span>Click and drag to rotate • Scroll to zoom • Right-click to pan</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">360° View</span>
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Feature Cards */}
//             <div className="absolute -bottom-6 -left-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Custom Design</h3>
//               <p className="text-gray-300 text-sm">Tailored to your brand identity and exhibition goals</p>
//             </div>

//             <div className="absolute -top-6 -right-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Interactive Elements</h3>
//               <p className="text-gray-300 text-sm">Engage visitors with cutting-edge technology</p>
//             </div>
//           </div>
//           <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//             <h3 className="text-white font-medium mb-2">Current Model Details</h3>
//             <p className="text-gray-300 text-sm mb-2">
//               {isModelLoaded ? `Currently viewing: ${modelPath.split("/").pop()}` : "Loading model..."}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 OBJ Format
//               </span>
//               <span className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded-md text-xs font-medium">
//                 360° Interactive View
//               </span>
//             </div>
//           </div>

//           {/* CTA for consultation */}
//           <div className="mt-8 flex justify-center">
//             <a
//               href="#contact"
//               className="flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium group"
//             >
//               <Phone size={18} />
//               Schedule a free consultation
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom curve decoration */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path
//             d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
//             fill="url(#paint0_linear)"
//           />
//           <defs>
//             <linearGradient id="paint0_linear" x1="720" y1="50" x2="720" y2="120" gradientUnits="userSpaceOnUse">
//               <stop stopColor="#EA580C" stopOpacity="0.2" />
//               <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
//             </linearGradient>
//           </defs>
//         </svg>
//       </div>
//     </div>
//   )
// }



















// "use client"
// import { useState, useEffect, useRef } from "react"
// import { ChevronRight, Phone, Layers, Grid, Award, ArrowRight, RotateCcw } from "lucide-react"
// import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

// export default function ExhibitionmodelsSection() {
//   const [scrollY, setScrollY] = useState(0)
//   const [isAnimated, setIsAnimated] = useState(false)
//   const [isModelLoaded, setIsModelLoaded] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [viewMode, setViewMode] = useState("3d") // '3d' or 'wireframe'
//   const [modelPath, setModelPath] = useState("/models/epic.obj") // Set Epic as default path
//   const [materialPath, setMaterialPath] = useState("/models/epic.mtl") // Set Epic material as default path
//   const [loadingStatus, setLoadingStatus] = useState("")
//   const [loadingProgress, setLoadingProgress] = useState(0)

//   const canvasRef = useRef(null)
//   const sceneRef = useRef(null)
//   const cameraRef = useRef(null)
//   const rendererRef = useRef(null)
//   const controlsRef = useRef(null)
//   const modelRef = useRef(null)
//   const animationFrameRef = useRef(null)

//   // Handle scroll animations
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener("scroll", handleScroll)

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true)
//     }, 500)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   // Initialize Three.js scene
//   useEffect(() => {
//     if (!canvasRef.current) return

//     // Create scene
//     const scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x1a1a1a)
//     sceneRef.current = scene

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       45,
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       0.1,
//       1000,
//     )
//     camera.position.set(0, 2, 5) // Adjusted initial camera position
//     cameraRef.current = camera

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//     })
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
//     renderer.setPixelRatio(window.devicePixelRatio)
//     renderer.outputEncoding = THREE.sRGBEncoding
//     renderer.toneMapping = THREE.ACESFilmicToneMapping
//     renderer.toneMappingExposure = 1.2
//     renderer.shadowMap.enabled = true
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap
//     rendererRef.current = renderer

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
//     scene.add(ambientLight)

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
//     directionalLight.position.set(5, 5, 5)
//     directionalLight.castShadow = true
//     directionalLight.shadow.mapSize.width = 1024
//     directionalLight.shadow.mapSize.height = 1024
//     scene.add(directionalLight)

//     const spotLight = new THREE.SpotLight(0xff9000, 1)
//     spotLight.position.set(-5, 8, -5)
//     spotLight.castShadow = true
//     scene.add(spotLight)

//     // Add controls
//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true
//     controls.dampingFactor = 0.05
//     controls.rotateSpeed = 0.8
//     controls.enableZoom = true
//     controls.enablePan = true
//     controls.autoRotate = true
//     controls.autoRotateSpeed = 0.5
//     controls.target.set(0, 1, 0)
//     controlsRef.current = controls

//     // Add grid helper
//     const gridHelper = new THREE.GridHelper(20, 20, 0xffffff, 0x555555)
//     scene.add(gridHelper)

//     // Load the Epic model (default)
//     loadModel("/models/epic.obj", "/models/epic.mtl")

//     // Animation loop
//     const animate = () => {
//       animationFrameRef.current = requestAnimationFrame(animate)
//       if (controlsRef.current) controlsRef.current.update()
//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current)
//       }
//     }

//     animate()

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return

//       const width = canvasRef.current.clientWidth
//       const height = canvasRef.current.clientHeight

//       cameraRef.current.aspect = width / height
//       cameraRef.current.updateProjectionMatrix()
//       rendererRef.current.setSize(width, height)
//     }

//     window.addEventListener("resize", handleResize)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current)
//       }
//       if (rendererRef.current) {
//         rendererRef.current.dispose()
//       }
//       if (sceneRef.current) {
//         sceneRef.current.clear()
//       }
//     }
//   }, []) // Only run on mount

//   // Function to load the OBJ model with improved error handling
//   const loadModel = (objPath, mtlPath) => {
//     if (!sceneRef.current) return

//     setIsLoading(true)
//     setLoadingStatus("Starting model load...")
//     setLoadingProgress(0)

//     // Remove existing model if present
//     if (modelRef.current) {
//       sceneRef.current.remove(modelRef.current)
//       modelRef.current = null
//     }

//     console.log(`Attempting to load model: ${objPath} with material: ${mtlPath}`)

//     // Update UI state
//     setModelPath(objPath)
//     setMaterialPath(mtlPath)

//     const objLoader = new OBJLoader()

//     // Function to handle OBJ loading errors
//     const handleLoadError = (error) => {
//       console.error(`Error loading model ${objPath}:`, error)
//       setLoadingStatus(`Error loading model: ${error.message}. Creating default booth.`)
//       setIsLoading(false)
//       createDefaultBoothModel()
//     }

//     if (mtlPath) {
//       setLoadingStatus("Loading materials...")
//       const mtlLoader = new MTLLoader()

//       // Set cross-origin attribute if needed
//       mtlLoader.setCrossOrigin('anonymous')

//       mtlLoader.load(
//         mtlPath,
//         (materials) => {
//           setLoadingStatus("Materials loaded, loading model...")
//           setLoadingProgress(30)

//           materials.preload()
//           objLoader.setMaterials(materials)

//           // Set cross-origin attribute if needed
//           objLoader.setCrossOrigin('anonymous')

//           objLoader.load(
//             objPath,
//             (object) => {
//               handleLoadedObject(object)
//             },
//             (xhr) => {
//               const progress = Math.floor(30 + (xhr.loaded / xhr.total) * 70)
//               setLoadingProgress(progress)
//               setLoadingStatus(`Loading model: ${progress}%`)
//               console.log(`Model ${objPath}: ${((xhr.loaded / xhr.total) * 100).toFixed(2)}% loaded`)
//             },
//             handleLoadError
//           )
//         },
//         (xhr) => {
//           const progress = Math.floor((xhr.loaded / xhr.total) * 30)
//           setLoadingProgress(progress)
//           setLoadingStatus(`Loading materials: ${progress}%`)
//         },
//         (error) => {
//           console.error("Error loading MTL:", error)
//           setLoadingStatus("Failed to load materials, trying without materials...")
//           // Try loading the OBJ without materials
//           loadOBJWithoutMaterials(objLoader, objPath)
//         }
//       )
//     } else {
//       // Load OBJ without materials
//       loadOBJWithoutMaterials(objLoader, objPath)
//     }
//   }

//   // Helper function to handle successfully loaded object
//   const handleLoadedObject = (object) => {
//     if (!sceneRef.current) return

//     setLoadingStatus("Model loaded successfully")
//     setLoadingProgress(100)
//     console.log("Model successfully loaded")

//     // Center the model
//     const box = new THREE.Box3().setFromObject(object)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     // Set position and scale
//     object.position.set(-center.x, -center.y, -center.z)
//     const maxDim = Math.max(size.x, size.y, size.z)
//     const scale = 4 / maxDim // Scale to fit in a 4x4x4 cube
//     object.scale.set(scale, scale, scale)

//     // Apply shadow settings
//     object.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true

//         // If model has no materials, add a default one
//         if (!child.material) {
//           child.material = new THREE.MeshStandardMaterial({
//             color: 0xea580c,
//             roughness: 0.7,
//             metalness: 0.2,
//           })
//         }
//       }
//     })

//     // Create a group to hold the model
//     const modelGroup = new THREE.Group()
//     modelGroup.add(object)

//     // Add a floor plane if needed (can be commented out if the model has its own floor)
//     const floorGeometry = new THREE.PlaneGeometry(20, 20)
//     const floorMaterial = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.8,
//       metalness: 0.2,
//     })
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//     floor.rotation.x = -Math.PI / 2
//     floor.position.y = -1
//     floor.receiveShadow = true
//     modelGroup.add(floor)

//     // Add the model group to the scene
//     sceneRef.current.add(modelGroup)
//     modelRef.current = modelGroup

//     // Update UI state
//     setIsModelLoaded(true)
//     setIsLoading(false)

//     // Reset camera position for better viewing
//     resetCamera()
//   }

//   // Helper function to load OBJ without materials
//   const loadOBJWithoutMaterials = (objLoader, objPath) => {
//     setLoadingStatus("Loading 3D model without materials...")

//     // Set cross-origin attribute if needed
//     objLoader.setCrossOrigin('anonymous')

//     objLoader.load(
//       objPath,
//       (object) => {
//         handleLoadedObject(object)
//       },
//       (xhr) => {
//         const progress = Math.floor((xhr.loaded / xhr.total) * 100)
//         setLoadingProgress(progress)
//         setLoadingStatus(`Loading model: ${progress}%`)
//       },
//       (error) => {
//         console.error("Error loading OBJ without materials:", error)
//         setLoadingStatus(`Error loading model: ${error.message}. Creating default booth.`)
//         setIsLoading(false)
//         createDefaultBoothModel()
//       }
//     )
//   }

//   // Create a default booth model as placeholder
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current) return
//     console.log("Creating default booth model as fallback")

//     const booth = new THREE.Group()

//     // Base/Floor
//     const floorGeom = new THREE.BoxGeometry(6, 0.2, 6)
//     const floorMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       roughness: 0.8,
//     })
//     const floor = new THREE.Mesh(floorGeom, floorMat)
//     floor.position.y = -0.1
//     floor.receiveShadow = true
//     booth.add(floor)

//     // Back Wall
//     const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2)
//     const wallMat = new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.7,
//     })
//     const backWall = new THREE.Mesh(backWallGeom, wallMat)
//     backWall.position.set(0, 1.5, -3)
//     backWall.castShadow = true
//     backWall.receiveShadow = true
//     booth.add(backWall)

//     // Side Walls
//     const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const leftWall = new THREE.Mesh(leftWallGeom, wallMat)
//     leftWall.position.set(-3, 1.5, 0)
//     leftWall.castShadow = true
//     leftWall.receiveShadow = true
//     booth.add(leftWall)

//     const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const rightWall = new THREE.Mesh(rightWallGeom, wallMat)
//     rightWall.position.set(3, 1.5, 0)
//     rightWall.castShadow = true
//     rightWall.receiveShadow = true
//     booth.add(rightWall)

//     // Display Counter
//     const counterGeom = new THREE.BoxGeometry(4, 1, 1)
//     const counterMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.5,
//     })
//     const counter = new THREE.Mesh(counterGeom, counterMat)
//     counter.position.set(0, 0.5, 1.5)
//     counter.castShadow = true
//     counter.receiveShadow = true
//     booth.add(counter)

//     // Logo Display
//     const logoGeom = new THREE.BoxGeometry(2, 1, 0.1)
//     const logoMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       emissive: 0xea580c,
//       emissiveIntensity: 0.5,
//       roughness: 0.3,
//     })
//     const logo = new THREE.Mesh(logoGeom, logoMat)
//     logo.position.set(0, 2, -2.9)
//     logo.castShadow = true
//     booth.add(logo)

//     // Display Stands
//     const standGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16)
//     const standMat = new THREE.MeshStandardMaterial({
//       color: 0x666666,
//       metalness: 0.8,
//       roughness: 0.2,
//     })

//     const standPositions = [
//       [-2, 0, -1.5],
//       [0, 0, -1.5],
//       [2, 0, -1.5],
//     ]
//     standPositions.forEach((pos) => {
//       const stand = new THREE.Mesh(standGeom, standMat)
//       stand.position.set(pos[0], 1, pos[1])
//       stand.castShadow = true
//       stand.receiveShadow = true
//       booth.add(stand)

//       // Display item on top of stand
//       const itemGeom = new THREE.SphereGeometry(0.3, 32, 32)
//       const itemMat = new THREE.MeshStandardMaterial({
//         color: Math.random() * 0xffffff,
//         roughness: 0.3,
//         metalness: 0.5,
//       })
//       const item = new THREE.Mesh(itemGeom, itemMat)
//       item.position.set(pos[0], 2.2, pos[1])
//       item.castShadow = true
//       booth.add(item)
//     })

//     // Add lighting fixtures
//     const lightFixtureGeom = new THREE.CylinderGeometry(0.1, 0.1, 0.2, 16)
//     const lightFixtureMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//     })

//     for (let x = -2; x <= 2; x += 2) {
//       const lightFixture = new THREE.Mesh(lightFixtureGeom, lightFixtureMat)
//       lightFixture.position.set(x, 3, -1)
//       booth.add(lightFixture)

//       // Add point light
//       const pointLight = new THREE.PointLight(0xffffff, 0.5, 5)
//       pointLight.position.set(x, 2.8, -1)
//       booth.add(pointLight)
//     }

//     // Add booth to scene
//     booth.position.y = 0
//     booth.castShadow = true
//     booth.receiveShadow = true
//     sceneRef.current.add(booth)
//     modelRef.current = booth
//     setIsModelLoaded(true)

//     setLoadingStatus("Loaded default booth model")
//     setIsLoading(false)
//   }

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return

//     const newMode = viewMode === "3d" ? "wireframe" : "3d"
//     setViewMode(newMode)

//     modelRef.current.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         child.material.wireframe = newMode === "wireframe"
//       }
//     })
//   }

//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current) return

//     cameraRef.current.position.set(5, 3, 5) // Adjusted for better viewing angle
//     controlsRef.current.target.set(0, 1, 0)
//     controlsRef.current.update()
//   }

//   // Function to load specific model with improved error handling
//   const setSpecificModel = (path, mtlPath = "") => {
//     console.log(`Setting specific model: ${path} with material: ${mtlPath}`)
//     loadModel(path, mtlPath)
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div
//         className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-70" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}
//       ></div>
//       <div
//         className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-50" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
//       ></div>
//       <div
//         className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-40" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
//       ></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div
//             className={`transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
//           >
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls that turn visitors into customers and
//               elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div
//             className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div
//           className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
//         >
//           <div className="relative">
//             {/* 3D Exhibition Booth Viewer */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//               {/* Loading overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
//                   <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-orange-500 font-medium">Loading 3D Preview: {loadingProgress}%</p>
//                   <p className="text-gray-400 text-xs mt-2">{loadingStatus}</p>
//                 </div>
//               )}

//               {/* Debug Info (can be removed in production) */}
//               {!isLoading && (
//                 <div className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs p-2 rounded">
//                   <p>Model: {modelPath.split("/").pop()}</p>
//                   <p>Material: {materialPath ? materialPath.split("/").pop() : "None"}</p>
//                 </div>
//               )}

//               {/* 3D Canvas */}
//               <canvas ref={canvasRef} className="w-full h-full touch-none" />

//               {/* Control buttons */}
//               <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//                 <button
//                   onClick={resetCamera}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Reset Camera"
//                 >
//                   <RotateCcw size={16} className="text-white" />
//                 </button>

//                 <button
//                   onClick={toggleViewMode}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Toggle Wireframe Mode"
//                 >
//                   {viewMode === "3d" ? (
//                     <Layers size={16} className="text-white" />
//                   ) : (
//                     <Grid size={16} className="text-white" />
//                   )}
//                 </button>
//               </div>

//               {/* Model selection buttons */}
//               <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center gap-2">
//                 <button
//                   onClick={() => setSpecificModel("/models/Booth_Exhibition_Stand.obj", "/models/Booth_Exhibition_Stand.mtl")}
//                   className={`${modelPath === "/models/Booth_Exhibition_Stand.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Epic Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/exhibition_booth.obj", "/models/exhibition_booth.mtl")}
//                   className={`${modelPath === "/models/exhibition_booth.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Corner Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/island_booth.obj", "/models/island_booth.mtl")}
//                   className={`${modelPath === "/models/island_booth.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Island Design
//                 </button>
//               </div>

//               {/* Instructions */}
//               <div className="absolute bottom-4 left-4 right-4 bg-black/40 text-white text-sm p-2 rounded-md backdrop-blur-sm flex justify-between items-center">
//                 <span>Click and drag to rotate • Scroll to zoom • Right-click to pan</span>
//                 <div className="flex items-center gap-2">
//                   <span className="text-orange-500">360° View</span>
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Floating Feature Cards */}
//             <div className="absolute -bottom-6 -left-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Custom Design</h3>
//               <p className="text-gray-300 text-sm">Tailored to your brand identity and exhibition goals</p>
//             </div>

//             <div className="absolute -top-6 -right-6 w-64 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 shadow-lg">
//               <h3 className="text-white font-medium">Interactive Elements</h3>
//               <p className="text-gray-300 text-sm">Engage visitors with cutting-edge technology</p>
//             </div>
//           </div>
//           <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
//             <h3 className="text-white font-semibold flex items-center">
//               Select Your Model <ArrowRight size={16} className="ml-2" />
//             </h3>
//             <p className="text-gray-300 text-sm mt-1">
//               Choose from our pre-designed exhibition booth options or contact us for a fully customized solution.
//             </p>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }














// "use client"
// import { useState, useEffect, useRef } from "react"
// import { ChevronRight, Award, Layers, RotateCcw, ZoomIn, ZoomOut, Grid, Eye, Cube, Camera, ArrowPathIcon } from "lucide-react"
// import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

// export default function EnhancedBoothViewer() {
//   const [isAnimated, setIsAnimated] = useState(false)
//   const [isModelLoaded, setIsModelLoaded] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [viewMode, setViewMode] = useState("3d") // '3d' or 'wireframe'
//   const [viewPosition, setViewPosition] = useState("outside") // 'outside' or 'inside'
//   const [currentModel, setCurrentModel] = useState("epic") // 'epic', 'corner', 'island'
//   const [loadingStatus, setLoadingStatus] = useState("")
//   const [loadingProgress, setLoadingProgress] = useState(0)
//   const [isAutoRotating, setIsAutoRotating] = useState(false)
//   const [scrollY, setScrollY] = useState(0)

//   const canvasRef = useRef(null)
//   const sceneRef = useRef(null)
//   const cameraRef = useRef(null)
//   const rendererRef = useRef(null)
//   const controlsRef = useRef(null)
//   const modelRef = useRef(null)
//   const animationFrameRef = useRef(null)
//   const cameraOrigPosRef = useRef({ x: 0, y: 2, z: 5 })

//   // Model path mapping
//   const modelPaths = {
//     epic: {
//       obj: "/models/Booth_Exhibition_Stand.obj",
//       mtl: "/models/Booth_Exhibition_Stand.mtl",
//       name: "Demo"
//     },
//     corner: {
//       obj: "/models/01.obj",
//       mtl: "/models/01.mtl",
//       name: "stall"
//     },
//     island: {
//       obj: "/models/ctrivedi/C Trivedi.obj",
//       mtl: "/models/ctrivedi/C Trivedi.mtl",
//       name: "Ctrivedi"
//     }
//   }
//  useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     window.addEventListener("scroll", handleScroll)

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true)
//     }, 500)

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

  
//   // Initialize Three.js scene
//   useEffect(() => {
//     if (!canvasRef.current) return

//     // Create scene
//     const scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x1a1a1a)
//     sceneRef.current = scene

//     // Create camera with improved field of view for better inside viewing
//     const camera = new THREE.PerspectiveCamera(
//       60, // Wider field of view for better inside viewing
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       0.1,
//       1000,
//     )
//     camera.position.set(0, 2, 5)
//     cameraOrigPosRef.current = { x: 0, y: 2, z: 5 }
//     cameraRef.current = camera

//     // Create renderer with better quality settings
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//       preserveDrawingBuffer: true, // Allows for screenshot capability
//     })
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // Limit for better performance
//     renderer.outputEncoding = THREE.sRGBEncoding
//     renderer.toneMapping = THREE.ACESFilmicToneMapping
//     renderer.toneMappingExposure = 1.2
//     renderer.shadowMap.enabled = true
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap
//     rendererRef.current = renderer

//     // Enhanced lighting setup
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
//     scene.add(ambientLight)

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
//     directionalLight.position.set(5, 10, 5)
//     directionalLight.castShadow = true
//     directionalLight.shadow.mapSize.width = 1024
//     directionalLight.shadow.mapSize.height = 1024
//     scene.add(directionalLight)

//     // Add back light for better depth perception
//     const backLight = new THREE.DirectionalLight(0xffffff, 1.0)
//     backLight.position.set(-5, 5, -5)
//     scene.add(backLight)

//     // Add spotlight from top-front for better highlight
//     const spotLight = new THREE.SpotLight(0xff9000, 1.5)
//     spotLight.position.set(0, 10, 8)
//     spotLight.castShadow = true
//     spotLight.angle = 0.5
//     scene.add(spotLight)

//     // Add internal lights to illuminate the inside better
//     const insideLight1 = new THREE.PointLight(0xffffff, 1.0, 10)
//     insideLight1.position.set(0, 1.5, 0)
//     scene.add(insideLight1)

//     const insideLight2 = new THREE.PointLight(0xffffff, 0.7, 8)
//     insideLight2.position.set(2, 1, 0)
//     scene.add(insideLight2)

//     // Add controls - Enhanced for smoother experience
//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true
//     controls.dampingFactor = 0.08
//     controls.rotateSpeed = 0.7
//     controls.zoomSpeed = 1.2
//     controls.panSpeed = 0.8
//     controls.enableZoom = true
//     controls.minDistance = 0.5 // Allow closer zoom for inside view
//     controls.maxDistance = 30 // Allow further zoom out for overview
//     controls.enablePan = true
//     controls.autoRotate = false
//     controls.autoRotateSpeed = 0.3
//     controls.target.set(0, 1, 0) // Look at center of booth by default
//     controlsRef.current = controls

//     // Add grid helper but make it nicer looking
//     const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x333333)
//     gridHelper.position.y = -0.01 // Set grid slightly below ground level
//     scene.add(gridHelper)

//     // Add floor for better visual reference
//     const floorGeometry = new THREE.PlaneGeometry(20, 20)
//     const floorMaterial = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.8,
//       metalness: 0.2,
//     })
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//     floor.rotation.x = -Math.PI / 2
//     floor.position.y = -0.02 // Just below grid
//     floor.receiveShadow = true
//     scene.add(floor)

//     // Load default Epic booth model
//     loadModel(modelPaths.epic.obj, modelPaths.epic.mtl)

//     // Animation loop with better performance
//     const animate = () => {
//       animationFrameRef.current = requestAnimationFrame(animate)
//       if (controlsRef.current) controlsRef.current.update()
//       if (rendererRef.current && sceneRef.current && cameraRef.current) {
//         rendererRef.current.render(sceneRef.current, cameraRef.current)
//       }
//     }

//     animate()

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !cameraRef.current || !rendererRef.current) return

//       const width = canvasRef.current.clientWidth
//       const height = canvasRef.current.clientHeight

//       cameraRef.current.aspect = width / height
//       cameraRef.current.updateProjectionMatrix()
//       rendererRef.current.setSize(width, height)
//     }

//     window.addEventListener("resize", handleResize)

//     // Trigger animation after component mounts
//     setTimeout(() => {
//       setIsAnimated(true)
//     }, 500)

//     return () => {
//       window.removeEventListener("resize", handleResize)
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current)
//       }
//       if (rendererRef.current) {
//         rendererRef.current.dispose()
//       }
//       if (sceneRef.current) {
//         sceneRef.current.clear()
//       }
//     }
//   }, [])

//   // Function to load the OBJ model with improved error handling
//   const loadModel = (objPath, mtlPath) => {
//     if (!sceneRef.current) return

//     setIsLoading(true)
//     setLoadingStatus("Starting model load...")
//     setLoadingProgress(0)

//     // Remove existing model if present
//     if (modelRef.current) {
//       sceneRef.current.remove(modelRef.current)
//       modelRef.current = null
//     }

//     console.log(`Loading model: ${objPath} with material: ${mtlPath}`)

//     const objLoader = new OBJLoader()

//     // Function to handle OBJ loading errors
//     const handleLoadError = (error) => {
//       console.error(`Error loading model ${objPath}:`, error)
//       setLoadingStatus(`Error loading model: ${error.message}. Creating default booth.`)
//       setIsLoading(false)
//       createDefaultBoothModel()
//     }

//     if (mtlPath) {
//       setLoadingStatus("Loading materials...")
//       const mtlLoader = new MTLLoader()
//       mtlLoader.setCrossOrigin("anonymous")

//       mtlLoader.load(
//         mtlPath,
//         (materials) => {
//           setLoadingStatus("Materials loaded, loading model...")
//           setLoadingProgress(30)

//           materials.preload()
//           objLoader.setMaterials(materials)
//           objLoader.setCrossOrigin("anonymous")

//           objLoader.load(
//             objPath,
//             (object) => {
//               handleLoadedObject(object)
//             },
//             (xhr) => {
//               const progress = Math.floor(50 + (xhr.loaded / xhr.total) * 50)
//               setLoadingProgress(progress)
//               setLoadingStatus(`Loading model: ${progress}%`)
//             },
//             handleLoadError,
//           )
//         },
//         (xhr) => {
//           const progress = Math.floor((xhr.loaded / xhr.total) * 50)
//           setLoadingProgress(progress)
//           setLoadingStatus(`Loading materials: ${progress}%`)
//         },
//         (error) => {
//           console.error("Error loading MTL:", error)
//           setLoadingStatus("Failed to load materials, trying without materials...")
//           // Try loading the OBJ without materials
//           loadOBJWithoutMaterials(objLoader, objPath)
//         },
//       )
//     } else {
//       // Load OBJ without materials
//       loadOBJWithoutMaterials(objLoader, objPath)
//     }
//   }

//   // Helper function to handle successfully loaded object
//   const handleLoadedObject = (object) => {
//     if (!sceneRef.current) return

//     setLoadingStatus("Model successfully loaded")
//     setLoadingProgress(100)

//     // Center the model
//     const box = new THREE.Box3().setFromObject(object)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     // Create a group to hold the model
//     const modelGroup = new THREE.Group()

//     // Apply appropriate scale for better visibility
//     const maxDim = Math.max(size.x, size.y, size.z)
//     const scale = 20.0 / maxDim
//     object.scale.set(scale, scale, scale)

//     // Center the model and place it directly on the grid
//     object.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)

//     // Apply rotation for better viewing angle if needed
//     if (currentModel === "epic") {
//       object.rotation.y = Math.PI / 4 // 45-degree rotation for better view
//     }

//     // Apply shadow settings and enhance materials
//     object.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true

//         // If model has no materials, add a default one
//         if (!child.material) {
//           child.material = new THREE.MeshStandardMaterial({
//             color: 0xea580c,
//             roughness: 0.7,
//             metalness: 0.2,
//           })
//         } else {
//           // Enhance existing materials
//           if (Array.isArray(child.material)) {
//             child.material.forEach((mat) => {
//               mat.roughness = 0.7
//               mat.metalness = 0.3
//               mat.needsUpdate = true
//             })
//           } else {
//             child.material.roughness = 0.7
//             child.material.metalness = 0.3
//             child.material.needsUpdate = true
//           }
//         }
//       }
//     })

//     modelGroup.add(object)

//     // Add the model group to the scene
//     sceneRef.current.add(modelGroup)
//     modelRef.current = modelGroup

//     // Update UI state
//     setIsModelLoaded(true)
//     setIsLoading(false)

//     // Reset camera for better default view
//     resetCamera()
//   }

//   // Helper function to load OBJ without materials
//   const loadOBJWithoutMaterials = (objLoader, objPath) => {
//     setLoadingStatus("Loading 3D model without materials...")

//     objLoader.setCrossOrigin("anonymous")
//     objLoader.load(
//       objPath,
//       (object) => {
//         handleLoadedObject(object)
//       },
//       (xhr) => {
//         const progress = Math.floor((xhr.loaded / xhr.total) * 100)
//         setLoadingProgress(progress)
//         setLoadingStatus(`Loading model: ${progress}%`)
//       },
//       (error) => {
//         console.error("Error loading OBJ without materials:", error)
//         setLoadingStatus(`Error loading model: ${error.message}. Creating default booth.`)
//         setIsLoading(false)
//         createDefaultBoothModel()
//       },
//     )
//   }

//   // Create a default booth model as placeholder
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current) return
//     console.log("Creating default booth model as fallback")

//     const booth = new THREE.Group()

//     // Base/Floor
//     const floorGeom = new THREE.BoxGeometry(6, 0.2, 6)
//     const floorMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       roughness: 0.8,
//     })
//     const floor = new THREE.Mesh(floorGeom, floorMat)
//     floor.position.y = -0.1
//     floor.receiveShadow = true
//     booth.add(floor)

//     // Back Wall
//     const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2)
//     const wallMat = new THREE.MeshStandardMaterial({
//       color: 0xffffff,
//       roughness: 0.7,
//     })
//     const backWall = new THREE.Mesh(backWallGeom, wallMat)
//     backWall.position.set(0, 1.5, -3)
//     backWall.castShadow = true
//     backWall.receiveShadow = true
//     booth.add(backWall)

//     // Side Walls
//     const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const leftWall = new THREE.Mesh(leftWallGeom, wallMat)
//     leftWall.position.set(-3, 1.5, 0)
//     leftWall.castShadow = true
//     leftWall.receiveShadow = true
//     booth.add(leftWall)

//     const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
//     const rightWall = new THREE.Mesh(rightWallGeom, wallMat)
//     rightWall.position.set(3, 1.5, 0)
//     rightWall.castShadow = true
//     rightWall.receiveShadow = true
//     booth.add(rightWall)

//     // Display Counter
//     const counterGeom = new THREE.BoxGeometry(4, 1, 1)
//     const counterMat = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.5,
//     })
//     const counter = new THREE.Mesh(counterGeom, counterMat)
//     counter.position.set(0, 0.5, 1.5)
//     counter.castShadow = true
//     counter.receiveShadow = true
//     booth.add(counter)

//     // Logo Display
//     const logoGeom = new THREE.BoxGeometry(2, 1, 0.1)
//     const logoMat = new THREE.MeshStandardMaterial({
//       color: 0xea580c,
//       emissive: 0xea580c,
//       emissiveIntensity: 0.5,
//       roughness: 0.3,
//     })
//     const logo = new THREE.Mesh(logoGeom, logoMat)
//     logo.position.set(0, 2, -2.9)
//     logo.castShadow = true
//     booth.add(logo)

//     // Display Stands
//     const standGeom = new THREE.CylinderGeometry(0.2, 0.2, 2, 16)
//     const standMat = new THREE.MeshStandardMaterial({
//       color: 0x666666,
//       metalness: 0.8,
//       roughness: 0.2,
//     })

//     const standPositions = [
//       [-2, 0, -1.5],
//       [0, 0, -1.5],
//       [2, 0, -1.5],
//     ]
//     standPositions.forEach((pos) => {
//       const stand = new THREE.Mesh(standGeom, standMat)
//       stand.position.set(pos[0], 1, pos[1])
//       stand.castShadow = true
//       stand.receiveShadow = true
//       booth.add(stand)

//       // Display item on top of stand
//       const itemGeom = new THREE.SphereGeometry(0.3, 32, 32)
//       const itemMat = new THREE.MeshStandardMaterial({
//         color: Math.random() * 0xffffff,
//         roughness: 0.3,
//         metalness: 0.5,
//       })
//       const item = new THREE.Mesh(itemGeom, itemMat)
//       item.position.set(pos[0], 2.2, pos[1])
//       item.castShadow = true
//       booth.add(item)
//     })

//     // Add booth to scene
//     booth.position.y = 0 // Position directly on the grid
//     booth.castShadow = true
//     booth.receiveShadow = true
//     sceneRef.current.add(booth)
//     modelRef.current = booth
//     setIsModelLoaded(true)

//     setLoadingStatus("Created default booth model")
//     setIsLoading(false)
//   }

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return

//     const newMode = viewMode === "3d" ? "wireframe" : "3d"
//     setViewMode(newMode)

//     modelRef.current.traverse((child) => {
//       if (child instanceof THREE.Mesh) {
//         if (child.material) {
//           if (Array.isArray(child.material)) {
//             child.material.forEach((mat) => {
//               mat.wireframe = newMode === "wireframe"
//             })
//           } else {
//             child.material.wireframe = newMode === "wireframe"
//           }
//         }
//       }
//     })
//   }

//   // Toggle inside/outside view
//   const toggleViewPosition = () => {
//     if (!cameraRef.current || !controlsRef.current || !modelRef.current) return

//     const newPosition = viewPosition === "outside" ? "inside" : "outside"
//     setViewPosition(newPosition)

//     if (newPosition === "inside") {
//       // Move camera inside the booth
//       const box = new THREE.Box3().setFromObject(modelRef.current)
//       const center = box.getCenter(new THREE.Vector3())

//       // Store current outside position
//       cameraOrigPosRef.current = {
//         x: cameraRef.current.position.x,
//         y: cameraRef.current.position.y,
//         z: cameraRef.current.position.z
//       }

//       // Position camera inside the booth
//       cameraRef.current.position.set(center.x, 1.6, center.z) // Head height

//       // Set controls to look slightly up at an angle
//       controlsRef.current.target.set(center.x, 2.2, center.z + 1)

//       // Update min distance to prevent going through walls when inside
//       controlsRef.current.minDistance = 0.1
//     } else {
//       // Return to outside position
//       cameraRef.current.position.set(
//         cameraOrigPosRef.current.x,
//         cameraOrigPosRef.current.y,
//         cameraOrigPosRef.current.z
//       )

//       // Reset target to center of booth
//       const box = new THREE.Box3().setFromObject(modelRef.current)
//       const center = box.getCenter(new THREE.Vector3())
//       controlsRef.current.target.set(center.x, 1, center.z)

//       // Reset min distance to prevent getting too close
//       controlsRef.current.minDistance = 0.5
//     }

//     controlsRef.current.update()
//   }


//   const setSpecificModel = (path, mtlPath = "") => {
//     console.log(`Setting specific model: ${path} with material: ${mtlPath}`)
//     loadModel(path, mtlPath)
//   }


//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current || !modelRef.current) return

//     const box = new THREE.Box3().setFromObject(modelRef.current)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     // Calculate a good distance based on model size
//     const maxDim = Math.max(size.x, size.y, size.z)
//     const distance = maxDim * 1.5

//     // Position camera at an angle for good overview
//     cameraRef.current.position.set(
//       center.x + distance * 0.7,  // Slight offset on X
//       center.y + distance * 0.5,  // Place above the model
//       center.z + distance * 0.7   // Slight offset on Z
//     )

//     // Look at the center of the booth
//     controlsRef.current.target.set(center.x, center.y, center.z)
//     controlsRef.current.update()

//     // Store this position as the original outside position
//     cameraOrigPosRef.current = {
//       x: cameraRef.current.position.x,
//       y: cameraRef.current.position.y,
//       z: cameraRef.current.position.z
//     }

//     // Reset view position
//     setViewPosition("outside")
//   }

//   // Toggle auto-rotation
//   const toggleAutoRotate = () => {
//     if (!controlsRef.current) return
//     const newState = !isAutoRotating
//     setIsAutoRotating(newState)
//     controlsRef.current.autoRotate = newState
//   }

//   // Zoom functions
//   const zoomIn = () => {
//     if (!cameraRef.current || !controlsRef.current) return

//     // Get current distance from target
//     const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
//     const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
//     const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

//     // Move camera closer by 25%
//     const newDistance = Math.max(currentPos.distanceTo(targetPos) * 0.75, controlsRef.current.minDistance)
//     cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

//     controlsRef.current.update()
//   }

//   const zoomOut = () => {
//     if (!cameraRef.current || !controlsRef.current) return

//     // Get current distance from target
//     const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
//     const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
//     const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

//     // Move camera further by 25%
//     const newDistance = Math.min(currentPos.distanceTo(targetPos) * 1.25, controlsRef.current.maxDistance)
//     cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

//     controlsRef.current.update()
//   }

//   // Change booth model
//   const changeModel = (modelType) => {
//     if (!modelPaths[modelType]) return

//     setCurrentModel(modelType)
//     loadModel(modelPaths[modelType].obj, modelPaths[modelType].mtl)
//   }

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
//       </div>

//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

//       {/* Floating 3D shapes */}
//       <div
//         className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-70" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}
//       ></div>
//       <div
//         className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-50" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
//       ></div>
//       <div
//         className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-40" : "translate-y-20 opacity-0"}`}
//         style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
//       ></div>

//       {/* Content Container */}
//       <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
//         {/* Left Column - Text Content */}
//         <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
//           <div
//             className={`transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
//           >
//             <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
//               TRANSFORM YOUR BRAND PRESENCE
//             </span>

//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               <span className="block">Designing</span>
//               <span className="text-orange-500">Exhibition Experiences</span>
//               <span className="block">That Stand Out</span>
//             </h1>

//             <p className="text-gray-300 text-lg mt-6 max-w-lg">
//               We create immersive, attention-grabbing exhibition booths and stalls that turn visitors into customers and
//               elevate your brand presence.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-8">
//               <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
//                 Get Started
//                 <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
//                 View Portfolio
//               </button>
//             </div>
//           </div>

//           {/* Stats and trust indicators */}
//           <div
//             className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
//           >
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Award className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">250+</p>
//                 <p className="text-gray-400 text-sm">Exhibits Designed</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Layers className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">30+</p>
//                 <p className="text-gray-400 text-sm">Years Experience</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
//                 <Grid className="text-orange-500" size={20} />
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-white">98%</p>
//                 <p className="text-gray-400 text-sm">Client Satisfaction</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - 3D Booth Visualization */}
//         <div
//           className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
//         >
//           <div className="relative">
//             {/* 3D Exhibition Booth Viewer */}
//             <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//               {/* Loading overlay */}
//               {isLoading && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-20">
//                   <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//                   <p className="text-orange-500 font-medium">Loading 3D Preview: {loadingProgress}%</p>
//                   <p className="text-gray-400 text-xs mt-2">{loadingStatus}</p>
//                 </div>
//               )}

//               {/* Debug Info (can be removed in production) */}
//               {/* {!isLoading && (
//                 <div className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs p-2 rounded">
//                   <p>Model: {modelPaths.split("/").pop()}</p>
//                   <p>Material: {materialPath ? materialPath.split("/").pop() : "None"}</p>
//                 </div>
//               )} */}

//               {/* 3D Canvas */}
//               <canvas ref={canvasRef} className="w-full h-full touch-none" />

//               {/* Control buttons */}
//               <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//                 <button
//                   onClick={resetCamera}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Reset Camera"
//                 >
//                   <RotateCcw size={16} className="text-white" />
//                 </button>

//                 <button
//                   onClick={toggleViewMode}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Toggle Wireframe Mode"
//                 >
//                   {viewMode === "3d" ? (
//                     <Layers size={16} className="text-white" />
//                   ) : (
//                     <Grid size={16} className="text-white" />
//                   )}
//                 </button>

//                 <button
//                   onClick={toggleAutoRotate}
//                   className={`w-8 h-8 ${isAutoRotating ? "bg-orange-500/50" : "bg-white/10"} hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm`}
//                   title="Toggle Auto-Rotation"
//                 >
//                   <RotateCcw size={16} className="text-white" />
//                 </button>

//                 {/* Zoom controls */}
//                 <button
//                   onClick={zoomIn}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Zoom In"
//                 >
//                   <ZoomIn size={16} className="text-white" />
//                 </button>

//                 <button
//                   onClick={zoomOut}
//                   className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm"
//                   title="Zoom Out"
//                 >
//                   <ZoomOut size={16} className="text-white" />
//                 </button>
//               </div>

//               {/* Model selection buttons */}
//               <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center gap-2">
//                 <button
//                   onClick={() =>
//                     setSpecificModel("/models/Booth_Exhibition_Stand.obj", "/models/Booth_Exhibition_Stand.mtl")
//                   }
//                   className={`${modelPaths === "/models/Booth_Exhibition_Stand.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Epic Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/01.obj", "/models/01.mtl")}
//                   className={`${modelPaths === "/models/01.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Corner Booth
//                 </button>
//                 <button
//                   onClick={() => setSpecificModel("/models/ctrivedi/C Trivedi.obj", "/models/ctrivedi/C Trivedi.mtl")}
//                   className={`${modelPaths === "/models/ctrivedi/C Trivedi.obj" ? "bg-orange-500 text-white" : "bg-white/10 text-white"} hover:bg-orange-500/80 px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//                 >
//                   Ctrivedi
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center">
//         <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
//           Use mouse wheel or pinch to zoom • Drag to rotate • Right-click to pan
//         </div>
//       </div>
//     </div>
//   )
// }







































"use client"
import { useState, useEffect, Suspense } from "react"
import { ChevronRight, Award, Layers, Grid } from "lucide-react"
import dynamic from "next/dynamic"

// Lazy load the 3D viewer component
const LazyBoothViewer3D = dynamic(() => import("./booth-viewer-3d"), {
  loading: () => <BoothViewerSkeleton />,
  ssr: false,
})

// Loading skeleton component
function BoothViewerSkeleton() {
  return (
    <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative">
          {/* Animated loading spinner */}
          <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-orange-400 rounded-full animate-spin animate-reverse"
            style={{ animationDuration: "1.5s" }}
          ></div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-orange-500 font-medium text-lg">Loading 3D Experience</p>
          <p className="text-gray-400 text-sm mt-2">Preparing interactive booth viewer...</p>
        </div>

        {/* Progress bar animation */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-orange-500/20 rounded-md animate-pulse"></div>
      <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500/20 rounded-md animate-pulse delay-100"></div>
      <div className="absolute bottom-4 left-4 w-20 h-6 bg-orange-500/20 rounded-md animate-pulse delay-200"></div>
    </div>
  )
}

export default function EnhancedBoothViewer() {
  const [isAnimated, setIsAnimated] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isViewerReady, setIsViewerReady] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Trigger animation after component mounts
    setTimeout(() => {
      setIsAnimated(true)
    }, 500)

    // Preload the 3D viewer after a short delay
    setTimeout(() => {
      setIsViewerReady(true)
    }, 1000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden mt-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-orange-600 blur-3xl"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating 3D shapes */}
      <div
        className={`absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 rounded-lg transform rotate-45 transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-70" : "translate-y-20 opacity-0"}`}
        style={{ transform: `rotate(${45 + scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div
        className={`absolute bottom-1/3 left-1/3 w-24 h-24 bg-orange-400 rounded-full transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-50" : "translate-y-20 opacity-0"}`}
        style={{ transform: `translateY(${-scrollY * 0.2}px)` }}
      ></div>
      <div
        className={`absolute top-1/2 left-1/4 w-20 h-20 border-4 border-orange-300 rounded-lg transition-all duration-1000 ${isAnimated ? "translate-y-0 opacity-40" : "translate-y-20 opacity-0"}`}
        style={{ transform: `rotate(${-scrollY * 0.03}deg)` }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0">
          <div
            className={`transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}`}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-500 font-medium text-sm mb-4">
              TRANSFORM YOUR BRAND PRESENCE
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              <span className="block">Designing</span>
              <span className="text-orange-500">Exhibition Experiences</span>
              <span className="block">That Stand Out</span>
            </h1>

            <p className="text-gray-300 text-lg mt-6 max-w-lg">
              We create immersive, attention-grabbing exhibition booths and stalls that turn visitors into customers and
              elevate your brand presence.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105 group">
                Get Started
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-white rounded-lg flex items-center gap-2 transform transition hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Stats and trust indicators */}
          <div
            className={`flex flex-wrap gap-8 mt-12 transition-all duration-1000 delay-300 ${isAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Award className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">250+</p>
                <p className="text-gray-400 text-sm">Exhibits Designed</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Layers className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">30+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Grid className="text-orange-500" size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - 3D Booth Visualization */}
        <div
          className={`w-full lg:w-1/2 relative transition-all duration-1000 ${isAnimated ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
        >
          <div className="relative">
            {/* Lazy-loaded 3D Exhibition Booth Viewer */}
            <Suspense fallback={<BoothViewerSkeleton />}>{isViewerReady && <LazyBoothViewer3D />}</Suspense>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center">
        <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          Use mouse wheel or pinch to zoom • Drag to rotate • Right-click to pan
        </div>
      </div>
    </div>
  )
}
