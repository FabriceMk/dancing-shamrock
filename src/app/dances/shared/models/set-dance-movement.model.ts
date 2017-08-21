/**
 * Set Dance movement.
 */
export class SetDanceMovement {
  /** Id of the Movement */
  id: string;

  /** Name of the Movement */
  name: string;

  /** Description of the Movement */
  description: string;

  /**
   * Couples involved in the Movement.
   * 1 is 1st Top
   * 2 is 2nd Top
   * 3 is 1st Side
   * 4 is 2nd Side
   */
  couples: number[];

  /** Duration in bars */
  duration: number;
}
