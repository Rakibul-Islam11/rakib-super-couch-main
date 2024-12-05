"use strict";

const catchforNameOfRoute = document.getElementById("forNameOfRoute"),
    catchcouchInfo = document.getElementById('couchInfo'),
    cacthbusMianShow = document.getElementById("busMianShow");

// Retrieve data from localStorage
const leavingFrom = localStorage.getItem("leavingFrom");
const goingTo = localStorage.getItem("goingTo");
const selectedDate = localStorage.getItem("selectedDate");

// Display route information
function routeFor() {
    catchforNameOfRoute.innerHTML = `
        <p class="inline text-md md:text-xl font-light text-blue-200">
            ${leavingFrom} - ${goingTo} On ${selectedDate}
        </p>
        <p class="text-3xl text-green-500 font-bold">Available Bus</p>
    `;
}
routeFor();

// Fetch bus information from the API and handle it
function bussInfoApiRes() {
    fetch("fareData.json")
        .then(res => res.json())
        .then(data => forWorkApi(data));
}
bussInfoApiRes();
function forWorkApi(recdata) {
    let getFinal = recdata;
    console.log(getFinal);

    // Retrieve the buses data
    let getBuses = getFinal[leavingFrom][goingTo].buses;

    

    getBuses.forEach(bus => {
        console.log(bus);
        // Find fare
        let getBusesFare = bus.fare;
        let crtDiv = document.createElement("div");
        crtDiv.classList.add("each_bus", "p-3", "bg-white", "mt-2", "outline", "outline-1", "outline-gray-400", "text-sm");

        crtDiv.innerHTML = `
            <div>
                <div class="text-md md:text-2xl font-bold md:font-normal text-black">RAKIB COUCH</div>
                <div class="text-sm text-black">${bus.class}</div>
                <div class="text-sm text-black">${bus.busId}</div>
            </div>
            <div class="text-black">${bus.time}</div>
            <div class="flex flex-col items-end">
                <div class="text-md md:text-2xl text-black">${bus.fare}</div>
                <button class="selectSeatBBTTNN px-1 md:px-2 py-1 md:py-1 font-bold text-white use_font bg-blue-600 text-[10px] md:text-[12px]">Select Seat</button>
                <div class="forOpen pbb hidden"></div>
            </div>
        `;

        cacthbusMianShow.appendChild(crtDiv);

        // Create a placeholder div to show text when button is clicked
        let textDiv = document.createElement("div");
        textDiv.classList.add("text-gray-500", "text-xs", "mt-2", "hidden");

        // Set a unique ID for each seat info tbody
        let uniqueSeatInfoId = `seatInfoTbdy_${bus.busId}`;
        let selectedSeats = [];

        textDiv.innerHTML = `
            <div class="w-full">
                <div class="main_seat_and_info bg-white m-auto flex flex-row gap-4 py-4 px-10">
                    <div class=" frres  crosss items-end text-end flex justify-end text-2xl cursor-pointer "><i class="fa-solid fa-xmark"></i></div>
                    <div class="seat_sectin border-1 shadow_cus h-[540px] xl:h-[580px]">
                        <button style="border-radius: 7px 7px 15px 15px;" class="w-24 h-9 bg-white flex items-center justify-center m-auto">Refresh</button>
                        <div class="ss flex justify-center gap-10 max-w-[500px]">
                            <!-- Left and Right Seat Layouts here -->
                            <div class="leftmain flex gap-3 pt-24">
                                <div class="leftt space-y-2">
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A1</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A2</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A3</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A4</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A5</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A6</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A7</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A8</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A9</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A10</button>
                                </div>
                                <div class="leftt space-y-2">
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B1</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B2</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B3</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B4</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B5</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B6</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B7</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B8</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B9</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B10</button>
                                </div>
                            </div>
                            <div class="raightMain flex gap-4 pt-24">
                                <div class="rightt space-y-2">
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C1</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C2</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C3</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C4</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C5</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C6</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C7</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C8</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C9</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C10</button>
                                </div>
                                <div class="rightt space-y-2">
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D1</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D2</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D3</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D4</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D5</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D6</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D7</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D8</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D9</button>
                                    <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D10</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Seat info section -->
                    <div class="seat_select_info_main w-full md:w-3/4">
                        <div class="frretwo crosss flex justify-end text-2xl cursor-pointer"><i class="fa-solid fa-xmark"></i></div>
                        <div class="md:p-5">Additional Information...</div>
                        <div class="flex justify-center flex-col md:flex-row gap-2">
                            <div class="border border-gray-300 rounded-md mt-3 md:mt-0 w-full md:w-11/12">
                                <table class="w-full text-left text-gray-900">
                                    <thead>
                                        <tr class="bg-gray-100 border-b border-gray-300 text-[16px]">
                                            <th class="py-2 px-2 lg:px-4 font-semibold">Seats</th>
                                            <th class="py-2 px-2 lg:px-4 font-semibold">Fare</th>
                                            <th class="py-2 px-2 lg:px-4 font-semibold">Class</th>
                                            <th class="py-2 px-2 lg:px-4 font-semibold">Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody id="${uniqueSeatInfoId}"></tbody>
                                </table>
                            </div>
                            <div class="fare_sum_cus border border-gray-300 rounded-md p-4 w-full">
                                <table class="w-full text-left text-gray-900">
                                    <tbody id="fareSummary_${bus.busId}">
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Total Fare :</td>
                                            <td class="py-2 text-right" id="totalFare_${bus.busId}">0 BDT</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Process Fee :</td>
                                            <td class="py-2 text-right" id="processFee_${bus.busId}">25 BDT</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Bank Charge :</td>
                                            <td class="py-2 text-right">0 BDT</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 font-semibold">Total Amount :</td>
                                            <td class="py-2 text-right font-bold" id="totalAmount_${bus.busId}"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        cacthbusMianShow.appendChild(textDiv);

        // Function to update fare
        const updateFare = () => {
            let totalFare = selectedSeats.length * getBusesFare;
            let processFee = 25;
            let totalAmount = totalFare + processFee;
            document.getElementById(`totalFare_${bus.busId}`).innerText = `${totalFare} BDT`;
            document.getElementById(`totalAmount_${bus.busId}`).innerText = `${totalAmount} BDT`;
        };

        // Add click event listener to select seat button
        let selectSeatButtons = crtDiv.querySelectorAll('.selectSeatBBTTNN'); // সমস্ত বাটন সিলেক্ট
        selectSeatButtons.forEach(button => {
            button.addEventListener("click", function () {
                textDiv.classList.toggle("hidden"); // প্রত্যেক বাটনে ইভেন্ট যুক্ত
            });
        });


        // Add click event listener for cross buttons to hide the seat selection view
        textDiv.querySelectorAll('.crosss').forEach(crossButton => {
            crossButton.addEventListener("click", function () {
                textDiv.classList.add("hidden");
            });
        });

        textDiv.querySelectorAll('.seatBTN').forEach(seatButton => {
            seatButton.addEventListener('click', function () {
                const seatNumber = this.textContent;

                if (this.classList.contains("bg-black")) {
                    this.classList.remove("bg-black");
                    this.classList.add("bg-white");
                    selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
                } else {
                    this.classList.remove("bg-white");
                    this.classList.add("bg-black");
                    selectedSeats.push(seatNumber);
                }

                // Step 1: টেবিলটি খুঁজে বের করা
                let catchuniqueSeatInfoId = document.getElementById(uniqueSeatInfoId);
                let uniqueSeatRow = catchuniqueSeatInfoId.querySelector(`tr[data-seat="${seatNumber}"]`);// এখানে প্রতিটা table এর tr এর মদ্ধে data সেট করা যায় আর এখানে প্রতিটা tr এ ভিন্ন ভিন্ন ডাটা সেট কোড়ে তাদেরকে indevutaly handle করা যায়।

                if (this.classList.contains("bg-black")) {
                    let crtTR = document.createElement("tr");
                    crtTR.setAttribute("data-seat", seatNumber);
                    crtTR.classList.add("border-b", "border-gray-300");

                    crtTR.innerHTML = `
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${seatNumber}</td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${getBusesFare} <span>BDT</span></td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${bus.class}</td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">
                            <button class="cancel-btn shadow-xl text-red-400"><i class="fa-solid fa-xmark"></i></button>
                        </td>
                    `;
                    crtTR.querySelectorAll('.cancel-btn').forEach(crossBTN => {
                        crossBTN.addEventListener('click', function () {
                            crtTR.remove();
                            seatButton.classList.remove("bg-black");
                            seatButton.classList.add("bg-white");
                            selectedSeats = selectedSeats.filter(seat => seat !== seatNumber);
                            updateFare();
                        })
                    })
                    
                    catchuniqueSeatInfoId.appendChild(crtTR);
                } else  {                                              
                    
                    uniqueSeatRow.remove();// এখানে uniqueSeatRow থেকে যেভাবে tr remove হচ্ছে তা হলো আমি প্রতিটা tr কে ধরেছি `tr[data-seat="${seatNumber}"]` এইটার মাদ্ধমে তাহলে এটা আছে সেই tr এ যেই tr কে romve করতে চাচ্ছি।
                }

                updateFare();
            });
        });
    });
}















// function forWorkApi(recdata) {
//     let getFinal = recdata;
//     console.log(getFinal);

//     // Retrieve the buses data
//     let getBuses = getFinal[leavingFrom][goingTo].buses;
//     let getFare = getFinal[leavingFrom][goingTo].fare;
//     let getBusesClass = getFinal[leavingFrom][goingTo].buses[0].class;
//     console.log(getBusesClass);
    

//     getBuses.forEach(bus => {
//         console.log(bus);
//         let crtDiv = document.createElement("div");
//         crtDiv.classList.add("each_bus", "p-3", "bg-white", "mt-2", "outline", "outline-1", "outline-gray-400", "text-sm");

//         crtDiv.innerHTML = `
//             <div>
//                 <div class="text-md md:text-2xl font-bold md:font-normal text-black">RAKIB COUCH</div>
//                 <div class="text-sm text-black">${bus.class}</div>
//                 <div class="text-sm text-black">${bus.busId}</div>
//             </div>
//             <div class="text-black">${bus.time}</div>
//             <div class="flex flex-col items-end">
//                 <div class="text-md md:text-2xl text-black">${getFinal[leavingFrom][goingTo].fare}</div>
//                 <button class="selectSeatBBTTNN px-1 md:px-2 py-1 md:py-1 font-bold text-white use_font bg-blue-600 text-[10px] md:text-[12px]">Select Seat</button>
//                 <div class="forOpen pbb hidden"></div>
//             </div>
//         `;

//         cacthbusMianShow.appendChild(crtDiv);

//         let textDiv = document.createElement("div");
//         textDiv.classList.add("text-gray-500", "text-xs", "mt-2", "hidden");

//         textDiv.innerHTML = `
//             <div class="w-full">
            
//             <div class="main_seat_and_info bg-white m-auto flex flex-column gap-4 py-4 px-10">

//                 <div class=" frres  crosss items-end text-end flex justify-end text-2xl cursor-pointer "><i class="fa-solid fa-xmark"></i></div>

//                 <div class="seat_sectin border-1 shadow_cus h-[540px] xl:h-[580px]">

//                     <button style="border-radius: 7px 7px 15px 15px;"
//                         class="w-24 h-9 bg-white flex items-center justify-center m-auto">Refresh</button>
//                     <div class="ss flex justify-center gap-10 max-w-[500px]">
//                         <div class="leftmain flex gap-3 pt-24 ">
//                             <div class="leftt space-y-2">
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">A1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">B1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">C1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">D1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">E1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">F1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">G1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">H1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">I1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">J1</button>
//                             </div>
//                             <div class="leftTwo space-y-2">
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">A2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">B2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">C2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">D2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">E2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">F2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">G2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">H2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">I2</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">J2</button>
//                             </div>
//                         </div>
//                         <div class="raightMain flex gap-4  pt-24">
//                             <div class="rightt space-y-2">
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">A1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">B1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">C1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">D1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">E1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">F1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">G1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">H1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">I1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">J1</button>
//                             </div>
//                             <div class="righttTwo space-y-2">
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">A1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">B1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">C1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">D1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">E1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">F1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">G1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">H1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">I1</button>
//                                 <button class="w-8 h-8  xl:w-9 xl:h-9 seatBTN  bg-white ">J1</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
// <!--seat info section start-->
//                 <div class="seat_select_info_main md:w-3/4 ">
//                     <div class=" frretwo crosss flex justify-end text-2xl cursor-pointer"><i class="fa-solid fa-xmark"></i></div>
//                 <div class =" md:p-5">lorem jgoiuhgui ijguu igiuhin knndiguu ngngn gigiuipnp nghgb g ginigbbg g iggnuihguhb igiuhin knndiguu ngngn gigiuipnp nghgb g ginigbbg g iggnuihguhb</div>
//                     <div class="flex justify-center flex-col md:flex-row  gap-2">
//                         <!--seat num info start-->
                        
//                         <div class="border border-gray-300 rounded-md overflow-hidden mt-3 md:mt-0 w-full md:w-11/12 ">
//                             <table class="w-full text-left text-gray-900">
//                                 <thead>
//                                     <tr class="bg-gray-100 border-b border-gray-300">
//                                         <th class="py-2 px-2 lg:px-4 font-semibold">Seats</th>
//                                         <th class="py-2 px-2 lg:px-4  font-semibold">Fare</th>
//                                         <th class="py-2 px-2 lg:px-4  font-semibold">Class</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody id="seatInfoTbdy">
                                    
                                    
//                                 </tbody>
//                             </table>
//                         </div>
//                         <!--fare sum cus start-->
//                         <div class="fare_sum_cus border border-gray-300 rounded-md  p-4 w-full ">
//                             <table class="w-full text-left text-gray-900">
//                                 <tbody>
//                                     <tr class="border-b border-gray-300">
//                                         <td class="py-2 font-semibold">Total Fare :</td>
//                                         <td class="py-2 text-right">1300 BDT</td>
//                                     </tr>
//                                     <tr class="border-b border-gray-300">
//                                         <td class="py-2 font-semibold">Process Fee :</td>
//                                         <td class="py-2 text-right">25 BDT</td>
//                                     </tr>
//                                     <tr class="border-b border-gray-300">
//                                         <td class="py-2 font-semibold">Bank Charge :</td>
//                                         <td class="py-2 text-right">0 BDT</td>
//                                     </tr>
//                                     <tr>
//                                         <td class="py-2 font-semibold">Total Amount :</td>
//                                         <td class="py-2 text-right font-bold">1325 BDT</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>

//                     </div>
//                     <!--requird section start-->
//                     <div class="p-6  mx-auto bg-white rounded-lg  ">
//                 <!--from box start-->
//                         <div class="flex gap-4 justify-center md:mt-24 flex-col md:flex-row">
//                             <div>
//                                 <!-- Mobile Number Field -->
//                                 <div>
//                                     <label class="text-sm font-semibold text-blue-600 mb-1 inline-block">Mobile No.</label>
//                                     <input type="text" placeholder="01XXXXXXXX"
//                                         class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
//                                 </div>

//                                 <!-- Full Name Field with Tooltip -->
//                                 <div class="relative">
//                                     <label class="text-sm font-semibold text-blue-600 mb-1 inline-block">Full Name</label>
//                                     <input type="text" placeholder="MR. XYZ"
//                                         class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">

//                                 </div>
//                             </div>
//                             <!-- Email Address Field -->
//                             <div>
//                                 <div>
//                                     <label class="text-sm font-semibold text-blue-600 mb-1 inline-block">Email Address</label>
//                                     <input type="email" placeholder="abc@example.com"
//                                         class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
//                                 </div>

//                                 <!-- Gender Dropdown Field -->
//                                 <div>
//                                     <label class="text-sm font-semibold text-blue-600 mb-1 inline-block">Gender</label>
//                                     <select class="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:outline-none bg-white">
//                                         <option>Male</option>
//                                         <option>Female</option>
//                                         <option>Other</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Terms and Conditions Checkbox -->
//                         <div class="flex flex-col items-center gap-2">
//                             <div class="flex items-center space-x-2">
//                                 <input type="checkbox" id="terms" class="text-blue-500 focus:ring-0 rounded">
//                                 <label for="terms" class="text-sm text-gray-700">
//                                     agree to the <a href="#" class="text-blue-600 underline">Terms and Conditions</a> and <a href="#"
//                                         class="text-blue-600 underline">Cancel Policy</a>
//                                 </label>
//                             </div>

//                             <!-- Buttons -->
//                             <div class="flex flex-col md:flex-row w-full md:w-auto items-center justify-center gap-2">
//                                 <button
//                                     class="bg-red-500 text-white w-full md:w-20 px-2 py-2 md:px-4 md:py-2 rounded hover:bg-red-600">Cancel</button>
//                                 <button class="bg-purple-800 text-white w-full md:w-40 px-2 md:px-4 py-2 rounded hover:bg-purple-900">Payment
//                                     Method</button>
//                             </div>
//                         </div>


//                     </div>

//                 </div>

//             </div>
//         </div>
        
//         `

//         cacthbusMianShow.appendChild(textDiv);

//         let selectSeatButton = crtDiv.querySelector('.selectSeatBBTTNN');
//         selectSeatButton.addEventListener("click", function () {
//             textDiv.classList.toggle("hidden");
//         });

//         let crossButtons = textDiv.querySelectorAll('.crosss');
//         crossButtons.forEach(crossButton => {
//             crossButton.addEventListener("click", function () {
//                 textDiv.classList.toggle("hidden");
//             });
//         });

//         // Add click event listeners for each dynamically created seat button
//         let seatButtons = textDiv.querySelectorAll('.seatBTN');

//         let catchseatInfoTbdy = document.getElementById("seatInfoTbdy");
//         seatButtons.forEach(seatButton => {
//             seatButton.addEventListener('click', function () {
//                 const seatNumber = this.textContent;

//                 // Create new tr for seat info
//                 const newTr = document.createElement('tr');
//                 newTr.classList.add('border-b', 'border-gray-300');

//                 newTr.innerHTML = `
//                         <td class="py-2 px-2 lg:px-4">${seatNumber}</td>
//                         <td class="py-2 px-2 lg:px-4">${getFare} BDT</td>
//                         <td class="py-2 px-2 lg:px-4">${getBusesClass}</td>
//                 `;

    
//                 catchseatInfoTbdy.appendChild(newTr)
//             });

//         });
//     });
// }










// function forWorkApi(recdata) {
//     let getFinal = recdata;
//     console.log(getFinal);

//     // Retrieve the buses data
//     let getBuses = getFinal[leavingFrom][goingTo].buses;
//     //find fare
//     let getBusesFare = getFinal[leavingFrom][goingTo].fare;
//     console.log(getBusesFare);


//     getBuses.forEach(bus => {
//         console.log(bus);
//         let crtDiv = document.createElement("div");
//         crtDiv.classList.add("each_bus", "p-3", "bg-white", "mt-2", "outline", "outline-1", "outline-gray-400", "text-sm");

//         crtDiv.innerHTML = `
//             <div>
//                 <div class="text-md md:text-2xl font-bold md:font-normal text-black">RAKIB COUCH</div>
//                 <div class="text-sm text-black">${bus.class}</div>
//                 <div class="text-sm text-black">${bus.busId}</div>
//             </div>
//             <div class="text-black">${bus.time}</div>
//             <div class="flex flex-col items-end">
//                 <div class="text-md md:text-2xl text-black">${getFinal[leavingFrom][goingTo].fare}</div>
//                 <button class="selectSeatBBTTNN px-1 md:px-2 py-1 md:py-1 font-bold text-white use_font bg-blue-600 text-[10px] md:text-[12px]">Select Seat</button>
//                 <div class="forOpen pbb hidden"></div>
//             </div>
//         `;

//         cacthbusMianShow.appendChild(crtDiv);

//         // Create a placeholder div to show text when button is clicked
//         let textDiv = document.createElement("div");
//         textDiv.classList.add("text-gray-500", "text-xs", "mt-2", "hidden");

//         // Set a unique ID for each seat info tbody
//         let uniqueSeatInfoId = `seatInfoTbdy_${bus.busId}`;

//         textDiv.innerHTML = `
//             <div class="w-full">
//                 <div class="main_seat_and_info bg-white m-auto flex flex-row gap-4 py-4 px-10">
//                     <div class=" frres  crosss items-end text-end flex justify-end text-2xl cursor-pointer "><i class="fa-solid fa-xmark"></i></div>
//                     <div class="seat_sectin border-1 shadow_cus h-[540px] xl:h-[580px]">
//                         <button style="border-radius: 7px 7px 15px 15px;" class="w-24 h-9 bg-white flex items-center justify-center m-auto">Refresh</button>
//                         <div class="ss flex justify-center gap-10 max-w-[500px]">
//                             <!-- Left and Right Seat Layouts here -->
//                             <div class="leftmain flex gap-3 pt-24">
//                                 <div class="leftt space-y-2">
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A1</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A2</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A3</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A4</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A5</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A6</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A7</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A8</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A9</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">A10</button>
//                                 </div>
//                                 <div class="leftt space-y-2">
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B1</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B2</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B3</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B4</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B5</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B6</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B7</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B8</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B9</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">B10</button>
//                                 </div>
//                             </div>
//                             <div class="raightMain flex gap-4 pt-24">
//                                 <div class="rightt space-y-2">
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C1</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C2</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C3</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C4</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C5</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C6</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C7</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C8</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C9</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">C10</button>
//                                 </div>
//                                 <div class="rightt space-y-2">
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D1</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D2</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D3</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D4</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D5</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D6</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D7</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D8</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D9</button>
//                                     <button class="w-8 h-8 xl:w-9 xl:h-9 seatBTN bg-white">D10</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <!-- Seat info section -->
//                     <div class="seat_select_info_main w-full md:w-3/4">
//                         <div class="frretwo crosss flex justify-end text-2xl cursor-pointer"><i class="fa-solid fa-xmark"></i></div>
//                         <div class="md:p-5">Additional Information...</div>
//                         <div class="flex justify-center flex-col md:flex-row gap-2">
//                             <div class="border border-gray-300 rounded-md mt-3 md:mt-0 w-full md:w-11/12">
//                                 <table class="w-full text-left text-gray-900">
//                                     <thead>
//                                         <tr class="bg-gray-100 border-b border-gray-300 text-[16px]">
//                                             <th class="py-2 px-2 lg:px-4 font-semibold">Seats</th>
//                                             <th class="py-2 px-2 lg:px-4 font-semibold">Fare</th>
//                                             <th class="py-2 px-2 lg:px-4 font-semibold">Class</th>
//                                             <th class="py-2 px-2 lg:px-4 font-semibold">Cancel</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody id="${uniqueSeatInfoId}">
                                    
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div class="fare_sum_cus border border-gray-300 rounded-md p-4 w-full">
//                                 <table class="w-full text-left text-gray-900">
//                                     <tbody>
//                                         <!-- Seat info will be dynamically added here -->
//                                         <tr class="border-b border-gray-300">
//                                             <td class="py-2 font-semibold">Total Fare :</td>
//                                             <td class="py-2 text-right">1300 BDT</td>
//                                         </tr>
//                                         <tr class="border-b border-gray-300">
//                                             <td class="py-2 font-semibold">Process Fee :</td>
//                                             <td class="py-2 text-right">25 BDT</td>
//                                         </tr>
//                                         <tr class="border-b border-gray-300">
//                                             <td class="py-2 font-semibold">Bank Charge :</td>
//                                             <td class="py-2 text-right">0 BDT</td>
//                                         </tr>
//                                         <tr>
//                                             <td class="py-2 font-semibold">Total Amount :</td>
//                                             <td class="py-2 text-right font-bold">1325 BDT</td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         `;

//         cacthbusMianShow.appendChild(textDiv);

//         // Add click event listener to select seat button
//         let selectSeatButton = crtDiv.querySelector('.selectSeatBBTTNN');
//         selectSeatButton.addEventListener("click", function () {
//             // Toggle the visibility of textDiv on button click
//             textDiv.classList.toggle("hidden");
//         });

//         // Add click event listener for cross buttons to hide the seat selection view
//         textDiv.querySelectorAll('.crosss').forEach(crossButton => {
//             crossButton.addEventListener("click", function () {
//                 textDiv.classList.add("hidden");
//             });
//         });

//         textDiv.querySelectorAll('.seatBTN').forEach(seatButton => {
//             seatButton.addEventListener('click', function () {
//                 // Toggle background color to black if selected, white if unselected
//                 if (this.classList.contains("bg-black")) {
//                     this.classList.remove("bg-black");
//                     this.classList.add("bg-white");
//                 } else {
//                     this.classList.remove("bg-white");
//                     this.classList.add("bg-black");
//                 }

//                 const seatNumber = this.textContent;

//                 // Check if seat is already selected
//                 if (this.classList.contains("bg-black")) {
//                     let crtTR = document.createElement("tr");
//                     crtTR.classList.add("border-b", "border-gray-300");

//                     // Generate a unique ID for each cancel button
//                     const uniqueCancelBtnId = `cancel-btn-${seatNumber}-${Date.now()}`;
//                     console.log(uniqueCancelBtnId);

//                     crtTR.innerHTML = `
//                 <td class="py-2 px-2 lg:px-4 md:text-[12px]">${seatNumber}</td>
//                 <td class="py-2 px-2 lg:px-4 md:text-[12px]">${getBusesFare} <span>BDT</span></td>
//                 <td class="py-2 px-2 lg:px-4 md:text-[12px]">${bus.class}</td>
//                 <td class="py-2 px-2 lg:px-4 md:text-[12px]">
//                     <button id="${uniqueCancelBtnId}" class="ffd shadow-xl text-red-400"><i class="fa-solid fa-xmark"></i></button>
//                 </td>
//             `;

//                     // Append the new seat row to the table
//                     document.getElementById(uniqueSeatInfoId).appendChild(crtTR);

//                     // Add event listener to the cancel button to remove this specific row
//                     document.getElementById(uniqueCancelBtnId).addEventListener("click", function () {
//                         crtTR.remove(); // Remove the seat row (entire <tr>)
//                         seatButton.classList.remove("bg-black");
//                         seatButton.classList.add("bg-white"); // Unselect the seat
//                     });
//                 } else {
//                     // Remove the row from the table if it was unselected
//                     document.querySelectorAll(`#${uniqueSeatInfoId} tr`).forEach(row => {
//                         if (row.querySelector("td") && row.querySelector("td").textContent === seatNumber) {
//                             row.remove();
//                         }
//                     });
//                 }
//             });
//         });


//     });
// }