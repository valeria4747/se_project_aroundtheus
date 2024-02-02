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

const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#edit-modal");
const profileModalCloseButton = document.querySelector("#profile-modal-close-button");
const addCardModalCloseButton = document.querySelector("#add-card-close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#profile-name-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const editSaveButton = document.querySelector ("#edit-save-button");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;
const cardListEl = document.querySelector(".cards__list");
const addNewCardButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const saveCardButton = document.querySelector("#save-add-card-button");
const cardTitleInput = document.querySelector ("#add-title-input");
const cardLinkInput = document.querySelector ("#add-image-input");
const addModalForm = document.querySelector ("#add-card-modal");



function closeModal(modal) {
  modal.classList.remove("modal_opened");
}
function handleEditProfileSubmit (e){
  e.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup();
}

function openModal (modal) {
 modal.classList.add("modal_opened");
}

profileEditButton.addEventListener("click", () => {
profileNameInput.value = profileName.textContent;
profileDescriptionInput.value = profileDescription.textContent;
profileEditModal.classList.add("modal_opened");
});

profileModalCloseButton.addEventListener ("click", () => closeModal (profileEditModal));
profileEditForm.addEventListener("submit", (handleEditProfileSubmit));
editSaveButton.addEventListener ("click", () => closeModal (profileEditModal));


addNewCardButton.addEventListener("click", () => openModal (addCardModal));
addModalForm.addEventListener("submit", (handleAddCardSubmit));
addCardModalCloseButton.addEventListener("click", () => closeModal (addCardModal));
saveCardButton.addEventListener("click", () => closeModal (addCardModal));

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardLinkInput.value;
  const data = { name, link };

  const newCard = getCardElement(data);
  cardListEl.prepend(newCard);
};


initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  cardListEl.append(cardElement);
});

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTextEl = cardElement.querySelector(".card__text");
  const likeButton = cardElement.querySelectorAll(".card__like-button");
  const trashButton = cardElement.querySelectorAll(".card__trash-button");
  likeButton.forEach(likeButton => {
    likeButton.addEventListener ('click', () => {
      likeButton.classList.toggle('card__like-button_active')
    });
  });

  trashButton.forEach(trashButton => {
    trashButton.addEventListener ('click', () => {
      cardElement.remove("cardElement")
    });
  });

  cardTextEl.textContent = data.name;
  cardImageEl.src =  data.link;
  cardImageEl.alt = data.name;
  return cardElement;
}

