// "use client"
// import { useState, useEffect, useRef } from "react"
// import { RotateCcw, ZoomIn, ZoomOut, Grid, Layers } from "lucide-react"

// // Lazy load Three.js modules
// const loadThreeJS = async () => {
//   const [THREE, { OrbitControls }, { OBJLoader }, { MTLLoader }] = await Promise.all([
//     import("three"),
//     import("three/examples/jsm/controls/OrbitControls"),
//     import("three/examples/jsm/loaders/OBJLoader"),
//     import("three/examples/jsm/loaders/MTLLoader"),
//   ])

//   return { THREE, OrbitControls, OBJLoader, MTLLoader }
// }

// export default function BoothViewer3D() {
//   const [isModelLoaded, setIsModelLoaded] = useState(false)
//   const [isLoading, setIsLoading] = useState(true)
//   const [viewMode, setViewMode] = useState("3d")
//   const [viewPosition, setViewPosition] = useState("outside")
//   const [currentModel, setCurrentModel] = useState("demo")
//   const [loadingStatus, setLoadingStatus] = useState("Initializing 3D engine...")
//   const [loadingProgress, setLoadingProgress] = useState(0)
//   const [isAutoRotating, setIsAutoRotating] = useState(false)
//   const [threeJS, setThreeJS] = useState(null)

//   const canvasRef = useRef(null)
//   const sceneRef = useRef(null)
//   const cameraRef = useRef(null)
//   const rendererRef = useRef(null)
//   const controlsRef = useRef(null)
//   const modelRef = useRef(null)
//   const animationFrameRef = useRef(null)
//   const cameraOrigPosRef = useRef({ x: 0, y: 2, z: 5 })

//   // Simplified model paths - updated with all three models
//   const modelPaths = {
//     demo: {
//       obj: "/models/Booth_Exhibition_Stand.obj",
//       mtl: "/models/Booth_Exhibition_Stand.mtl",
//       name: "Booth",
//     },
//     ctrivedi: {
//       obj: "/models/ctrivedi/C Trivedi.obj",
//       mtl: "/models/ctrivedi/C Trivedi.mtl",
//       name: "C Trivedi",
//     },
//     sabar: {
//       obj: "/models/sabar/01.obj",
//       mtl: "/models/sabar/01.mtl",
//       name: "Sabar",
//     },
//   }

//   // Load Three.js and initialize scene
//   useEffect(() => {
//     let mounted = true

//     const initializeThreeJS = async () => {
//       try {
//         setLoadingStatus("Loading 3D engine...")
//         setLoadingProgress(10)

//         const modules = await loadThreeJS()

//         if (!mounted) return

//         setThreeJS(modules)
//         setLoadingStatus("3D engine loaded")
//         setLoadingProgress(30)
//       } catch (error) {
//         console.error("Failed to load Three.js:", error)
//         setLoadingStatus("Failed to load 3D engine")
//         setIsLoading(false)
//       }
//     }

//     initializeThreeJS()

//     return () => {
//       mounted = false
//     }
//   }, [])

//   // Initialize scene when Three.js is loaded
//   useEffect(() => {
//     if (!threeJS || !canvasRef.current) return

//     const { THREE, OrbitControls } = threeJS
//     let mounted = true

//     const initScene = async () => {
//       try {
//         setLoadingStatus("Setting up 3D scene...")
//         setLoadingProgress(40)

//         // Create scene
//         const scene = new THREE.Scene()
//         scene.background = new THREE.Color(0x1a1a1a)
//         sceneRef.current = scene

//         // Create camera
//         const camera = new THREE.PerspectiveCamera(
//           60,
//           canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//           0.1,
//           1000,
//         )
//         camera.position.set(0, 2, 5)
//         cameraOrigPosRef.current = { x: 0, y: 2, z: 5 }
//         cameraRef.current = camera

//         // Create renderer
//         const renderer = new THREE.WebGLRenderer({
//           canvas: canvasRef.current,
//           antialias: true,
//           alpha: true,
//           preserveDrawingBuffer: true,
//         })
//         renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//         renderer.outputEncoding = THREE.sRGBEncoding
//         renderer.toneMapping = THREE.ACESFilmicToneMapping
//         renderer.toneMappingExposure = 1.2
//         renderer.shadowMap.enabled = true
//         renderer.shadowMap.type = THREE.PCFSoftShadowMap
//         rendererRef.current = renderer

//         // Enhanced lighting setup
//         const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
//         scene.add(ambientLight)

//         const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
//         directionalLight.position.set(5, 10, 5)
//         directionalLight.castShadow = true
//         directionalLight.shadow.mapSize.width = 1024
//         directionalLight.shadow.mapSize.height = 1024
//         scene.add(directionalLight)

//         const backLight = new THREE.DirectionalLight(0xffffff, 1.0)
//         backLight.position.set(-5, 5, -5)
//         scene.add(backLight)

//         const spotLight = new THREE.SpotLight(0xff9000, 1.5)
//         spotLight.position.set(0, 10, 8)
//         spotLight.castShadow = true
//         spotLight.angle = 0.5
//         scene.add(spotLight)

//         // Add controls
//         const controls = new OrbitControls(camera, renderer.domElement)
//         controls.enableDamping = true
//         controls.dampingFactor = 0.08
//         controls.rotateSpeed = 0.7
//         controls.zoomSpeed = 1.2
//         controls.panSpeed = 0.8
//         controls.enableZoom = true
//         controls.minDistance = 0.5
//         controls.maxDistance = 30
//         controls.enablePan = true
//         controls.autoRotate = false
//         controls.autoRotateSpeed = 0.3
//         controls.target.set(0, 1, 0)
//         controlsRef.current = controls

//         // Add grid and floor
//         const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x333333)
//         gridHelper.position.y = -0.01
//         scene.add(gridHelper)

//         const floorGeometry = new THREE.PlaneGeometry(20, 20)
//         const floorMaterial = new THREE.MeshStandardMaterial({
//           color: 0x333333,
//           roughness: 0.8,
//           metalness: 0.2,
//         })
//         const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//         floor.rotation.x = -Math.PI / 2
//         floor.position.y = -0.02
//         floor.receiveShadow = true
//         scene.add(floor)

//         if (!mounted) return

//         setLoadingStatus("Loading 3D model...")
//         setLoadingProgress(60)

//         // Load default model
//         await loadModel(modelPaths.demo.obj, modelPaths.demo.mtl)

//         // Start animation loop
//         const animate = () => {
//           if (!mounted) return
//           animationFrameRef.current = requestAnimationFrame(animate)
//           if (controlsRef.current) controlsRef.current.update()
//           if (rendererRef.current && sceneRef.current && cameraRef.current) {
//             rendererRef.current.render(sceneRef.current, cameraRef.current)
//           }
//         }
//         animate()

