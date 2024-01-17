interface Job {
  name: string;
  description: string[];
  charge: string;
  period: string;
  href: string;
}

export default function CardJob(job: Job) {
  const { name, charge, period, description } = job;
  return (
    <div className="block max-w p-6 bg-background-200 border border-background-300 rounded-lg shadow hover:bg-background-300">
      <h1 className="md:text-lg text-2xl text-primary">{name}</h1>
      <div className="flex flex-col md:justify-between pb-10">
        <h2 className="md:text-sm text-lg font-semibold">{charge}</h2>
        <p className="md:text-sm text-lg">{period}</p>
      </div>
      <ul>
        {description.map((description, i) => {
          return (
            <li className="md:text-sm text-lg" key={i}>
              {description}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
