import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import XrayChest from "./Utils/XrayChest";
import CampECG from "./Utils/CampECG";
import CampECG2 from "./Utils/CampECG2";
import Optometry from "./Utils/Optometry";
import Optometry2 from "./Utils/Optometry2";
import Optometry3 from "./Utils/Optometry3";
import Optometry4 from "./Utils/Optometry4";
import Audiometry from "./Utils/Audiometry";
import Vitals from "./Utils/Vitals";
import CtHead from "./Utils/CtHead";
import CtAbdomen from "./Utils/CtAbdomen";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Test } from "@jsonforms/core";
import html2pdf from 'html2pdf.js';

// const options = [{ label: 'X-RAY CHEST', id: 1 }, { label: "X-RAY KNEE", id: 2 }, { label: "X-RAY SPINE(DORSAL)", id: 3 }, { label: "X-RAY SPINE(CERVICAL)", id: 4 }, { label: "X-RAY SPINE(LUMBER)", id: 5 }, { label: "X-RAY RIGHT-SHOULDER", id: 6 }, { label: "X-RAY LEFT-SHOULDER", id: 7 }, { label: "X-RAY TEMPLATE", id: 8 }, { label: 'CT HEAD', id: 9 }, { label: 'CT PNS', id: 10 }, { label: 'CT ABDOMEN', id: 11 }, { label: 'MRI BRAIN', id: 12 }, { label: 'AUDIOMETRY', id: 13 }, { label: 'ECG', id: 14 }, { label: 'CAMP ECG', id: 15 }]

var current_user = JSON.parse(document.getElementById("current-user").textContent);

///////////// Dynamic lists by aman gupta on 07/07/2023 ///////////////
const options = JSON.parse(current_user.serviceslist).map((service) => ({
          label: service.fields.title,
          id: service.pk,
        }));

class App extends Component {
  editor = null;
  constructor() {
    super();
    this.state = {
      modal: false,
      reportFrmData: this.generatePatientTable(),
      options_label: "DEFAULT",
    };
    this.ActionEvents = this.ActionEvents.bind(this);
    this.GetCopiedEvents = this.GetCopiedEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSeletion = this.handleSeletion.bind(this);
    this.generateReport = this.generateReport.bind(this);
    this.GetDivContentOnPDF = this.GetDivContentOnPDF.bind(this);
    this.GetDivContentOnWord = this.GetDivContentOnWord.bind(this);
    this.onclickDiv = this.onclickDiv.bind(this);
    
  }

  onclickDiv(e) {
    var ctrlDown = false,
      ctrlKey = 17,
      cmdKey = 91,
      vKey = 86,
      cKey = 67;

    document.onkeydown(function (e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
    }).keyup(function (e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
    });

    // Document Ctrl + C/V 
    document.keydown(function (e) {
      if (ctrlDown && (e.keyCode == cKey)) console.log("Document catch Ctrl+C");
      if (ctrlDown && (e.keyCode == vKey)) console.log("Document catch Ctrl+V");
    });
  }


  ///////////ecg image by aman on 21/08/23
  componentDidMount() {
    console.log("componentDidMount executed.");
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const imageUrl = urlSearchParams.get("data-reportimage");
      console.log("Image URL:", imageUrl);
  
      if (imageUrl) {
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.className = "content-image"; // Add the class to the image element
  
        const editorContent = document.querySelector("#root > div > div > div.document-editor__editable-container > div");
        if (editorContent) {
          editorContent.appendChild(imageElement);
          console.log("Image appended successfully.");
        } else {
          console.log("Editor content element not found.");
        }
      } else {
        console.log("Image URL not found in query parameters.");
      }
  
      this.setState({
        reportFrmData: this.generatePatientTable()
      });
    } catch (error) {
      console.error("Error in componentDidMount:", error);
    }
  }
  
  ////////////////////////////////////////

  generateReport(data) {
    this.setState({ reportFrmData: data });
  }

  handleClick() {
    const { modal } = this.state;
    this.setState({
      modal: !modal
    });
  }


  generatePatientTable() {
    let params = (new URL(document.location)).searchParams;
    const age = params.get("age") ? params.get("age") + "Yr" : "";
    let tableBody = this.companyLogo(current_user);
    tableBody += "<table><tbody>";
    tableBody += "<tr>";
    tableBody += "<td>Patient Name</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Date Of Birth</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>National Health ID</td><td>" + 'NULL' + "</td>";
    tableBody += "<td>Age/Sex</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Accession No.</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Referral Dr</td><td>" + " " + "</td>";
    tableBody += "</tr>";
    tableBody += "<tr>";
    tableBody += "<td>Study Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "<td>Report Date Time</td><td>" + "NULL" + "</td>";
    tableBody += "</tr>";
    tableBody += "</tbody>";
    tableBody += "</table>";

    return this.companyLogo(current_user);
  }
  companyLogo(user) {
    return ("<img src='" + user.companylogo + "' height='' width='300' />");
  }

