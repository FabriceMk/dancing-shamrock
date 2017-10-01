/**
 * Set Dance Movement.
 * Represents a particular Movement in a Figure.
 * Can also be an aggregation of other Movements, this can be useful to modelize
 * a group of movements that should be repeated with only slight variations
 * (usually just the couples involved).
 */
export class SetDanceMovement {
  /** Id of the Movement (can be used to link to the glossary entry) */
  id: string;

  /** Readable name of the Movement */
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

  /** Duration in bars of the movement, should be set for single movements,
   * will be ignored if sub movements are set because it will be dynamically calculated.
   */
  duration: number;
}
