let _token = localStorage.getItem('jwt') || ''

export function set (token) {
  _token = token
  localStorage.setItem('jwt', token)
}

export function get () {
  return _token
}

export function clear () {
  set('')
}
