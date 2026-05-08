/**
 * 2.2 Readonly
 *
 * Implement the built-in `Readonly<T>` generic without using it.
 * Constructs a type with all properties of `T` set to readonly, meaning the properties cannot be reassigned.
 *
 * @example
 * interface Todo {
 *   title: string
 * }
 *
 * const todo: MyReadonly<Todo> = { title: "Hey" }
 * todo.title = "Hello" // Error: cannot reassign a readonly property
 */

import type { Equal, Expect } from '@course/types'

/* _____________ Your Code Here _____________ */

// Your implementation here

/* _____________ Test Cases _____________ */

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

interface Todo {
  title: string
  description: string
}

type cases = [Expect<Equal<MyReadonly<Todo>, Readonly<Todo>>>]
