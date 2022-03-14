const form = document.getElementById('form');
const inputaddress = document.getElementById('input-address');
const inputamount = document.getElementById('input-amount');
const inputotp = document.getElementById('input-otp');


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const inputaddressValue = inputaddress.value.trim();
	const inputamountValue = inputamount.value.trim();
	const inputotpValue = inputotp.value.trim();
	
	if(inputaddressValue === '') {
		setErrorFor(inputaddress, 'ETH address cannot be blank');
	} else if (!Web3.utils.isAddress(inputaddress)) {
        setErrorFor(inputaddress, 'Not a valid ETH address');
    } else {
		setSuccessFor(inputaddress);
	}
	
	if(inputamountValue === '') {
		setErrorFor(inputamount, 'Input amount cannot be blank');
	} else if (!isAmount(inputamountValue)) {
		setErrorFor(inputamount, 'Not a valid amount');
	} else {
		setSuccessFor(inputamount);
	}
	
	if(inputotpValue === '') {
		setErrorFor(inputotp, 'OTP cannot be blank');
	} else if (!isOTP(inputotpValue)) {
		setErrorFor(inputotp, 'Not a valid OTP. OTP should be 6-character long.');
	} else {
		setSuccessFor(inputotp);
	}

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isETH(eth) {
	return false;
}

function isAmount(amount) {
	var regex = /^[0-9]\d*(?:\.\d{0,2})?$/;
  return regex.test(amount);
}

function isOTP(otp) {
    var countdigit = otp.length;
    return countdigit == 6;
}













