export type droids = 'battle' | 'pilot'


export interface Droid {
    info(): string
}

export type Factory = () => Droid