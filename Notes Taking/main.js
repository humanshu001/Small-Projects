let italic = document.getElementById('italic');
let title = document.getElementById('title');
let bold = document.getElementById('bold');
let heading = document.getElementById('heading');
let sub_heading = document.getElementById('sub-heading');
let paragraph = document.getElementById('paragraph');
let image = document.getElementById('image');
let list = document.getElementById('list');
let underline = document.getElementById('underline');
let deleted = document.getElementById('deleted');
let normal  = document.getElementById('normal');
let code = document.getElementById('code');

italic.addEventListener('click', () => {
    document.execCommand('italic');
});

code.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'pre');
});

bold.addEventListener('click', () => {
    document.execCommand('bold');
});

title.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'h1');
});

heading.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'h2');
});

sub_heading.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'h4');
});

normal.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'div');
});

paragraph.addEventListener('click', () => {
    document.execCommand('formatBlock', false, 'p');
});

image.addEventListener('click', () => {
    let input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.addEventListener('change', () => {
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = function(e) {
            let img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '70%';
            img.style.display = 'block';
            img.style.margin = '0 auto';
            document.execCommand('insertHTML', false, img.outerHTML);
        };
        reader.readAsDataURL(file);
    });
    input.click();
});

list.addEventListener('click', () => {
    document.execCommand('insertUnorderedList');
});

underline.addEventListener('click', () => {
    document.execCommand('underline');
});

deleted.addEventListener('click', () => {
    document.execCommand('strikeThrough');
});

document.getElementById('editor').focus();
document.execCommand('formatBlock', false, 'h1');

document.getElementById('create-pdf').addEventListener('click', function () {
    let element = document.getElementById('editor');
    element.classList.remove("view")
    element.classList.add('pdf');

    html2pdf().from(element.innerHTML).set({
        margin: [10, 10, 10, 10] 
    }).save();

    element.classList.add('view');
    element.classList.remove('pdf');
});