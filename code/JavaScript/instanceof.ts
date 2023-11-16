export function _instanceof(target: any, source: Function): boolean {
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === source.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}


