/**
 * TODO: write a function which asks user about donation till time he/she will not donate 100 dollars
 * or will say 'Get Out'
 * after this user will see alert
 * Thank You for Your donation `donation` or 'Sorry for disturbing, miser';
 */

const getDonation = () => {
  let donated = 0;
  while (donated < 100) {

    let donation = prompt('Donate please', 10);

    if (donation) {
      if (donation.toLowerCase().includes('get out')) break;
      if(+donation) {
        donated += +donation;
      }
    }

  }
  const phrase = donated ? `Thank You for Your donation $${donated}` : 'Sorry for disturbing, miser';
  alert(phrase);
};

window.addEventListener("load", getDonation);
