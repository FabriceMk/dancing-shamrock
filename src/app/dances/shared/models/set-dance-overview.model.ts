/**
 * Set Dance Entry with overview data
 */
export class SetDanceOverview {
  /** Unique identifier of the set dance */
  id: string;

  /** Name of the set dance */
  name: string;

  /** Alternative names of the set dance */
  alternativeNames: string[];

  /** Figures count in the set dance */
  figuresCount: number;

  /** Styles present across the figures  */
  styles: string[];
}
