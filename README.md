# Virtual Gallery

An interactive 3D virtual art gallery built with React, Three.js, and Tailwind CSS. Explore a 3D museum space, browse artwork on gallery walls, and inspect pieces in detail.

## Tech Stack

- **Frontend:** React 19, Three.js, @react-three/fiber, @react-three/drei
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Backend:** PHP (MySQL)

## Features

- First-person 3D navigation (WASD + mouse look)
- Artwork displayed on gallery walls with spot lighting
- Hover to see artwork titles (reticle-based interaction)
- Click to open a detail modal with full-resolution image, description, year, category, and download link
- Loading and error states for asset fetching

## Getting Started

### Prerequisites

- Node.js
- PHP (for the asset API)
- MySQL database

### Setup

1. Clone the repo
2. Install dependencies:

```bash
npm install
```

3. Set up the MySQL database:

   - Create a database named `museum`
   - Import the provided schema and sample data:

   ```bash
   mysql -u root -p museum < museum.sql
   ```

   - Update the database credentials in `api/fetch_assets.php`

4. Start the development servers (Vite + PHP):

```bash
npm run dev
```

This runs both Vite (on port 5173) and the PHP server (on port 8000) concurrently. Vite proxies `/api` requests to the PHP backend.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## Project Structure

```
museum/
├── api/
│   └── fetch_assets.php      # PHP endpoint to fetch gallery assets from MySQL
├── src/
│   ├── components/
│   │   ├── 2d/
│   │   │   ├── DetailModal.jsx  # Artwork detail overlay
│   │   │   └── UIOverlay.jsx    # HUD, reticle, loading/error states
│   │   └── 3d/
│   │       ├── Modules/
│   │       │   ├── ArtFrame.jsx     # 3D art frame with spotlight
│   │       │   ├── HallwayCell.jsx  # Gallery room geometry
│   │       │   └── constants.js     # Layout constants
│   │       ├── shared/
│   │       │   ├── collisionGrid.js
│   │       │   ├── frameMeshes.js
│   │       │   └── hoverState.js
│   │       ├── InteractionRaycaster.jsx
│   │       ├── PlayerControls.jsx   # FPS movement + pointer lock
│   │       ├── SceneContainer.jsx   # Canvas + scene setup
│   │       └── WorldBuilder.jsx     # Assembles gallery layout
│   ├── context/
│   │   └── GalleryContext.jsx  # Fetches assets, manages state
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Controls

| Key | Action |
|-----|--------|
| WASD | Move through the gallery |
| Mouse | Look around (click to lock pointer) |
| Click (on artwork) | Open detail modal |
| ESC | Close detail modal / release pointer |
# 3d-gallery-museum
