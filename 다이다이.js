let coupon = parseInt(prompt("쿠폰 개수를 입력하세요"));
       document.write("쿠폰: " + coupon + "장<hr>");
       coupon = Math.floor(coupon / 10);
       switch (coupon) {
        case 2:
            document.write("침대");
            break;
        case 1:
            document.write("일기장");
            break;
        default:
            document.write("아이스티 한 잔");
       }