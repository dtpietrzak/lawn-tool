type SomeType = {
  one?: string
  two?: string
  three?: string
}

const keys = [
  'one',
  'two',
  'three',
] as const

const object: SomeType = {
  one: 'string',
  two: 'another',
  three: 'wow',
}

keys.forEach((key) => object[key] = "")