# Aethra — Metalworks Portfolio & Consultation Booking System

Aethra is a web-based platform designed to showcase metalwork products and help customers explore designs and request consultations online. It provides a digital portfolio for metal gates, grills, and railings, along with tools for managing consultation bookings.

## Features

- **Product Gallery** — Browse metalwork products organized into categories such as gates, grills, and railings.
- **3D Product Visualization** — View supported product models in 3D to better understand their design and appearance.
- **Consultation Booking** — Submit consultation requests through an online booking form.
- **Booking Management** — Allow administrators to view and manage customer consultation requests.
- **Responsive Design** — Access the platform across desktop, tablet, and mobile devices.
- **Dynamic Gallery** — Display product images and related visual content through a dynamically populated gallery.
- **Interactive Image Preview** — Open gallery images in a larger preview for easier viewing.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Database:** Supabase
- **Deployment:** Vercel
- **3D Assets:** GLB and USDZ model formats

## Project Structure

```text
Aethra/
├── css/
│   ├── global.css
│   └── index.css
├── js/
│   ├── index.js
│   ├── header.js
│   └── footer.js
├── hompage_photos/
│   └── Product and gallery images
├── models/
│   └── 3D product models
├── index.html
└── README.md
```

*Note: The directory structure above represents the main files referenced by the website. Other files and directories may exist in the project.*

## 3D Model Configuration

The system can reference 3D models using GLB and USDZ files. When adding a supported product model, place the corresponding files in the `models/` directory and register their paths in the model configuration.

Example:

```javascript
const models = {
    gate1: {
        glb: "/models/gate1.glb",
        usdz: "/models/gate1.usdz",
    },
    grill_white: {
        glb: "/models/grill_white.glb",
        usdz: "/models/grill_white.usdz",
    },
};
```

Use the appropriate model identifier when connecting a product to its corresponding 3D assets. Ensure the file paths and filenames match the actual files in the project.

## Installation and Setup

### Prerequisites

- Node.js and npm
- A Supabase project
- Git

### Setup

1. Clone or download the project repository.
2. Install the dependencies using the project's package manager and configuration files.
3. Configure the required environment variables for the backend and database connection.
4. Start the application using the development command defined in `package.json`.
5. Open the local development URL in your browser.

### Deployment

The application can be deployed to Vercel. Configure the required environment variables and deployment settings before publishing the project.

## Future Improvements

- Improve product filtering and search.
- Enhance the 3D product viewing experience.
- Add booking status notifications.
- Improve administrative booking management.
- Expand the product catalog and gallery.

## License

Specify the applicable license for this project before distributing or modifying it.
```

**Note:** The README retains the system's purpose, features, stack, project structure, 3D model configuration, and setup instructions. The installation and directory details should be verified against your actual repository before publishing.


[![Architecture diagram](https://gitdiagram.com/diagram-badge.svg)](https://gitdiagram.com/yurei04/aethra?utm_source=readme&utm_medium=badge)
