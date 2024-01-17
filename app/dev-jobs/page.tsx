import CardJob from "../ui/card/card-job";
import SectionHeader from "../ui/section/section-header";

const section = {
  title: "Trabajos de programación",
  description: [],
  subtitle: "",
};
const jobs = [
  {
    name: "Apartool",
    charge: "FrontEnd developer",
    period: "Noviembre 2022 - Diciembre 2023",
    description: [""],
    href: "",
  },
  {
    name: "Adevinta",
    charge: "BackEnd Engineer",
    period: "Abril 2022 - Noviembre 2022",
    description: [""],
    href: "",
  },
];
export default function DevJobs() {
  return (
    <div className="">
      <SectionHeader {...section} />
      <div className="flex flex-col gap-5">
        {jobs.map((job) => {
          return <CardJob key={job.name} {...job} />;
        })}
      </div>
    </div>
  );
}
