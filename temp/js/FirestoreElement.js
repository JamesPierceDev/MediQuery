class FirestoreElement
{
    constructor(ID, answer1, answer2, answer3, answer4, correct, question)
    {
        this.ID = ID;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.correct = correct;
        this.question = question;
    }

    get ID() {
        return this.ID;
    }

    get answer1() {
        return this.answer1;
    }

    get answer2() {
        return this.answer2;
    }

    get answer3() {
        return this.answer3;
    }

    get answer4() {
        return this.answer4;
    }

    get correct() {
        return this.correct;
    }

    get question() {
        return this.question;
    }
}