import path from 'path'

// **WIERD**
// @ts-expect-error `Argument of type 'number' is not assignable to parameter of type 'string'.`
path.dirname(123)

// **WIERD**
function a(_arg) {
}

// @ts-expect-error `Cannot find name 'aTest'.`
aTest
// **WIERD**
// @ts-expect-error `Cannot find name 'named'.`
named
// @ts-expect-error `Cannot find name 'main'.`
main
