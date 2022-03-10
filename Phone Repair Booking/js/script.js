///////////////////////////////////////////////////////////////////////////////
//Button to the FAQ Page.
///////////////////////////////////////////////////////////////////////////////
//If the current page is index.html allow this function to be avavilable.
if (location.href.includes("index.html")){
  function loadFAQ(){
    window.location.href='pages/faq.html';
  }
}
///////////////////////////////////////////////////////////////////////////////
//Form.
///////////////////////////////////////////////////////////////////////////////
//Input Variables.
var inputs = document.getElementsByClassName('format-inputs');
var formLayout = document.getElementsByClassName('form-layout');
var errorMessage = document.getElementsByClassName('error-message');
var customerType = document.getElementsByName("customer-type");
var title = document.getElementById('title');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var street = document.getElementById('street');
var suburb = document.getElementById('suburb');
var city = document.getElementById('city');
var postCode= document.getElementById('post-code');
var phoneNumber = document.getElementById('phone-number');
var email = document.getElementById('email');
///
var purchaseDate = document.getElementById('purchase-date');
var repairDate = document.getElementById('repair-date');
var warranty = document.getElementById('warranty');
var numberIMEI = document.getElementById('IMEI-number');
var make = document.getElementById('make');
var modelNumber = document.getElementById('model-number');
var fault = document.getElementById('fault');
var description = document.getElementById('description');
///
var bond = document.getElementById('bond');
var fee = document.getElementById('fee');
var cost = document.getElementById('cost');
var includeGST = document.getElementById('GST');
var totalCost = document.getElementById('total-cost');
///
if(location.href.includes("index.html")){
  function resetForm(){
    removeFiles();
    noPhone();
    calculateCosts();
    if(document.body.contains(errorMessage[0])){
      errorMessage[0].remove();
    }
    formLayout[0].reset();
    resetWarrantyDate()
    applySettings();
  }
  //Submit Form
  function submitForm(){
    try{
      //Remove the error message.
      errorMessage[0].remove();
    }catch{}
    if(isRequired()){
      calculateCosts();
      setReceiptDetails();
      loadModal();
    }else{
      return;
    }
  }
}
function isRequired(){
  var errorMessage = document.createElement("DIV");
  const character = /^[a-zA-Z\-\s]+$/;
  const phoneDigits = /^[0-9\-\+\s]+$/;
  const emailAllowed = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z0-9]{2,8})$/;
  errorMessage.classList.add("error-message")
  errorMessage.style.width = "100%";
  errorMessage.style.margin = "10";
  errorMessage.style.color = "red";
  //Check that no Required input is blank.
  if(title.value == "..."){
    //Check that no Required input is blank.
    errorMessage.innerHTML="Please select a title.";
    insertAfter(errorMessage, inputs[0])
    return false;
  }
  //Check that no Required input is blank.
  else if(fname.value == ""){
    errorMessage.innerHTML="Please enter your first name.";
    insertAfter(errorMessage, inputs[1])
    return false;
  }
  //Check that input meets specific requirement.
  else if(!character.test(fname.value)){
    errorMessage.innerHTML="Please only use 'a-z' 'A-Z' and '-'.";
    insertAfter(errorMessage, inputs[1])
    return false;
  }
  //Check that no Required input is blank.
  else if(lname.value == ""){
    errorMessage.innerHTML="Please enter your last name.";
    insertAfter(errorMessage, inputs[2])
    return false;
  }
  //Check that input meets specific requirement.
  else if(!character.test(lname.value)){
    errorMessage.innerHTML="Please only use 'a-z' 'A-Z' and '-'.";
    insertAfter(errorMessage, inputs[2])
    return false;
  }
  //Check that no Required input is blank.
  else if(street.value == ""){
    errorMessage.innerHTML="Please enter in your street address.";
    insertAfter(errorMessage, inputs[3])
    return false;
  }
  //Check that no Required input is blank.
  else if(city.value == ""){
    errorMessage.innerHTML="Please enter in your city.";
    insertAfter(errorMessage, inputs[5])
    return false;
  }
  //Check that input meets specific requirement.
  else if(!postCode.value.length == 4 || isNaN(Number(postCode.value))){
    errorMessage.innerHTML="Please enter a 4 digit postcode.";
    insertAfter(errorMessage, inputs[6])
    return false;
  }
  //Check that no Required input is blank.
  else if(phoneNumber.value == ""){
    errorMessage.innerHTML="Please enter in your phone number.";
    insertAfter(errorMessage, inputs[7])
    return false;
  }
  //Check that input meets specific requirement.
  else if(!phoneDigits.test(phoneNumber.value)){
    errorMessage.innerHTML="Please enter in only numbers, spaces, '-' and '+'.";
    insertAfter(errorMessage, inputs[7])
    return false;
  }
  //Check that no Required input is blank.
  else if(email.value == ""){
    errorMessage.innerHTML="Please enter in your email.";
    insertAfter(errorMessage, inputs[8])
    return false;
  }
  //Check that input meets specific requirement.
  else if(email.value.length < 5 || !(emailAllowed.test(email.value))){
    errorMessage.innerHTML="Please include '@' and '.' and at least 5 letters.";
    insertAfter(errorMessage, inputs[8])
    return false;
  }
  //Check that no Required input is blank.
  else if(purchaseDate.value == ""){
    errorMessage.innerHTML="Please enter the purchase date.";
    insertAfter(errorMessage, inputs[9])
    return false;
  }
  //Check that input meets specific requirement.
  else if(isNaN(new Date(purchaseDate.value).getTime())){
    errorMessage.innerHTML="Please enter a valid purchase date.";
    insertAfter(errorMessage, inputs[9])
    return false;
  }
  //The Purchase date cannot be in the future.
  else if((new Date(purchaseDate.value)) >= (new Date())){
    errorMessage.innerHTML="Please enter a purchase date in the past.";
    insertAfter(errorMessage, inputs[9])
    return false;
  }
  //Check that no Required input is blank.
  else if(repairDate.value == ""){
    errorMessage.innerHTML="Please enter the repair date.";
    insertAfter(errorMessage, inputs[10])
    return false;
  }
  //Check that input meets specific requirement.
  else if(isNaN(new Date(repairDate.value).getTime())){
    errorMessage.innerHTML="Please enter a valid purchase date.";
    insertAfter(errorMessage, inputs[10])
    return false;
  }
  //Check that input meets specific requirement.
  else if((new Date(repairDate.value)) <= (new Date(purchaseDate.value))){
    errorMessage.innerHTML="Please enter a repair date after the purchase date.";
    insertAfter(errorMessage, inputs[10])
    return false;
  }
  //Check that no Required input is blank.
  else if(numberIMEI.value == ""){
    errorMessage.innerHTML="Please enter in your IMEI number.";
    insertAfter(errorMessage, inputs[11])
    return false;
  }
  //Check that input meets specific requirement.
  else if(!numberIMEI.value.length == 15 || isNaN(Number(numberIMEI.value))){
    errorMessage.innerHTML="Please enter a 15 digit IMEI number.";
    insertAfter(errorMessage, inputs[11])
    return false;
  }
  //Check that input meets specific requirement.
  else if(make.value == "..."){
    errorMessage.innerHTML="Please select a phone make.";
    insertAfter(errorMessage, inputs[12])
    return false;
  }
  //Check that input meets specific requirement.
  else if(fault.value == "..."){
    errorMessage.innerHTML="Please enter in.";
    insertAfter(errorMessage, inputs[14])
    return false;
  }
  //Check if First Name
  return true;
}
//Check if the warranty is still avavilable.
function checkWarrantyDate(){
  var purchaseDateNow = new Date(purchaseDate.value)
  purchaseDateNow.setFullYear(purchaseDateNow.getFullYear()+2)
  if(purchaseDateNow >= new Date(repairDate.value)){
    warranty.disabled = false;
  }else{
    warranty.disabled = true;
    warranty.checked = false;
  }
}
//Resets the dates.
function resetWarrantyDate(){
  purchaseDate.value = "";
  repairDate.value = "";
  warranty.disabled = false;
  warranty.checked = false;
}
//Used to put the error message after the Input.
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
///////////////////////////////////////////////////////////////////////////////
//AJAX technology: Asynchronous JSON and XML.
///////////////////////////////////////////////////////////////////////////////
var flexContainer = document.getElementsByClassName('flex-container');
if (location.href.includes("faq.html")){
  var proxy = "https://cors-anywhere.herokuapp.com/";
  var locationURL = "danieldangs.com/itwd6-408/faqs.json";
  var url = proxy + locationURL;
  //Making a XMLHTTP request to the JSON page.
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET',url)
  xhttp.onload = function(){
    //Convert the data into JSON.
    var jsondata = JSON.parse(xhttp.responseText)
    addJSONdata(jsondata)
  }
  xhttp.send();
  //Add the JSON data to the page.
  function addJSONdata(jsondata){
  var htmlString = "";
    for(i=0;i<jsondata.length;i++){
      //Add a new element for each question and answer in the JSON file.
      htmlString += "<div>" + "<b>" + jsondata[i].question +
       "</b>" + "<br><br>" + jsondata[i].answer + "</p>" + "</div>";
    }
    //Add all the elements into the flex containers.
    flexContainer[0].innerHTML = htmlString;
  }
}