///////////// Dynamic lists by aman gupta on 07/07/2023 ///////////////
  choose() {
    var list = document.createElement('select');
    list.id = "choose_scan"
    var optionSelect = document.createElement('option');
    optionSelect.value = 0;
    optionSelect.text = 'Reporting BOT';
    list.appendChild(optionSelect);
    options.forEach(({ label, id }) => {
      
      var option = document.createElement('option');
      option.value = id;
      option.text = label;
      list.appendChild(option);
    });
    list.onchange = this.handleSeletion;
    return list;
  }

  

  actionDropDown() {
    var list = document.createElement("select");
    var filetype = ['Export Report', 'Get PDF', 'Get SPLIT PDF', 'Get WORD', 'PRINT'];
    list.id = "export_data"

    filetype.forEach((item, id) => {
      console.log(item + id);
      var option = document.createElement('option');
      option.value = id;
      option.text = item;
      list.appendChild(option);
    });
    list.onchange = this.ActionEvents;
    return list;
  }

  // copyAction(){
  //   var btn = document.createElement("a");
  //   btn.value = "Copy";
  //   btn.innerHTML = "Copy";
  //   btn.className = 'report-here';
  //   btn.id="copy_data";
  //   btn.onclick = this.GetCopiedEvents;
  //   console.log("btn copy");
  //   return btn;
  // }

  // GetCopiedEvents(event){
  //   var content = document.querySelector('#root > div > div > div.document-editor__editable-container > div');
  //   content = this.extractContent(content);
  //   const clipboardItem = new ClipboardItem({
  //     "text/html": new Blob(
  //       [content.innerHTML],
  //       { type: "text/html" }
  //     ),
  //   });
  //   navigator.clipboard.write([clipboardItem]);
  // }

  // extractContent(s) {
  //   var span = document.createElement('span');
  //   span.innerHTML = s;
  //   var filterHtml = [...s.getElementsByTagName('table')];
  //   filterHtml.forEach((child) => { child.remove(); });
  //   var img = [...s.getElementsByTagName('img')];
  //   img.forEach((child) => { child.remove(); });
    
  //   return s;
  // };

  //Updated copy paste code by Aman Gupta
  copyAction() {
    var btn = document.createElement("a");
    btn.value = "Copy";
    btn.innerHTML = "Copy";
    btn.className = 'report-here';
    btn.id = "copy_data";
    btn.addEventListener('click', this.GetCopiedEvents.bind(this));
    console.log("btn copy");
    return btn;
  }
  
  GetCopiedEvents(event) {
    var content = document.querySelector('#root > div > div > div.document-editor__editable-container > div');
    content = this.extractContent(content);
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob(
        [content.outerHTML],
        { type: "text/html" }
      )
    });
    navigator.clipboard.write([clipboardItem]).then(() => {
      console.log('Content copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy content to clipboard:', err);
    });
  }
  
  extractContent(s) {
    var span = document.createElement('span');
    span.innerHTML = s.innerHTML;
    var filterHtml = [...span.getElementsByTagName('table')];
    filterHtml.forEach((child) => { child.remove(); });
    var img = [...span.getElementsByTagName('img')];
    img.forEach((child) => { child.remove(); });
  
    return span;
  }

  userDropdown() {
    var userDiv = document.createElement('div');
    var current_user = JSON.parse(document.getElementById("current-user").textContent);
    userDiv.innerHTML = `Welcome <span class='current-user'>${current_user.username}</span>`;
    userDiv.className = 'user-name';
    current_user.className = 'xyz';

    var logout = document.createElement("a");
    logout.href = "/logout";
    logout.innerHTML = "Logout";

    userDiv.appendChild(logout);
    logout.className = 'report-here';

    return userDiv;
  }

  //print function add by Aman Gupta on 28/06/23
  printReport() {
    const data = document.querySelector('.ck-editor__editable');
  
    if (data !== null) {
      data.classList.add("ck-blurred");
      data.classList.remove("ck-focused");
  
      // Apply inline CSS styles
      data.style.fontSize = "28px";
      data.style.padding = "6px";
  
      // Add CSS styles for the table
      const tableStyle = `
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed; /* Added to ensure equal cell sizes */
          }
  
          td {
            border: 1px solid black;
            padding: 2px;
            font-size: 20px;
            width: auto; /* Adjust this value as needed */
          }
        </style>
      `;
      data.innerHTML = tableStyle + data.innerHTML;
  
      window.print();
    }
  }
  

  //Aman(searchfield for IDs)
  

  createFilename() {
    //Aman
    const urlSearchParams = new URLSearchParams(window.location.search)
    var patientName = document.querySelector("#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(1) > span > strong")?.innerHTML;
    var PatientId = document.querySelector("#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(1) > td:nth-child(2) > span > strong")?.innerHTML;
    var location = urlSearchParams.get("data-location")
    // TestType = document.querySelector("#root > div > div > div.document-editor__editable-container > div > p:nth-child(3) > strong > u")?.innerHTML;
    //var formatDate = document.querySelector("#root > div > div > div.document-editor__editable-container > div > figure.table.ck-widget.ck-widget_with-selection-handle > table > tbody > tr:nth-child(2) > td:nth-child(2) > span > strong")?.innerHTML;


    //var currentDate = new Date();
    //var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    //var date = currentDate.getDate();
    //var formatDate = (date < 10 ?+"0" + date : date) + month[currentDate.getMonth()];
    // var filename = [patientName, PatientId, TestType, formatDate];
    // if (patientName == undefined || patientName == null || PatientId == undefined || TestType == undefined || PatientId == null || TestType == null) {
    //   filename = ["Patient", "0", "Test", "Date"];
    // }
    var filename = [patientName, PatientId];
    if (patientName == undefined || patientName == null || PatientId == undefined) {
      filename = ["Patient", "0"];
    }
    else {
      // filename = [PatientId.replace("Patient ID:", "").replace(" ", "_"), patientName.replace("Name: ", ""), TestType, formatDate.replace("Test date: ", "")];
      filename = [PatientId.replace("Patient ID:", "").replace(" ", "_"), patientName.replace("Name:", ""), location];
    }

    //return filename.join('_').toUpperCase();
    filename = filename.filter(Boolean).join('_').toUpperCase();
    filename = filename.replace(/^_/, ''); // Remove leading underscore if present
    return filename;
  }

  getDataUri(url)
  {
      return new Promise(resolve => {
          var image = new Image();
          image.setAttribute('crossOrigin', 'anonymous'); //getting images from external domain
  
          image.onload = function () {
              var canvas = document.createElement('canvas');
              canvas.width = this.naturalWidth;
              canvas.height = this.naturalHeight; 
  
              //next three lines for white background in case png has a transparent background
              var ctx = canvas.getContext('2d');
              ctx.fillStyle = '#fff';  /// set white fill style
              ctx.fillRect(0, 0, canvas.width, canvas.height);
  
              canvas.getContext('2d').drawImage(this, 0, 0);
  
              resolve(canvas.toDataURL('image/jpeg'));
          };
  
          image.src = url;
      })
  }

  // GetDivContentOnPDF() {
  //   var filename = this.createFilename();
  //   const data = document.getElementsByClassName('ck-editor__editable')[0];
  //   // remove border
  //   data.classList.add("ck-blurred");
  //   data.classList.remove("ck-focused");
  
  //   if (data != undefined) {
  //     var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
  //     var a4Height = 841.89; // A4 height in points
  
  //     var canvasWidth = a4Width - 40; // Adjusted width to leave some margin
  //     var canvasHeight = (canvasWidth * 1.5) - 40; // Adjusted height to maintain aspect ratio and leave margin
  
  //     html2canvas(data, {
  //       scale: 4 // Adjust the scale if needed for better quality
  //     }).then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png', 1.0);
  //       const pdf = new jsPDF('p', 'pt', [a4Width, a4Height], true);
  //       pdf.addImage(imgData, 'PNG', 20, 20, canvasWidth, canvasHeight);
  //       pdf.save(filename ? filename + ".pdf" : "download.pdf");
  //     });
  //   }
  // }

