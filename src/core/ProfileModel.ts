export default class ProfileModel {
    #id: string
    #name: string
    #age: number
    #email: string

    constructor(name: string, age: number, email: string, id: string = null) {
        this.#name = name
        this.#age = age
        this.#email = email
        this.#id = id
    }

    static empty() {
        return new ProfileModel('', 0, '')
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get email() {
        return this.#email
    }
}
