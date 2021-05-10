// @ts-expect-error `Parameter 'arg' implicitly has an 'any' type.`
function aa(_arg) {
}

const o: { a?: string } = {}
o.a.trim()
