// Message generation using an ad lib model

// array of sentence templates to use between a noun and present tense verb
const sentenceTemplates = [' only get scared then they see you ', 
' will only go there when ', 
' make great companions for the first time you start '];

// array of nouns to begin the sentence
const nounsArr = ['Bears', 'Firebreathers', 'Politicians', 'Fishsticks', 
'Memberberries', 'Clouds', 'Psychiatrists'];

// array of present tense verbs to end the sentence
const verbArr = ['shouting', 'dancing', 'stealing', 'laughing', 
'racing'];

// function to randomly select one of the sentence templates
const randTemplate = () => {
    const randNum = Math.floor(Math.random() * 3);
    return sentenceTemplates[randNum];
};

// function to generate the message
const genMessage = (template) => {
    const nounNum = Math.floor(Math.random() * 7);
    const verbNum = Math.floor(Math.random() * 5);
    console.log(nounsArr[nounNum] + template + verbArr[verbNum]);
};

genMessage(randTemplate());