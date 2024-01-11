interface Job {
  name: string;
  description: string[];
  charge: string;
  period: string;
  href: string;
}

export default function CardJob(job: Job) {
  const descriptions = job.description;
  return (
    <>
      <h1 className="text-lg">{job.name}</h1>
      <div className="flex justify-between">
        <h2 className="text-sm font-semibold">{job.charge}</h2>
        <p className="text-sm">{job.period}</p>
      </div>
      <ul>
        {descriptions.map((description, i) => {
          return (
            <li className="text-sm" key={i}>
              {description}
            </li>
          );
        })}
      </ul>
    </>
  );
}
