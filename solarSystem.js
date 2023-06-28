import * as THREE from 'three';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';

const rendSize = new THREE.Vector2();

let perspectiveCamera, controls, scene, renderer, light, ambientLight, lightProbe;

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function main() {

	const initialAspect = window.innerWidth / window.innerHeight;

	renderer = new THREE.WebGLRenderer();

	renderer.setClearColor(new THREE.Color(0.0, 0.0, 0.0));

	rendSize.x = window.innerWidth;
	rendSize.y = window.innerHeight;

	renderer.setSize(rendSize.x, rendSize.y);

	document.body.appendChild(renderer.domElement);

	document.body.appendChild(renderer.domElement);

	scene = new THREE.Scene();

	perspectiveCamera = new THREE.PerspectiveCamera(60, initialAspect, 1, 100000);
	perspectiveCamera.position.z = 900;

	window.addEventListener('resize', onWindowResize);
	createControls(perspectiveCamera);

	buildScene();

	requestAnimationFrame(animate);

};



function createControls(camera) {

	controls = new TrackballControls(camera, renderer.domElement);

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;

	controls.keys = ['KeyA', 'KeyS', 'KeyD'];

}

function onWindowResize() {

	const aspect = window.innerWidth / window.innerHeight;

	perspectiveCamera.aspect = aspect;
	perspectiveCamera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);

	controls.handleResize();

}

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function animate(time) {

	var sun = scene.getObjectByName("sun");

	sun.rotation.y = time * 0.00001;

	/// ***************************************************************

	var mercury = scene.getObjectByName("mercury");

	mercury.rotation.y = time * 0.00001;

	var mercuryPosX = 25 * Math.sin(0.003 * time);
	var mercuryPosY = 25 * Math.cos(0.003 * time);

	mercury.position.set(mercuryPosX, 0, mercuryPosY);

	/// ***************************************************************

	var venus = scene.getObjectByName("venus");

	venus.rotation.y = time * 0.00001;

	var venusPosX = 50 * Math.sin(0.00025 * time);
	var venusPosY = 50 * Math.cos(0.00025 * time);

	venus.position.set(venusPosX, 0, venusPosY);

	/// ***************************************************************

	var earth = scene.getObjectByName("earth");

	earth.rotation.y = time * 0.00001;

	var earthPosX = 70 * Math.sin(0.0002 * time);
	var earthPosY = 70 * Math.cos(0.0002 * time);

	earth.position.set(earthPosX, 0, earthPosY);

	/// ***************************************************************

	var mars = scene.getObjectByName("mars");

	mars.rotation.y = time * 0.00001;

	var marsPosX = 140 * Math.sin(0.00019 * time);
	var marsPosY = 140 * Math.cos(0.00019 * time);

	mars.position.set(marsPosX, 0, marsPosY);

	/// ***************************************************************

	var jupiter = scene.getObjectByName("jupiter");

	jupiter.rotation.y = time * 0.00001;

	var jupiterPosX = 270 * Math.sin(0.00009 * time);
	var jupiterPosY = 270 * Math.cos(0.00009 * time);

	jupiter.position.set(jupiterPosX, 0, jupiterPosY);

	/// ***************************************************************

	var saturn = scene.getObjectByName("saturn");

	saturn.rotation.y = time * 0.00001;

	var saturnPosX = 350 * Math.sin(0.00007 * time);
	var saturnPosY = 350 * Math.cos(0.00007 * time);

	saturn.position.set(saturnPosX, 0, saturnPosY);

	/// ***************************************************************

	var uranus = scene.getObjectByName("uranus");

	uranus.rotation.y = time * 0.00001;

	var uranusPosX = 410 * Math.sin(0.00005 * time);
	var uranusPosY = 410 * Math.cos(0.00005 * time);

	uranus.position.set(uranusPosX, 0, uranusPosY);

	/// ***************************************************************

	var neptune = scene.getObjectByName("neptune");

	neptune.rotation.y = time * 0.00001;

	var neptunePosX = 500 * Math.sin(0.000045 * time);
	var neptunePosY = 500 * Math.cos(0.000045 * time);

	neptune.position.set(neptunePosX, 0, neptunePosY);

	/// ***************************************************************

	renderer.clear();
	controls.update();
	renderer.render(scene, perspectiveCamera);

	requestAnimationFrame(animate);
}

