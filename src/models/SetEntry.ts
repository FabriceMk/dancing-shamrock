/**
 * Represents a Set Dance entry with general metadata.
 */
export class SetEntry {
  constructor(
    /** Unique identifier of the dance set. */
    id: string,

    /** Name of the dance set. */
    name: string,

    /** Alternative names of the dance set. */
    alternativeNames: string[],

    /** The number of figures in the dance set. */
    figuresCount: number,

    /** Styles present in the dance set. */
    styles: string[]
  ) { }
}