import { ElementState } from './ElementState';

export interface TextState extends ElementState {
  /**
   * Text element property. The fixed or auto-calculated font size of the text element.
   */
  fontSize?: number;
}
