class message {
    $container;
    $question;
    $btnShow;
    $btnHiden;
    $answer;

    constructor(question, answer) {
        this.$container = document.createElement('div');
        this.$container.classList.add('container');

        this.$question = document.createElement('span');
        this.$question.classList.add('question');
        this.$question.innerHTML = question;

        this.$btnShow = document.createElement('button');
        this.$btnShow.classList.add('btn');
        this.$btnShow.classList.add('show');
        this.$btnShow.innerHTML = '+';
        this.$btnShow.onclick = () => {
            this.$answer.classList.remove('none');
            this.$answer.classList.add('show');
            this.$btnShow.classList.remove('show');
            this.$btnShow.classList.add('none');
            this.$btnHiden.classList.remove('none');
            this.$btnHiden.classList.add('show');
        }

        this.$btnHiden = document.createElement('button');
        this.$btnHiden.classList.add('btn');
        this.$btnHiden.classList.add('none');
        this.$btnHiden.innerHTML = '-';
        this.$btnHiden.onclick = () => {
            this.$answer.classList.remove('show');
            this.$answer.classList.add('none');
            this.$btnShow.classList.add('show');
            this.$btnShow.classList.remove('none');
            this.$btnHiden.classList.add('none');
            this.$btnHiden.classList.remove('show');
        }

        this.$answer = document.createElement('span');
        this.$answer.classList.add('answer');
        this.$answer.classList.add('none');
        this.$answer.innerHTML = answer;
    }

    render() {
        this.$container.appendChild(this.$question);
        this.$container.appendChild(this.$btnShow);
        this.$container.appendChild(this.$btnHiden);
        this.$container.appendChild(this.$answer);

        return this.$container;
    }
}