//slide menu
function show() {
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}

//type effect
const text = 'Merkil Trading Zambia Limited is an incorporated company owned by indigenous Zambians.It was incorporated in 2021. The company is on the Copperbelt Province of Zambia and is wholly Zambian owned private company dealing in Supplying, Construction, HDPE Plastic Piping, Mining Equipment Suppliers Electrical & Installation, Installation of Structural Steel, Labor, Civil & Mechanical Engineering and our other business includes supplying Of Stationery, Computer accessories and Equipment, Personal Protective Equipment and Forklift Hire.';
const text1 = 'The ultimate objective of merkil trading Zambia limited as a supplying company for foreign / locally based companies is to provide a first class service to the mining industry and allied industry in mining equipment and other surfaces that would need to be worked in a professional manner.We are also general contractors.'
const typewriterElement = document.getElementById('typewriter');
let index = 0;

function typeEffect(elementId, text) {
    return new Promise((resolve) => {
        let el = document.getElementById(elementId);
        let i = 0;

        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 20);
            } else {
                resolve();
            }
        }
        type();
    });
}

async function runtype() {
    await typeEffect('typewriter', text);
    await typeEffect('typewriter1', text1);
}

runtype();

//contact information - footer

const num = "contact number";
const email = 'contact@example.com';

function contactline(data) {
    let line = document.createTextNode(data);
    let a = document.createElement('a');
    a.href = '#';
    a.appendChild(line);
    let contact = document.getElementById("contact");
    contact.appendChild(a);

}

contactline(num);
contactline(email)