////////////////////pdf try////////////////////


GetDivContentOnPDF() {
  var filename = this.createFilename();
  const data = document.getElementsByClassName('ck-editor__editable')[0];
  const table = data.querySelector('table');
  data.classList.add("ck-blurred");
  data.classList.remove("ck-focused");

  if (data != undefined) {
    // Create a new jsPDF instance
    const pdf = new jsPDF('p', 'pt', [595.28, 841.89], true); // A4 dimensions

    // Capture the entire content, including text and images
    html2canvas(data, {
      scale: 4, // Adjust the scale if needed for better image quality
      useCORS: true, // Added to address potential CORS issues
    }).then((canvas) => {
      // Calculate the position to center the image
      const imgWidth = 595.28 - 40; // Adjusted width to leave some margin
      const imgHeight = (imgWidth * 1.5) - 40; // Adjusted height to maintain aspect ratio and leave margin
      const imgX = (595.28 - imgWidth) / 2;
      const imgY = (841.89 - imgHeight) / 2;

      // Add the image to the PDF with the initial size
      pdf.addImage(canvas, 'PNG', imgX, imgY, imgWidth, imgHeight);
      pdf.setTextColor(255, 255, 255);

      // Calculate the position to place the text at the bottom
      const textX = 40;
      const textY = 841.89 - 2; // 20 points from the bottom

      // If a table exists within the ck-editor__editable div, capture its text content
      if (table) {
        const tableText = table.textContent || '';

        // Add the table text as text (preserve original formatting)
        pdf.setFontSize(2); // Adjust the font size as needed
        pdf.text(textX, textY, tableText);
      }

      // Iterate through all paragraphs in the ck-editor__editable div
      const paragraphs = data.querySelectorAll('p');
      paragraphs.forEach((paragraph) => {
        const paragraphText = paragraph.textContent || '';

        // Add each paragraph text as text (preserve original formatting)
        pdf.setFontSize(2); // Adjust the font size as needed
        pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
      });

      // Save the PDF
      pdf.save(filename ? filename + ".pdf" : "download.pdf");

      // Modify the size of the last added image within .ck-content .image
      const images = data.querySelectorAll('.ck-content .image img');
      const lastImage = images[images.length - 1]; // Select the last image from the NodeList

      if (lastImage) {
        const smallerWidth = lastImage.width / 4;
        const smallerHeight = lastImage.height / 4;

        // Convert the last image to a data URI with the modified size
        const lastImageDataURI = lastImage.toDataURL('image/jpg', 1.0);

        // Add the last image again with the modified size
        pdf.addImage(lastImageDataURI, 'PNG', imgX, imgY + 100, smallerWidth, smallerHeight);
      }
    });
  }
}

