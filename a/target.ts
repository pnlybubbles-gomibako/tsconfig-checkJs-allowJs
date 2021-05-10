function a(arg) {
}

const o: { a?: string } = {}
// @ts-expect-error `Object is possibly 'undefined'.`
o.a.trim()

// @ts-expect-error `Cannot find name 'foo'.`
foo
