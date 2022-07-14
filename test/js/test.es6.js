import * as THREE from "../../node_modules/three/build/three.module.js";
import {Loop, RenderingLoop} from "../../src/RenderingLoop.js";

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
const material = new THREE.MeshNormalMaterial();


const renderer = new THREE.WebGLRenderer( { antialias: true } );
const loop = new RenderingLoop( renderer ).start({scene:scene, camera:camera});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const mesh = new THREE.Mesh( geometry, material );
// animation
const ani = function ( time ) {

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

};
mesh.addEventListener("added", function(){
    loop.add(ani);
});
mesh.addEventListener("removed", function(){
    loop.remove(ani);
});
scene.add( mesh );

