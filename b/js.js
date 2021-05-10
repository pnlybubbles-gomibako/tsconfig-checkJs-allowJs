// @ts-expect-error `Property 'lg' does not exist on type 'Console'.`
console.lg('hello')

// @ts-expect-error `Parameter '_arg' implicitly has an 'any' type.`
function a(_arg) {
}
