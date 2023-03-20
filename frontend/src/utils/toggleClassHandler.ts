export function toggleClassHandler(activeClass: string, ...args: HTMLElement[]) {
  return () => {
    args.forEach((el) => {
      if (el.nodeName === 'BUTTON') {
        el.ariaExpanded = el?.ariaExpanded === 'false' ? 'true' : 'false';
      }

      if (el) {
        el.classList.toggle(activeClass);
      }
    });
  };
}
