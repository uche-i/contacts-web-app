// EXAMPLE
// =================
// const person = [
//   {
//     name: "Christian",
//     phone: "123-111-1234",
//     email: "christian@live.com",
//     emailHTML: "<a href=\"mailto:christian@live.com\">christian@live.com</a>",
//     address: "123 Wilton Ave. Culver City CA 90234",
//     position: "1px",
//     transform: "inherit",
//     available: "#00ff1e"
//   }
// ];

class People {
  constructor(name, phone, email, emailHTML, address, position, transform, available) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.emailHTML = emailHTML;
    this.address = address;
    this.position = position;
    this.transform = transform;
    this.available = available;
  }
  details(){
    const contactDetails = {
        name: `${this.name}`,
        phone: `${this.phone}`,
        email: `${this.email}`,
        emailHTML: `${this.emailHTML}`,
        address: `${this.address}`,
        position: `${this.position}`,
        transform: `${this.transform}`,
        available: `${this.available}`
      };
    return contactDetails;
  }

}

const christian = new People ("Christian", "123-111-1234", "christian@live.com", "<a href=\"mailto:christian@live.com\">christian@live.com</a>", "123 Wilton Ave. Culver City CA 90234", "1px", "inherit", "#00ff1e");
const rich = new People ("Rich","123-222-1234","rich@gmail.com","<a href=\"mailto:rich@gmail.com\">rich@gmail.com</a>","123 Wilton Ave. Culver City CA 90234","41px","inherit","#00ff1e");
const scott = new People ("Scott", "323-333-1234",  "scott@yahoo.com", "<a href=\"mailto:scott@yahoo.com\">scott@yahoo.com</a>", "323 Wilton Ave. Culver City CA 90234", "81px", "inherit", "#00ff1e");
const danny = new People ("Danny", "423-444-1234", "danny@me.com", "<a href=\"mailto:danny@me.com\">danny@me.com</a>", "423 Wilton Ave. Culver City CA 90234", "121px", "inherit", "#00ff1e");
const taka = new People ("Taka", "523-555-1234", "taka@yahoo.com", "<a href=\"mailto:taka@yahoo.com\">taka@yahoo.com</a>", "523 Wilton Ave. Culver City CA 90234", "161px", "inherit", "#ff0000");
const tim = new People ("Tim", "623-666-1234", "tim@outlook.com", "<a href=\"mailto:tim@outlook.com\">tim@outlook.com</a>", "623 Wilton Ave. Culver City CA 90234", "201px", "inherit", "#c3c118");
const patrick = new People ("Patrick", "723-777-1234", "patrick@gmail.com", "<a href=\"mailto:patrick@gmail.com\">patrick@gmail.com</a>", "723 Wilton Ave. Culver City CA 90234", "241px", "translate3d(0px, -62px, 0px)", "#00ff1e");
const jacques = new People ("Jacques", "823-888-1234", "jacques@hotmail.com", "<a href=\"mailto:jacques@hotmail.com\">jacques@hotmail.com</a>", "823 Wilton Ave. Culver City CA 90234", "281px", "translate3d(0px, -62px, 0px)", "#c3c118");


const person = [ christian.details(), rich.details(), scott.details(), danny.details(), taka.details(), tim.details(), patrick.details(), jacques.details()];

const emailButton = document.querySelector('.item-email');
const phoneButton = document.querySelector('.item-phone');
const updateText = document.querySelectorAll('.update');

const btnText = update => {
  const btnText = document.querySelector('.btnText');
  btnText.innerHTML = update;
}

emailButton.addEventListener('click', event => {
  btnText("Email address");
  for (let i = 0; i < updateText.length; i++) {
    updateText[i].innerHTML = person[i].email;
  }
});

phoneButton.addEventListener('click', event => {
  btnText("Phone number");
  for (let i = 0; i < updateText.length; i++) {
    updateText[i].innerHTML = person[i].phone;
  }
});


$(function() {

  $("tr").each(function(index, value){

    $(this).on('click', function() {
      $("#overlay").fadeIn("disBlock");
      $(".infoCont").fadeIn("disBlock");
      console.log( $( this ).text() );

      const e = index;

      if (index == e) {
        $('.left .l-up').text(person[e].name);
        $('.right').html(`${person[e].emailHTML}<br> ${person[e].phone}<br> ${person[e].address}`);

        $(".infoCont").css("top", person[e].position);
        $(".right").css("transform", person[e].transform);
        $('.availability').css("background-color", person[e].available);
      }

    });

    $('#overlay').click(function () {
        $("#overlay").fadeOut("disBlock");
        $(".infoCont").fadeOut("disBlock");
    });

  });

});
