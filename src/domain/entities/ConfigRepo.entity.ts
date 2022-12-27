export interface TriggerSetting {
    path: string;
    branches: string[];
    commands: string[];
    event: EventLog;
}

export enum EventLog {
    commit  = 'commit',
    merge  =  'merge',
    all = 'all'
}