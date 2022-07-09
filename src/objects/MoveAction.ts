import {CardinalDirection} from "./Direction";

export class MoveAction {
    public spacesMoved: number;
    public faceDirection: CardinalDirection;
    public moveDirection: CardinalDirection | null;

    constructor(spacesMoved: number, moveDirection: CardinalDirection | null, faceDirection: CardinalDirection) {
        this.spacesMoved = spacesMoved;
        this.faceDirection = faceDirection;
        this.moveDirection = moveDirection;
    }
}