const listeners = new Set()
let _current = null

export const hoverState = {
  get current() { return _current },
  set current(val) {
    _current = val
    listeners.forEach(fn => fn())
  },
  subscribe(fn) {
    listeners.add(fn)
    return () => listeners.delete(fn)
  },
}
