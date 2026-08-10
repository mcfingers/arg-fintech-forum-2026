import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText, TextPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

// Registrar plugins una única vez para toda la app
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother, TextPlugin);

// Configuración global opcional
gsap.config({
  nullTargetWarn: false, // evita warnings si un selector no matchea nada
});

ScrollTrigger.config({
  ignoreMobileResize: true, // evita refresh innecesario al mostrar/ocultar la barra de URL en mobile
});

// Re-exportamos para importar todo desde un solo lugar
export { gsap, ScrollTrigger, SplitText, ScrollSmoother, TextPlugin, useGSAP };
