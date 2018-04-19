let name = 'jean-luc adams';
let capName = name.toUpperCase();

function displayPosition(company, title, description) {
    console.log("* " + company + ", " + title + ", " + description);
}

function displaySkill(skill, isCool) {
    if (isCool == true) {
        console.log('*BAM: ' + skill);
    } else {
        console.log(skill);
    }
}

console.log('Name: ' + capName);
console.log('Career: Junior Web Developer');
console.log('Description: I like tacos and burritos');
console.log('My interests: ');
console.log('* French Fries');
console.log('* 95-96 Chicago Bulls');
console.log('* Game of Thrones (Season 8 need to hurry up)');
console.log('* White Tigers');
console.log('My Previous Experience: ');
displayPosition('Best Buy', 'Customer Service Specialist', 'Helped customers with their product problems');
displayPosition('Sheraton Hotel', 'Front Desk Agent', 'Help guest with checking in their rooms and answered any questions about the city');
displayPosition('Netflix', 'Content Creator', 'Created various netflix shows and keeps up the production');
console.log('My Skills:')
displaySkill('Japanese', true);
displaySkill('HTML/CSS', false);
displaySkill('Photoshop', false);
displaySkill('JavaScript', true);
displaySkill('I can crack my knucknles multiple times', true);
displaySkill('Adobe Premiere Pro', false);