let PaymentAmount = parseInt(prompt("결제 금액를 입력하시오"));
document.write("결제 금액: "+ PaymentAmount + "원<hr>");
PaymentAmount = Math.floor(PaymentAmount / 100);
switch (PaymentAmount) {
    case 2:
        document.write("1000 포인트 적립");
        break;
    case 1:
        document.write("500 포인트 적립");
        break;
    default:
        document.write("100 포인트 적립");
}