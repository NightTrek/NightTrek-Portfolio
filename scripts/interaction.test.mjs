import assert from 'node:assert/strict';
import { test } from 'node:test';

import {
  createSelectionTransition,
  listenForEscape,
} from '../src/utils/interaction.ts';

test('rapid return to current experience cancels the pending selection', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  let selected = 0;
  let animating = false;
  const transition = createSelectionTransition(
    (value) => {
      selected = value;
    },
    (value) => {
      animating = value;
    },
  );
  transition.select(1, selected);
  t.mock.timers.tick(50);
  transition.select(0, selected);
  t.mock.timers.tick(200);
  assert.equal(selected, 0);
  assert.equal(animating, false);
});

test('latest rapid selection wins and repeated selection settles once', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const selections = [];
  const transition = createSelectionTransition(
    (value) => selections.push(value),
    () => {},
  );
  transition.select(1, 0);
  t.mock.timers.tick(50);
  transition.select(2, 0);
  transition.select(2, 0);
  t.mock.timers.tick(150);
  assert.deepEqual(selections, [2]);
});

test('unmount cancellation prevents a delayed state update', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const selections = [];
  const transition = createSelectionTransition(
    (value) => selections.push(value),
    () => {},
  );
  transition.select(1, 0);
  transition.cancel();
  t.mock.timers.tick(200);
  assert.deepEqual(selections, []);
});

test('document Escape closes menu and cleanup detaches the listener', () => {
  const target = new EventTarget();
  let closed = 0;
  const cleanup = listenForEscape(target, () => {
    closed += 1;
  });
  const key = (value) =>
    Object.assign(new Event('keydown', { cancelable: true }), { key: value });
  target.dispatchEvent(key('Enter'));
  assert.equal(closed, 0);
  const escape = key('Escape');
  target.dispatchEvent(escape);
  assert.equal(closed, 1);
  assert.equal(escape.defaultPrevented, true);
  cleanup();
  target.dispatchEvent(key('Escape'));
  assert.equal(closed, 1);
});
