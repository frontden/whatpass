

export class Level {
    task: string;
    avatar: string;
    levelName: string;
    password: string;
    answer: string;
    promts: Array<string>;

    constructor(name, avatar, task, password, answer, promts) {
        this.levelName = name;
        this.avatar = avatar;
        this.task = task;
        this.password = password;
        this.answer = answer;
        this.promts = promts;
    }
}