//         // Handle resize
//         const handleResize = () => {
//           if (!canvasRef.current || !cameraRef.current || !rendererRef.current || !mounted) return

//           const width = canvasRef.current.clientWidth
//           const height = canvasRef.current.clientHeight

//           cameraRef.current.aspect = width / height
//           cameraRef.current.updateProjectionMatrix()
//           rendererRef.current.setSize(width, height)
//         }

//         window.addEventListener("resize", handleResize)

//         return () => {
//           window.removeEventListener("resize", handleResize)
//         }
//       } catch (error) {
//         console.error("Failed to initialize scene:", error)
//         setLoadingStatus("Failed to initialize 3D scene")
//         setIsLoading(false)
//       }
//     }

//     initScene()

//     return () => {
//       mounted = false
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
//   }, [threeJS])

//   // Function to load the OBJ model
//   const loadModel = async (objPath, mtlPath) => {
//     if (!sceneRef.current || !threeJS) return

//     const { THREE, OBJLoader, MTLLoader } = threeJS

//     try {
//       setLoadingStatus("Loading 3D model...")
//       setLoadingProgress(70)

//       // Remove existing model if present
//       if (modelRef.current) {
//         sceneRef.current.remove(modelRef.current)
//         modelRef.current = null
//       }

//       const objLoader = new OBJLoader()

//       if (mtlPath) {
//         setLoadingStatus("Loading materials...")
//         const mtlLoader = new MTLLoader()
//         mtlLoader.setCrossOrigin("anonymous")

//         try {
//           const materials = await new Promise((resolve, reject) => {
//             mtlLoader.load(mtlPath, resolve, undefined, reject)
//           })

//           setLoadingProgress(80)
//           materials.preload()
//           objLoader.setMaterials(materials)
//         } catch (error) {
//           console.warn("Failed to load materials, proceeding without:", error)
//         }
//       }

//       setLoadingStatus("Loading model geometry...")
//       objLoader.setCrossOrigin("anonymous")

//       const object = await new Promise((resolve, reject) => {
//         objLoader.load(
//           objPath,
//           resolve,
//           (xhr) => {
//             const progress = Math.floor(80 + (xhr.loaded / xhr.total) * 15)
//             setLoadingProgress(progress)
//           },
//           reject,
//         )
//       })

//       handleLoadedObject(object)
//     } catch (error) {
//       console.error("Error loading model:", error)
//       setLoadingStatus("Model failed to load, creating demo booth...")
//       createDefaultBoothModel()
//     }
//   }

//   // Handle successfully loaded object
//   const handleLoadedObject = (object) => {
//     if (!sceneRef.current || !threeJS) return

//     const { THREE } = threeJS

//     setLoadingStatus("Processing model...")
//     setLoadingProgress(95)

//     // Center the model
//     const box = new THREE.Box3().setFromObject(object)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     // Create a group to hold the model
//     const modelGroup = new THREE.Group()

//     // Apply appropriate scale
//     const maxDim = Math.max(size.x, size.y, size.z)
//     const scale = 20.0 / maxDim
//     object.scale.set(scale, scale, scale)

//     // Center the model
//     object.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)
//     object.rotation.y = Math.PI / 4

//     // Apply shadow settings and enhance materials
//     object.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true

//         if (!child.material) {
//           child.material = new THREE.MeshStandardMaterial({
//             color: 0xea580c,
//             roughness: 0.7,
//             metalness: 0.2,
//           })
//         } else {
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
//     sceneRef.current.add(modelGroup)
//     modelRef.current = modelGroup

//     setIsModelLoaded(true)
//     setIsLoading(false)
//     setLoadingStatus("Model loaded successfully!")
//     setLoadingProgress(100)

//     resetCamera()
//   }

//   // Create a default booth model as fallback
//   const createDefaultBoothModel = () => {
//     if (!sceneRef.current || !threeJS) return

//     const { THREE } = threeJS

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

//     booth.position.y = 0
//     booth.castShadow = true
//     booth.receiveShadow = true
//     sceneRef.current.add(booth)
//     modelRef.current = booth
//     setIsModelLoaded(true)
//     setIsLoading(false)
//     setLoadingStatus("Demo booth created")
//     setLoadingProgress(100)
//   }

//   // Toggle between 3D view and wireframe mode
//   const toggleViewMode = () => {
//     if (!modelRef.current) return

//     const newMode = viewMode === "3d" ? "wireframe" : "3d"
//     setViewMode(newMode)

//     modelRef.current.traverse((child) => {
//       if (child instanceof threeJS.THREE.Mesh) {
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

//   // Reset camera position
//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current || !modelRef.current || !threeJS) return

//     const { THREE } = threeJS

//     const box = new THREE.Box3().setFromObject(modelRef.current)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     const maxDim = Math.max(size.x, size.y, size.z)
//     const distance = maxDim * 1.5

//     cameraRef.current.position.set(center.x + distance * 0.7, center.y + distance * 0.5, center.z + distance * 0.7)

//     controlsRef.current.target.set(center.x, center.y, center.z)
//     controlsRef.current.update()

//     cameraOrigPosRef.current = {
//       x: cameraRef.current.position.x,
//       y: cameraRef.current.position.y,
//       z: cameraRef.current.position.z,
//     }

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
//     if (!cameraRef.current || !controlsRef.current || !threeJS) return

//     const { THREE } = threeJS

//     const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
//     const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
//     const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

//     const newDistance = Math.max(currentPos.distanceTo(targetPos) * 0.75, controlsRef.current.minDistance)
//     cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

//     controlsRef.current.update()
//   }

//   const zoomOut = () => {
//     if (!cameraRef.current || !controlsRef.current || !threeJS) return

//     const { THREE } = threeJS

//     const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
//     const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
//     const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

//     const newDistance = Math.min(currentPos.distanceTo(targetPos) * 1.25, controlsRef.current.maxDistance)
//     cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

//     controlsRef.current.update()
//   }

//   // Change booth model
//   const changeModel = async (modelType) => {
//     if (!modelPaths[modelType]) return

//     setCurrentModel(modelType)
//     setIsLoading(true)
//     setLoadingStatus(`Loading ${modelPaths[modelType].name}...`)
//     setLoadingProgress(0)

//     await loadModel(modelPaths[modelType].obj, modelPaths[modelType].mtl)
//   }

//   return (
//     <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//       {/* Loading overlay */}
//       {isLoading && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
//           <div className="relative mb-6">
//             <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
//             <div
//               className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-orange-400 rounded-full animate-spin"
//               style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
//             ></div>
//           </div>
//           <p className="text-orange-500 font-medium text-lg mb-2">Loading 3D Experience</p>
//           <p className="text-gray-400 text-sm mb-4">{loadingStatus}</p>

