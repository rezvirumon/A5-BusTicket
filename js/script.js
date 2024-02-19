

const buttons = document.querySelectorAll('.button');
let selectedCount = 0;
let totalPrice = 0;
const seatPrice = 550;
const seats = 40;


const selectedSeatsElement = document.getElementById('selectedSeats');
const SeatsLeft = document.getElementById('seatsLeft');
const seatInfoContainer = document.getElementById('seatInfo');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        const button = buttons[i];
        if (button.classList.contains('bg-green-500')) {
            button.classList.remove('bg-green-500');
            selectedCount--;
            totalPrice -= seatPrice;

        } else if (selectedCount < 4) {
            button.classList.add('bg-green-500');
            selectedCount++;
            totalPrice += seatPrice;
            updateSeatInfo(button);
        }
        updateReciet();
        discount();


    });
}
function updateReciet() {
    selectedSeatsElement.innerText = selectedCount;
    SeatsLeft.innerText = seats - selectedCount;
    document.getElementById('totalPrice').innerText = `: ${totalPrice}`;


}


function discount() {
    let TotalMoney = totalPrice;

    const grandTotal = document.getElementById('total-cost');
    const couponBtn = document.getElementById('coupon-btn');
    let alertShown = false;

    couponBtn.addEventListener('click', function () {
        const couponInput = document.getElementById('coupon').value;
        const couponCode = couponInput.split(" ").join('').toUpperCase();

        console.log(couponCode);
        if (couponCode === "NEW15") {
            // Calculate the discount (15% discount)
            const discountPrice = TotalMoney * 0.85;
            grandTotal.innerText = discountPrice.toString();
            console.log("Discount applied: 15%");

        }
       
        else if (couponCode === "COUPLE20") {
            const discountPrice = TotalMoney * 0.80;
            grandTotal.innerText = discountPrice.toString();
        } else {

            if (!alertShown) {
                alert('Invalid Coupon');
                alertShown = true;
            }
            grandTotal.innerText = TotalMoney.toString();
        }
    });
}




let updateCounter = 0;

function updateSeatInfo(selectedButton) {
    if (updateCounter < 4) {
        const seatDetail = document.createElement('div');
        seatDetail.classList.add('seat-detail');

        seatDetail.innerHTML = `
            <div class='flex justify-evenly'>
                <h3>${selectedButton.textContent}</h3>
                <h3>Economy</h3>
                <h3>${seatPrice}</h3>
            </div>
        `;

        seatInfoContainer.appendChild(seatDetail);

        updateCounter++;
    }
}



const input1 = document.getElementById("input-mobile");
const input2 = document.getElementById("input-email");
const submitButton = document.getElementById("next-btn");

function checkInputs() {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();

   
    const isValidInput1 = !isNaN(value1) && value1.length > 0; 

    
    const isValidInput2 = value2.length > 0 && value2.includes("@");

    if (isValidInput1 && isValidInput2) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", "disabled");
    }
}

input1.addEventListener("input", checkInputs);
input2.addEventListener("input", checkInputs);






