import { writable } from 'svelte/store'
import LoginResponse from './login-response'
import type Session from './session'

class User {
	private session: Session | null = null

	constructor(readonly user: string) {}
	// TODO: Login implementation
	login(): LoginResponse {
		return LoginResponse.SUCCESS
	}

	logout(): void {
		if (this.session) {
			this.session.throwAwaySession()
			currentUser.set(null)
		}
	}

	getUserMetaData(): UserMetaData | null {
		return null
	}
}

class UserMetaData {
	constructor(readonly user: string) {}
}

const currentUser = writable<User | null>(null)

export default User