//           {/* Progress bar */}
//           <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ease-out"
//               style={{ width: `${loadingProgress}%` }}
//             ></div>
//           </div>
//           <p className="text-orange-400 text-xs mt-2">{loadingProgress}%</p>
//         </div>
//       )}

//       {/* 3D Canvas */}
//       <canvas ref={canvasRef} className="w-full h-full touch-none" />

//       {/* Control buttons */}
//       {!isLoading && (
//         <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//           <button
//             onClick={resetCamera}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Reset Camera"
//           >
//             <RotateCcw size={16} className="text-white" />
//           </button>

//           <button
//             onClick={toggleViewMode}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Toggle Wireframe Mode"
//           >
//             {viewMode === "3d" ? (
//               <Layers size={16} className="text-white" />
//             ) : (
//               <Grid size={16} className="text-white" />
//             )}
//           </button>

//           <button
//             onClick={toggleAutoRotate}
//             className={`w-8 h-8 ${isAutoRotating ? "bg-orange-500/50" : "bg-white/10"} hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors`}
//             title="Toggle Auto-Rotation"
//           >
//             <RotateCcw size={16} className="text-white" />
//           </button>

//           <button
//             onClick={zoomIn}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Zoom In"
//           >
//             <ZoomIn size={16} className="text-white" />
//           </button>

//           <button
//             onClick={zoomOut}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Zoom Out"
//           >
//             <ZoomOut size={16} className="text-white" />
//           </button>
//         </div>
//       )}

//       {/* Model selection buttons */}
//       {!isLoading && (
//         <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center gap-2 flex-wrap">
//           <button
//             onClick={() => changeModel("demo")}
//             className={`${
//               currentModel === "demo" ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500/80"
//             } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//           >
//              Booth
//           </button>
//           <button
//             onClick={() => changeModel("ctrivedi")}
//             className={`${
//               currentModel === "ctrivedi" ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500/80"
//             } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//           >
//             C Trivedi 
//           </button>
//           <button
//             onClick={() => changeModel("sabar")}
//             className={`${
//               currentModel === "sabar" ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500/80"
//             } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//           >
//             Sabar Corporation
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }








































// "use client"
// import { useState, useEffect, useRef } from "react"
// import { RotateCcw, ZoomIn, ZoomOut, Grid, Layers } from "lucide-react"

// // Lazy load Three.js modules
// const loadThreeJS = async () => {
//   const [THREE, { OrbitControls }, { OBJLoader }, { MTLLoader }] = await Promise.all([
//     import("three"),
//     import("three/examples/jsm/controls/OrbitControls"),
//     import("three/examples/jsm/loaders/OBJLoader"),
//     import("three/examples/jsm/loaders/MTLLoader"),
//   ])
//   return { THREE, OrbitControls, OBJLoader, MTLLoader }
// }

// interface StallModel {
//   id: string
//   name: string
//   folderPath: string
//   objFile: string
//   mtlFile?: string
//   previewImage?: string
// }

// // 🌊 DIGITALOCEAN SPACES CONFIGURATION
// // Replace with your actual DigitalOcean Space details
// const DO_SPACE_CONFIG = {
//   spaceName: "your-3d-stalls-space",
//   region: "nyc3", // or your chosen region: sfo3, ams3, sgp1, etc.
//   cdnEndpoint: "https://your-3d-stalls-space.nyc3.cdn.digitaloceanspaces.com", // CDN URL (faster)
//   directEndpoint: "https://your-3d-stalls-space.nyc3.digitaloceanspaces.com", // Direct URL
// }

// // 🎯 YOUR 3D MODELS CONFIGURATION
// const STALL_MODELS: StallModel[] = [
//   {
//     id: "booth-1",
//     name: "Modern Exhibition Booth",
//     folderPath: `${DO_SPACE_CONFIG.cdnEndpoint}/stalls/booth-1/`,
//     objFile: "model.obj",
//     mtlFile: "model.mtl",
//     previewImage: "preview.jpg",
//   },
//   {
//     id: "booth-2",
//     name: "Corporate Display Stand",
//     folderPath: `${DO_SPACE_CONFIG.cdnEndpoint}/stalls/booth-2/`,
//     objFile: "exhibition.obj",
//     mtlFile: "exhibition.mtl",
//   },
//   {
//     id: "booth-3",
//     name: "Minimalist Stall",
//     folderPath: `${DO_SPACE_CONFIG.cdnEndpoint}/stalls/booth-3/`,
//     objFile: "modern-stall.obj",
//     mtlFile: "modern-stall.mtl",
//   },
// ]

// export default function DOSpacesBoothViewer() {
//   const [isLoading, setIsLoading] = useState(true)
//   const [loadingProgress, setLoadingProgress] = useState(0)
//   const [loadingStatus, setLoadingStatus] = useState("Initializing...")
//   const [currentModel, setCurrentModel] = useState<StallModel>(STALL_MODELS[0])
//   const [threeJS, setThreeJS] = useState(null)
//   const [viewMode, setViewMode] = useState("3d")
//   const [isAutoRotating, setIsAutoRotating] = useState(false)
//   const [connectionStatus, setConnectionStatus] = useState<"checking" | "connected" | "error">("checking")

//   const canvasRef = useRef(null)
//   const sceneRef = useRef(null)
//   const cameraRef = useRef(null)
//   const rendererRef = useRef(null)
//   const controlsRef = useRef(null)
//   const modelRef = useRef(null)
//   const animationFrameRef = useRef(null)

//   // Test DigitalOcean Spaces connectivity
//   const testDOConnection = async () => {
//     try {
//       const testUrl = `${DO_SPACE_CONFIG.cdnEndpoint}/stalls/`
//       const response = await fetch(testUrl, { method: "HEAD" })
//       setConnectionStatus(response.ok ? "connected" : "error")
//       return response.ok
//     } catch (error) {
//       console.error("DigitalOcean Spaces connection test failed:", error)
//       setConnectionStatus("error")
//       return false
//     }
//   }

//   // Initialize Three.js
//   useEffect(() => {
//     let mounted = true

//     const init = async () => {
//       try {
//         setLoadingStatus("Testing DigitalOcean connection...")
//         setLoadingProgress(10)

//         const isConnected = await testDOConnection()
//         if (!isConnected) {
//           setLoadingStatus("⚠️ DigitalOcean Spaces connection failed")
//           return
//         }

//         setLoadingStatus("Loading 3D engine...")
//         setLoadingProgress(20)

//         const modules = await loadThreeJS()
//         if (!mounted) return

//         setThreeJS(modules)
//         await initScene(modules)
//         await loadStallModel(currentModel, modules)
//       } catch (error) {
//         console.error("Failed to initialize:", error)
//         setLoadingStatus("Failed to load 3D viewer")
//       }
//     }

