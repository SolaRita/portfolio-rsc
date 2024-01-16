
import CardJob from "../ui/card/card-job";

const section = {
  title: "Trabajos de programación",
  description:
    "Desde mi infancia, siento un gran interés por el mundo de la imagen y el audiovisual. A los 19 años empecé a trabajar para una productora especializada en proyectos para museos y eventos culturales, lo que inspiró mi elección de estudiar imagen y sonido. Con más de 10 años de experiencia en varias productoras, mi trayectoria culminó en Mediapro, donde contribuí a la realización de varios documentales. Buscando nuevos horizontes, asumí el desafío de liderar el departamento de eventos en MagmaCultura, aunque la pandemia truncó esta experiencia. Motivada por estos cambios, decidí embarcarme en el estudio de programación para adaptarme a las nuevas oportunidades que se presenten.",
  subtitle: "Resumen de algunos trabajos",
};
const jobs = [
    {
      name: "Apartool",
      charge: "FrontEnd developer",
      period: "Noviembre 2022 - Diciembre 2023",
      description: [
        "",
        
      ],
      href: "",
    },
    {
        name: "Adevinta",
        charge: "BackEnd Engineer",
        period: "Abril 2022 - Noviembre 2022",
        description: [
          "",
          
        ],
        href: "",
      },
]
export default function DevJobs () {
    return (
        <div className="">
      <h1 className="text-2xl pt-10 pb-7 text-red-800">{section.title}</h1>
      {/* <p className="text-sm columns-1 pb-9 gap-10 md:columns-2">
        {section.description}
      </p>
      <h2 className="text-sm font-semibold pb-4">{section.subtitle}:</h2> */}
      <div className="flex flex-col gap-5">
        {jobs.map((job) => {
          return <CardJob key={job.name} {...job} />;
        })}
      </div>
    </div>
    )
}