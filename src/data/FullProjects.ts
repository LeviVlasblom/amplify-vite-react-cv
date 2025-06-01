// /data/fullProjects.ts

interface FullProject {
  id: string;
  name: string;
  description: string;
  media?: {
    type: "image" | "video";
    src: string;
  };
  gallery?: string[];
}

export const projects: FullProject[] = [
  {
    id: "smix",
    name: "SMIX",
    description:
      "A touchscreen-powered cocktail mix machine using a Raspberry Pi 4, Python UI, and 3D-printed peristaltic pumps for precise drink dispensing.",
    media: {
      type: "video",
      src: "/assets/media/smix-preview.mp4"
    },
    gallery: [
      "/assets/images/smix1.jpg",
      "/assets/images/smix2.jpg",
      "/assets/images/smix-demo.gif"
    ]
  },
  {
    id: "heatnet",
    name: "HeatNet",
    description:
      "An IoT home system using Zigbee-enabled Arduino sensors to monitor and optimize room temperatures via AWS and a Vue dashboard.",
    media: {
      type: "image",
      src: "/assets/images/heatnet.jpg"
    },
    gallery: [
      "/assets/images/heatnet1.jpg",
      "/assets/images/heatnet2.jpg"
    ]
  },
  {
    id: "exo",
    name: "Voice Assistant EXO",
    description:
      "A voice assistant for developers that runs on Windows and executes system commands, web searches, and app launches through natural voice input.",
    media: {
      type: "video",
      src: "/assets/media/exo-preview.mp4"
    },
    gallery: [
      "/assets/images/exo1.jpg",
      "/assets/images/exo2.jpg",
      "/assets/images/exo-demo.gif"
    ]
  },
  {
    id: "battleships",
    name: "BattleShips",
    description:
      "A multiplayer 3D Battleships game with a lobby, IP-based matchmaking, in-game chat, and one-on-one naval combat against friends.",
    media: {
      type: "image",
      src: "/assets/images/battleships.jpg"
    },
    gallery: [
      "/assets/images/battleships1.jpg",
      "/assets/images/battleships2.jpg"
    ]
  }
];