//     init()
//     return () => {
//       mounted = false
//     }
//   }, [])

//   const initScene = async (modules) => {
//     if (!canvasRef.current) return

//     const { THREE, OrbitControls } = modules

//     setLoadingStatus("Setting up 3D scene...")
//     setLoadingProgress(40)

//     // Create scene
//     const scene = new THREE.Scene()
//     scene.background = new THREE.Color(0x1a1a1a)
//     sceneRef.current = scene

//     // Create camera
//     const camera = new THREE.PerspectiveCamera(
//       60,
//       canvasRef.current.clientWidth / canvasRef.current.clientHeight,
//       0.1,
//       1000,
//     )
//     camera.position.set(5, 5, 5)
//     cameraRef.current = camera

//     // Create renderer
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       antialias: true,
//       alpha: true,
//     })
//     renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//     renderer.outputEncoding = THREE.sRGBEncoding
//     renderer.shadowMap.enabled = true
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap
//     rendererRef.current = renderer

//     // Add lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
//     scene.add(ambientLight)

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
//     directionalLight.position.set(10, 10, 5)
//     directionalLight.castShadow = true
//     scene.add(directionalLight)

//     // Add controls
//     const controls = new OrbitControls(camera, renderer.domElement)
//     controls.enableDamping = true
//     controls.dampingFactor = 0.05
//     controls.autoRotate = false
//     controls.autoRotateSpeed = 2
//     controlsRef.current = controls

//     // Add floor
//     const floorGeometry = new THREE.PlaneGeometry(50, 50)
//     const floorMaterial = new THREE.MeshStandardMaterial({
//       color: 0x333333,
//       roughness: 0.8,
//     })
//     const floor = new THREE.Mesh(floorGeometry, floorMaterial)
//     floor.rotation.x = -Math.PI / 2
//     floor.receiveShadow = true
//     scene.add(floor)

//     // Start animation loop
//     const animate = () => {
//       animationFrameRef.current = requestAnimationFrame(animate)
//       if (controls) controls.update()
//       if (renderer && scene && camera) {
//         renderer.render(scene, camera)
//       }
//     }
//     animate()

//     // Handle resize
//     const handleResize = () => {
//       if (!canvasRef.current || !camera || !renderer) return
//       const width = canvasRef.current.clientWidth
//       const height = canvasRef.current.clientHeight
//       camera.aspect = width / height
//       camera.updateProjectionMatrix()
//       renderer.setSize(width, height)
//     }
//     window.addEventListener("resize", handleResize)

//     return () => window.removeEventListener("resize", handleResize)
//   }

//   const loadStallModel = async (stallModel: StallModel, modules = threeJS) => {
//     if (!modules || !sceneRef.current) return

//     const { THREE, OBJLoader, MTLLoader } = modules

//     try {
//       setIsLoading(true)
//       setLoadingStatus(`Loading ${stallModel.name} from DigitalOcean...`)
//       setLoadingProgress(60)

//       // Remove existing model
//       if (modelRef.current) {
//         sceneRef.current.remove(modelRef.current)
//         modelRef.current = null
//       }

//       const objLoader = new OBJLoader()

//       // Load materials first if MTL file exists
//       if (stallModel.mtlFile) {
//         setLoadingStatus("Loading materials from DigitalOcean...")
//         setLoadingProgress(70)

//         const mtlLoader = new MTLLoader()

//         // Set the path for relative texture loading
//         mtlLoader.setPath(stallModel.folderPath)

//         try {
//           const materials = await new Promise((resolve, reject) => {
//             mtlLoader.load(
//               stallModel.folderPath + stallModel.mtlFile,
//               resolve,
//               (progress) => {
//                 console.log("MTL loading progress:", progress)
//               },
//               reject,
//             )
//           })

//           materials.preload()
//           objLoader.setMaterials(materials)
//           setLoadingProgress(80)
//         } catch (error) {
//           console.warn("Failed to load materials from DigitalOcean:", error)
//         }
//       }

//       // Load OBJ model
//       setLoadingStatus("Loading 3D model from DigitalOcean...")
//       setLoadingProgress(85)

//       const object = await new Promise((resolve, reject) => {
//         objLoader.load(
//           stallModel.folderPath + stallModel.objFile,
//           resolve,
//           (progress) => {
//             if (progress.total > 0) {
//               const percent = 85 + (progress.loaded / progress.total) * 10
//               setLoadingProgress(percent)
//             }
//           },
//           reject,
//         )
//       })

//       // Process and add model to scene
//       processLoadedModel(object)
//       setCurrentModel(stallModel)
//     } catch (error) {
//       console.error("Error loading stall model from DigitalOcean:", error)
//       setLoadingStatus(`Failed to load ${stallModel.name} from DigitalOcean`)
//       createFallbackModel()
//     }
//   }

//   const processLoadedModel = (object) => {
//     if (!sceneRef.current || !threeJS) return

//     const { THREE } = threeJS

//     setLoadingStatus("Processing model...")
//     setLoadingProgress(95)

//     // Calculate bounding box and center the model
//     const box = new THREE.Box3().setFromObject(object)
//     const center = box.getCenter(new THREE.Vector3())
//     const size = box.getSize(new THREE.Vector3())

//     // Scale model to reasonable size
//     const maxDim = Math.max(size.x, size.y, size.z)
//     const scale = 10 / maxDim
//     object.scale.setScalar(scale)

//     // Center the model
//     object.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)

//     // Enable shadows
//     object.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true
//         child.receiveShadow = true
//       }
//     })

//     sceneRef.current.add(object)
//     modelRef.current = object

//     // Reset camera position
//     if (cameraRef.current && controlsRef.current) {
//       const distance = maxDim * scale * 2
//       cameraRef.current.position.set(distance, distance, distance)
//       controlsRef.current.target.set(0, (size.y * scale) / 2, 0)
//       controlsRef.current.update()
//     }

//     setIsLoading(false)
//     setLoadingStatus("Model loaded successfully from DigitalOcean!")
//     setLoadingProgress(100)
//   }

//   const createFallbackModel = () => {
//     if (!sceneRef.current || !threeJS) return

//     const { THREE } = threeJS

//     // Create simple booth as fallback
//     const group = new THREE.Group()

//     const boxGeometry = new THREE.BoxGeometry(4, 3, 4)
//     const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x0080ff }) // DigitalOcean blue
//     const box = new THREE.Mesh(boxGeometry, boxMaterial)
//     box.position.y = 1.5
//     box.castShadow = true
//     group.add(box)

//     sceneRef.current.add(group)
//     modelRef.current = group

//     setIsLoading(false)
//     setLoadingStatus("Fallback model loaded")
//   }

