export function getElementsByStyle(
  element: Element,
  property: string,
  value: string
): Element[] {
  const elements: Element[] = [];

  function traverseDOM(el: Element) {
    if (el === null) {
      return;
    }

    const computedStyle = getComputedStyle(el);

    if (computedStyle.getPropertyValue(property) === value) {
      elements.push(el);
    }

    for (const child of el.children) {
      traverseDOM(child);
    }
  }
  for (const child of element.children) {
    traverseDOM(child);
  }
  return elements;
}
