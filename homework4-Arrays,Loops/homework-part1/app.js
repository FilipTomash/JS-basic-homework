const storyArgumentsArray = ["Marty", "excited", "sky-diving"];

function tellStory(someArray) {
    return `This is ${someArray[0]}.${someArray[0]} is a nice operson. Today they are ${someArray[1]}. They are ${someArray[2]} all day. The end.`
}

console.log(tellStory(storyArgumentsArray));