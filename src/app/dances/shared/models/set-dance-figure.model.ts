import { SetDanceMovement } from './set-dance-movement.model';

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

  /** List of Movements in the Figure */
  movements: SetDanceMovement[];
}
