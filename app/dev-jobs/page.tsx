import CardJob from "../ui/card/card-job";
import SectionHeader from "../ui/section/section-header";

const section = {
  title: "Trabajos de programación",
  description: [
    "Con años de experiencia en la industria audiovisual y de eventos, redirigí mi carrera hacia el desarrollo. Focalizada en React y Angular, mi desarrollo combina funcionalidad, diseño y accesibilidad.",
    "Aunque mi experiencia es breve, soy una profesional comprometida con el aprendizaje continuo. Busco contribuir con creatividad y habilidades técnicas en entornos que valoran la excelencia técnica y la experiencia del usuario.",
    " Mi objetivo es crecer y aportar al mundo del desarrollo FrontEnd.",
  ],
  subtitle: "",
};
const jobs = [
  {
    name: "Apartool",
    charge: "FrontEnd developer",
    period: "Noviembre 2022 - Diciembre 2023",
    description: [
      "Desarrollo de la plataforma interna con Angular 14.",
      " Frameworks: Angular Material y Tailwind.",
      "Control de versiones con GitLab.",
      "Organización del equipo con metodologías ágiles con Jira y Notion.",
      "Trabajo en equipo con metodologías Agile y SCRUM con JIRA y Notion.",
    ],
    href: "https://www.apartool.com/",
  },
  {
    name: "Adevinta Spain",
    charge: "BackEnd Engineer",
    period: "Abril 2022 - Noviembre 2022",
    description: [
      "Equipo de usuarios privados en Real Estate (Fotocasa y Habitaclia).",
      "Microservicios en Spring Boot con Kotlin y Java / Monolito en C#.",
      "TDD, test unitarios y de integración con JUnit, Mockito...",
      "Arquitectura hexagonal.",
      "CI/CD con GitHub, Gradle, Travis, Jenkins, Spinnaker.",
      "Métricas con Datadog y ElasticSearch.",
      "Trabajo en equipo con metodologías Agile y OKRs con JIRA.",
    ],
    href: "https://adevinta.es/",
  },
];
export default function DevJobs() {
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