//   const changeModel = (stallModel: StallModel) => {
//     loadStallModel(stallModel)
//   }

//   const toggleViewMode = () => {
//     if (!modelRef.current || !threeJS) return

//     const newMode = viewMode === "3d" ? "wireframe" : "3d"
//     setViewMode(newMode)

//     modelRef.current.traverse((child) => {
//       if (child.isMesh && child.material) {
//         if (Array.isArray(child.material)) {
//           child.material.forEach((mat) => (mat.wireframe = newMode === "wireframe"))
//         } else {
//           child.material.wireframe = newMode === "wireframe"
//         }
//       }
//     })
//   }

//   const toggleAutoRotate = () => {
//     if (!controlsRef.current) return
//     const newState = !isAutoRotating
//     setIsAutoRotating(newState)
//     controlsRef.current.autoRotate = newState
//   }

//   const resetCamera = () => {
//     if (!cameraRef.current || !controlsRef.current) return
//     cameraRef.current.position.set(5, 5, 5)
//     controlsRef.current.target.set(0, 0, 0)
//     controlsRef.current.update()
//   }

//   const zoomIn = () => {
//     if (!cameraRef.current || !controlsRef.current) return
//     const direction = new threeJS.THREE.Vector3()
//     cameraRef.current.getWorldDirection(direction)
//     cameraRef.current.position.addScaledVector(direction, 2)
//     controlsRef.current.update()
//   }

//   const zoomOut = () => {
//     if (!cameraRef.current || !controlsRef.current) return
//     const direction = new threeJS.THREE.Vector3()
//     cameraRef.current.getWorldDirection(direction)
//     cameraRef.current.position.addScaledVector(direction, -2)
//     controlsRef.current.update()
//   }

//   return (
//     <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
//       {/* Loading overlay */}
//       {isLoading && (
//         <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
//           <div className="relative mb-6">
//             <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
//           </div>
//           <p className="text-blue-500 font-medium text-lg mb-2">Loading from DigitalOcean</p>
//           <p className="text-gray-400 text-sm mb-4">{loadingStatus}</p>
//           <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300"
//               style={{ width: `${loadingProgress}%` }}
//             />
//           </div>
//           <p className="text-blue-400 text-xs mt-2">{Math.round(loadingProgress)}%</p>

//           {/* Connection status */}
//           <div className="mt-4 flex items-center gap-2">
//             <div
//               className={`w-2 h-2 rounded-full ${
//                 connectionStatus === "connected"
//                   ? "bg-green-500"
//                   : connectionStatus === "error"
//                     ? "bg-red-500"
//                     : "bg-yellow-500 animate-pulse"
//               }`}
//             />
//             <span className="text-xs text-gray-400">
//               DigitalOcean Spaces:{" "}
//               {connectionStatus === "connected"
//                 ? "Connected"
//                 : connectionStatus === "error"
//                   ? "Connection Error"
//                   : "Checking..."}
//             </span>
//           </div>
//         </div>
//       )}

//       {/* 3D Canvas */}
//       <canvas ref={canvasRef} className="w-full h-full touch-none" />

//       {/* Control buttons */}
//       {!isLoading && (
//         <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
//           <button
//             onClick={resetCamera}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Reset Camera"
//           >
//             <RotateCcw size={16} className="text-white" />
//           </button>

//           <button
//             onClick={toggleViewMode}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Toggle Wireframe"
//           >
//             {viewMode === "3d" ? (
//               <Layers size={16} className="text-white" />
//             ) : (
//               <Grid size={16} className="text-white" />
//             )}
//           </button>

//           <button
//             onClick={toggleAutoRotate}
//             className={`w-8 h-8 ${isAutoRotating ? "bg-blue-500/50" : "bg-white/10"} hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors`}
//             title="Auto Rotate"
//           >
//             <RotateCcw size={16} className="text-white" />
//           </button>

//           <button
//             onClick={zoomIn}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Zoom In"
//           >
//             <ZoomIn size={16} className="text-white" />
//           </button>

//           <button
//             onClick={zoomOut}
//             className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
//             title="Zoom Out"
//           >
//             <ZoomOut size={16} className="text-white" />
//           </button>
//         </div>
//       )}

//       {/* Model selection */}
//       {!isLoading && (
//         <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center gap-2 flex-wrap">
//           {STALL_MODELS.map((model) => (
//             <button
//               key={model.id}
//               onClick={() => changeModel(model)}
//               className={`${
//                 currentModel.id === model.id ? "bg-blue-500 text-white" : "bg-white/10 text-white hover:bg-blue-500/80"
//               } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
//             >
//               {model.name}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Instructions */}
//       <div className="absolute bottom-16 left-4 right-4 z-10 flex justify-center">
//         <div className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
//           {currentModel.name} • Powered by DigitalOcean Spaces • Drag to rotate • Scroll to zoom
//         </div>
//       </div>
//     </div>
//   )
// }













































































"use client"
import { useState, useEffect, useRef } from "react"
import { RotateCcw, ZoomIn, ZoomOut, Grid, Layers } from "lucide-react"

// AWS S3 Configuration - REPLACE THESE WITH ACTUAL VALUES

const AWS_CONFIG = {
  bucketName: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
  region: process.env.NEXT_PUBLIC_S3_REGION,
  baseUrl: process.env.NEXT_PUBLIC_S3_BASE_URL
}
// Lazy load Three.js modules 
const loadThreeJS = async () => {
  const [THREE, { OrbitControls }, { OBJLoader }, { MTLLoader }] = await Promise.all([
    import("three"),
    import("three/examples/jsm/controls/OrbitControls"),
    import("three/examples/jsm/loaders/OBJLoader"),
    import("three/examples/jsm/loaders/MTLLoader"),
  ])

  return { THREE, OrbitControls, OBJLoader, MTLLoader }
}

