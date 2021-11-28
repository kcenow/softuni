import { register } from "../api/data.js";

const section = document.getElementById('registerPage');
section.remove();
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);
section.querySelector('.alreadyUser a').addEventListener('click', (event) => {
    event.preventDefault();
    ctx.goTo(ctx.pages.login);
});
let ctx = null;

export function showRegisterPage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showView(section);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repass = formData.get('repeatPassword').trim();

    if (email == '' || password == '' || repass == '') {
        return alert('All fields are required!');
    }

    if (email.length < 3) {
        return alert('Email must be at least 3 characters long!');
    }

    if (password.length < 3) {
        return alert('Password must be at least 3 characters long!');
    }

    if (password != repass) {
        return alert('Passwords don\'t match!');
    }

    try {
        await register(email, password);

        form.reset();
        ctx.goTo(ctx.pages.home);
        ctx.updateNav();
    } catch (err) {

    }
}