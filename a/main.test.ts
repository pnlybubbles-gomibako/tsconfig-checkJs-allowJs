import path from 'path'

// @ts-expect-error `Argument of type 'number' is not assignable to parameter of type 'string'.`
path.dirname(123)

function a(_arg) {
}

// **WIERD** error occured on vscode due to loading tsconfig.json implicitly ignoring include path
// @ts-expect-error `Cannot find name 'foo'.`
foo