export default function BoothViewer3D() {
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [viewMode, setViewMode] = useState("3d")
  const [viewPosition, setViewPosition] = useState("outside")
  const [currentModel, setCurrentModel] = useState("trimble")
  const [loadingStatus, setLoadingStatus] = useState("Initializing 3D engine...")
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(false)
  const [threeJS, setThreeJS] = useState(null)
  const [availableModels, setAvailableModels] = useState({})

  const canvasRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const controlsRef = useRef(null)
  const modelRef = useRef(null)
  const animationFrameRef = useRef(null)
  const cameraOrigPosRef = useRef({ x: 0, y: 2, z: 5 })

  // S3 model paths - UPDATE THESE PATHS TO MATCH YOUR S3 STRUCTURE
  const modelPaths = {
    trimble: {
      obj: `${AWS_CONFIG.baseUrl}/trimble/Trimble.obj`,
      mtl: `${AWS_CONFIG.baseUrl}/trimble/Trimble.mtl`,
      name: "Trimble",
      folder: "trimble"
    },
    ctrivedi: {
      obj: `${AWS_CONFIG.baseUrl}/ctrivedi/C Trivedi.obj`,
      mtl: `${AWS_CONFIG.baseUrl}/ctrivedi/C Trivedi.mtl`,
      name: "C Trivedi",
      folder: "ctrivedi"
    },

    epic: {
      obj: `${AWS_CONFIG.baseUrl}/epic/Epic 2.obj`,
      mtl: `${AWS_CONFIG.baseUrl}/epic/Epic 2.mtl`,
      name: "Epic",
      folder: "epic"
    }

  }

  // Function to get signed URL for S3 objects (if using private bucket)
  const getSignedUrl = async (key) => {
    // If your bucket is public, you can directly return the URL
    if (AWS_CONFIG.baseUrl) {
      return `${AWS_CONFIG.baseUrl}/${key}`
    }

    // If using private bucket, implement AWS SDK v3 signed URL generation
    // This requires installing @aws-sdk/client-s3 and @aws-sdk/s3-request-presigner
    try {
      // Example implementation (you'll need to install AWS SDK)
      /*
      const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3")
      const { getSignedUrl } = require("@aws-sdk/s3-request-presigner")
      
      const client = new S3Client({
        region: AWS_CONFIG.region,
        credentials: {
          accessKeyId: AWS_CONFIG.accessKeyId,
          secretAccessKey: AWS_CONFIG.secretAccessKey,
        },
      })

      const command = new GetObjectCommand({
        Bucket: AWS_CONFIG.bucketName,
        Key: key,
      })

      const signedUrl = await getSignedUrl(client, command, { expiresIn: 3600 })
      return signedUrl
      */

      // For now, return direct URL (works with public buckets)
      return `https://${AWS_CONFIG.bucketName}.s3.${AWS_CONFIG.region}.amazonaws.com/${key}`
    } catch (error) {
      console.error("Error generating signed URL:", error)
      throw error
    }
  }

  // Function to check if model exists in S3
  const checkModelExists = async (modelPath) => {
    try {
      const response = await fetch(modelPath, { method: 'HEAD' })
      return response.ok
    } catch (error) {
      console.warn(`Model not found at ${modelPath}:`, error)
      return false
    }
  }

  // Load available models from S3
  const loadAvailableModels = async () => {
    const models = {}

    for (const [key, model] of Object.entries(modelPaths)) {
      try {
        setLoadingStatus(`Checking ${model.name}...`)

        const objExists = await checkModelExists(model.obj)
        const mtlExists = await checkModelExists(model.mtl)

        if (objExists) {
          models[key] = {
            ...model,
            hasOBJ: objExists,
            hasMTL: mtlExists
          }
        }
      } catch (error) {
        console.warn(`Error checking model ${key}:`, error)
      }
    }

    setAvailableModels(models)
    return models
  }

  // Load Three.js and initialize scene
  useEffect(() => {
    let mounted = true

    const initializeThreeJS = async () => {
      try {
        setLoadingStatus("Loading 3D engine...")
        setLoadingProgress(10)

        const modules = await loadThreeJS()

        if (!mounted) return

        setThreeJS(modules)
        setLoadingStatus("3D engine loaded")
        setLoadingProgress(30)

        // Load available models from S3
        setLoadingStatus("Checking available models...")
        setLoadingProgress(35)
        await loadAvailableModels()

      } catch (error) {
        console.error("Failed to load Three.js:", error)
        setLoadingStatus("Failed to load 3D engine")
        setIsLoading(false)
      }
    }

    initializeThreeJS()

    return () => {
      mounted = false
    }
  }, [])

  // Initialize scene when Three.js is loaded
  useEffect(() => {
    if (!threeJS || !canvasRef.current) return

    const { THREE, OrbitControls } = threeJS
    let mounted = true

    const initScene = async () => {
      try {
        setLoadingStatus("Setting up 3D scene...")
        setLoadingProgress(40)

        // Create scene
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x1a1a1a)
        sceneRef.current = scene

        // Create camera
        const camera = new THREE.PerspectiveCamera(
          60,
          canvasRef.current.clientWidth / canvasRef.current.clientHeight,
          0.1,
          1000,
        )
        camera.position.set(0, 2, 5)
        cameraOrigPosRef.current = { x: 0, y: 2, z: 5 }
        cameraRef.current = camera

        // Create renderer
        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
        })
        renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.outputEncoding = THREE.sRGBEncoding
        renderer.toneMapping = THREE.ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.2
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        rendererRef.current = renderer

        // Enhanced lighting setup
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
        directionalLight.position.set(5, 10, 5)
        directionalLight.castShadow = true
        directionalLight.shadow.mapSize.width = 1024
        directionalLight.shadow.mapSize.height = 1024
        scene.add(directionalLight)

        const backLight = new THREE.DirectionalLight(0xffffff, 1.0)
        backLight.position.set(-5, 5, -5)
        scene.add(backLight)

        const spotLight = new THREE.SpotLight(0xff9000, 1.5)
        spotLight.position.set(0, 10, 8)
        spotLight.castShadow = true
        spotLight.angle = 0.5
        scene.add(spotLight)

        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.08
        controls.rotateSpeed = 0.7
        controls.zoomSpeed = 1.2
        controls.panSpeed = 0.8
        controls.enableZoom = true
        controls.minDistance = 0.5
        controls.maxDistance = 30
        controls.enablePan = true
        controls.autoRotate = false
        controls.autoRotateSpeed = 0.3
        controls.target.set(0, 1, 0)
        controlsRef.current = controls

        // Add grid and floor
        const gridHelper = new THREE.GridHelper(20, 20, 0x555555, 0x333333)
        gridHelper.position.y = -0.01
        scene.add(gridHelper)

        const floorGeometry = new THREE.PlaneGeometry(20, 20)
        const floorMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.8,
          metalness: 0.2,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.position.y = -0.02
        floor.receiveShadow = true
        scene.add(floor)

        if (!mounted) return

        setLoadingStatus("Loading 3D model ...")
        setLoadingProgress(60)

        // Load default model from S3
        const firstAvailableModel = Object.keys(availableModels)[0] || 'trimble'
        await loadModelFromS3(firstAvailableModel)

        // Start animation loop
        const animate = () => {
          if (!mounted) return
          animationFrameRef.current = requestAnimationFrame(animate)
          if (controlsRef.current) controlsRef.current.update()
          if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current)
          }
        }
        animate()

        // Handle resize
        const handleResize = () => {
          if (!canvasRef.current || !cameraRef.current || !rendererRef.current || !mounted) return

          const width = canvasRef.current.clientWidth
          const height = canvasRef.current.clientHeight

          cameraRef.current.aspect = width / height
          cameraRef.current.updateProjectionMatrix()
          rendererRef.current.setSize(width, height)
        }

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
        }
      } catch (error) {
        console.error("Failed to initialize scene:", error)
        setLoadingStatus("Failed to initialize 3D scene")
        setIsLoading(false)
      }
    }

    initScene()

    return () => {
      mounted = false
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (rendererRef.current) {
        rendererRef.current.dispose()
      }
      if (sceneRef.current) {
        sceneRef.current.clear()
      }
    }
  }, [threeJS, availableModels])

  const clearAllModels = () => {
    if (!sceneRef.current) return

    const objectsToRemove = []

    // Find all objects that are not lights, camera, or grid/floor
    sceneRef.current.traverse((child) => {
      // Skip lights, helpers, and basic scene elements
      if (child.isLight || child.isHelper || child.name === 'grid' || child.name === 'floor') {
        return
      }

      // If it's a group or mesh that's not a basic scene element, mark for removal
      if ((child.isGroup || child.isMesh) && child.parent === sceneRef.current) {
        objectsToRemove.push(child)
      }
    })

    // Remove and dispose of all marked objects
    objectsToRemove.forEach(obj => {
      obj.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) {
            child.geometry.dispose()
          }
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(mat => {
                if (mat.map) mat.map.dispose()
                if (mat.normalMap) mat.normalMap.dispose()
                if (mat.roughnessMap) mat.roughnessMap.dispose()
                if (mat.metalnessMap) mat.metalnessMap.dispose()
                mat.dispose()
              })
            } else {
              if (child.material.map) child.material.map.dispose()
              if (child.material.normalMap) child.material.normalMap.dispose()
              if (child.material.roughnessMap) child.material.roughnessMap.dispose()
              if (child.material.metalnessMap) child.material.metalnessMap.dispose()
              child.material.dispose()
            }
          }
        }
      })
      sceneRef.current.remove(obj)
    })

    modelRef.current = null
  }

