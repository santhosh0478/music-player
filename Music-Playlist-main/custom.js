// Add an event listener to the "Add Music" button
const addMusicButton = document.getElementById("add-music-button");
addMusicButton.addEventListener("click", openFileInput);

// Function to open the file input dialog
function openFileInput() {
  const fileInput = document.getElementById("file-input");
  fileInput.click();
}

// Add an event listener to the file input element for selecting audio files
const fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", handleFileSelection);

// Function to handle file selection
function handleFileSelection(event) {
  const selectedFiles = event.target.files;
  const playlist = document.querySelector(".playlist");

  for (const file of selectedFiles) {
    const name = file.name;
    const path = URL.createObjectURL(file);
    const length = 0; // You may need to find a way to get the actual length

    // Create a playlist item and add it to the playlist container
    const playlistItem = document.createElement("div");
    playlistItem.classList.add("playlist-item");
    playlistItem.innerHTML = name;

    playlist.appendChild(playlistItem);

    // Add the selected file to your double linked list (dll) using dll.push() or a similar function
    dll.push(name, length, path);
  }
}
// Function to pop the last item from the DLL and the playlist
function removeLastItem() {
  if (dll.tail) {
    // Remove the last playlist item from the container
    const playlist = document.querySelector(".playlist");
    playlist.removeChild(playlist.lastChild);

    // Remove the last item from the DLL
    dll.tail = dll.tail.prev;
    if (dll.tail) {
      dll.tail.next = null;
    } else {
      dll.head = null;
    }
  }
}

// Add an event listener to the "Pop Music" button
const popMusicButton = document.getElementById("pop-music-button");
popMusicButton.addEventListener("click", removeLastItem);
