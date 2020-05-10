import SetFigure from './SetFigure';

/**
 * All the metadata of a Set.
 */
export default class SetDetails {
  /** Unique identifier of the set dance. */
  id: string;

  /** Name of the set dance */
  name: string;

  /** Alternative names of the set dance. */
  alternativeNames: string[];

  /** Figures in the set dance. */
  figures: SetFigure[];

  /** Description of the Set. */
  description: string;

  /** URL to the picture for the set. */
  picture: string;

  constructor(
    id: string,
    name: string,
    figures: SetFigure[],
    alternativeNames: string[] = [],
    description = '',
    picture = '',
  ) {
    this.id = id;
    this.name = name;
    this.figures = figures;
    this.alternativeNames = alternativeNames;
    this.description = description;
    this.picture = picture;
  }
}
