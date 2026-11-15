# MusiExplora · Musicala

Guía web de Musicala para docentes que quieren conocer la estimulación artística de **0 a 3 años** antes de un encuentro.

## Cómo abrir

1. Descomprime el ZIP completo en una carpeta.
2. Haz doble clic en **index.html**. Funciona en Chrome, Edge, Firefox y Safari modernos, sin instalar dependencias y sin internet.
3. Empieza por la introducción y consulta la guía por edades, los ejemplos y las pautas de cuidado. El planificador y la bitácora están en Recursos docentes.

## Qué incluye

- Introducción a la estimulación artística, sus lenguajes y las formas de participar en un primer encuentro.
- Logo horizontal oficial, paleta del manual de marca e imágenes editoriales generadas para la guía.

- 5 ventanas de edad: 0–6, 6–12, 12–18, 18–24 y 24–36 meses.
- 30 experiencias propias de música, movimiento, artes visuales, teatro y exploración sensorial.
- En cada experiencia: objetivo, materiales, preparación, pasos, frase de mediación, qué observar, adaptación y precaución.
- Guía pedagógica: método de acompañamiento, situaciones habituales y autoevaluación de criterio.
- Generador flexible de clases con posibilidad de cambiar actividades, imprimir / guardar PDF desde el navegador, copiar o exportar texto.
- Bitácora local con exportación JSON, eliminación individual y limpieza.
- Lista de verificación de seguridad para antes de clase.
- Funciona offline. Si se sirve en HTTPS, ofrece instalación como app web progresiva (PWA) mediante su manifest y service worker.

## Privacidad

MusiExplora no transmite datos a servidores externos. Favoritos, clases y bitácoras se guardan en localStorage en el navegador utilizado. No registra nombres completos de niños; por seguridad eviten escribir información personal sensible en campos libres. Si se borran datos del navegador, podrían perderse los registros. Exporten las notas periódicamente.

## Para compartir en Firebase Hosting

Publica **todo el contenido de esta carpeta** como directorio público de Firebase Hosting. Por ejemplo, cópialo dentro de `public/` de tu proyecto y despliega con `firebase deploy --only hosting`. Si no existe configuración Firebase, antes debes crearla usando la CLI de Firebase y el proyecto correspondiente. Se utiliza el `service worker` solo cuando la app se sirve desde `http(s)`. Desde `file://` el aplicativo sigue siendo completamente utilizable, pero no se instala como PWA.

## Criterios pedagógicos y advertencias

- Edad orientativa ≠ nivel obligatorio. Observa las capacidades, preferencias y necesidades reales de cada niño.
- La participación puede ser mirar, escuchar, gesticular, moverse, vocalizar, elegir o descansar.
- No se obliga el contacto con texturas, ni se exige un producto terminado.
- Nunca usar bolitas de hidrogel, piezas pequeñas, globos, elementos sueltos o materiales incompatibles con el rango de edad.
- “No tóxico” no significa comestible: seguir etiquetas originales y normas institucionales. Supervisión permanente.
- Respetar los protocolos locales de protección, higiene, primeros auxilios y supervisión docente.

## Fuentes orientativas (también enlazadas en la app)

- NAEYC · Prácticas apropiadas para bebés y niños pequeños: https://www.naeyc.org/resources/topics/dap/infants-and-toddlers
- NAEYC · Definición de educación apropiada al desarrollo: https://www.naeyc.org/resources/position-statements/dap/definition/
- CDC · Hitos del desarrollo: https://www.cdc.gov/act-early/milestones/
- HealthyChildren (AAP) · Materiales artísticos seguros: https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Choosing-Safe-Arts-and-Craft-Supplies.aspx
- CPSC · Bolitas de hidrogel: https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Water-Beads-Information-Center
- AAP · Exposición al ruido: https://www.aap.org/en/patient-care/environmental-health/promoting-healthy-environments-for-children/noise/

**Este aplicativo es un recurso educativo y no reemplaza protocolos de seguridad ni la evaluación individual del desarrollo.**

Versión 2.0 · noviembre 2026 · Musicala.