////////////////////////////////// Another one ////////////////////////
// GetDivContentOnPDF() {
//   var filename = this.createFilename();
//   const data = document.getElementsByClassName('ck-editor__editable')[0];
//   const table = data.querySelector('table');
//   data.classList.add("ck-blurred");
//   data.classList.remove("ck-focused");

//   if (data != undefined) {
//     // Create a new jsPDF instance
//     const pdf = new jsPDF('p', 'pt', [595.28, 841.89], true); // A4 dimensions

//     // Capture the entire content, including text and images
//     html2canvas(data, {
//       scale: 4, // Adjust the scale if needed for better image quality
//       useCORS: true, // Added to address potential CORS issues
//     }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png', 1.0);

//       // Calculate the position to center the image
//       const imgWidth = 595.28 - 40; // Adjusted width to leave some margin
//       const imgHeight = (imgWidth * 1.5) - 40; // Adjusted height to maintain aspect ratio and leave margin
//       const imgX = (595.28 - imgWidth) / 2;
//       const imgY = (841.89 - imgHeight) / 2;

//       // Add the image to the PDF
//       pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth, imgHeight);
//       pdf.setTextColor(255, 255, 255);
//       // Calculate the position to place the text at the bottom
//       const textX = 40;
//       const textY = 841.89 - 2; // 20 points from the bottom

