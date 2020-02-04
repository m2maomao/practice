export function myLib(n) {
  if (typeof n === 'string') {
    return '我返回了string类型'
  } else if (typeof n === 'number') {
    return '我返回了number类型'
  }
}