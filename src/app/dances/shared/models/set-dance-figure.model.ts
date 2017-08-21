import { SetDanceMovementGroup } from './set-dance-movement-group.model';

/**
 * Set Dance Figure.
 */
export class SetDanceFigure {
  /** Name of the Figure */
  name: string;

  /** Style of the Figure */
  style: string;

  /** Duration in bars of the Figure */
  duration: number;

  /** List of Movement Groups in the Figure */
  movementsGroups: SetDanceMovementGroup[];
}
