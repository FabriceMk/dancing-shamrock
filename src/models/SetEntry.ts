/**
 * General metadata of a dance Set.
 */
export default class SetEntry {
  /** Unique identifier of the dance set. */
  id: string;

  /** Name of the dance set. */
  name: string;

  /** The number of figures in the dance set. */
  figuresCount: number;

  /** Styles present in the dance set. */
  styles: string[];

  constructor(
    id: string,
    name: string,
    figuresCount: number,
    styles: string[],
  ) {
    this.id = id;
    this.name = name;
    this.figuresCount = figuresCount;
    this.styles = styles;
  }
}
