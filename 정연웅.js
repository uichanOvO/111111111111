let coupon = parseInt(prompt("현재 얼마 있는지 알려주세요"));
document.write("현재 돈: " + coupon + "원<hr>");
coupon = Math.floor(coupon);
switch (coupon) {
case 2:
    document.write("오마카세");
    break;
case 1:
    document.write("한뚝배기");
    break;
default:
    document.write("컵라면");
}