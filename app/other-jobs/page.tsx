import CardJob from "../ui/card/card-job";

const section = {
  title: "Otros trabajos",
  description:
    "Desde mi infancia, siento un gran interés por el mundo de la imagen y el audiovisual. A los 19 años empecé a trabajar para una productora especializada en proyectos para museos y eventos culturales, lo que inspiró mi elección de estudiar imagen y sonido. Con más de 10 años de experiencia en varias productoras, mi trayectoria culminó en Mediapro, donde contribuí a la realización de varios documentales. Buscando nuevos horizontes, asumí el desafío de liderar el departamento de eventos en MagmaCultura, aunque la pandemia truncó esta experiencia. Motivada por estos cambios, decidí embarcarme en el estudio de programación para adaptarme a las nuevas oportunidades que se presenten.",
  subtitle: "Resumen de algunos trabajos",
};
const jobs = [
  {
    name: "MagmaCultura",
    charge: "Responsable de producción de eventos y logística",
    period: "Septiembre 2019 - Julio 2021",
    description: [
      "Soporte de logística y compras a los servicios culturales.",
      "Coordinadora y organizadora de las pruebas oficiales de catalán del Institut Ramon Llull en Madrid, Zaragoza y otras localidades del estado español.",
      "Coordinadora y organizadora de las pruebas oficiales de catalán de la Dirección General de Política Lingüística en Barcelona y otras localidades catalanas.",
      "Apoyo en la coordinación y producción de los actos de graduación de la Universidad Abierta de Cataluña (UOC) en Barcelona y Madrid con especial focalización en la gestión de los recursos humanos.",
    ],
    href: "",
  },
  {
    name: "Mediapro",
    charge: "Ayudante de producción",
    period: "Mayo 2018 - Agosto 2019",
    description: [
      "Para los documentales ‘El judici’, ‘Causa Especial 20907’, ‘20S’, ‘ Ferran Latorre, Més enllà dels 8.000’ retransmitidos en TV3.",
      "‘Cruce Talks’, ‘Cruce Afterparty’ y el documental de 10 años del festival Cruïlla con Manuel Huerga.",
    ],
    href: "",
  },
  {
    name: "AFANOC",
    charge: "Responsable de imagen",
    period: "Octubre 2016 - Febrero 2018",
    description: [
      "Coordinación de la imagen corporativa de la entidad, de las fiestas infantiles ‘Posa't la Gorra!’ y del merchandising de la entidad.",
      "Edición de los contenidos de las tres páginas web y la tienda online.",
      "Creación de los contenidos y gestión de las cuentas de Instagram de la entidad.",
    ],
    href: "",
  },
  {
    name: "AVALON",
    charge: "Documentalista, producción y edición",
    period: "Febrero 2014 - Octubre 2016",
    description: [
      "Para la creación de los audiovisuales del museo ‘Etihad Museum’ en Dubai, el museo ‘Gaudí experience’ en BCN y la exposición ‘Barcelona Metrópolis’ en BCN.",
    ],
    href: "",
  },
  {
    name: "La Cofradía de Gràcia",
    charge: "Producción y edición",
    period: "Enero 2011 - Febrero 2014",
    description: [
      "Participación en todo el proceso de producción de las piezas audiovisuales para los museos: ‘Museo de la Sal’ en Gerri de la Sal, ‘Museo del Gas’ en Sabadell , ‘La Capella del Carme’ para el Museo de la Pesca de Palamós, ‘Museu de la Xocolata’ para Turrones Agramunt, ‘Centre Cultural sel Born’ en Barcelona, ‘Ford Malborougth’ en Menorca, y ‘Recinto Modernista de Sant Pau’ en Barcelona.",
      "Montaje de los vídeos de la App ‘Terrassa Aumentada’ para Mnactec en Terrassa.",
      "Diseño gráfico de los interactivos de ‘El Museo de las Culturas’ en BCN.",
      "Ayudante de producción del corto ‘Roda de Mirades’ premiado en el festival de ‘Matatena’ de México",
    ],
    href: "",
  },
  {
    name: "SONO",
    charge: "Auxiliar de realización",
    period: "2010",
    description: [
      "Realización de los audiovisuales para la ‘Expo de Shanghai 2010’.",
    ],
    href: "",
  },
  {
    name: "Lunatus",
    charge: "Auxiliar de producción",
    period: "2007 - 2008",
    description: [
      "Para los audiovisuales de nueve pabellones de la ‘Expo de Zaragoza '08’, el ‘Museo de la Música’ de Barcelona, al ‘Espacio Gaudí’ en Barcelona y al ‘Museo de la Almoina’ en Valencia.",
    ],
    href: "",
  },
];

export default function OtherJobs() {
  return (
    <div className="">
      <h1 className="text-2xl pt-10 pb-7">{section.title}</h1>
      <p className="text-sm columns-1 pb-7 gap-10 md:columns-2">{section.description}</p>
      <h2 className="text-sm font-semibold pb-4">{section.subtitle}:</h2>
      {jobs.map((job) => {
        return <CardJob key={job.name} {...job} />;
      })}
    </div>
  );
}
