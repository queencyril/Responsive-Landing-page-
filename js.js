const dropdown = document.querySelector(' .dropdown');


dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
})

const dropdown2 = document.querySelector(' .dropdown2');


dropdown2.addEventListener('click', () => {
    dropdown2.classList.toggle('active');
})



// toggle
const toggleBtn = document.querySelector('.toggle_btn')
const toggleIcon = document.querySelector('.toggle_btn i')
const toggleDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa'
}