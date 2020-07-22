function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function() {
    this.dead = true;
};

module.exports = Mouse;

// working directory
// staging area
// git 

// git checkout -- Cat.js
// git reset

// git checkout -b <branch> (branching)

// git checkout <branch>
// git merge : b1 git checkout A -> git merge B

// git branch -D Dogclass : delete cai branch