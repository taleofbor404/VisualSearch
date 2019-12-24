const ROW = 10;
const COL = 10;

class Location {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

class MoveCost {
    constructor(cost, location) {
        this.cost = cost;
        this.location = location;
    }
}

class Cell {
    constructor(pRow, pCol, srcDistToSuccessor, goalDistToSuccessor) {
        this.pRow = pRow;
        this.pCol = pCol;
        this.srcDistToSuccessor = srcDistToSuccessor;
        this.goalDistToSuccessor = goalDistToSuccessor;
    }
}

class Utility {
    static isValidLocation(row, col) {
        return row >= 0 && row < ROW && col >= 0 && col < COL;
    }

    static isNotBlocked(grid, row, col) {
        return grid[row][col] === 0 ? true : false;
    }

    static isGoal(src, dest) {
        return src.row === dest.row && src.col === dest.col;
    }

    static getHeuristicValue(heuristic, src, dest) {
        switch (heuristic) {
            case "manhattan": {
                return Math.abs(src.row - dest.row) + Math.abs(src.col - dest.col);
            }
        }
    }
}

function aStarSearch(grid, src, dest) {
    if (!Utility.isValidLocation(src) || !Utility.isValidLocation(dest)) {
        console.log("Invalid source or destination.");
        return false;
    }

    if (!Utility.isNotBlocked(grid, src) || !Utility.isNotBlocked(grid, dest)) {
        console.log("Blocked source or destination.");
        return false;
    }

    if (Utility.isGoal(src, dest)) {
        console.log("Already at goal location.");
        return false;
    }
}
