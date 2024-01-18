import CardJob from "../ui/card/card-job";
import SectionHeader from "../ui/section/section-header";
const section = {
  title: "Formación",
};

const jobs = [
  {
    name: "Factoría F5",
    charge: "Bootcamp Full Stack Developer (850h)",
    period: "Octubre 2021 - Abril 2022",
    description: [
      "Curso intensivo donde adquirí habilidades prácticas trabajando con JavaScript, React.js y Vue.js en el frontend, y con PHP y Java en el backend. Realizamos proyectos colaborativos con metodologías ágiles, y gracias a una beca otorgada por Adevinta Spain, tuve la oportunidad de ampliar mis conocimientos de manera integral",
    ],
    href: "https://factoriaf5.org/",
  },
  {
    name: "Escuela de Project Manager Digital",
    charge: "Project Manager Digital - Programa Raíz",
    period: "2021",
    description: [
      "Formación enfocada en aspectos prácticos como la gestión de proyectos, operaciones, métricas y el desarrollo del equipo humano. La experiencia me proporcionó herramientas esenciales para la gestión eficaz en el entorno digital.",
    ],
    href: "https://escuelaprojectmanagerdigital.com/",
  },
  {
    name: "ITES Imagen y Sonido",
    charge: "CFGS Realización de proyectos audiovisuales y espectáculos",
    period: "2009 - 2011",
    description: [
      "Formación práctica en producción audiovisual, postproducción, y diseño sonoro. La formación abarcó aspectos esenciales para el manejo técnico y creativo en el ámbito de la imagen y el sonido.",
    ],
    href: "https://www.ites.es/es/inicio/",
  },
];
export default function Studies() {
  return (
    <main>
      <SectionHeader {...section} />
      <div className="flex flex-col gap-5">
        {jobs.map((job) => {
          return <CardJob key={job.name} {...job} />;
        })}
      </div>
    </main>
  );
}
