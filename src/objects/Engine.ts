import {Position} from "./TheHighSea";
import MoveCommand from "./MoveCommand";
import {calculateCurrentHeading, CardinalDirection, Direction, isCardinalDirection, isTurnDirection} from "./Direction";
import {MoveAction} from "./MoveAction";
import TurnAction from "./TurnAction";

export class Engine {

    public static getNewPositionAfterMove(currentPosition: Position, move: MoveCommand, currentlyFacing: CardinalDirection) {
        const newFacingDirection = this.calculateNewFacingDirection(move, currentlyFacing);

        if (isTurnDirection(move.direction)) {
            return new TurnAction(newFacingDirection);
        }

        let spacesMoved = move.amount as number;
        if (isCardinalDirection(move.direction)) {
            return new MoveAction(spacesMoved, move.direction as CardinalDirection, currentlyFacing);
        }
        if (move.direction === Direction.FORWARD) {
            return new MoveAction(spacesMoved, currentlyFacing, currentlyFacing);
        }
    }

    //good lord...
    private static calculateNewFacingDirection(move: MoveCommand, currentlyFacing: CardinalDirection) {
        let newCardinalDirection = currentlyFacing;
        if (isTurnDirection(move.direction)) {
            let turnIncrement = move.amount / 360 * 4;
            const currentHeading = calculateCurrentHeading(currentlyFacing);

            if (turnIncrement == 4) {
                newCardinalDirection = currentlyFacing;
            } else {
                if(move.direction === Direction.RIGHT) {
                    for (let i = 1; i <= turnIncrement; i++) {
                        newCardinalDirection = currentHeading[i]
                    }
                }
                if (move.direction === Direction.LEFT){
                    for (let i = 2; i >= turnIncrement; i--) {
                        newCardinalDirection = currentHeading[i]
                        console.log(newCardinalDirection)
                    }
                }
            }
        }
        // console.log(newCardinalDirection)
        return newCardinalDirection;
    }
}