///////////////////////////////////////////////////////////////////////////////
//File Upload Preview.
///////////////////////////////////////////////////////////////////////////////
if(location.href.includes("index.html")){
  //Variables.
  var myFiles = document.getElementById('my-file');
  var displayFiles = document.getElementById('file-drop-display');
  const allowedExtensions = ["image/jpeg","image/png"];
  //Listen for when the user adds/changes images.
  function updateFiles(){
    //Removes previous images.
    removeFiles()
    //Check that the files are images.
    if(validFileType(myFiles.files)){
      //Adds new images.
      addFiles(myFiles.files)
    }else{
      //Remove all files.
      myFiles.value = '';
    }
  }
  //Remove any Previous Images
  function removeFiles(){
    var x = displayFiles.children.length;
    //Removes each child from last to First Child.
    if(x>0){
      for(i=x-1; i>=0; i--){
        displayFiles.removeChild(displayFiles.childNodes[i]);
      }
    }
  }
  function validFileType(files) {
    let onlyImages = true;
    for(i=0; i<files.length; i++){
      let file = files[i];
      //Debugging Tool to identify file type.
      /*alert(file.type)*/
      if(!allowedExtensions.includes(file.type)){
        onlyImages = false
      }
    }
    //Does the file only contain image.jpeg
    if(onlyImages){
      return true;
    }else{
      return false;
    }
  }
  function addFiles(files){
    //Add New Images
    for(i=0;i<files.length; i++){
      let file = files[i];
      let reader = new FileReader();
      if(file){
        reader.addEventListener("load", function(){
          //Create a new Image.
          var img = document.createElement("IMG");
          //Set the attributes of the Image.
          img.src = this.result;
          img.style.height = "180px";
          img.style.width = "180px";
          img.style.margin = "10px";
          img.style.border = "1px solid black";
          //Add the image preview of the file on display.
          displayFiles.appendChild(img);
        })
        reader.readAsDataURL(file);
      }
    }
  }
}
///////////////////////////////////////////////////////////////////////////////
//Drag Drop Phone.
///////////////////////////////////////////////////////////////////////////////
if(location.href.includes("index.html")){
  /*var shelf = document.getElementById('shelf');
  var cart = document.getElementById('cart');*/
  var dragDrop = false;

  //Allow the phone to be dropped.
  function allowDrop(ev) {
    ev.preventDefault();
  }
  //When Image is being Dragged.
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  //When Phone is being Dropped.
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    //Update the table as the phone is dropped into the cart.
    /*
    if(ev.target.id == "div4"){
      currentType = "Android";
      addPhone()
    }else{
      noPhone()
    }*/
  }
}
///////////////////////////////////////////////////////////////////////////////
//Add Item Courtesy Phone.
///////////////////////////////////////////////////////////////////////////////
var chargerPicked = false;
var currentType;
var phonePicked = "No Phone";
var phoneCharge = 0;
var chargerCharge = 0;
if(location.href.includes("index.html")){
  //Variables
  var addBtn = document.getElementById('add-btn');
  var itemType = document.getElementById('item-type');
  var phoneItem = document.getElementsByClassName('phone-item');
  var chargerItem = document.getElementById('charger-included');
  //Add an Item.
  function addItem(){
    if(itemType.value != "..." && itemType.value != undefined){
      identifyItem()
    }else{
      return
    }
  }
  //What item is being added.
  function identifyItem(){
    currentType = itemType.value;
    if(itemType.value == "iPhone"){
      addIPhone()
    }else if(itemType.value == "Charger"){
      addCharger()
    }else{
      addPhone()
    }
  }
  //IPhone is Required
  function addIPhone(){
    if(currentType != phonePicked){
      phoneItem[0].innerHTML = "iPhone";
      phoneItem[1].innerHTML = "$275";
      phonePicked = currentType;
      phoneCharge = 275;
      requestChange()
    }else{
      noPhone()
    }
  }
  //Phone is Required.
  function addPhone(){
    if(currentType != phonePicked){
      phoneItem[0].innerHTML = currentType;
      phoneItem[1].innerHTML = "$100";
      phonePicked = currentType;
      phoneCharge = 100;
      requestChange()
    }else{
      noPhone()
    }
  }
  //Charger is Required.
  function addCharger(){
    if(currentType != "No Phone"){
      if(!chargerPicked){
        chargerItem.style.visibility = "visible";
        chargerPicked = true;
        chargerCharge = 30;
        requestChange()
      }else{
        chargerItem.style.visibility = "hidden";
        chargerPicked = false;
        chargerCharge = 0;
        requestChange()
      }
    }
  }
  //No Phone is Required.
  function noPhone(){
    phonePicked = "No Phone";
    phoneItem[0].innerHTML = phonePicked;
    phoneItem[1].innerHTML = "$0";
    phoneCharge = 0;
    requestChange()
  }
  function requestChange(){
    calculateCosts()
    calculateTotals()
  }
}
///////////////////////////////////////////////////////////////////////////////
//Calculate Totals.
///////////////////////////////////////////////////////////////////////////////
if(location.href.includes("index.html")){
  //Variables.
  var amountGST = 0.15;
  var feeCharge = 85;
  var bondTotal = 0;
  var finalTotal;
  //Calculate the cost for warranty.
  function checkWarranty(){
    if(warranty.checked){
      fee.value = "$0.00";
      feeCharge = 0;
    }else{
      fee.value = "$85.00";
      feeCharge = 85;
    }
    calculateTotals()
  }
  //Calculate the potential cost for the phone and charger.
  function calculateCosts(){
    if(customerType[0].checked){
      bondTotal = phoneCharge + chargerCharge;
      bond.value = "$" + bondTotal.toFixed(2).toString();
    }else{
      bondTotal = 0;
      bond.value = "$" + bondTotal.toFixed(2).toString();
    }
    calculateTotals()
  }
  //Calculate the final costs for the Repair Service.
  function calculateTotals(){
    finalTotal = bondTotal + feeCharge;
    cost.value = "$" + finalTotal.toFixed(2).toString();
    let finalGST = finalTotal * amountGST
    includeGST.value = "$" + finalGST.toFixed(2).toString();
    let finalTotalGST = finalTotal +  finalGST
    totalCost.value = "$" + finalTotalGST.toFixed(2).toString();
  }
}
///////////////////////////////////////////////////////////////////////////////
//User Preferences.
///////////////////////////////////////////////////////////////////////////////
if(location.href.includes("index.html")){
  //Variables.
  var customerSection = document.getElementsByClassName('customer-details');
  var repairSection = document.getElementsByClassName('repair-details');
  var courtesySection = document.getElementsByClassName('courtesy-phone');
  var colorMode = document.getElementsByName("colour-mode");
  //Set all elements to a type of blue.
  function changeColourBlue(){
    localStorage.setItem("theme", "blue");
    localStorage.setItem("customerColor", "#006064");
    localStorage.setItem("repairColor", "#B2EBF2");
    localStorage.setItem("courtesyColor", "#80DEEA");
    localStorage.setItem("headerColor", "#006064");
    localStorage.setItem("footerColor","#0097A7");
    localStorage.setItem("linkColor","#4DD0E1");
    localStorage.setItem("flexColor","#B2EBF2");
    changeIndexPage()
  }
  //Set all elements to a type of Yellow.
  function changeColourYellow(){
    localStorage.setItem("theme", "yellow");
    localStorage.setItem("customerColor", "#bfb69d");
    localStorage.setItem("repairColor", "#ECE8DC");
    localStorage.setItem("courtesyColor", "#ddd2b0");
    localStorage.setItem("headerColor","#bfb69d");
    localStorage.setItem("footerColor","#aea385");
    localStorage.setItem("linkColor","#e3d4a8");
    localStorage.setItem("flexColor","#d6d0a9");
    changeIndexPage()
  }
}
var navLink = document.getElementsByClassName('links');
var header = document.getElementById('header');
var main = document.getElementById('main');
var footer = document.getElementById('footer');

