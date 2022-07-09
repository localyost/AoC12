export enum Direction {
    NORTH = 'N',
    SOUTH = 'S',
    EAST = 'E',
    WEST = 'W',
    LEFT = 'L',
    RIGHT = 'R',
    FORWARD = 'F'
}

export function isCardinalDirection(d: Direction): boolean {
    return d == Direction.NORTH || d == Direction.SOUTH || d == Direction.EAST || d == Direction.WEST;
}

export function isTurnDirection(d: Direction): boolean {
    return d == Direction.RIGHT || d == Direction.LEFT;
}

export function isValidTurnDegree(r: number) {
    return r == 0 || r == 90 || r == 180 || r == 270 || r == 360;
}

export type CardinalDirection = Direction.NORTH | Direction.SOUTH |  Direction.EAST | Direction.WEST;
export type TurnDirection = Direction.LEFT | Direction.RIGHT;
export type TurnDegree = 0 | 90 | 180 | 270 | 360

export function calculateCurrentHeading(currentlyFacing: CardinalDirection) {
    const newHeadings = [currentlyFacing];

    const defaultHeadings = [
        Direction.NORTH,
        Direction.WEST,
        Direction.SOUTH,
        Direction.EAST
    ] as CardinalDirection[];
    const currentHeading = defaultHeadings.indexOf(currentlyFacing);
    let nextHeadingIndex = currentHeading + 1;
    while (newHeadings.length < defaultHeadings.length) {
        const nextHeading = defaultHeadings[nextHeadingIndex];
        if (nextHeading) {
            newHeadings.push(nextHeading);
            nextHeadingIndex++;
        } else {
            nextHeadingIndex = 0;
        }
    }
    return newHeadings;
}
