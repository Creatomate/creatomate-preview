import { ElementState } from './ElementState';

export interface PreviewState {
  /**
   * Width of the video in pixels.
   */
  width: number;

  /**
   * Height of the video in pixels.
   */
  height: number;

  /**
   * Duration of the video in seconds.
   */
  duration: number;

  /**
   * When the preview state can be reversed, it is 'true'. See the undo and redo functions.
   */
  undo: boolean;

  /**
   * When the preview state can be reapplied, it is 'true'. See the undo and redo functions.
   */
  redo: boolean;

  /**
   * The source JSON of the video/image without the 'elements' property.
   */
  source: Record<string, any>;

  /**
   * The elements in this video/image
   */
  elements: ElementState[];
}
