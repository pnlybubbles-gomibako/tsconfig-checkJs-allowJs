const j = 12
const k = "hello"
// @ts-expect-error `The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.`
const l =  j * k
// @ts-expect-error `Property 'lg' does not exist on type 'Console'.`
console.lg('hello')

// @ts-expect-error `Parameter '_arg' implicitly has an 'any' type.`
function a(_arg) {
}
