import path from 'path'

// @ts-expect-error `Argument of type 'number' is not assignable to parameter of type 'string'.`
path.dirname(123)
