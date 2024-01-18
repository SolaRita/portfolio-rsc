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
export default function Home() {
  return (
    <main>
      <SectionHeader {...section} />
    </main>
  );
}