//       // If a table exists within the ck-editor__editable div, capture its text content
//       if (table) {
//         const tableText = table.textContent || '';

//         // Add the table text as text (preserve original formatting)
//         pdf.setFontSize(2); // Adjust the font size as needed
//         pdf.text(textX, textY, tableText);
//       }

//       // If the ck-editor__editable div contains paragraphs, capture the text from the first paragraph
//       const paragraphs = data.querySelectorAll('p');
//       if (paragraphs.length > 0) {
//         const firstParagraphText = paragraphs[0].textContent || '';

//         // Add the first paragraph text as text (preserve original formatting)
//         pdf.setFontSize(2); // Adjust the font size as needed
//         pdf.text(textX, textY - 2, firstParagraphText); // Place it above the table text
//       }

//       // Save the PDF
//       pdf.save(filename ? filename + ".pdf" : "download.pdf");
//     });
//   }
// }

  
//////////ecgbot pdf**************
GetEcgContentOnPDF() {
  var filename = this.createFilename();
  const data = document.getElementsByClassName('ck-editor__editable')[0];
  const table = data.querySelector('table');
  data.classList.add("ck-blurred");
  data.classList.remove("ck-focused");

  // Create a function to load images and render PDF
  const loadImageAndRenderPDF = async () => {
    data.classList.add("ck-blurred");
    data.classList.remove("ck-focused");

    let graphSrc = Array.from(data.children).pop().children[0].currentSrc;
    let graphElement = document.querySelector("figure.image:nth-last-of-type(1)");
    graphElement.remove();

    if (data != undefined) {
      var a4Width = 595.28; // A4 width in points (1 point = 1/72 inch)
      var a4Height = 841.89; // A4 height in points

      var canvasWidth = a4Width; // Adjusted width to leave some margin
      var canvasHeight = a4Height; // Adjusted height to maintain aspect ratio and leave margin

      const canvas = await html2canvas(data, {
        scale: 4, // Adjust the scale if needed for better quality
        useCORS: true, // Enable CORS to capture images from external URLs
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF('p', 'pt', [a4Width, a4Height], true);

      // Calculate the image dimensions to fit within the PDF dimensions
      const canvasAspectRatio = canvas.width / canvas.height;
      const pdfAspectRatio = a4Width / a4Height;

      let pdfImageWidth = canvasWidth;
      let pdfImageHeight = canvasHeight;

      if (canvasAspectRatio > pdfAspectRatio) {
        pdfImageWidth = canvasWidth;
        pdfImageHeight = canvasWidth / canvasAspectRatio;
      } else {
        pdfImageHeight = canvasHeight;
        pdfImageWidth = canvasHeight * canvasAspectRatio;
      }

      // Calculate the positioning to center the image
      const xPosition = (pdf.internal.pageSize.width - pdfImageWidth) / 2;
      const yPosition = (pdf.internal.pageSize.height - pdfImageHeight) / 2;


      // Create a separate canvas for the rotated graph image
      const graphCanvas = document.createElement('canvas');
      graphCanvas.width = 1024;
      graphCanvas.height = 1024;
      const graphCtx = graphCanvas.getContext('2d');
      let graphImg = await this.getDataUri(graphSrc);
      const image = new Image();
      image.src = graphImg;
      image.onload = () => {
        graphCtx.translate(graphCanvas.width / 2, graphCanvas.height / 2);
        graphCtx.rotate(Math.PI / 2); // Rotate the image by 90 degrees
        graphCtx.drawImage(image, -graphCanvas.height / 2, -graphCanvas.width / 2, graphCanvas.height, graphCanvas.width);

        pdf.addImage(graphCanvas.toDataURL('image/png'), 'PNG', 0, 0, a4Width, a4Height);
        
        pdf.addPage("a4", "portrait"); // Add a new portrait-oriented page
        pdf.addImage(imgData, 'PNG', xPosition, yPosition, pdfImageWidth, pdfImageHeight);
        pdf.setTextColor(255, 255, 255);

        // added for selectable text
        // Calculate the position to place the text at the bottom
      const textX = 40;
      const textY = 841.89 - 2; // 20 points from the bottom

      // If a table exists within the ck-editor__editable div, capture its text content
      if (table) {
        const tableText = table.textContent || '';

        // Add the table text as text (preserve original formatting)
        pdf.setFontSize(2); // Adjust the font size as needed
        pdf.text(textX, textY, tableText);
      }

      // Iterate through all paragraphs in the ck-editor__editable div
      const paragraphs = data.querySelectorAll('p');
      paragraphs.forEach((paragraph) => {
        const paragraphText = paragraph.textContent || '';

        // Add each paragraph text as text (preserve original formatting)
        pdf.setFontSize(2); // Adjust the font size as needed
        pdf.text(textX, textY - 2, paragraphText); // Place it above the table text
      });

        pdf.save(filename ? filename + ".pdf" : "download.pdf");
      };
    }
  };

  loadImageAndRenderPDF();
}

  
  
  
//////////////////////////////////////////////////////////////
  toDataURL(url, index, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(index, reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  Export2Doc() {
    var filename = this.createFilename();
    console.log("printig word");
    const data = document.getElementsByClassName('ck-editor__editable')[0];

    var imgs = data.getElementsByTagName("img");
    console.log(...imgs);
    for (var i = 0; i < imgs.length; i++) {
      this.toDataURL(imgs[i].src, i, function (index, data) {
        console.log(imgs[index].src + "==>" + data);
        imgs[index].src = data;
      });
    }
    var element = data;
    console.log(data);
    //  _html_ will be replace with custom html
    var meta = "Mime-Version: 1.0\nContent-Base: " + location.href + "\nContent-Type: Multipart/related; boundary=\"NEXT.ITEM-BOUNDARY\";type=\"text/html\"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset=\"utf-8\"\nContent-Location: " + location.href + "\n\n<!DOCTYPE html>\n<html>\n_html_</html>";
    //  _styles_ will be replaced with custome css
    var head = "<head>\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\n<style>\n_styles_\n</style>\n</head>\n";

    var html = data.innerHTML;

    var blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });

    var css = (
      '<style>' +
      'img {width:300px;}table {border-collapse: collapse; border-spacing: 0;}td{padding: 6px;}' +
      '</style>'
    );
    //  Image Area %%%%
    var options = { maxWidth: 624 };
    var images = Array();
    var img = data.getElementsByTagName("img");
    for (var i = 0; i < img.length; i++) {
      // Calculate dimensions of output image
      var w = Math.min(img[i].width, options.maxWidth);
      var h = img[i].height * (w / img[i].width);
      // Create canvas for converting image to data URL
      var canvas = document.createElement("CANVAS");
      canvas.width = w;
      canvas.height = h;
      // Draw image to canvas
      var context = canvas.getContext('2d');
      context.drawImage(img[i], 0, 0, w, h);
      // Get data URL encoding of image
      var uri = canvas.toDataURL("image/png");
      //$(img[i]).attr("src", img[i].src);
      img[i].src = img[i].src;
      img[i].width = w;
      img[i].height = h;
      // Save encoded image to array
      images[i] = {
        type: uri.substring(uri.indexOf(":") + 1, uri.indexOf(";")),
        encoding: uri.substring(uri.indexOf(";") + 1, uri.indexOf(",")),
        location: img[i].src,//$(img[i]).attr("src"),
        data: uri.substring(uri.indexOf(",") + 1)
      };
    }

    // Prepare bottom of mhtml file with image data
    var imgMetaData = "\n";
    for (var i = 0; i < images.length; i++) {
      imgMetaData += "--NEXT.ITEM-BOUNDARY\n";
      imgMetaData += "Content-Location: " + images[i].location + "\n";
      imgMetaData += "Content-Type: " + images[i].type + "\n";
      imgMetaData += "Content-Transfer-Encoding: " + images[i].encoding + "\n\n";
      imgMetaData += images[i].data + "\n\n";

    }
    imgMetaData += "--NEXT.ITEM-BOUNDARY--";
    // end Image Area %%

    var output = meta.replace("_html_", head.replace("_styles_", css) + html) + imgMetaData;

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(output);


    filename = filename ? filename + '.doc' : 'document.doc';


    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {

      downloadLink.href = url;
      downloadLink.download = filename;
      downloadLink.click();
    }

    document.body.removeChild(downloadLink);
  }

  GetDivContentOnWord() {
    var filename = this.createFilename();
    console.log("printig word");
    const data = document.getElementsByClassName('ck-editor__editable')[0];

    var imgs = data.getElementsByTagName("img");
    console.log(...imgs);
    for (var i = 0; i < imgs.length; i++) {
      this.toDataURL(imgs[i].src, i, function (index, data) {
        console.log(imgs[index].src + "==>" + data);
        imgs[index].src = data;
      });
    }
    console.log(data);

    var css = (
      '<style>' +
      '@page WordSection1{size: 841.95pt 595.35pt;mso-page-orientation: landscape;}' +
      'div.WordSection1 {page: WordSection1;}' +
      '</style>'
    );
    var preHTML = "<html xlmns:o='url:schemas-microsoft-com:office:office' xmlns:w='url:schemas-microsoft-com:office:word' xmlns='http://www.w3.org /TR/REC-html40'<head><meta charset='utf-8'><title>Word</title>" + css + "</head><body>";
    var postHTML = "</body></html>";
    var html = preHTML + data.innerHTML + postHTML;

    var blob = new Blob(['\ufeff', html], {
      type: 'application/msword'
    });

    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);

    filename = filename ? filename + '.doc' : 'document.doc';

    var link = document.createElement('a');
    document.body.appendChild(link);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      link.href = url;
      link.download = filename;
      link.click();
    }
    document.body.removeChild(link);
  }

  ActionEvents(evt) {
    let nindex = evt.target.selectedIndex;
    let label = evt.target[nindex].text;
    let value = evt.target.value;
    console.log(nindex);
    switch (nindex) {
      case 1:
        console.log("pdf");
        this.GetDivContentOnPDF();
        break;
      case 2:
        console.log("pdf");
        this.GetEcgContentOnPDF();
        break;  
      case 3:
        this.Export2Doc();
        break;
      case 4:
        this.printReport();
      break;   
      default:
        console.log("---");
        break;
    }
    document.getElementById("export_data").selectedIndex = 0;
  }


  handleSeletion(evt) {
    let nindex = evt.target.selectedIndex;
    let label = evt.target[nindex].text;
    let value = evt.target.value;
    this.setState({
      options_label: label,
      reportFrmData: this.generatePatientTable()
    })
    options.forEach(({ label, id }) => {
      if (value == id) {
        this.handleClick();
      }
    });
  }

  render() {
    const { options_label, reportFrmData } = this.state;
    return (
      <div>
        {
          this.state.modal && (options_label === "X-RAY CHEST") ?
            <XrayChest handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
            this.state.modal && (options_label === "CAMP ECG") ?
              <CampECG2 handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
              // this.state.modal && (options_label === "ECG") ?
              //   <ECG handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                this.state.modal && (options_label === "VITALS") ?
                  <Vitals handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                  this.state.modal && (options_label === "OPTOMETRY") ?
                    <Optometry handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                    this.state.modal && (options_label === "OPTOMETRY NO-INPUT") ?
                      <Optometry2 handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                      this.state.modal && (options_label === "OPTOMETRY (CAMP)") ?
                        <Optometry3 handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                        this.state.modal && (options_label === "AUDIOMETRY") ?
                          <Audiometry handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                          this.state.modal && (options_label === "OPTOMETRY (CAMP) NO-INPUT") ?
                            <Optometry4 handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                            this.state.modal && (options_label === "CT ABDOMEN") ?
                              <CtAbdomen handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                              this.state.modal && (options_label === "CT HEAD") ?
                                <CtHead handleClick={this.handleClick} reportFrmData={reportFrmData} generateReport={this.generateReport} generatePatientTable={this.generatePatientTable()} /> :
                                            ""
        }
        <div className="document-editor">
          <div className="document-editor__toolbar" />
          <div className="document-editor__editable-container">
            <CKEditor
              editor={DecoupledEditor}
              data={reportFrmData}
              onInit={(editor) => {
                editor.onclick = this.onclickDiv;
                window.editor = editor;
                editor.allowedContent = true;
                const toolbarContainer = document.querySelector(
                  ".document-editor__toolbar"
                );

                toolbarContainer.appendChild(editor.ui.view.toolbar.element);

                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.copyAction()
                );
                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.choose()
                );
                // window.editor.ui.view.toolbar.element.children[0].appendChild(this.getPDFButton());
                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.actionDropDown()
                );
                
                window.editor.ui.view.toolbar.element.children[0].appendChild(
                  this.userDropdown()
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));