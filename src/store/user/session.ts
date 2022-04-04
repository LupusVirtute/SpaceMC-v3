import Cookies from 'js-cookie'
import { writable } from 'svelte/store'

class Session {
	constructor(readonly sessionId: string) {}

	// TODO: Add implementation for contacting backend for session info
	isSessionActive(): boolean {
		return true
	}

	throwAwaySession(): void {
		Cookies.remove('sessionId')
		currentSession.set(null)
	}
}

const currentSession = writable<Session | null>(null)

export default Session
