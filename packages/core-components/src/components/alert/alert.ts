import {
  ColorAliasPrimary1,
  ColorAliasPrimary10,
  ColorAliasPrimary11,
  ColorAliasPrimary2,
  ColorAliasPrimary3,
  ColorAliasPrimary4,
  ColorAliasPrimary5,
  ColorAliasPrimary6,
  ColorAliasPrimary7,
  ColorAliasPrimary8,
  ColorAliasPrimary9,
} from '@kubunito/design-tokens';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { LitElement, css, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('pp-alert')
export class Alert extends LitElement {
  static override styles = css`
    :host {
      --sl-color-primary-50: ${unsafeCSS(ColorAliasPrimary1)};
      --sl-color-primary-100: ${unsafeCSS(ColorAliasPrimary2)};
      --sl-color-primary-200: ${unsafeCSS(ColorAliasPrimary3)};
      --sl-color-primary-300: ${unsafeCSS(ColorAliasPrimary4)};
      --sl-color-primary-400: ${unsafeCSS(ColorAliasPrimary5)};
      --sl-color-primary-500: ${unsafeCSS(ColorAliasPrimary6)};
      --sl-color-primary-600: ${unsafeCSS(ColorAliasPrimary7)};
      --sl-color-primary-700: ${unsafeCSS(ColorAliasPrimary8)};
      --sl-color-primary-800: ${unsafeCSS(ColorAliasPrimary9)};
      --sl-color-primary-900: ${unsafeCSS(ColorAliasPrimary10)};
      --sl-color-primary-950: ${unsafeCSS(ColorAliasPrimary11)};
    }
  `;

  /** The alert's theme variant. */
  @property({ reflect: true }) variant:
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger' = 'primary';

  /**
   * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The alert's duration in milliseconds. */
  @property({ type: Number }) duration = Infinity;

  override render() {
    return html`<sl-alert
      variant=${ifDefined(this.variant)}
      duration=${this.duration}
      ?closable=${this.closable}
      ?open=${this.open}
    >
      <slot></slot>
    </sl-alert> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pp-alert': Alert;
  }
}
