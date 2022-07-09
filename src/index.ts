import Ferry from "./objects/Ferry";
import {Direction} from "./objects/Direction";

const ferry = new Ferry([0,0], Direction.NORTH);
// ferry.applyMoveCommands('F10,N3,F7,L90,F11')
ferry.applyMoveCommands('L90')
// ferry.applyMoveCommands('F180')
ferry.execute();