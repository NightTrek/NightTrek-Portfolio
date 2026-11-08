/** Keep only the latest pending selection, including a return to the current item. */
export const createSelectionTransition = (
  onSelect: (index: number) => void,
  onTransition: (active: boolean) => void,
) => {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  const cancel = () => {
    if (timeout !== undefined) clearTimeout(timeout);
    timeout = undefined;
  };
  return {
    cancel,
    select(index: number, current: number) {
      cancel();
      if (index === current) {
        onTransition(false);
        return;
      }
      onTransition(true);
      timeout = setTimeout(() => {
        timeout = undefined;
        onSelect(index);
        onTransition(false);
      }, 150);
    },
  };
};

/** Listen on the document so Escape also works when a menu link has focus. */
export const listenForEscape = (target: EventTarget, onEscape: () => void) => {
  const listener = (event: Event) => {
    if ((event as KeyboardEvent).key === 'Escape') {
      event.preventDefault();
      onEscape();
    }
  };
  target.addEventListener('keydown', listener);
  return () => target.removeEventListener('keydown', listener);
};
