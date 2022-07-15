import * as THREE from "three";
import { RenderingLoop } from "../../src/RenderingLoop.js";

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
camera.position.z = 1;

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer( { antialias: true } );
const loop = new RenderingLoop( renderer ).start({scene:scene, camera:camera});

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const mesh = new THREE.Mesh ( 
    new THREE.BoxGeometry( 0.2, 0.2, 0.2 ), 
    new THREE.MeshNormalMaterial() 
);

// animation
mesh.animation = function ( time ) 
{
	this.rotation.x = time / 2000;
	this.rotation.y = time / 1000;
}.bind(mesh);

mesh.addEventListener("added", function(){
    loop.add( mesh.animation );
});
mesh.addEventListener("removed", function(){
    loop.remove( mesh.animation );
});

scene.add( mesh );