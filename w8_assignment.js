class Family {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return`${this.name} has ${this.players.lengths} players.`;
    }
}