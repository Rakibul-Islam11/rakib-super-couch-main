import"./custom-CKlvVbhI.js";const p=document.getElementById("forNameOfRoute");document.getElementById("couchInfo");const w=document.getElementById("busMianShow"),x=localStorage.getItem("leavingFrom"),r=localStorage.getItem("goingTo"),f=localStorage.getItem("selectedDate");function B(){p.innerHTML=`
        <p class="inline text-md md:text-xl font-light text-blue-200">
            ${x} - ${r} On ${f}
        </p>
        <p class="text-3xl text-green-500 font-bold">Available Bus</p>
    `}B();function v(){fetch("fareData.json").then(n=>n.json()).then(n=>T(n))}v();function T(n){let c=n;console.log(c);let g=c[x][r].buses,b=c[x][r].fare;g.forEach(t=>{console.log(t);let d=document.createElement("div");d.classList.add("each_bus","p-3","bg-white","mt-2","outline","outline-1","outline-gray-400","text-sm"),d.innerHTML=`
            <div>
                <div class="text-md md:text-2xl font-bold md:font-normal text-black">RAKIB COUCH</div>
                <div class="text-sm text-black">${t.class}</div>
                <div class="text-sm text-black">${t.busId}</div>
            </div>
            <div class="text-black">${t.time}</div>
            <div class="flex flex-col items-end">
                <div class="text-md md:text-2xl text-black">${b}</div>
                <button class="selectSeatBBTTNN px-1 md:px-2 py-1 md:py-1 font-bold text-white use_font bg-blue-600 text-[10px] md:text-[12px]">Select Seat</button>
                <div class="forOpen pbb hidden"></div>
            </div>
        `,w.appendChild(d);let l=document.createElement("div");l.classList.add("text-gray-500","text-xs","mt-2","hidden");let h=`seatInfoTbdy_${t.busId}`,o=[];l.innerHTML=`
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
                                    <tbody id="${h}">
                                    </tbody>
                                </table>
                            </div>
                            <div class="fare_sum_cus border border-gray-300 rounded-md p-4 w-full">
                                <table class="w-full text-left text-gray-900">
                                    <tbody id="fareSummary_${t.busId}">
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Total Fare :</td>
                                            <td class="py-2 text-right" id="totalFare_${t.busId}">0 BDT</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Process Fee :</td>
                                            <td class="py-2 text-right" id="processFee_${t.busId}">25 BDT</td>
                                        </tr>
                                        <tr class="border-b border-gray-300">
                                            <td class="py-2 font-semibold">Bank Charge :</td>
                                            <td class="py-2 text-right">0 BDT</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 font-semibold">Total Amount :</td>
                                            <td class="py-2 text-right font-bold" id="totalAmount_${t.busId}"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,w.appendChild(l);const u=()=>{let e=o.length*b,i=e+25;document.getElementById(`totalFare_${t.busId}`).innerText=`${e} BDT`,document.getElementById(`totalAmount_${t.busId}`).innerText=`${i} BDT`};d.querySelector(".selectSeatBBTTNN").addEventListener("click",function(){l.classList.toggle("hidden")}),l.querySelectorAll(".crosss").forEach(e=>{e.addEventListener("click",function(){l.classList.add("hidden")})}),l.querySelectorAll(".seatBTN").forEach(e=>{e.addEventListener("click",function(){const a=this.textContent;this.classList.contains("bg-black")?(this.classList.remove("bg-black"),this.classList.add("bg-white"),o=o.filter(s=>s!==a)):(this.classList.remove("bg-white"),this.classList.add("bg-black"),o.push(a));let i=document.querySelector(`#${h} tr[data-seat="${a}"]`);if(!i&&this.classList.contains("bg-black")){let s=document.createElement("tr");s.setAttribute("data-seat",a),s.classList.add("border-b","border-gray-300"),s.innerHTML=`
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${a}</td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${b} <span>BDT</span></td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">${t.class}</td>
                        <td class="py-2 px-2 lg:px-4 md:text-[12px]">
                            <button class="cancel-btn shadow-xl text-red-400"><i class="fa-solid fa-xmark"></i></button>
                        </td>
                    `,s.querySelector(".cancel-btn").addEventListener("click",function(){s.remove(),e.classList.remove("bg-black"),e.classList.add("bg-white"),o=o.filter(m=>m!==a),u()}),document.getElementById(h).appendChild(s)}else i&&!this.classList.contains("bg-black")&&i.remove();u()})})})}
