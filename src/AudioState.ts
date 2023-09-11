import { ElementState } from './ElementState';

export interface AudioState extends ElementState {
  /**
   * Audio element property. The total length of the media file used in the element.
   */
  mediaDuration?: number;
}
