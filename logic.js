const loginExisting = document.querySelector('.login_existing');
const signup = document.querySelector('.signup');
const darkDiv = document.querySelector('.dark_div');
const body = document.querySelector('body');
const login = document.querySelector('.login');
const cancelButtonSignin = document.querySelector('.cancel_button_signin');
const log_sign = document.querySelector('.log_sign');
const cancelButtonSignup = document.querySelector('.cancel_button_signup');
const createAccount = document.querySelector('.create_account');
let joinButton = document.querySelector('.join_group'); 
let join_group_blue = document.querySelector('.join_group_blue');
let joinState = false;

const toggleJoinButton = () => {
    joinButton.innerHTML = joinState ? "Join Group" : "Leave Group";
    join_group_blue.innerHTML = joinState ? "Join Group" : "Leave Group";
    joinState? document.querySelector('.join_group_pc').style.cssText="background-color:#2F6CE5;color:white;":document.querySelector('.join_group_pc').style.cssText="background-color:#EDEEF0;color:grey;font-weight:600"
    joinState = !joinState;
}

//  function to toggle visibility
const toggleVisibility = (element, isVisible) => {
    element.classList[isVisible ? 'add' : 'remove']('visible');
}


const handleCancelButtonClick = (element) => {
    darkDiv.style.visibility = 'hidden';
    body.classList.remove('stop_scroll');
    log_sign.style.cssText="visibility:hidden;height:0;width:0;transform:scale(0);"
    toggleVisibility(element, false);
}

loginExisting.addEventListener('click', () => {
    toggleVisibility(signup, false);
    toggleVisibility(login, true);
});

createAccount.addEventListener('click', () => {
    toggleVisibility(login, false);
    toggleVisibility(signup, true);
});

cancelButtonSignin.addEventListener('click', () => {
    handleCancelButtonClick(log_sign);
});

cancelButtonSignup.addEventListener('click', () => {
    handleCancelButtonClick(log_sign);
});

joinButton.addEventListener('click', toggleJoinButton);
join_group_blue.addEventListener('click', toggleJoinButton);