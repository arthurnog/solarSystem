import * as THREE from 'three';

const 	rendSize 	= new THREE.Vector2();

var scene, 
	renderer, 
	camera;

let light,
	lightProbe;

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function main() {

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	rendSize.x = window.innerWidth;
	rendSize.y = window.innerHeight;

	renderer.setSize(rendSize.x, rendSize.y);

	document.body.appendChild(renderer.domElement);

	scene 	= new THREE.Scene();
	
	camera = new THREE.OrthographicCamera( 
		window.innerWidth/-200.0, 
		window.innerWidth/200.0,
		window.innerHeight/200.0,
		window.innerHeight/-200.0,
		-2.0,
		5.0
	);

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

	var mercury = scene.getObjectByName("mercury");

	mercury.rotation.x = time * 0.00001;
	mercury.rotation.y = time * 0.0001;

	var mercuryPosX = 0.5*Math.sin(0.003*time);
	var mercuryPosY = 0.5*Math.cos(0.003*time);

	mercury.position.set(mercuryPosX, mercuryPosY, 0);

	/// ***************************************************************

	var venus = scene.getObjectByName("venus");

	venus.rotation.x = time * 0.00001;
	venus.rotation.y = time * 0.0001;
	venus.rotation.z = time * 0.0005;

	var venusPosX = 0.6*Math.sin(0.0025*time);
	var venusPosY = 0.6*Math.cos(0.0025*time);

	venus.position.set(venusPosX, venusPosY, 0);
	
    /// ***************************************************************

	var earth = scene.getObjectByName("earth");

	earth.rotation.x = time * 0.00001;
	earth.rotation.y = time * 0.0001;
	earth.rotation.z = time * 0.0005;

	var earthPosX = 0.7*Math.sin(0.002*time);
	var earthPosY = 0.7*Math.cos(0.002*time);

	earth.position.set(earthPosX, earthPosY, 0);

	/// ***************************************************************

	var marth = scene.getObjectByName("marth");

	marth.rotation.x = time * 0.00001;
	marth.rotation.y = time * 0.0001;
	marth.rotation.z = time * 0.0005;

	var marthPosX = 0.75*Math.sin(0.0019*time);
	var marthPosY = 0.75*Math.cos(0.0019*time);

	marth.position.set(marthPosX, marthPosY, 0);

	/// ***************************************************************

	var jupiter = scene.getObjectByName("jupiter");

	jupiter.rotation.x = time * 0.00001;
	jupiter.rotation.y = time * 0.0001;
	jupiter.rotation.z = time * 0.0005;

	var jupiterPosX = 1.75*Math.sin(0.0009*time);
	var jupiterPosY = 1.75*Math.cos(0.0009*time);

	jupiter.position.set(jupiterPosX, jupiterPosY, 0);

	/// ***************************************************************

	var saturn = scene.getObjectByName("saturn");

	saturn.rotation.x = time * 0.00001;
	saturn.rotation.y = time * 0.0001;
	saturn.rotation.z = time * 0.0005;

	var saturnPosX = 2.2*Math.sin(0.0007*time);
	var saturnPosY = 2.2*Math.cos(0.0007*time);

	saturn.position.set(saturnPosX, saturnPosY, 0);

	/// ***************************************************************

	var uranus = scene.getObjectByName("uranus");

	uranus.rotation.x = time * 0.00001;
	uranus.rotation.y = time * 0.0001;
	uranus.rotation.z = time * 0.0005;

	var uranusPosX = 2.6*Math.sin(0.0005*time);
	var uranusPosY = 2.6*Math.cos(0.0005*time);

	uranus.position.set(uranusPosX, uranusPosY, 0);

	/// ***************************************************************

	var neptune = scene.getObjectByName("neptune");

	neptune.rotation.x = time * 0.00001;
	neptune.rotation.y = time * 0.0001;
	neptune.rotation.z = time * 0.0005;

	var neptunePosX = 3*Math.sin(0.00045*time);
	var neptunePosY = 3*Math.cos(0.00045*time);

	neptune.position.set(neptunePosX, neptunePosY, 0);

	/// ***************************************************************

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

	var mercuryMaterials = new THREE.MeshPhongMaterial({ color: 0xfeef00 });
                 
	var mercuryGeom = new THREE.SphereGeometry(0.01); 

	const mercuryMesh = new THREE.Mesh(mercuryGeom, mercuryMaterials); 
	mercuryMesh.name = "mercury";

	scene.add( mercuryMesh );

    /// ***************************************************************

	var venusMaterials = new THREE.MeshPhongMaterial({ color: 0xfeef90 });
                 
	var venusGeom = new THREE.SphereGeometry(0.02); 

	const venusMesh = new THREE.Mesh(venusGeom, venusMaterials); 
	venusMesh.name = "venus";

	scene.add( venusMesh );

    /// ***************************************************************

	var earthMaterials = new THREE.MeshPhongMaterial({ color: 0x0defff });
                 
	var earthGeom = new THREE.SphereGeometry(0.02); 

	const earthMesh = new THREE.Mesh(earthGeom, earthMaterials); 
	earthMesh.name = "earth";

	scene.add( earthMesh );

    /// ***************************************************************

	var marthMaterials = new THREE.MeshPhongMaterial({ color: 0xfe1d0a });
                 
	var marthGeom = new THREE.SphereGeometry(0.019); 

	const marthMesh = new THREE.Mesh(marthGeom, marthMaterials); 
	marthMesh.name = "marth";

	scene.add( marthMesh );

    /// ***************************************************************

	var jupiterMaterials = new THREE.MeshPhongMaterial({ color: 0xfe1e0a });
                 
	var jupiterGeom = new THREE.SphereGeometry(0.09); 

	const jupiterMesh = new THREE.Mesh(jupiterGeom, jupiterMaterials); 
	jupiterMesh.name = "jupiter";

	scene.add( jupiterMesh );

    /// ***************************************************************

	var saturnMaterials = new THREE.MeshPhongMaterial({ color: 0xf6b336 });
                 
	var saturnGeom = new THREE.SphereGeometry(0.08); 

	const saturnMesh = new THREE.Mesh(saturnGeom, saturnMaterials); 
	saturnMesh.name = "saturn";

	scene.add( saturnMesh );

    /// ***************************************************************

	var uranusMaterials = new THREE.MeshPhongMaterial({ color: 0xbddbe9 });
                 
	var uranusGeom = new THREE.SphereGeometry(0.075); 

	const uranusMesh = new THREE.Mesh(uranusGeom, uranusMaterials); 
	uranusMesh.name = "uranus";

	scene.add( uranusMesh );

    /// ***************************************************************

	var neptuneMaterials = new THREE.MeshPhongMaterial({ color: 0x026bAa });
                 
	var neptuneGeom = new THREE.SphereGeometry(0.070); 

	const neptuneMesh = new THREE.Mesh(neptuneGeom, neptuneMaterials); 
	neptuneMesh.name = "neptune";

	scene.add( neptuneMesh );

    /// ***************************************************************

    var sunMaterials = new THREE.MeshPhongMaterial({ color: 0xfebe00, emissive: 0xfebe00 });
    var sunGeom = new THREE.SphereGeometry(0.2);
    const sunMesh = new THREE.Mesh(sunGeom, sunMaterials);
    sunMesh.name = "sun";
    sunMesh.position.set(0,0,0);

    scene.add( sunMesh );

	/// ***************************************************************

	light = new THREE.PointLight( 0xffffff, 1.0 );
	light.position.set( 0, 0, 0 );
	scene.add( light );

	lightProbe = new THREE.LightProbe();
	lightProbe.intensity = 0.64
	scene.add( lightProbe );

}

/// ***************************************************************
/// ***************************************************************
/// ***************************************************************

main();