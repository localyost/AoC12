import {MoveAction} from "./MoveAction";
import {CardinalDirection} from "./Direction";

export default class TurnAction extends MoveAction {
    constructor(faceDirection: CardinalDirection) {
        super(0, null, faceDirection);
    }
}