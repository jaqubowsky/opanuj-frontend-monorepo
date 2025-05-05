import { beforeEach, describe, expect, it } from 'vitest';

import './alert';

describe('Alert', async () => {
  beforeEach(() => {
    document.body.innerHTML = '<pp-alert>Hello Opanuj Frontend</pp-alert>';
  });

  it('should display "Hello Opanuj Frontend" label', () => {
    const alertElement = document.body.querySelector('pp-alert');
    const slot = alertElement?.shadowRoot?.querySelector('slot');
    const assignedNodes = slot?.assignedNodes();
    const containsText = assignedNodes?.some(
      (node) =>
        node.nodeType === Node.TEXT_NODE &&
        node.textContent?.includes('Hello Opanuj Frontend')
    );

    expect(containsText).toBe(true);
  });
});
