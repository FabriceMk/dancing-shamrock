import DanceMovementModel from './DanceMovement'

/**
 * Represents a Figure of a Set dance.
 */
export default class SetFigure {
  /** Name of the Figure. */
  name: string;

  /** Style of the Figure. */
  style: string;

  /** Duration in bars of the Figure. */
  duration: number;

  /** List of Movements in the Figure. */
  movements: DanceMovementModel[];

  /** Link to a video tutorial of that Figure. */
  videoUrl: string;

  /** Link to the video thumbnail. */
  videoThumbnailUrl: string;

  constructor(
    name: string,
    style: string,
    duration: number,
    movements: DanceMovementModel[],
    videoUrl = '',
    videoThumbnailUrl = ''
  ) {
    this.name = name;
    this.style = style;
    this.duration = duration;
    this.movements = movements;
    this.videoUrl = videoUrl;
    this.videoThumbnailUrl = videoThumbnailUrl;
  }
}
