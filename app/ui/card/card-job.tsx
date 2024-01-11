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
    <div className="block max-w p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h1 className="text-lg text-red-500">{job.name}</h1>
      <div className="flex justify-between pb-10">
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
    </div>
  );
}
