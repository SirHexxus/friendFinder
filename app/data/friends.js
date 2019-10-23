//  This file will hold the constructor for the Friend Object
const Friend = (name, pic) => {
    this.name = name;
    this.photo = pic;
    this.scores = [];
    this.addScore = function(score) {
        if(this.scores.length < 15) {
            this.scores.push(score)
        }
        else {
            return console.log("Too many scores!");
        }
    }
    this.listScores = function() {
        let temp;
        for(let i = 0; i < this.scores.length; i++) {
            temp += this.scores[i] + '\n';
        }
        return temp;
    }
}

module.exports = Friend;