import { SetDanceMovement } from './set-dance-movement.model';

/**
 * Group of Movements.
 * Used to aggregate one of multiple Movements.
 * Useful to modelize a group of Movements performed
 * several times in a Figure but by different couples.
 */
export class SetDanceMovementGroup {
  /** Ordered List of Movements in the Group. */
  movements: SetDanceMovement[];
}