// UPDATED loadModelFromS3 function
const loadModelFromS3 = async (modelKey) => {
  if (!sceneRef.current || !threeJS) return

  const { THREE, OBJLoader, MTLLoader } = threeJS
  const modelInfo = availableModels[modelKey] || modelPaths[modelKey]
  
  if (!modelInfo) {
    console.error(`Model ${modelKey} not found`)
    createDefaultBoothModel()
    return
  }

  try {
    setLoadingStatus(`Loading ${modelInfo.name} ...`)
    setLoadingProgress(70)

    // CRITICAL: Clear ALL existing models completely
    clearAllModels()

    const objLoader = new OBJLoader()

    // Load materials if available
    if (modelInfo.mtl && modelInfo.hasMTL !== false) {
      setLoadingStatus("Loading materials ...")
      const mtlLoader = new MTLLoader()
      mtlLoader.setCrossOrigin("anonymous")

      try {
        const mtlUrl = await getSignedUrl(modelInfo.mtl.replace(AWS_CONFIG.baseUrl + '/', ''))
        
        const materials = await new Promise((resolve, reject) => {
          mtlLoader.load(mtlUrl, resolve, undefined, reject)
        })

        setLoadingProgress(80)
        materials.preload()
        objLoader.setMaterials(materials)
      } catch (error) {
        console.warn("Failed to load materials, proceeding without:", error)
      }
    }

    setLoadingStatus("Loading model geometry ...")
    objLoader.setCrossOrigin("anonymous")

    const objUrl = await getSignedUrl(modelInfo.obj.replace(AWS_CONFIG.baseUrl + '/', ''))

    const object = await new Promise((resolve, reject) => {
      objLoader.load(
        objUrl,
        resolve,
        (xhr) => {
          if (xhr.lengthComputable) {
            const progress = Math.floor(80 + (xhr.loaded / xhr.total) * 15)
            setLoadingProgress(progress)
          }
        },
        reject,
      )
    })

    handleLoadedObject(object)
  } catch (error) {
    console.error("Error loading model:", error)
    setLoadingStatus("Failed to load model, creating demo booth...")
    createDefaultBoothModel()
  }
}

