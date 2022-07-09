import MoveCommand from "./MoveCommand";
import {CardinalDirection, Direction} from "./Direction";
import {Position} from "./TheHighSea";
import {Engine} from "./Engine";

export default class Ferry {

    private startPosition: Position;
    private currentPosition: Position;
    private plannedMoves: MoveCommand[] | undefined;
    private originalMoveCommand: string | undefined;
    private facing: CardinalDirection;

    constructor(startPosition: Position | null, facing: CardinalDirection | null) {
        this.startPosition = startPosition ? startPosition : [0, 0];
        this.currentPosition = this.startPosition;
        this.facing = facing ? facing : Direction.NORTH;
    }

    public applyMoveCommands(input: string) {
        this.plannedMoves = this.parseMovesFromString(input);
    }

    private parseMovesFromString(input: string): MoveCommand[] {
        this.originalMoveCommand = input;
        return input.split(',').map(value => new MoveCommand(value.toUpperCase()));
    }

    public execute() {
        this.plannedMoves?.forEach(move => {
            const moveAction = Engine.getNewPositionAfterMove(this.currentPosition, move, this.facing);
            // console.log(moveAction)
        })
    }
}
