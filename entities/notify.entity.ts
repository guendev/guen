export interface NotifyEntity {
    message: string
    type:  NotifyType
}

export enum NotifyType {
    SUCCESS,
    ERROR,
    INFO,
    WARNING
}
