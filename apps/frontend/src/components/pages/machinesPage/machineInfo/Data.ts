export interface Machine {
  name: string;
  description: string;
  inventor: string;
  year: number;
  applications: string[];
  rules: string[];
}

const Machines: Machine[] = [
  {
    name: "Turing Machine",
    description:
      "A theoretical computing machine that manipulates symbols on a tape according to a set of rules.",
    inventor: "Alan Turing",
    year: 1936,
    applications: [
      "Mathematical logic",
      "Computer science",
      "Artificial intelligence",
      "Cryptography",
    ],
    rules: [
      "The machine starts in a predetermined initial state.",
      "It scans the current symbol on the tape.",
      "Based on the current state and scanned symbol, the machine determines the next state to transition to.",
      "It writes a new symbol on the tape.",
      "It moves the tape left or right.",
      "The machine repeats this process until it enters a final state, at which point it halts.",
    ],
  },
  {
    name: "Post-Turing Machine",
    description:
      "A theoretical computing machine that manipulates symbols on a tape according to a set of rules. It is a variation of the original Turing Machine, introduced by Emil Post in 1936.",
    inventor: "Emil Post",
    year: 1936,
    applications: [
      "Mathematical logic",
      "Computer science",
      "Artificial intelligence",
      "Cryptography",
    ],
    rules: [
      "Each transition is based on the current symbol on the tape and the current state of the machine",
      "The machine can only move the tape left or right by one cell at a time",
      "The machine can overwrite the current symbol on the tape with a new symbol",
      "The machine can change state based on the current state and the current symbol on the tape",
    ],
  },
];

export default Machines;
