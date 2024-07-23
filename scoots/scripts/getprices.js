const baseURL = "https://randiu.github.io/wdd230/scoots/rentals";
const linksURL = "https://randiu.github.io/wdd230/scoots/data/prices.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    addPrices(data);
    console.log(data);
    console.log(baseURL);
  }

  function addPrices(data){
    const metroResHalf = document.getElementById('metro-res-half');
    const metroResFull = document.getElementById('metro-res-full');
    const metroWalkHalf = document.getElementById('metro-walk-half');
    const metroWalkFull = document.getElementById('metro-walk-full');

    metroResHalf.textContent = data.vehicles[0].reservationHalfDay;
    metroResFull.textContent = data.vehicles[0].reservationFullDay;
    metroWalkHalf.textContent = data.vehicles[0].walkInHalfDay;
    metroWalkFull.textContent = data.vehicles[0].walkInFullDay;
    
    const dioResHalf = document.getElementById('dio-res-half');
    const dioResFull = document.getElementById('dio-res-full');
    const dioWalkHalf = document.getElementById('dio-walk-half');
    const dioWalkFull = document.getElementById('dio-walk-full');

    dioResHalf.textContent = data.vehicles[1].reservationHalfDay;
    dioResFull.textContent = data.vehicles[1].reservationFullDay;
    dioWalkHalf.textContent = data.vehicles[1].walkInHalfDay;
    dioWalkFull.textContent = data.vehicles[1].walkInFullDay;

    const pcxResHalf = document.getElementById('pcx-res-half');
    const pcxResFull = document.getElementById('pcx-res-full');
    const pcxWalkHalf = document.getElementById('pcx-walk-half');
    const pcxWalkFull = document.getElementById('pcx-walk-full');

    pcxResHalf.textContent = data.vehicles[2].reservationHalfDay;
    pcxResFull.textContent = data.vehicles[2].reservationFullDay;
    pcxWalkHalf.textContent = data.vehicles[2].walkInHalfDay;
    pcxWalkFull.textContent = data.vehicles[2].walkInFullDay;

    const pioneerResHalf = document.getElementById('pioneer-res-half');
    const pioneerResFull = document.getElementById('pioneer-res-full');
    const pioneerWalkHalf = document.getElementById('pioneer-walk-half');
    const pioneerWalkFull = document.getElementById('pioneer-walk-full');

    pioneerResHalf.textContent = data.vehicles[3].reservationHalfDay;
    pioneerResFull.textContent = data.vehicles[3].reservationFullDay;
    pioneerWalkHalf.textContent = data.vehicles[3].walkInHalfDay;
    pioneerWalkFull.textContent = data.vehicles[3].walkInFullDay;

    const jeepFourResHalf = document.getElementById('jeep-four-res-half');
    const jeepFourResFull = document.getElementById('jeep-four-res-full');
    const jeepFourWalkHalf = document.getElementById('jeep-four-walk-half');
    const jeepFourWalkFull = document.getElementById('jeep-four-walk-full');

    jeepFourResHalf.textContent = data.vehicles[4].reservationHalfDay;
    jeepFourResFull.textContent = data.vehicles[4].reservationFullDay;
    jeepFourWalkHalf.textContent = data.vehicles[4].walkInHalfDay;
    jeepFourWalkFull.textContent = data.vehicles[4].walkInFullDay;

    const jeepTwoResHalf = document.getElementById('jeep-two-res-half');
    const jeepTwoResFull = document.getElementById('jeep-two-res-full');
    const jeepTwoWalkHalf = document.getElementById('jeep-two-walk-half');
    const jeepTwoWalkFull = document.getElementById('jeep-two-walk-full');

    jeepTwoResHalf.textContent = data.vehicles[5].reservationHalfDay;
    jeepTwoResFull.textContent = data.vehicles[5].reservationFullDay;
    jeepTwoWalkHalf.textContent = data.vehicles[5].walkInHalfDay;
    jeepTwoWalkFull.textContent = data.vehicles[5].walkInFullDay;
  
}

getLinks();