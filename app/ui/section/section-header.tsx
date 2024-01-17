interface Section {
  title: string;
  description?: string[];
  subtitle?: string;
}
export default function SectionHeader(section: Section) {
  const { title, description, subtitle } = section;
  const isDescriptionAvailable = description && description.length > 0;
  const isSubtitleAvailable = subtitle && subtitle.length > 0;
  return (
    <div>
      <h1 className="mb:text-4xl text-3xl pt-10 pb-7 text-primary font-semibold">
        {title}
      </h1>
      {isDescriptionAvailable && (
        <div className="columns-1 pb-9 gap-10 md:columns-2">
          {description?.map((description, i) => {
            return (
              <p key={i} className="md:text-sm text-lg mb-2">
                {description}
              </p>
            );
          })}
        </div>
      )}
      {isSubtitleAvailable && (
        <h2 className="md:text-sm text-lg font-semibold pb-4">{subtitle}</h2>
      )}
    </div>
  );
}
