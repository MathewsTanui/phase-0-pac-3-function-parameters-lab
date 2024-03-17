function introduction(Mathews) {
    return `Hi, my name is ${Mathews}.`;
}
function introductionWithLanguage(Mathews, JavaScript) {
    return `Hi, my name is ${Mathews} and I am learning to program in ${JavaScript}.`;
}
function introductionWithLanguageOptional(Mathews, Python = 'JavaScript') {
    return `Hi, my name is ${Mathews} and I am learning to program in ${Python}.`;
}
