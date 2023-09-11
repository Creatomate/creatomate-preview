import { ElementState } from './ElementState';

export interface VideoState extends ElementState {
  /**
   * Video element property. The total length of the media file used in the element.
   */
  mediaDuration?: number;
}
