const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const formError = document.getElementById("formError");

contactForm.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop page reload

    const formData = new FormData(contactForm);

    // extra info
    formData.append("website", window.location.href);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (response.ok && result.success) {
            formSuccess.style.display = "block";
            formError.style.display = "none";
            contactForm.reset(); // clear form
        } else {
            formError.style.display = "block";
            formSuccess.style.display = "none";
        }
    } catch (error) {
        formError.style.display = "block";
        formSuccess.style.display = "none";
    }
});
class Order {
  constructor(orderId, customerName, tableNumber) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.tableNumber = tableNumber;
    this.items = [];
    this.totalPrice = 0;
    this.orderStatus = "Pending";
    this.orderTime = new Date().toLocaleTimeString();
    this.paymentMethod = "";
  }

  addItem(itemName, price) {
    this.items.push({ itemName, price });
    this.totalPrice += price;
  }

  setPayment(method) {
    this.paymentMethod = method;
  }

  completeOrder() {
    this.orderStatus = "Completed";
  }
}
