import path from 'path'

// @ts-expect-error `Argument of type 'number' is not assignable to parameter of type 'string'.`
path.dirname(123)

function a(_arg) {
}

// **WIERD**
// @ts-expect-error `Cannot find name 'aTest'.`
aTest
// @ts-expect-error `Cannot find name 'named'.`
named
// @ts-expect-error `Cannot find name 'main'.`
main
