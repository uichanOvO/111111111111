let coupon = parseInt(prompt("쿠폰 개수를 입력하시오"));
document.write("쿠폰: "+coupon+"장<hr>");
coupon = Math.floor(coupon / 10);
switch (coupon) {
    case 2:
        document.write("짜장면");
        break;
    case 1:
        document.write("짬뽕");
        break;
    default:
        document.write("군만두");
}
