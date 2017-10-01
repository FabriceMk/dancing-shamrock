import { SetDanceFigure } from './set-dance-figure.model';

/**
 * Set Dance entry with all its data.
 */
export class SetDance {
  /** Unique identifier of the set dance */
  id: string;

  /** Name of the set dance */
  name: string;

  /** Alternative names of the set dance */
  alternativeNames: string[];

  /** Figures in the set dance */
  figures: SetDanceFigure[];
}
