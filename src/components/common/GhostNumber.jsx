import { pad2 } from '../../utils/format';

/** Large faded index number in the corner of a card ("01", "02" …). */
export default function GhostNumber({ index }) {
  return (
    <span className="ghost-num" aria-hidden="true">
      {pad2(index + 1)}
    </span>
  );
}
