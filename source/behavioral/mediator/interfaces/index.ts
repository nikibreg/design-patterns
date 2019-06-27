export type notifier = () => number[]

export interface Mediator {
    requestPositions: notifier
}