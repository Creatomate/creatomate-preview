import { ElementState } from './ElementState';

export interface CompositionState extends ElementState {
  /**
   * Composition element property. The elements in the composition.
   */
  elements?: ElementState[];
}
