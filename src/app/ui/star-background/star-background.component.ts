import { Component, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-star-background',
  templateUrl: './star-background.component.html',
  styleUrls: ['./star-background.component.scss']
})

export class StarBackgroundComponent {

  public x = 0;
  public y = 0;

  public shaderCount = 0;
  public secondShaderCount = 0;
  public starsArray: THREE.Points[] = []; // tableau pour stocker les étoiles

  public starMaterials: THREE.PointsMaterial[] = [];

  public animateChoice = 0;

  public speed = 0.3;
  public rotation = 0.0005;

  public scene = new THREE.Scene();
  public camera = new THREE.PerspectiveCamera(75, window.innerWidth / 1600, 0.1, 1000);
  public renderer = new THREE.WebGLRenderer({ alpha: true });

  public domElement = this.renderer.domElement;



  constructor(private elRef: ElementRef) {
  }


  ngOnInit(scene: { background: THREE.Texture; }) {

    if (window.innerWidth > 500) {
      this.renderer.setSize(window.innerWidth, 1600);
      this.elRef.nativeElement.querySelector('.threediv').appendChild(this.renderer.domElement);



      this.getStarsMaterial();

      this.getStars(0, 0, -200, 0)
      this.scene.add(this.starsArray[this.starsArray.length - 1])

      this.renderer.domElement.addEventListener('click', () => {
        this.changeAnimate()
      })


      this.chooseAnimate()
    }

  }

  destroyScene() {
    // Supprimer les objets de la scène
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry.dispose();
        if (object.material instanceof THREE.MeshBasicMaterial) {
          this.disposeMaterial(object.material);
        } else if (object.material instanceof THREE.MeshStandardMaterial) {
          this.disposeMaterial(object.material);
        }
        // Ajouter des cas supplémentaires pour d'autres types de matériaux si nécessaire
      }
    });

    // Supprimer la scène du rendu si elle y est attachée
    if (this.renderer && this.scene) {
      this.renderer.dispose();
      this.renderer.forceContextLoss();
    }

  }

  disposeMaterial(material: THREE.MeshBasicMaterial | THREE.MeshStandardMaterial) {
    // Libérer la texture si elle existe
    if (material.map) {
      material.map.dispose();
    }
    // Libérer les autres propriétés du matériau si nécessaire
    material.dispose();
  }

  getStarsGeometry(xOrigin: any, yOrigin: any, zOrigin: any) {
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.getStarsRandomVertices(xOrigin, yOrigin, zOrigin), 3))
    return geometry
  }

  getStarsRandomVertices(xOrigin: number, yOrigin: number, zOrigin: number) {
    const vertices = []
    var xyIndex = Math.max(1600, window.innerWidth)
    var verticesNumber = 1600 * window.innerWidth / 8000;
    for (let i = 0; i < verticesNumber; i++) {
      const x = 2 * xyIndex * Math.random() - xyIndex + xOrigin;
      const y = 2 * xyIndex * Math.random() - xyIndex + yOrigin;
      const z = 400 * Math.random() - 200 + zOrigin;
      vertices.push(x, y, z);
    }
    return vertices
  }

  getStarsMaterial() {

    const starSprite0 = new THREE.TextureLoader().load(`../../assets/img/etoile1-min.png`);

    const starMaterial0 = new THREE.PointsMaterial({ size: 250, sizeAttenuation: true, map: starSprite0, alphaTest: 0.5, transparent: true });

    this.starMaterials.push(starMaterial0)
  }

  getStars(xOrigin: number, yOrigin: number, zOrigin: number, index: number) {
    const stars = new THREE.Points(this.getStarsGeometry(xOrigin, yOrigin, zOrigin), this.starMaterials[index])
    stars.name = `star${this.shaderCount}`;
    this.starsArray.push(stars); // ajouter l'étoile au tableau
    return stars
  }

  animateFast() {

    this.renderer.setSize(window.innerWidth, 1600);

    this.renderer.render(this.scene, this.camera)
    if (this.speed < 3) {
      this.speed = this.speed + 0.08;
    }
    if (this.rotation < 0.0030) {
      this.rotation = this.rotation + 0.00008;
    }
    this.camera.position.z -= this.speed
    this.camera.rotation.z += this.rotation
    if (this.camera.position.z < -400 - 400 * this.secondShaderCount) {
      this.secondShaderCount += 1;

      var elm = this.starsArray.shift()
      if (elm !== undefined) {
        this.scene.remove(elm);
      }

    }
    if (this.camera.position.z < 399 - 400 * this.shaderCount) {

      this.shaderCount += 1;
      this.getStars(0, 0, -400 * this.shaderCount - 200, 0)
      this.scene.add(this.starsArray[this.starsArray.length - 1])

    }
  }

  animate() {

    this.renderer.setSize(window.innerWidth, 1600);

    this.renderer.render(this.scene, this.camera)
    if (this.speed > 0.3) {
      this.speed = this.speed - 0.03;
    }
    if (this.rotation > 0.001) {
      this.rotation = this.rotation - 0.00003;
    }
    this.camera.position.z -= this.speed
    this.camera.rotation.z += this.rotation

    if (this.camera.position.z < -400 - 400 * this.secondShaderCount) {
      this.secondShaderCount += 1;

      var elm = this.starsArray.shift()
      if (elm !== undefined) {
        this.scene.remove(elm);

      }
    }
    if (this.camera.position.z < 399 - 400 * this.shaderCount) {

      this.shaderCount += 1;
      this.getStars(0, 0, -400 * this.shaderCount - 200, 0)
      this.scene.add(this.starsArray[this.starsArray.length - 1])

    }
  }

  chooseAnimate() {
    if (this.animateChoice == 0) {
      this.animate()
    }
    else {
      this.animateFast()
    }
    requestAnimationFrame(() => {
      this.chooseAnimate();
    });
  }

  changeAnimate() {
    if (this.animateChoice == 0) {
      this.animateChoice = 1;
    }
    else {
      this.animateChoice = 0;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy() {
    this.destroyScene();
  }
}