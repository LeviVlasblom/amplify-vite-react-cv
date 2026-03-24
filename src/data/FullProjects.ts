import smixImage from "../assets/images/smix.jpeg";
import heatnetImage from "../assets/images/heatnet.png";
import exoImage from "../assets/images/exo.png";
import battleshipsImage from "../assets/images/battleships.png";

export interface GalleryItem {
  type: "image" | "video" | "gif";
  src: string;
  caption?: string;
}

export interface FullProject {
  id: string;
  name: string;
  description: string;
  tech: string[];
  coverImage: string;
  github: string;
  demo?: string;
  // Voeg hier extra afbeeldingen, videos of gifs toe per project
  gallery?: GalleryItem[];
}

export const projects: FullProject[] = [
  {
    id: "smix",
    name: "SMIX",
    description:
      "Een touchscreen-aangedreven cocktailmixmachine met een Raspberry Pi 4, Python UI en 3D-geprinte peristaltische pompen voor nauwkeurig dranken serveren. Het systeem stuurt acht pompen aan via GPIO-pinnen en berekent realtime mengverhoudingen per drankje.",
    tech: ["Raspberry Pi", "Python", "Tkinter", "NumPy", "3D Printing", "GPIO"],
    coverImage: smixImage,
    github: "https://github.com/LeviVlasblom/SmartBartenderSMIX",
    gallery: [
      { type: "image", src: smixImage, caption: "SMIX machine" },
      // Voeg hier meer toe: { type: "video", src: "/media/smix-demo.mp4", caption: "Demo" }
    ],
  },
  {
    id: "heatnet",
    name: "HeatNet",
    description:
      "Een IoT-thuissysteem met Zigbee-Arduino-sensoren om kamertemperaturen te monitoren en te optimaliseren via AWS en een Vue-dashboard. Sensordata wordt via MQTT gepubliceerd naar AWS IoT Core, verwerkt door Lambda-functies en realtime getoond in een Vue-interface.",
    tech: ["Arduino", "Zigbee", "AWS IoT", "Vue", "TypeScript", "MQTT", "Lambda", "Tailwind"],
    coverImage: heatnetImage,
    github: "https://github.com/LeviVlasblom/HeatNet",
    gallery: [
      { type: "image", src: heatnetImage, caption: "HeatNet dashboard" },
    ],
  },
  {
    id: "exo",
    name: "Voice Assistant EXO",
    description:
      "Een spraakassistent voor developers die op Windows draait en systeemopdrachten, webzoekopdrachten en app-starts uitvoert via natuurlijke spraakinvoer. EXO gebruikt de Windows Speech Recognition API en een zelfgebouwde command-parser voor snelle respons.",
    tech: ["C#", "Speech Recognition", "Windows API", ".NET"],
    coverImage: exoImage,
    github: "https://github.com/LeviVlasblom/VoiceAssistantEXO",
    gallery: [
      { type: "image", src: exoImage, caption: "EXO interface" },
    ],
  },
  {
    id: "battleships",
    name: "BattleShips",
    description:
      "Een multiplayer 3D Battleships-spel met een lobby, IP-gebaseerde matchmaking, in-game chat en een-op-een zeegevechten met vrienden. Het spel gebruikt een custom netwerklayer voor synchroon spelbeheer en 3D-graphics met vector math voor schippositionering.",
    tech: ["C#", "Networking", "3D Graphics", "Vector Math", "WinForms"],
    coverImage: battleshipsImage,
    github: "https://github.com/Kstrik/CSharp-Eindopdracht-Periode-5",
    gallery: [
      { type: "image", src: battleshipsImage, caption: "BattleShips gameplay" },
    ],
  },
];
