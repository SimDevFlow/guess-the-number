class User {
    private name: string;
    private difficulty: string;
    private score: string;
    constructor(name: string,difficulty:string,score:string) {
        this.name = name;
        this.difficulty = difficulty;
        this.score = score;
    }
    
    get getName():string {
        return this.name;
    }
    get getDifficulty():string {
        return this.difficulty;
    }
    get getScore():string {
        return this.score;
    }
    
    set setName(name: string) {
        this.name = name;
    }
    set setDifficulty(difficulty: string) {
        this.difficulty = difficulty;
    }
    set setScore(score: string) {
        this.score = score;
    }
}