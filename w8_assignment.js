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

class Menu {
    constructor() {
        this.members = [];
        this.selected = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createFamily();
                    break;
                case '2':
                    this.viewFamily();
                    break;
                case '3':
                    this.deleteFamily();
                    break;
                case'4':
                    this.displayFamilies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new family
            2) view family
            3) delete family
            4) display all families
            `);
    }

    showFamilyMenuOptions(familyInfo) {
        return prompt (`
          0) back
          1) create member
          2) delete member
          -------------------
          ${familyInfo}
        `);
    }

    displayFamilies() {
        let familyString = '';
        for (let i = 0; i < this.families.length; i++) {
            familyString += i + ') ' + this.family[i].name + '\n';
        }
        alert(familyString);
    }

    createFamily() {
        let name = prompt('Enter name for new family:');
        this.families.push(new Family(name));
    }

    viewFamily() {
        let index = prompt('Enter the index of the family you wish to view:');
        if (index > -1 && index < this.families.length) {
            this.selectedFamily = this.families[index];
            let description = 'Family Name: ' + this.selectedFamily.name + '\n';
            
            for (let i = 0; i < this.selectedFamily.members.length; i++) {
                description += i + ') ' + this.selectedFamily.members[i].name 
                    + ' - ' + this.selectedFamily.members[i].age + '\n';
            }

            let selection = this.showFamilyMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.deleteMember();
            }
        }
    }

    deleteFamily() {
        let index = prompt('Enter the index of the family you wish to delete:');
        if (index > -1 && index < this.families.length) {
            this.families.splice(index, 1);
        }
    }

    createMember() {
        let name = prompt('Enter name for new member:');
        let age = prompt('Enter age for new member:');
        this.selectedFamily.members.push(new Member(name, age));
    }

    deleteMember() {
        let index = prompt('Enter the index of the member you wish to delete:');
        if (index > -1 && index < this.selectedFamily.members.length) {
            this.selectedFamily.members.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();