import SetFigure from './SetFigure';

/**
 * All the metadata of a Set.
 */
export default class SetDetails {
  /** Unique identifier of the set dance */
  id: string;

  /** Name of the set dance */
  name: string;

  /** Alternative names of the set dance */
  alternativeNames: string[];

  /** Figures in the set dance */
  figures: SetFigure[];

  constructor(
    id: string,
    name: string,
    figures: SetFigure[],
    alternativeNames: string[] = [],
  ) {
    this.id = id;
    this.name = name;
    this.figures = figures;
    this.alternativeNames = alternativeNames;
  }
}
