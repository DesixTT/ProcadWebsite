import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const GeometricLogo = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(150, 150); // Set size for the logo

    // Create the geometry and material for the logo
    const geometry = new THREE.OctahedronGeometry(2); // Example of a 3D shape
    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const edges = new THREE.EdgesGeometry(geometry); // Wireframe
    const logo = new THREE.LineSegments(edges, material);
    scene.add(logo);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      
      // Make it interactive by rotating on mouse hover or click
      logo.rotation.x += 0.01;
      logo.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Update the camera aspect ratio and renderer size on window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer.setSize(150, 150); // Adjust size if necessary
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div style={{ width: '150px', height: '150px' }}>
      <canvas ref={canvasRef}></canvas> {/* Canvas to render the logo */}
    </div>
  );
};

export default GeometricLogo;
