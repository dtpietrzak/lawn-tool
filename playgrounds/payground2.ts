import { DeepSetter } from '../src/tools/utils'

const object = {}

const data = new DeepSetter(
  object,
  'one'
)

data.set('a.1', 'b')
data.set('a.2', 'abc')

console.log(data.get())

const shouldBe = {
  one: {
    a: {
      1: 'b'
    }
  }
}