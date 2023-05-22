interface NoteSpecType {
  name: string;
  hasDiese: boolean;
  hasBemol: boolean;
}

enum Tone {
  Maj,
  Min,
}

enum Alternation {
  None,
  Bemol,
  Diese,
}

function strTone(tone: Tone): string {
  switch (tone) {
    case Tone.Maj:
      return "";
    case Tone.Min:
      return "m";
  }
}

function str(alteration: Alternation): string {
  switch (alteration) {
    case Alternation.Bemol:
      return "♭";
    case Alternation.None:
      return "";
    case Alternation.Diese:
      return "#";
  }
}

function pickNoteFromSpec(spec: Array<NoteSpecType>): string {
  const getRandomElement = (arr: any[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const noteSpec = getRandomElement(spec);

  const alterations = Array(
    Alternation.None,
    noteSpec.hasDiese ? Alternation.Diese : Alternation.None,
    noteSpec.hasBemol ? Alternation.Bemol : Alternation.None
  );

  const alteration = getRandomElement(Array.from(new Set(alterations)));

  const tone = getRandomElement(Array(Tone.Maj, Tone.Min));

  return `${str(alteration)}${noteSpec.name}${strTone(tone)}  `;
}

export const pickNote = () => pickNoteFromSpec(noteSpec);

const noteSpec = [
  {
    name: "A",
    hasDiese: true,
    hasBemol: true,
  },
  {
    name: "B",
    hasDiese: false,
    hasBemol: true,
  },
  {
    name: "C",
    hasDiese: true,
    hasBemol: false,
  },
  {
    name: "D",
    hasDiese: true,
    hasBemol: true,
  },
  {
    name: "E",
    hasDiese: false,
    hasBemol: true,
  },
  {
    name: "F",
    hasDiese: false,
    hasBemol: true,
  },
  {
    name: "G",
    hasDiese: true,
    hasBemol: true,
  },
];
