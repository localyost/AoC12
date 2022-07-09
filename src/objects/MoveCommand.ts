import {Direction, isValidTurnDegree, isTurnDirection, TurnDegree} from "./Direction";

export default class MoveCommand {

    public direction: Direction;
    public amount: number | TurnDegree;

    constructor(command: string) {
        this.direction = this.extractDirection(command);
        this.amount =  this.extractMoveAmount(command);
    }

    private extractDirection(input: string): Direction {
        const dir = input.charAt(0);
        if (Object.values(Direction).includes(dir as unknown as Direction)) {
            return dir as Direction;
        }
        throw `${this.alarm(input)} First character of input needs to be a direction`
    }

    private extractMoveAmount(input: string): number | TurnDegree {
        const moveAmount = input.slice(1) as unknown as number;
        if (isNaN(moveAmount)) {
            throw `${this.alarm(input)} Only first character may be numeric`
        }
        if (isTurnDirection(this.direction) && !isValidTurnDegree(moveAmount)) {
            throw `${this.alarm(input)} your ferry sucks and can only turn in right angles`
        }
        return moveAmount;
    }

    private alarm(input: string) {
        return `ALARM! ALARM! ${input} incorrect!`;
    }

}