import { Education } from "@/data/education";

export function EducationEntry({ education }: { education: Education }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-x-2 mb-2">
        <span className="text-xs text-zinc-500 mt-1">{education.year}</span>
        <div className="col-span-3">
          <h3 className="text-base mb-1 font-serif">{education.institution}</h3>
          <p className="text-sm text-zinc-600">{education.degree}</p>
          {education.courses && (
            <p className="text-sm text-zinc-500 mt-2 italic">
              Relevant Coursework: {education.courses}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
