function getAge() {
    return prompt('What is your birth year?');
}
function calculateAgeInDays() {
    let answerContainer = document.getElementById('answer-container');
    console.log(answerContainer);
    if (document.getElementsByTagName('h4').length == 0) {
        let birthYear = getAge();
        if (birthYear != null && isNaN(birthYear) == false) {

            let ageInDays = (2021 - birthYear) * 365;
            let ageInMinutes = ageInDays * 1440;
            let ageInSeconds = ageInMinutes * 60;

            var textAnswerInDays = 'You are ' + ageInDays + ' Days Old';
            var textAnswerInMinutes = 'You are ' + ageInMinutes + ' Minutes Old';
            var textAnswerInSeconds = 'You are ' + ageInSeconds + ' Seconds Old';

            let firstChildH1 = document.createElement('h4');
            let secondChildH1 = document.createElement('h4');
            let thirdChildH1 = document.createElement('h4');

            firstChildH1.setAttribute('id', 'ageInDays');
            secondChildH1.setAttribute('id', 'ageInMinutes');
            thirdChildH1.setAttribute('id', 'ageInSeconds');

            firstChildH1.innerHTML = textAnswerInDays;
            secondChildH1.innerHTML = textAnswerInMinutes;
            thirdChildH1.innerHTML = textAnswerInSeconds;

            document.getElementById('answer-container').style.display = "block";
            document.getElementById('answer-container').appendChild(firstChildH1);
            document.getElementById('answer-container').appendChild(secondChildH1);
            document.getElementById('answer-container').appendChild(thirdChildH1);
        }
    }
}
function resetValues() {
    if (document.getElementsByTagName('h4').length > 0) {
        document.getElementById('ageInDays').remove();
        document.getElementById('ageInMinutes').remove();
        document.getElementById('ageInSeconds').remove();
        document.getElementById('answer-container').style.display = "none";
    }
}

