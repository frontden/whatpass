

export class Level {
    task: string;
    avatar: string;
    levelName: string;
    password: string;
    answer: string;

    constructor(name, avatar, task, password, answer) {
        this.levelName = name;
        this.avatar = avatar;
        this.task = task;
        this.password = password;
        this.answer = answer;
    }
}
