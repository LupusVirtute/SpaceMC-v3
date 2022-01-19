import { type Writable, writable } from 'svelte/store'

const title: Writable<string> = writable('SpaceMC')
export default (): Writable<string> => title
