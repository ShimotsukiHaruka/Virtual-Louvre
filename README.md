# Virtual Louvre: A Web-Based Immersive Art Experience

A lightweight, high-fidelity virtual museum experience built with **Three.js**. This project allows users to explore iconic museum spaces, such as the Grand Gallery and the Sculpture Corridor, directly in their web browser with immersive controls and spatial audio.

## 🏛️ Gallery Previews

### 1. The Grand Gallery (`Grand Gallery.html`)
<img width="2559" height="1439" alt="3" src="https://github.com/user-attachments/assets/4afd93a8-a049-41c0-aae1-95a4eb2bad21" />

Designed with a warm, gold-accented UI, this scene focuses on 2D art masterpieces. It uses custom texture mapping to recreate the feeling of walking through the Louvre's most famous wing.

### 2. Gypsum Sculpture Corridor (`Green.html`)
<img width="2147" height="1325" alt="1" src="https://github.com/user-attachments/assets/9427dafc-15b9-4400-abd4-1ed3434384c0" />
<img width="2470" height="1439" alt="2" src="https://github.com/user-attachments/assets/770cc1ce-1bae-4f29-9cda-a3da90ee9fa5" />

This scene features a "Light Mode" aesthetic with spotlighting on 3D sculptures. It demonstrates the ability to load and render complex 3D geometry (`.gltf` / `.glb`) within a web environment.

## 🌟 Features

* **Immersive Navigation:** Uses `PointerLockControls` for a first-person perspective, providing a gaming-like exploration experience.
* **Two Unique Environments:**
* **The Grand Gallery:** A classical hall featuring famous paintings (Mona Lisa, The Coronation of Napoleon) with realistic wall textures and ambient lighting.
* **Gypsum Sculpture Corridor:** A high-contrast, atmospheric space utilizing GLTF models to showcase classical sculptures.


* **Dynamic Audio:** Integrated footstep sounds that sync with player movement to enhance immersion.
* **Responsive Design:** Fully adaptive to different screen sizes with real-time camera aspect ratio updates.
* **Physical Boundaries:** Collision-like boundary logic to keep the user within the gallery walls.

## 🛠️ Tech Stack

* **Core Engine:** [Three.js](https://threejs.org/) (R128)
* **Language:** JavaScript (ES6+), HTML5, CSS3
* **Asset Loading:** GLTFLoader for 3D models
* **Controls:** PointerLock API

---

## 🚀 Getting Started

### Prerequisites

You don't need to install any heavy software. A modern web browser (Chrome, Firefox, or Edge) is all you need.

### Running the Project

1. Clone this repository or download the source files.
2. Since the project uses external assets and ES6 modules (in some versions), it is best viewed through a local server.
* **Using VS Code:** Install the "Live Server" extension, right-click `Grand Gallery.html`, and select "Open with Live Server".
* **Using Python:** Run `python -m http.server` in the project folder.


3. Click anywhere on the screen to "Enter" the museum and lock your cursor.

### Controls

* **W / A / S / D** or **Arrow Keys**: Move around the gallery.
* **Mouse**: Look around (360-degree view).
* **ESC**: Unlock the mouse and exit the immersive mode.

## 📜 License

MIT

