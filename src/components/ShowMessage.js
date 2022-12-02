/**
 * This method is used for displaying the message on the Page

 * @param   {string} msg it's a message which is going to be display on the message-board
*/
const ShowMessage = (msg) => {
  document.getElementById('message').innerHTML = msg;
  document.getElementById('message-box').style.display = "block";
  setTimeout(function() { 
    document.getElementById('message-box').style.display = "none";
  }, 10000);
}

export default ShowMessage;
