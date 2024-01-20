import CardIcons from "./ui/card/card-icons";
import SectionHeader from "./ui/section/section-header";

const section = {
  title: "Sobre mi",
  description: [
    "Después de dedicar algunos años a la industria audiovisual y de eventos, decidí redirigir mi carrera hacia el apasionante mundo del desarrollo. Mi experiencia previa me ha proporcionado habilidades esenciales, como la valoración del trabajo en equipo, la gestión eficiente del tiempo, la capacidad de priorizar tareas y la adaptabilidad a los cambios.",
    "Con determinación, he explorado diversas oportunidades en el ámbito del desarrollo, consolidando mi interés y compromiso con la especialización como desarrolladora FrontEnd. Mi enfoque actual se centra en la librería React, donde estoy llevando a cabo proyectos independientes para profundizar en mis habilidades.",
    "Mi búsqueda va más allá de la funcionalidad; me apasiona la estética y la importancia de la accesibilidad en los proyectos. A pesar de mi relativa corta experiencia, me considero una profesional comprometida y seria, con un firme deseo de aprendizaje continuo en este dinámico sector.",
    "Estoy entusiasmada por contribuir con mi creatividad y habilidades técnicas en entornos que valoren tanto la excelencia técnica como la experiencia del usuario. Mi objetivo es seguir creciendo y aportando en el fascinante mundo del desarrollo FrontEnd.",
  ],
};

const stackIcons = [
  {
    title: "Lenguajes de programación",
    icons: [
      {
        name: "JavaScript",
        icon: "javascript",
      },
      {
        name: "TypeScript",
        icon: "typeScript",
      },
      {
        name: "HTML5",
        icon: "html",
      },
      {
        name: "CSS3",
        icon: "css",
      },
      {
        name: "Sass",
        icon: "sass",
      },
    ],
  },
  {
    title: "Frameworks y librerías de JS",
    icons: [
      {
        name: "Angular.JS",
        icon: "angular",
      },
      {
        name: "Next.JS",
        icon: "next",
      },
      {
        name: "React.JS",
        icon: "react",
      },
    ],
  },
  {
    title: "Frameworks UI",
    icons: [
      {
        name: "Mantine UI",
        icon: "mantine",
      },
      {
        name: "Angular Material",
        icon: "angularmaterial",
      },
      {
        name: "Tailwind",
        icon: "tailwind",
      },
    ],
  },
  {
    title: "Diseño",
    icons: [
      {
        name: "Firma",
        icon: "figma",
      },
      {
        name: "Photoshop",
        icon: "photoshop",
      },
    ],
  },
  {
    title: "Metodologías Agile",
    icons: [
      {
        name: "Jira",
        icon: "jira",
      },
      {
        name: "Trello",
        icon: "trello",
      },
      {
        name: "Notion",
        icon: "notion",
      },
      {
        name: "Miró",
        icon: "miro",
      },
    ],
  },
  {
    title: "IDE",
    icons: [
      {
        name: "Visual Studio Code",
        icon: "vscode",
      },
      {
        name: "Web Storm from Jet Brains",
        icon: "webstorm",
      },
    ],
  },

  {
    title: "Control de versiones",
    icons: [
      { name: "GitHub", icon: "github" },
      {
        name: "GitLab",
        icon: "gitlab",
      },
    ],
  },
  {
    title: "Sistemas operativos",
    icons: [
      {
        name: "Ubuntu",
        icon: "ubuntu",
      },
      {
        name: "Windows",
        icon: "windows",
      },
      {
        name: "Apple",
        icon: "apple",
      },
    ],
  },
  {
    title: "Otros",
    icons: [
      {
        name: "Postman",
        icon: "postman",
      },
      {
        name: "npm",
        icon: "npm",
      },
      {
        name: "Docker",
        icon: "docker",
      },
    ],
  },
];

export default function Home() {
  console.log("stackIcons", stackIcons);
  return (
    <main>
      <SectionHeader {...section} />
      <div className="flex gap-5 flex-wrap">
        {stackIcons.map((stack: any, index: number) => (
          <CardIcons key={index} title={stack.title} icons={stack.icons} />
        ))}
      </div>
    </main>
  );
}
