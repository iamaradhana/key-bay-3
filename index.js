const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// menuBtn.addEventListener("click", () => {
//   sideMenu.style.display = "block";
// })
// closeBtn.addEventListener('click', () => {
//     sideMenu.style.display = 'none';

// })

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})
{/* <li>Progressive Loading and Unloading</li>
                <li>2 Vehicle on single bay</li>
                <li>Smoke and Fire Detection</li>
                <li>Throwing of Shipments</li>
                <li>Opening of Shipments</li>
                <li>Damage Shipments</li>
                <li>Improper Stacking</li>
                <li>Stacking without pallet</li>
                <li>Shipment Count</li>
                <li>Volumetric Weight of Shipments</li>
                <li>Vehicle Number Capture</li>
               </ul>  */}