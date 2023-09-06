import { platos } from './platos';

export const PLATILLOS: platos[] = [
/* Mexico 10*/
{id:10 ,nombre: "Tacos al pastor", descripcion: " Tortillas de maíz, carne de cerdo marinada con achiote y especias, piña, cebolla, cilantro, salsa.", 
historia: "Inspirados en la cocina árabe, los tacos al pastor se convirtieron en un ícono mexicano. La técnica de asar carne en un trompo vertical fue adoptada y transformada con sabores locales.", 
preparacion: "1 Marinar la carne de cerdo con achiote, especias, ajo y jugo de piña. 2 Asar la carne en un trompo vertical. 3 Servir en tortillas con cebolla, cilantro y salsa.", 
pais: "México", imagen: "",},

{id:11 ,nombre: "Mole poblano", descripcion: "Chiles secos, chocolate, especias, almendras, pasas, pollo, tortillas.", 
historia: "El mole poblano es una rica mezcla de influencias indígenas y europeas. Se dice que se creó en el convento de Santa Rosa en Puebla, combinando ingredientes locales con los traídos por los colonizadores.", 
preparacion: "1 Tostar chiles, especias y semillas.2 Licuar con chocolate, almendras y otros ingredientes. 3 Cocinar la salsa y servirla sobre pollo cocido.", 
pais: "México", imagen: "",},

/* Italia 20*/
{id:20 ,nombre: "Pizza Margherita", descripcion: "Masa de pizza, tomate, mozzarella fresca, albahaca, aceite de oliva.", 
historia: "Creada en honor a la reina Margarita de Italia, esta pizza representa los colores de la bandera italiana. Fue elaborada por el pizzero Raffaele Esposito en 1889.", 
preparacion: "1 Extender la masa de pizza en forma circular. 2 Cubrir con salsa de tomate y mozzarella. 3 Hornear hasta que esté crujiente y dorada. 4 Agregar hojas de albahaca fresca y un chorrito de aceite de oliva antes de servir.", 
pais: "Italia", imagen: "",},

{id:21 ,nombre: "Pasta Carbonara", descripcion: "Espaguetis, huevo, panceta, queso Pecorino Romano, pimienta negra.", 
historia: "Aunque su origen es incierto, se cree que la pasta carbonara surgió después de la Segunda Guerra Mundial, cuando los soldados estadounidenses combinaron sus raciones de huevo y tocino con la pasta italiana.", 
preparacion: "1 Cocinar la panceta hasta que esté crujiente. 2 Cocinar los espaguetis al dente. 3 Mezclar huevo, queso y pimienta en un tazón. 4 Escurrir la pasta y mezclar con la mezcla de huevo y panceta. 5 Servir inmediatamente.", 
pais: "Italia", imagen: "",},

/* Japon 30*/
{id:30 ,nombre: "Sushi", descripcion: "Arroz sazonado con vinagre, pescado fresco, alga nori, vegetales.", 
historia: "El sushi tiene una larga historia en Japón, comenzando como una forma de preservar el pescado en arroz fermentado. Con el tiempo, evolucionó hacia el sushi moderno que conocemos hoy.", 
preparacion: "1 Cocinar el arroz y sazonarlo con vinagre, azúcar y sal. 2 Cortar el pescado en láminas finas. 3 Colocar una capa de arroz sobre un trozo de alga nori. 4 Agregar el pescado y otros ingredientes. 5 Enrollar y cortar en piezas individuales. ", 
pais: "Japon", imagen: "",},

{id:31 ,nombre: "Ramen", descripcion: "Fideos de trigo, caldo de huesos, cerdo, huevo, cebolla verde.", 
historia: "Los fideos ramen tienen orígenes chinos, pero Japón los adoptó y adaptó a su propia cultura culinaria. Se convirtieron en un alimento popular y accesible en la posguerra.", 
preparacion: "1 Cocinar los fideos según las instrucciones del paquete. 2 Preparar un caldo de huesos o vegetales. 3 Cocinar el cerdo y hervir un huevo hasta que estén listos. 4 Colocar los fideos en un tazón, agregar el caldo caliente y los ingredientes cocidos. 5 Decorar con cebolla verde antes de servir.", 
pais: "Japon", imagen: "",},

/* India 40*/
{id:40 ,nombre: "Curry de pollo", descripcion: "Pollo, tomate, cebolla, especias (cúrcuma, comino, cilantro), leche de coco.", 
historia: "El curry es una parte esencial de la cocina india, con una larga historia que se remonta a las antiguas rutas de especias. Cada región de India tiene su propia versión única de curry.", 
preparacion: "1 Saltear cebolla y especias en aceite hasta que estén fragantes. 2 Agregar tomate y cocinar hasta que se ablande. 3 Añadir el pollo y dorar ligeramente. 4 Agregar leche de coco y cocinar a fuego lento hasta que el pollo esté tierno. 5 Servir con arroz o pan naan.", 
pais: "India", imagen: "",},

{id:41 ,nombre: "Samosas", descripcion: "Masa de samosa, papa, guisantes, especias (cúrcuma, comino, garam masala), aceite.", 
historia: "Las samosas se originaron en el Medio Oriente y fueron llevadas a la India por comerciantes. Con el tiempo, se convirtieron en una popular comida callejera y festiva.", 
preparacion: "1 Cocinar las papas y guisantes hasta que estén tiernos. 2 Saltear especias en aceite hasta que estén fragantes. 3 Mezclar las papas y guisantes con las especias. 4 Rellenar la masa de samosa y doblar en forma triangular. 5 Freír hasta que estén doradas y crujientes.", 
pais: "India", imagen: "",},

/* China 50*/
{id:50 ,nombre: "Arroz frito", descripcion: " Arroz cocido, vegetales (zanahorias, guisantes), huevo, carne (pollo, cerdo o camarones), salsa de soja.", 
historia: "El arroz frito es una parte esencial de la cocina china, nacida de la necesidad de aprovechar los sobrantes de arroz. Con el tiempo, se convirtió en una deliciosa especialidad.", 
preparacion: "1 Saltear la carne y los vegetales en aceite. 2 Agregar el huevo batido y cocinar revolviendo. 3 Incorporar el arroz cocido y salsa de soja. 4 Revolver y cocinar hasta que esté caliente y bien mezclado.", 
pais: "China", imagen: "",},

{id:51 ,nombre: "Dim Sum", descripcion: " Diversos tipos de bocados (rollos de primavera, dumplings, albóndigas), rellenos variados (carne, mariscos, vegetales).", 
historia: "Dim Sum es una tradición de la hora del té en China, con una gran variedad de pequeños platos servidos en cestas de bambú. Se originó en las antiguas casas de té de la Ruta de la Seda.", 
preparacion: "1Preparar la masa y los rellenos. 2Rellenar la masa con los ingredientes y darles forma. 3Cocinar al vapor o freír los dim sum. 4Servir con salsas como salsa de soja y vinagre de arroz.", 
pais: "China", imagen: "",},

/* Francia 60*/
{id:60 ,nombre: "Ratatouille", descripcion: " Berenjena, calabacín, pimientos, tomate, cebolla, ajo, hierbas provenzales.", 
historia: "Ratatouille es un plato tradicional de la región de Provenza en Francia. Originalmente era un plato humilde de agricultores que utilizaban ingredientes de temporada.", 
preparacion: "1 Cortar todas las verduras en rodajas finas. 2 Saltear cebolla y ajo en aceite hasta que estén dorados. 3 Agregar las verduras y cocinar a fuego lento hasta que estén tiernas. 4 Condimentar con hierbas provenzales y servir caliente.", 
pais: "Francia", imagen: "",},

{id:61 ,nombre: "Croissant", descripcion: "Masa hojaldrada, mantequilla.", 
historia: " El croissant, famoso por su hojaldrado y sabor a mantequilla, tiene sus raíces en la repostería vienesa. Fue introducido en Francia en el siglo XIX y se convirtió en un clásico de la panadería francesa.", 
preparacion: "1 Extender la masa hojaldrada en láminas finas. 2 Colocar mantequilla en el centro y doblar la masa en capas. 3 Cortar en triángulos y enrollar para dar forma. 4 Hornear hasta que estén dorados y crujientes.", 
pais: "Francia", imagen: "",},

/* España 70*/
{id:70 ,nombre: "Paella", descripcion: "Arroz, azafrán, pollo, conejo, mariscos (calamar, langostinos, mejillones), pimientos, guisantes.", 
historia: "La paella es originaria de la región de Valencia y se cocinaba en el campo con ingredientes locales. Hoy en día, es un plato emblemático de la cocina española.", 
preparacion: "1 Sofreír el pollo y conejo en aceite. 2 Agregar pimientos, azafrán y arroz, y cocinar brevemente. 3 Añadir caldo caliente y cocinar a fuego lento. 4 Agregar mariscos y guisantes, cocinar hasta que el arroz esté tierno.", 
pais: "España", imagen: "",},

{id:71 ,nombre: "Tapas", descripcion: " Variedad de pequeños platos (jamón serrano, aceitunas, queso manchego, albóndigas, calamares fritos).", 
historia: "Las tapas son una tradición española de servir pequeños aperitivos con bebidas. Tienen sus raíces en el antiguo hábito de cubrir las bebidas con una rebanada de pan para evitar insectos.", 
preparacion: "1 Preparar una selección de ingredientes como jamón, queso y aceitunas. 2 Colocar en pequeños platos y servir con pan y aceite de oliva.", 
pais: "España", imagen: "",},

/* Tailandia 80*/
{id:80 ,nombre: "Pad Thai", descripcion: "Fideos de arroz, camarones o pollo, tofu, huevo, cacahuetes, brotes de soja, cebolla verde.", 
historia: " Pad Thai es un plato icónico de la comida tailandesa, con influencias chinas y malayas. Se popularizó en Tailandia durante la Segunda Guerra Mundial como una respuesta a la escasez de arroz.", 
preparacion: "1 Saltear camarones o pollo en aceite. 2 Agregar tofu, huevo y fideos de arroz. 3 Mezclar con salsa de tamarindo, pescado y azúcar. 4 Agregar brotes de soja y cacahuetes antes de servir.", 
pais: "Tailandia", imagen: "",},

{id:81 ,nombre: "Tom Kha Gai", descripcion: "Caldo de coco, pollo, galanga, hojas de lima kaffir, chiles, cilantro.", 
historia: "Tom Kha Gai es una sopa aromática y cremosa de la cocina tailandesa. Combina los sabores del coco y las hierbas locales en una armoniosa mezcla.", 
preparacion: "1 Cocinar el caldo de coco con galanga y hojas de lima kaffir. 2 Agregar pollo y chiles, cocinar hasta que el pollo esté hecho. 3 Condimentar con salsa de pescado y azúcar. 4 Servir caliente, decorado con cilantro.", 
pais: "Tailandia", imagen: "",},

/* Turquía 90*/
{id:90 ,nombre: "Kebab", descripcion: "Carne (cordero, pollo, ternera), especias, verduras, pan pita.", 
historia: " Los kebabs son una parte integral de la cocina turca y se han diversificado en muchas variedades. Tienen raíces históricas que se remontan al Imperio Otomano.", 
preparacion: "1 Marinar la carne con especias y hierbas. 2 Ensamblar la carne en brochetas y asar a la parrilla. 3 Servir dentro de pan pita con verduras y salsa.", 
pais: "Turquía", imagen: "",},

{id:91 ,nombre: "Baklava", descripcion: "Masa filo, nueces, miel, azúcar, mantequilla.", 
historia: " El baklava es un dulce tradicional de la región otomana, hecho con capas finas de masa filo y nueces. Su origen se disputa entre Turquía, Grecia y otros países de la región.", 
preparacion: "1 Extender capas de masa filo en un molde. 2 Agregar una mezcla de nueces y azúcar entre las capas. 3 Hornear hasta que esté dorado y crujiente. 4 Verter miel caliente sobre el baklava enfriado.", 
pais: "Turquía", imagen: "",},

/* Corea del Sur  100*/
{id:100 ,nombre: "Bulgogi", descripcion: "Carne de res marinada, cebolla, ajo, pera coreana, salsa de soja, sésamo.", 
historia: "El bulgogi es un plato popular de barbacoa coreana que se ha disfrutado durante siglos. Originalmente, se preparaba para celebraciones y ocasiones especiales.", 
preparacion: "1 Marinar la carne en una mezcla de salsa de soja, azúcar, ajo y pera coreana. 2 Asar la carne a la parrilla hasta que esté cocida. 3 Servir con arroz y guarniciones.", 
pais: "Corea del Sur", imagen: "",},

{id:101 ,nombre: "Kimchi", descripcion: "Col china, rábano, pasta de pimiento rojo, ajo, jengibre.", 
historia: "El kimchi es un plato fundamental en la dieta coreana. Fue desarrollado como una forma de preservar verduras durante los fríos inviernos y ha evolucionado en una tradición cultural.", 
preparacion: "1 Cortar y salar la col china y rábanos. 2 Enjuagar y mezclar con pasta de pimiento rojo, ajo y jengibre. 3 Fermentar a temperatura ambiente durante unos días. 4 Refrigera y sirve como acompañamiento.", 
pais: "Corea del Sur", imagen: "",},
]