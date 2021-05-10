// @ts-expect-error `Cannot find module 'path'. Did you mean to set the 'moduleResolution' option to 'node', or to add aliases to the 'paths' option?`
import path from 'path'

path.dirname(123)

// @ts-expect-error `Cannot find name 'foo'.`
foo
