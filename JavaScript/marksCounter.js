function updateCharacterCount() {
    var textarea = document.getElementById('textarea');
    var characterCount = document.getElementById('characterCount');
    characterCount.textContent = `${textarea.value.length} / 1000`;
}