// @ts-expect-error `Cannot find module 'path'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?`
import path from 'path'

path.dirname(123)

// @ts-expect-error `Parameter '_arg' implicitly has an 'any' type.`
function a(_arg) {
}

// @ts-expect-error `Cannot find name 'aTest'.`
aTest
// @ts-expect-error `Cannot find name 'named'.`
named
// @ts-expect-error `Cannot find name 'main'.`
main
