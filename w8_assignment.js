class Member {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Family {
    constructor(name) {
        this.name = name;
        this.members = [];
    }

    addMember(member) {
        if (member instanceof Member) {
            this.members.push(member);
        } else {
            throw new Error(`You can only add an instance of Member. Argument is not a member: ${member}`);
        }
    }

    describe() {
        return`${this.name} has ${this.members.lengths} family members.`;
    }
}