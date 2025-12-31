"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { loadGLTFModel } from "@/utils/model";
import { DogSpinner, DogContainer } from "./blender-dog";

function easeOutCirc(x: number): number {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef<THREE.WebGLRenderer | null>(null);
  const refScene = useRef<THREE.Scene | null>(null);
  const refCamera = useRef<THREE.OrthographicCamera | null>(null);
  const refControls = useRef<OrbitControls | null>(null);
  const refAnimationFrame = useRef<number | null>(null);
  const refFrame = useRef<number>(0);

  // const urlDogGLB =
  //   (process.env.NODE_ENV === "production"
  //     ? "https://craftzdog.global.ssl.fastly.net/homepage"
  //     : "") + "/dog.glb";

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    const { current: camera } = refCamera;

    if (container && renderer && camera) {
      let scW = container.clientWidth;
      let scH = container.clientHeight;

      const breakpoints = [
        { width: 768, size: 400 },
        { width: 500, size: 300 },
        { width: 300, size: 250 },
        { width: 250, size: 200 },
      ];

      for (const { width, size } of breakpoints) {
        if (window.matchMedia(`screen and (max-width: ${width}px)`).matches) {
          scH = size;
          scW = size;
          break;
        }
      }

      renderer.setSize(scW, scH);
      const scale = scH * 0.005 + 4.8;
      camera.left = -scale;
      camera.right = scale;
      camera.top = scale;
      camera.bottom = -scale;
      camera.updateProjectionMatrix();
    }
  }, []);

  useEffect(() => {
    const { current: container } = refContainer;
    if (!container) return;

    const scW = container.clientWidth;
    const scH = container.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(scW, scH);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    refRenderer.current = renderer;

    const scene = new THREE.Scene();
    refScene.current = scene;

    const target = new THREE.Vector3(-0.5, 1.2, 0);
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    );

    const scale = scH * 0.005 + 4.8;
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    );
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);
    refCamera.current = camera;

    const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = true;
    controls.target = target;
    refControls.current = controls;

    loadGLTFModel(scene, "/dog.glb", {
      receiveShadow: false,
      castShadow: false,
    }).then(() => {
      animate();
      setLoading(false);
    });

    const animate = () => {
      refAnimationFrame.current = requestAnimationFrame(animate);
      const frame = refFrame.current;

      if (frame <= 100) {
        const p = initialCameraPosition;
        const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

        camera.position.y = 10;
        camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
        camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
        camera.lookAt(target);
        refFrame.current = frame + 1;
      } else {
        controls.update();
      }

      renderer.render(scene, camera);
    };

    return () => {
      if (refAnimationFrame.current) {
        cancelAnimationFrame(refAnimationFrame.current);
      }
      renderer.domElement.remove();
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
};

export default VoxelDog;
