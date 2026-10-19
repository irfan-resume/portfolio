/**
 * Section title: bold lead + italic serif accent, with an optional note below.
 * <SectionHeading lead="Tools of the" accent="trade" note="…" />
 */
export default function SectionHeading({ lead, accent, note }) {
  return (
    <div className="section-head reveal">
      <h2 className="section-title">
        {lead} <span className="serif-accent">{accent}</span>
      </h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