/// ***************************************************************
/// ***                                                          **
/// ***************************************************************

function buildScene() {

	const axis = new THREE.AxesHelper();
	scene.add(axis);

	const mercuryTexture = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/6e527eb9-99dc-4554-9ea2-dd0e84e79860/dcklc0u-feeae0dc-f164-436a-8e75-5c9a7f3e3c71.png/v1/fill/w_1264,h_632,q_70,strp/mercury_texture_map_used_by_solar_walk_2_by_bob3studios_dcklc0u-pre.jpg');
	var mercuryMaterials = new THREE.MeshPhongMaterial({ 
		map: mercuryTexture
	});

	var mercuryGeom = new THREE.SphereGeometry(2.5);

	const mercuryMesh = new THREE.Mesh(mercuryGeom, mercuryMaterials);
	mercuryMesh.name = "mercury";

	scene.add(mercuryMesh);

	/// ***************************************************************
	const venusTexture = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b7029c3-9717-4658-9066-11c30aa24029/dctqvn0-4efa81e8-656a-4f2c-81f5-91ba4801704f.png/v1/fill/w_1280,h_640,q_80,strp/venus_texture_map_by_oleg_pluton_dctqvn0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvOWI3MDI5YzMtOTcxNy00NjU4LTkwNjYtMTFjMzBhYTI0MDI5XC9kY3Rxdm4wLTRlZmE4MWU4LTY1NmEtNGYyYy04MWY1LTkxYmE0ODAxNzA0Zi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.IF758u8HVFFOkU2krmJsldgS1hri8LNEfuhAhOJSdbM');
	var venusMaterials = new THREE.MeshPhongMaterial({ 
		map: venusTexture,
	});

	var venusGeom = new THREE.SphereGeometry(4);

	const venusMesh = new THREE.Mesh(venusGeom, venusMaterials);
	venusMesh.name = "venus";

	scene.add(venusMesh);

	/// ***************************************************************
	const earthTexture = new THREE.TextureLoader().load('https://blenderartists.org/uploads/default/optimized/4X/5/0/2/5029a48052f6f91a399a41dcd1004adf854b17ea_2_1380x690.jpeg');
	var earthMaterials = new THREE.MeshPhongMaterial({
		map: earthTexture
	});

	var earthGeom = new THREE.SphereGeometry(5.5);

	const earthMesh = new THREE.Mesh(earthGeom, earthMaterials);
	earthMesh.name = "earth";

	scene.add(earthMesh);

	/// ***************************************************************
	const marsTexture = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6e527eb9-99dc-4554-9ea2-dd0e84e79860/dckiu8c-727ad23f-7760-42f2-9669-aa2de0f3c832.png/v1/fill/w_1264,h_632,q_70,strp/mars_texture_map_used_by_solar_walk_2_by_bob3studios_dckiu8c-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzZlNTI3ZWI5LTk5ZGMtNDU1NC05ZWEyLWRkMGU4NGU3OTg2MFwvZGNraXU4Yy03MjdhZDIzZi03NzYwLTQyZjItOTY2OS1hYTJkZTBmM2M4MzIucG5nIiwid2lkdGgiOiI8PTIwNDgifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dRnTFnFlXIE0q0TzB3phykHWs_Ev0yRSN4gEW7vG8mU');
	var marsMaterials = new THREE.MeshPhongMaterial({ 
		map: marsTexture,
	});

	var marsGeom = new THREE.SphereGeometry(5);

	const marsMesh = new THREE.Mesh(marsGeom, marsMaterials);
	marsMesh.name = "mars";

	scene.add(marsMesh);

	/// ***************************************************************
	const jupiterTexture = new THREE.TextureLoader().load('https://content.invisioncic.com/g327141/monthly_2017_04/image_3337_1e-Jupiter-Map.jpg.2a95eb1560177ea99b30dda8c3c07eec.jpg');
	var jupiterMaterials = new THREE.MeshPhongMaterial({ 
		map: jupiterTexture,
	});

	var jupiterGeom = new THREE.SphereGeometry(20);

	const jupiterMesh = new THREE.Mesh(jupiterGeom, jupiterMaterials);
	jupiterMesh.name = "jupiter";

	scene.add(jupiterMesh);

	/// ***************************************************************
	const saturnTexture = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/e0763947-6f42-4d09-944f-c2d6f41c415b/dcaift0-422ad564-f7b0-4291-914f-425b9ac29a35.jpg')
	var saturnMaterials = new THREE.MeshPhongMaterial({ 
		map: saturnTexture,
	});

	var saturnGeom = new THREE.SphereGeometry(13);

	const saturnMesh = new THREE.Mesh(saturnGeom, saturnMaterials);
	saturnMesh.name = "saturn";

	scene.add(saturnMesh);

	/// ***************************************************************
	const uranusTexture = new THREE.TextureLoader().load('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1912b050-3675-4394-a3d1-d0b4cb43ae0a/dc18wwb-e195cd81-efbd-480a-9f51-5100a530683d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8xOTEyYjA1MC0zNjc1LTQzOTQtYTNkMS1kMGI0Y2I0M2FlMGEvZGMxOHd3Yi1lMTk1Y2Q4MS1lZmJkLTQ4MGEtOWY1MS01MTAwYTUzMDY4M2QuanBnIn1dXX0.t8ZLMd9G0XuO6kSKIP-mBsEBubh_aRyxs_f1NMybAEY')
	var uranusMaterials = new THREE.MeshPhongMaterial({ 
		map: uranusTexture,
	});

	var uranusGeom = new THREE.SphereGeometry(12);

	const uranusMesh = new THREE.Mesh(uranusGeom, uranusMaterials);
	uranusMesh.name = "uranus";

	scene.add(uranusMesh);

	/// ***************************************************************
	const neptuneTexture = new THREE.TextureLoader().load('https://vignette.wikia.nocookie.net/planet-texture-maps/images/c/c1/Planetarium_neptune.jpg/revision/latest?cb=20190320175442')
	var neptuneMaterials = new THREE.MeshPhongMaterial({
		map: neptuneTexture,
	});

	var neptuneGeom = new THREE.SphereGeometry(14);

	const neptuneMesh = new THREE.Mesh(neptuneGeom, neptuneMaterials);
	neptuneMesh.name = "neptune";

	scene.add(neptuneMesh);

	/// ***************************************************************

	const sunTexture = new THREE.TextureLoader().load('https://i.dailymail.co.uk/i/pix/2014/01/08/article-2535952-1A7F7F0100000578-715_964x706.jpg')
	var sunMaterials = new THREE.MeshPhongMaterial({ 
		emissiveMap: sunTexture,
		emissive: 0xfebe00,
		emissiveIntensity: 1,
	});
	var sunGeom = new THREE.SphereGeometry(13);
	const sunMesh = new THREE.Mesh(sunGeom, sunMaterials);
	sunMesh.name = "sun";
	sunMesh.position.set(0, 0, 0);

	scene.add(sunMesh);

	light = new THREE.PointLight(0xffffff, 2.0);
	light.position.set(0, 0, 0);
	scene.add(light);

	ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
	ambientLight.position.set(100,100,100);
	scene.add(ambientLight);

}

/// ***************************************************************
/// ***************************************************************
/// ***************************************************************

main();