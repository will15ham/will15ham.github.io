const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// Chat GPT Generated Story
const storyText = "It was 94 fahrenheit outside, a typical day in Boulder, so :insertx: decided to go for a walk on the CU campus. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. John, another student, saw the whole thing, but was not surprised — :insertx: spends all day coding and rarely gets any exercise. Without exercise :insertx: now weighs 300 pounds and is in danger of developing diabetes.";

const insertX = ["Emily the Coder", "Samantha the Programmer", "David the Developer"];
const insertY = ["the engineering building", "Norlin Library", "the computer science lab"];
const insertZ = ["realized they had a bug in their code and started debugging on the spot", "pulled out their laptop and started coding right there on the sidewalk", "let out a triumphant yell after finally solving a tough coding problem"];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("John", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature = `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}