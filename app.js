const text = document.getElementById('name-display');
const input = document.getElementById('name')
const btn = document.getElementById('btn');

const cookie = document.cookie;
const split = cookie.split(';')

split.forEach((item) => {
    const cookieSplit = item.split('=');
    if (cookieSplit[0] === 'name' && cookieSplit[1]) {
        text.innerText = `Xin chao, ${cookieSplit[1]}`;
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    document.cookie = `name=${value}`;
})
