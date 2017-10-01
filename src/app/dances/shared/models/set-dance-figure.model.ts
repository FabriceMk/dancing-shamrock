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

  /** Link to a video tutorial of that Figure */
  videoUrl: string;

  /** Link to the video thumbnail */
  videoThumbnailUrl: string;

  /** List of Movements in the Figure */
  movements: SetDanceMovement[];
}