// UPDATED handleLoadedObject function
const handleLoadedObject = (object) => {
  if (!sceneRef.current || !threeJS) return

  const { THREE } = threeJS

  setLoadingStatus("Processing model...")
  setLoadingProgress(95)

  // Ensure we start with a clean slate
  clearAllModels()

    // Center the model
    const box = new THREE.Box3().setFromObject(object)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    // Create a group to hold the model
    const modelGroup = new THREE.Group()

    // Apply appropriate scale
    const maxDim = Math.max(size.x, size.y, size.z)
    const scale = 20.0 / maxDim
    object.scale.set(scale, scale, scale)

    // Center the model
    object.position.set(-center.x * scale, -box.min.y * scale, -center.z * scale)
    object.rotation.y = Math.PI / 4

    // Apply shadow settings and enhance materials
    object.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true

        if (!child.material) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xea580c,
            roughness: 0.7,
            metalness: 0.2,
          })
        } else {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => {
              mat.roughness = 0.7
              mat.metalness = 0.3
              mat.needsUpdate = true
            })
          } else {
            child.material.roughness = 0.7
            child.material.metalness = 0.3
            child.material.needsUpdate = true
          }
        }
      }
    })

    modelGroup.add(object)
    sceneRef.current.add(modelGroup)
    modelRef.current = modelGroup

    setIsModelLoaded(true)
    setIsLoading(false)
    setLoadingStatus("Model loaded successfully!")
    setLoadingProgress(100)

    resetCamera()
  }

  // Create a default booth model as fallback
  const createDefaultBoothModel = () => {
    if (!sceneRef.current || !threeJS) return

    const { THREE } = threeJS

    const booth = new THREE.Group()

    // Base/Floor
    const floorGeom = new THREE.BoxGeometry(6, 0.2, 6)
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      roughness: 0.8,
    })
    const floor = new THREE.Mesh(floorGeom, floorMat)
    floor.position.y = -0.1
    floor.receiveShadow = true
    booth.add(floor)

    // Back Wall
    const backWallGeom = new THREE.BoxGeometry(6, 3, 0.2)
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.7,
    })
    const backWall = new THREE.Mesh(backWallGeom, wallMat)
    backWall.position.set(0, 1.5, -3)
    backWall.castShadow = true
    backWall.receiveShadow = true
    booth.add(backWall)

    // Side Walls
    const leftWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
    const leftWall = new THREE.Mesh(leftWallGeom, wallMat)
    leftWall.position.set(-3, 1.5, 0)
    leftWall.castShadow = true
    leftWall.receiveShadow = true
    booth.add(leftWall)

    const rightWallGeom = new THREE.BoxGeometry(0.2, 3, 6)
    const rightWall = new THREE.Mesh(rightWallGeom, wallMat)
    rightWall.position.set(3, 1.5, 0)
    rightWall.castShadow = true
    rightWall.receiveShadow = true
    booth.add(rightWall)

    // Display Counter
    const counterGeom = new THREE.BoxGeometry(4, 1, 1)
    const counterMat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.5,
    })
    const counter = new THREE.Mesh(counterGeom, counterMat)
    counter.position.set(0, 0.5, 1.5)
    counter.castShadow = true
    counter.receiveShadow = true
    booth.add(counter)

    // Logo Display
    const logoGeom = new THREE.BoxGeometry(2, 1, 0.1)
    const logoMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      emissive: 0xea580c,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    })
    const logo = new THREE.Mesh(logoGeom, logoMat)
    logo.position.set(0, 2, -2.9)
    logo.castShadow = true
    booth.add(logo)

    booth.position.y = 0
    booth.castShadow = true
    booth.receiveShadow = true
    sceneRef.current.add(booth)
    modelRef.current = booth
    setIsModelLoaded(true)
    setIsLoading(false)
    setLoadingStatus("Demo booth created")
    setLoadingProgress(100)
  }

  // Toggle between 3D view and wireframe mode
  const toggleViewMode = () => {
    if (!modelRef.current) return

    const newMode = viewMode === "3d" ? "wireframe" : "3d"
    setViewMode(newMode)

    modelRef.current.traverse((child) => {
      if (child instanceof threeJS.THREE.Mesh) {
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat) => {
              mat.wireframe = newMode === "wireframe"
            })
          } else {
            child.material.wireframe = newMode === "wireframe"
          }
        }
      }
    })
  }

  // Reset camera position
  const resetCamera = () => {
    if (!cameraRef.current || !controlsRef.current || !modelRef.current || !threeJS) return

    const { THREE } = threeJS

    const box = new THREE.Box3().setFromObject(modelRef.current)
    const center = box.getCenter(new THREE.Vector3())
    const size = box.getSize(new THREE.Vector3())

    const maxDim = Math.max(size.x, size.y, size.z)
    const distance = maxDim * 1.5

    cameraRef.current.position.set(center.x + distance * 0.7, center.y + distance * 0.5, center.z + distance * 0.7)

    controlsRef.current.target.set(center.x, center.y, center.z)
    controlsRef.current.update()

    cameraOrigPosRef.current = {
      x: cameraRef.current.position.x,
      y: cameraRef.current.position.y,
      z: cameraRef.current.position.z,
    }

    setViewPosition("outside")
  }

  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    if (!controlsRef.current) return
    const newState = !isAutoRotating
    setIsAutoRotating(newState)
    controlsRef.current.autoRotate = newState
  }

  // Zoom functions
  const zoomIn = () => {
    if (!cameraRef.current || !controlsRef.current || !threeJS) return

    const { THREE } = threeJS

    const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
    const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
    const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

    const newDistance = Math.max(currentPos.distanceTo(targetPos) * 0.75, controlsRef.current.minDistance)
    cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

    controlsRef.current.update()
  }

  const zoomOut = () => {
    if (!cameraRef.current || !controlsRef.current || !threeJS) return

    const { THREE } = threeJS

    const currentPos = new THREE.Vector3().copy(cameraRef.current.position)
    const targetPos = new THREE.Vector3().copy(controlsRef.current.target)
    const direction = new THREE.Vector3().subVectors(currentPos, targetPos).normalize()

    const newDistance = Math.min(currentPos.distanceTo(targetPos) * 1.25, controlsRef.current.maxDistance)
    cameraRef.current.position.copy(direction.multiplyScalar(newDistance).add(targetPos))

    controlsRef.current.update()
  }

  // Change booth model
  const changeModel = async (modelType) => {
    if (!availableModels[modelType] && !modelPaths[modelType]) return

    setCurrentModel(modelType)
    setIsLoading(true)
    setLoadingStatus(`Loading ${(availableModels[modelType] || modelPaths[modelType]).name} from S3...`)
    setLoadingProgress(0)

    await loadModelFromS3(modelType)
  }

  return (
    <div className="w-full h-96 lg:h-[500px] rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-xl overflow-hidden relative">
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 z-20">
          <div className="relative mb-6">
            <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-orange-400 rounded-full animate-spin"
              style={{ animationDuration: "1.5s", animationDirection: "reverse" }}
            ></div>
          </div>
          <p className="text-orange-500 font-medium text-lg mb-2">Loading 3D Experience</p>
          <p className="text-gray-400 text-sm mb-4">{loadingStatus}</p>

          {/* Progress bar */}
          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <p className="text-orange-400 text-xs mt-2">{loadingProgress}%</p>
        </div>
      )}

      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="w-full h-full touch-none" />

      {/* Control buttons */}
      {!isLoading && (
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          <button
            onClick={resetCamera}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
            title="Reset Camera"
          >
            <RotateCcw size={16} className="text-white" />
          </button>

          <button
            onClick={toggleViewMode}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
            title="Toggle Wireframe Mode"
          >
            {viewMode === "3d" ? (
              <Layers size={16} className="text-white" />
            ) : (
              <Grid size={16} className="text-white" />
            )}
          </button>

          <button
            onClick={toggleAutoRotate}
            className={`w-8 h-8 ${isAutoRotating ? "bg-orange-500/50" : "bg-white/10"} hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors`}
            title="Toggle Auto-Rotation"
          >
            <RotateCcw size={16} className="text-white" />
          </button>

          <button
            onClick={zoomIn}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
            title="Zoom In"
          >
            <ZoomIn size={16} className="text-white" />
          </button>

          <button
            onClick={zoomOut}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 flex items-center justify-center rounded-md backdrop-blur-sm transition-colors"
            title="Zoom Out"
          >
            <ZoomOut size={16} className="text-white" />
          </button>
        </div>
      )}

      {/* Model selection buttons */}
      {!isLoading && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-center gap-2 flex-wrap">
          {Object.entries(availableModels).length > 0
            ? Object.entries(availableModels).map(([key, model]) => (
              <button
                key={key}
                onClick={() => changeModel(key)}
                className={`${currentModel === key ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500/80"
                  } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
              >
                {model.name}
              </button>
            ))
            : Object.entries(modelPaths).map(([key, model]) => (
              <button
                key={key}
                onClick={() => changeModel(key)}
                className={`${currentModel === key ? "bg-orange-500 text-white" : "bg-white/10 text-white hover:bg-orange-500/80"
                  } px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-colors`}
              >
                {model.name}
              </button>
            ))
          }
        </div>
      )}
    </div>
  )
}