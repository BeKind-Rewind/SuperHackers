import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function loadModel(path, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(path, function (gltf) {
        scene.add(gltf.scene);
        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            gltf.scene.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, undefined, function (error) {
        console.error(error);
    });
}

// Load all models
document.addEventListener('DOMContentLoaded', () => {
    loadModel('assets/models/coffee_shop_cup/scene.gltf', 'coffee-shop-cup');
    loadModel('assets/models/iced_coffee/scene.gltf', 'iced-coffee');
    loadModel('assets/models/cafe_latte_with_art/scene.gltf', 'cafe-latte-with-art');
    loadModel('assets/models/boba_tea_cup/scene.gltf', 'boba-tea-cup');
    loadModel('assets/models/bubble_tea_and_cookies/scene.gltf', 'bubble-tea-and-cookies');
    loadModel('assets/models/desserts/scene.gltf', 'desserts');
});
