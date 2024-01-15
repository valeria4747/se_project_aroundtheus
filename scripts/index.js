const initialCards = [
{
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
},
{
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
},
{
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
},
{
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
},
{
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
},
{
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
},
];

console.log(initialCards);

const profileEditButton = document.querySelector ('#profile-edit-button');
const profileEditModal = document.querySelector ('#profile-edit-modal');
const modalCloseButton = document.querySelector ('#modal-close-button');
const profileName = document.querySelector ('.profile__name');
const profileDescription = document.querySelector ('.profile__description');
const profileNameInput = document.querySelector ('#profile-name-input');
const profileDescriptionInput = document.querySelector ('#profile-description-input');
const profileEditForm = profileEditModal.querySelector ('.modal__form');
const cardTemplate = document.querySelector ('#card-template').content.firstElementChild;
const cardListEl = document.querySelector ('.card__list');

function closePopop () {
    profileEditModal.classList.remove('modal__opened');
}

profileEditButton.addEventListener('click', () => {
 profileNameInput.value = profileNameInput.textContent;  
 profileDescriptionInput.value = profileDescriptionInput.textContent;  
 profileEditModal.classList.add('modal__opened');
});

modalCloseButton.addEventListener ('click', () => {
    closePopop ()
});

profileEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closePopop ()
});

initialCards.forEach (Data) => {
    const cardElement = getCardElement (Data);
cardListEl.append(cardElement);
});

function getCardElement (Data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImageEl = cardElement.querySelector ('.card__image');
    const cardTextEl = cardElement.querySelector ('.card__text');
    cardTextEl.textContent = Data.name;
    cardImageEl.src = cardData.link;
    cardTextEl.textContent = cardImageElement.alt;
    return cardElement;
}



