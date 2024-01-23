import CardIcons from "./ui/card/card-icons";
import SectionHeader from "./ui/section/section-header";

const section = {
  title: "Sobre mi",
  description: [
    "Hola, soy Rita, una desarrolladora web de Barcelona. Me encanta explorar formas innovadoras de optimizar procesos y encontrar caminos más eficientes. Dedico especial atención a la estética y accesibilidad de las interfaces. Apasionada por aprender y colaborar en equipo, cada proyecto es una oportunidad para crecer y mejorar juntos.",
  ],
  subtitle: "Mi Stack Tecnológico:",
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
        icon: "typescript",
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
        name: "Web Storm",
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
  return (
    <main>
      <h1 className="mb:text-4xl text-3xl pt-10 pb-7 text-primary font-semibold">
        {section.title}
      </h1>
      <div className="columns-1 pb-9 gap-10">
        {section.description?.map((description, i) => {
          return (
            <p key={i} className="md:text-sm text-lg mb-2 text-body">
              {description}
            </p>
          );
        })}
      </div>
      <h2 className="md:text-sm text-lg font-semibold pb-4 text-body">
        {section.subtitle}
      </h2>
      <div className="flex gap-5 flex-wrap">
        {stackIcons.map((stack: any, index: number) => (
          <CardIcons key={index} title={stack.title} icons={stack.icons} />
        ))}
      </div>
    </main>
  );
}
