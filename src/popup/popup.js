function generateLoremIpsum(words) {
    const loremIpsumText = `Lorem ipsum odor amet, consectetuer adipiscing elit. Morbi viverra gravida sodales, nascetur maximus arcu fusce. Natoque arcu hac curae quis varius; massa massa efficitur. Eleifend maximus ac; aptent integer condimentum senectus vel. Congue ullamcorper natoque efficitur aliquam nisl et eget lobortis. Ipsum augue maximus facilisi magnis vehicula.

Quis inceptos efficitur nec turpis potenti sodales hendrerit? Faucibus nibh ligula id ridiculus id semper ornare nascetur. Adipiscing cras at orci consectetur finibus dignissim sagittis torquent. Aenean quis nulla erat lorem conubia. Non et viverra pharetra duis consequat sem est magna. Nam felis et at donec malesuada magna commodo. Interdum urna himenaeos sed amet nec tempus quis. Himenaeos ipsum lobortis aliquet ligula magnis ultrices velit laoreet torquent. Iaculis consequat pulvinar amet fusce mollis facilisis consequat. Dis dapibus nostra tincidunt suscipit tempus.

Phasellus tempus torquent aptent class condimentum at condimentum. Dolor curae ridiculus lobortis finibus tempor. Fusce senectus per egestas, leo ex accumsan dictumst. Non vel facilisi, at rutrum tristique bibendum suspendisse magna. Augue ridiculus netus sed faucibus semper tellus mi posuere. Enim nisl curabitur condimentum; habitant himenaeos odio.`;

    const wordsArray = loremIpsumText.split(/\s+/);
    let result = "";

    for (let i = 0; i < words; i++) {
        result += wordsArray[i % wordsArray.length] + " ";
    }

    return result.trim();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('generateBtn').addEventListener('click', function() {
        const wordCount = parseInt(document.getElementById("wordCount").value) || 5;
        const loremText = generateLoremIpsum(wordCount);
        document.getElementById('loremText').value = loremText;
    });

    document.getElementById('copyBtn').addEventListener('click', function() {
        const loremText = document.getElementById('loremText');
        loremText.select();
        document.execCommand('copy');
    });
});