function changeIndexPage(){
  if(location.href.includes("index.html")){
    header.style.backgroundColor = localStorage.getItem("headerColor");
    navLink[0].style.backgroundColor = localStorage.getItem("linkColor");
    navLink[1].style.backgroundColor = localStorage.getItem("linkColor");
    footer.style.backgroundColor = localStorage.getItem("footerColor");
    main.style.backgroundColor = localStorage.getItem("headerColor");
    customerSection[0].style.backgroundColor = localStorage.getItem("customerColor");
    repairSection[0].style.backgroundColor = localStorage.getItem("repairColor");
    courtesySection[0].style.backgroundColor = localStorage.getItem("courtesyColor");
  }
  else if(location.href.includes("advanced.html")){
    header.style.backgroundColor = localStorage.getItem("headerColor");
    navLink[0].style.backgroundColor = localStorage.getItem("linkColor");
    navLink[1].style.backgroundColor = localStorage.getItem("linkColor");
    footer.style.backgroundColor = localStorage.getItem("footerColor");
    flexContainer[0].style.backgroundColor = localStorage.getItem("flexColor");
  }  else if(location.href.includes("faq.html")){
    header.style.backgroundColor = localStorage.getItem("headerColor");
    footer.style.backgroundColor = localStorage.getItem("footerColor");
    flexContainer[0].style.backgroundColor = localStorage.getItem("flexColor");
  }
}
///////////////////////////////////////////////////////////////////////////////
//Load Local Storage.
///////////////////////////////////////////////////////////////////////////////
// When the user clicks the button, open the modal
// Get the modal
var modal = document.getElementById("my-modal");
var close = document.getElementsByClassName("close")[0];
//Run only on index
if(location.href.includes("index.html")){
  //Load Modal
  function loadModal(){
    var modal = document.getElementById("my-modal");
    modal.style.display = "block";
  }
  //Close modal
  function closeModal(){
    modal.style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
///////////////////////////////////////////////////////////////////////////////
//Set Modal Form.
///////////////////////////////////////////////////////////////////////////////
var itemTotal = document.getElementsByClassName("itemRecord");
//Set Details on modal form.
function setReceiptDetails(){
  //customer
  localStorage.setItem("title", title.value);
  localStorage.setItem("fname", fname.value);
  localStorage.setItem("lname", lname.value);
  localStorage.setItem("street", street.value);
  localStorage.setItem("suburb", suburb.value);
  localStorage.setItem("city", city.value);
  localStorage.setItem("postCode", postCode.value);
  localStorage.setItem("phoneNumber", phoneNumber.value);
  localStorage.setItem("email", email.value);
  //RepairDetails
  var warrentyValue;
  if(warranty.checked){
    warrentyValue = "Yes";
  }else{
    warrentyValue = "No";
  }
  localStorage.setItem("purchaseDate", purchaseDate.value);
  localStorage.setItem("repairDate", repairDate.value);
  localStorage.setItem("warranty", warrentyValue);
  localStorage.setItem("numberIMEI", numberIMEI.value);
  localStorage.setItem("make", make.value);
  localStorage.setItem("modelNumber", modelNumber.value);
  localStorage.setItem("fault", fault.value);
  localStorage.setItem("description", description.value);
  //Totals
  localStorage.setItem("bond", bond.value);
  localStorage.setItem("fee", fee.value);
  localStorage.setItem("cost", cost.value);
  localStorage.setItem("includeGST", includeGST.value);
  localStorage.setItem("totalCost", totalCost.value);
  //Update Table
  newChangeTable()
  //Update Modal Form
  getReceiptDetails();
}
//Update Modal Form.
function getReceiptDetails(){
  try{
    //Amount Cost
    itemTotal[0].innerHTML = localStorage.getItem("totalCost");
    //Customer Details
    var displayTitle = localStorage.getItem("title");
    var displayfname = localStorage.getItem("fname");
    var displaylname = localStorage.getItem("lname");
    itemTotal[1].innerHTML = displayTitle  + " " + displayfname + " " + displaylname;
    itemTotal[2].innerHTML = localStorage.getItem("street");
    var displaySuburb = localStorage.getItem("suburb");
    var displayCity = localStorage.getItem("city");
    var displayPostcode = localStorage.getItem("postCode");
    itemTotal[3].innerHTML = displaySuburb + ", " + displayCity + " " + displayPostcode;
    itemTotal[4].innerHTML = localStorage.getItem("phoneNumber");
    itemTotal[5].innerHTML = localStorage.getItem("email");
    //Job Dates D.getUTCFullYear(), D.getUTCMonth(), D.getUTCDate()
    var purchaseDateUTC =  new Date (localStorage.getItem("purchaseDate"));
    var repairDateUTC = new Date (localStorage.getItem("purchaseDate"));
    itemTotal[6].innerHTML = getMonth(purchaseDateUTC.getUTCMonth()) +
    " " + purchaseDateUTC.getDate() + ", " + purchaseDateUTC.getUTCFullYear();
    itemTotal[7].innerHTML = getMonth(repairDateUTC.getUTCMonth()) + " " +
    repairDateUTC.getDate()  + ", "+ repairDateUTC.getUTCFullYear();
    //Repair details
    itemTotal[8].innerHTML = localStorage.getItem("purchaseDate");
    itemTotal[9].innerHTML = localStorage.getItem("repairDate");
    itemTotal[10].innerHTML = localStorage.getItem("warranty");
    itemTotal[11].innerHTML = localStorage.getItem("numberIMEI");
    itemTotal[12].innerHTML = localStorage.getItem("make");
    itemTotal[13].innerHTML = localStorage.getItem("modelNumber");
    itemTotal[14].innerHTML = localStorage.getItem("fault");
    itemTotal[15].innerHTML = localStorage.getItem("description");
    //Totals
    itemTotal[16].innerHTML = localStorage.getItem("bond");
    itemTotal[17].innerHTML = localStorage.getItem("fee");
    itemTotal[18].innerHTML = localStorage.getItem("cost");
    itemTotal[19].innerHTML = localStorage.getItem("includeGST");
    itemTotal[20].innerHTML = localStorage.getItem("totalCost");
    //Load Modal
    changeTable()
  }catch{
    return;
  }
}
//Figure out what month it is.
function getMonth(dayNumber){
  if(dayNumber == 0){
    return "Jan";
  }else if(dayNumber == 1){
    return "Feb";
  }else if(dayNumber == 2){
    return "Mar";
  }else if(dayNumber == 3){
    return "Apr";
  }else if(dayNumber == 4){
    return "May";
  }else if(dayNumber == 5){
    return "Jun";
  }else if(dayNumber == 6){
    return "Jul";
  }else if(dayNumber == 7){
    return "Aug";
  }else if(dayNumber == 8){
    return "Sep";
  }else if(dayNumber == 9){
    return "Oct";
  }else if(dayNumber == 10){
    return "Nov";
  }else{
    return "Dec";
  }
}
///////////////////////////////////////////////////////////////////////////////
//Modal Form Table.
///////////////////////////////////////////////////////////////////////////////
var modalTable = document.getElementById('modal-table');
//Update Table on Modal Form.
function newChangeTable(){
  setPhoneData()
  changeTable()
}
//No Changes to the modal form.
function changeTable(){
  clearTable()
  addPhoneTable()
}
//Clears all rows on the table.
function clearTable(){
  var x = modalTable.children.length;
  //Removes each child from last to First Child.
  if(x>0){
    for(i=x; i>1; i--){
      modalTable.removeChild(modalTable.childNodes[i]);
    }
  }
}
function setPhoneData(){
  localStorage.setItem("phonePicked", phonePicked);
  localStorage.setItem("phoneCharge", phoneCharge);
  localStorage.setItem("chargerPicked", chargerPicked);
  localStorage.setItem("chargerCharge", chargerCharge);
}
//Adds new rows to the table
function addPhoneTable(){
  var tr1 = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  //Add the information.
  th1.innerHTML =  localStorage.getItem("phonePicked");
  th2.innerHTML =  "$" + localStorage.getItem("phoneCharge");
  //Add to the row
  tr1.appendChild(th1);
  tr1.appendChild(th2);
  //Add to table
  modalTable.appendChild(tr1);
  //Add the image preview of the file on display.
  if(localStorage.getItem("chargerPicked") == "true"){
    var tr2 = document.createElement("tr");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    //Add the information.
    th3.innerHTML = "Charger";
    th4.innerHTML = "$" + localStorage.getItem("chargerCharge");
    //Add to the row
    tr2.appendChild(th3);
    tr2.appendChild(th4);
    //Add to table
    modalTable.appendChild(tr2);
  }
}
///////////////////////////////////////////////////////////////////////////////
//Load Local Storage.
///////////////////////////////////////////////////////////////////////////////
//Variables.
function applySettings(){
  if(location.href.includes("index.html")){
    if(localStorage.getItem("theme") == "blue"){
      colorMode[0].checked = true;
      colorMode[1].checked = false;
    }else{
      colorMode[0].checked = false;
      colorMode[1].checked = true;
    }
    changeIndexPage()
  }
  else{
    changeIndexPage()
  }
  try{
    getReceiptDetails()
    changeTable()
  }catch{
    return
  }
}
