'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, useGLTF, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

// Cartoon Rocket Component
function CartoonRocket({ position }) {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={2}>
      <group position={position}>
        {/* Rocket Body */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 2, 8]} />
          <meshStandardMaterial color="#FF5A5F" />
        </mesh>
        {/* Rocket Nose */}
        <mesh position={[0, 1.2, 0]}>
          <coneGeometry args={[0.3, 0.6, 8]} />
          <meshStandardMaterial color="#FF7E82" />
        </mesh>
        {/* Rocket Fins */}
        <mesh position={[0.4, -0.8, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.1, 0.4]} />
          <meshStandardMaterial color="#FFB3B5" />
        </mesh>
        <mesh position={[-0.4, -0.8, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.6, 0.1, 0.4]} />
          <meshStandardMaterial color="#FFB3B5" />
        </mesh>
        <mesh position={[0, -0.8, 0.4]} rotation={[Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.4, 0.1, 0.6]} />
          <meshStandardMaterial color="#FFB3B5" />
        </mesh>
        <mesh position={[0, -0.8, -0.4]} rotation={[-Math.PI / 4, 0, 0]}>
          <boxGeometry args={[0.4, 0.1, 0.6]} />
          <meshStandardMaterial color="#FFB3B5" />
        </mesh>
        {/* Rocket Window */}
        <mesh position={[0, 0.3, 0.31]}>
          <circleGeometry args={[0.15, 16]} />
          <meshStandardMaterial color="#87CEEB" transparent opacity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

// Learning Symbols Components
function Backpack({ position }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <group position={position} scale={0.4}>
        <mesh>
          <boxGeometry args={[0.8, 1.2, 0.4]} />
          <meshStandardMaterial color="#4A90E2" />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <boxGeometry args={[0.6, 0.2, 0.3]} />
          <meshStandardMaterial color="#357ABD" />
        </mesh>
      </group>
    </Float>
  );
}

function Book({ position, color }) {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={0.8}>
      <group position={position} scale={0.3} rotation={[0.2, 0.3, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 1.2, 0.1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </group>
    </Float>
  );
}

function Tablet({ position }) {
  return (
    <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.2}>
      <group position={position} scale={0.4} rotation={[0.1, 0.2, 0]}>
        <mesh>
          <boxGeometry args={[1, 0.7, 0.05]} />
          <meshStandardMaterial color="#2C3E50" />
        </mesh>
        <mesh position={[0, 0, 0.026]}>
          <planeGeometry args={[0.9, 0.6]} />
          <meshStandardMaterial color="#3498DB" />
        </mesh>
      </group>
    </Float>
  );
}

// Activity Portal Component
function ActivityPortal({ position, color, label }) {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.5}>
      <group position={position}>
        {/* Portal Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.1, 8, 16]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
        </mesh>
        {/* Portal Center */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.7, 16]} />
          <meshStandardMaterial color={color} transparent opacity={0.3} />
        </mesh>
        {/* Floating particles */}
        <mesh position={[0.3, 0.3, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
        <mesh position={[-0.3, -0.2, 0.2]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// Tree Component
function Tree({ position }) {
  return (
    <group position={position} scale={0.6}>
      {/* Trunk */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Leaves */}
      <mesh position={[0, 0.3, 0]}>
        <sphereGeometry args={[0.6, 8, 8]} />
        <meshStandardMaterial color="#228B22" />
      </mesh>
    </group>
  );
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <directionalLight position={[-10, -10, -5]} intensity={0.7} />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={0.5} />
      
      {/* Main Rocket */}
      <CartoonRocket position={[0, 0, 0]} />
      
      {/* Learning Symbols */}
      <Backpack position={[-2.5, -1, 1]} />
      <Book position={[-3, 0.5, 0.5]} color="#FF6B6B" />
      <Book position={[-2.8, 0.2, 1.2]} color="#4ECDC4" />
      <Book position={[-3.2, 0.8, 0.8]} color="#45B7D1" />
      <Tablet position={[2.5, -0.5, 1]} />
      
      {/* Activity Portals */}
      <ActivityPortal position={[-4, 2, -2]} color="#FF6B6B" label="Dance" />
      <ActivityPortal position={[4, 1.5, -1.5]} color="#4ECDC4" label="Coding" />
      <ActivityPortal position={[3, -2, -2]} color="#45B7D1" label="Art" />
      <ActivityPortal position={[-3, -2.5, -1]} color="#96CEB4" label="Music" />
      
      {/* Trees for environment */}
      <Tree position={[-4.5, -2, 0]} />
      <Tree position={[4.2, -2.2, 0.5]} />
      <Tree position={[-1.5, -2.5, -3]} />
      <Tree position={[1.8, -2.3, -2.5]} />
      
      {/* Launchpad */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 16]} />
        <meshStandardMaterial color="#34495E" />
      </mesh>
      
      {/* Ground */}
      <mesh position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#7FB069" />
      </mesh>
      
      <Environment preset="sunset" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
      />
    </>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Discover Local Experiences
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Explore unique
              <span className="text-gradient block">activities</span>
              around you
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Find programs, workshops, and classes that bring learning and creativity to life. 
              Connect with local providers and discover enriching experiences for the whole family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Experiences
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold text-lg border-2 border-primary hover:bg-primary hover:text-white transition-colors shadow-lg hover:shadow-xl"
              >
                Become a Provider
              </motion.button>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                500+ Activities
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                200+ Providers
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                50+ Categories
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Art Workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/8613081/pexels-photo-8613081.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Music Class"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Sports Activity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 rounded-2xl overflow-hidden hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/8613200/pexels-photo-8613200.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Learning Program"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
}