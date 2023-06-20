import * as THREE from 'three';

const 	rendSize 	= new THREE.Vector2();

var scene, 
	renderer, 
	camera;

let directionalLight,
	lightProbe;

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function main() {

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	rendSize.x = 
	rendSize.y = Math.min(window.innerWidth, window.innerHeight) * 0.8;

	renderer.setSize(rendSize.x, rendSize.y);

	document.body.appendChild(renderer.domElement);

	scene 	= new THREE.Scene();
	
	camera = new THREE.OrthographicCamera( -1.0, 1.0, 1.0, -1.0, -1.0, 1.0 );
	scene.add( camera );

	buildScene();

	requestAnimationFrame(animate);		

};

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function animate(time) {

    var sun = scene.getObjectByName("sun");

	sun.rotation.x = time * 0.00001;
	sun.rotation.y = time * 0.0001;
	sun.rotation.z = time * 0.0005;

    /// ***************************************************************

	var earth = scene.getObjectByName("earth");

	earth.rotation.x = time * 0.00001;
	earth.rotation.y = time * 0.0001;
	earth.rotation.z = time * 0.0005;

	var earthPosX = 0.7*Math.sin(0.002*time);
	var earthPosY = 0.7*Math.cos(0.002*time);

	earth.position.set(earthPosX, earthPosY, 0);

    /// ***************************************************************

	var mercury = scene.getObjectByName("mercury");

	mercury.rotation.x = time * 0.00001;
	mercury.rotation.y = time * 0.0001;

	var mercuryPosX = 0.5*Math.sin(0.003*time);
	var mercuryPosY = 0.5*Math.cos(0.003*time);

	mercury.position.set(mercuryPosX, mercuryPosY, 0);

	renderer.clear();
	renderer.render(scene, camera);

	requestAnimationFrame(animate);		
}

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function buildScene() {

	const axis = new THREE.AxesHelper();
	scene.add(axis);

	var earthMaterials = new THREE.MeshPhongMaterial({ color: 0x0defff });
                 
	var earthGeom = new THREE.SphereGeometry(0.02); 

	const earthMesh = new THREE.Mesh(earthGeom, earthMaterials); 
	earthMesh.name = "earth";

	scene.add( earthMesh );

    /// ***************************************************************

	var mercuryMaterials = new THREE.MeshPhongMaterial({ color: 0xfeef00 });
                 
	var mercuryGeom = new THREE.SphereGeometry(0.01); 

	const mercuryMesh = new THREE.Mesh(mercuryGeom, mercuryMaterials); 
	mercuryMesh.name = "mercury";

	scene.add( mercuryMesh );

    /// ***************************************************************

    var sunMaterials = new THREE.MeshPhongMaterial({ color: 0xfebe00 });
    var sunGeom = new THREE.SphereGeometry(0.2);
    const sunMesh = new THREE.Mesh(sunGeom, sunMaterials);
    sunMesh.name = "sun";
    sunMesh.position.set(0,0,0);

    scene.add( sunMesh );



	directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
	directionalLight.position.set( 10, 10, 10 );
	scene.add( directionalLight );

	lightProbe = new THREE.LightProbe();
	lightProbe.intensity = 0.64
	scene.add( lightProbe );

}

/// ***************************************************************
/// ***************************************************************
/// ***************************************************************

main();