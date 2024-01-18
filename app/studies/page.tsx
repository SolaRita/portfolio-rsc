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
    description: [""],
    href: "https://factoriaf5.org/",
  },
  {
    name: "Escuela de Project Manager Digital",
    charge: "Project Manager Digital - Programa Raíz",
    period: "2021",
    description: [""],
    href: "https://escuelaprojectmanagerdigital.com/",
  },
  {
    name: "ITES Imagen y Sonido",
    charge: "CFGS Realización de proyectos audiovisuales y espectáculos",
    period: "(2009 - 2011",
    description: [""],
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
