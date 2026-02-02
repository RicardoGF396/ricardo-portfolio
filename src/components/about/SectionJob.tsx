interface SectionJobProps {
  company: string;
  position: string;
  meta: string;
  description: string;
  stack: string[];
}

export function SectionJob({
  company,
  position,
  meta,
  description,
  stack,
}: SectionJobProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-normal tracking-tight text-foreground">
          {company} • {position}
        </p>
        <p className="text-sm font-light tracking-tight text-muted-foreground">
          {meta}
        </p>
      </div>
      <p className="text-sm font-light text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2 text-sm font-light text-foreground mt-2">
        {stack.map((item, index) => (
          <span className="py-0.5 px-2 rounded-sm bg-card text-card-foreground" key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
