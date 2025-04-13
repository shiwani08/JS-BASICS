const button1 = document.getElementById("button");
const emojiName1 = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji() {
      try {
        let response = await fetch(
          "https://emoji-api.com/emojis?access_key=4c2920cfe6829804ec175fba016ad609e2ba0bbc"
        );
    
        // Check if the content is JSON
        const contentType = response.headers.get("content-type");
    
        if (!response.ok || !contentType.includes("application/json")) {
          const errorText = await response.text();
          throw new Error("Invalid response: " + errorText);
        }
    
        let data = await response.json();
    
        for (let i = 0; i < 1500; i++) {
          emoji.push({
            emojiName: data[i].character,
            emojiCode: data[i].unicodeName,
          });
        }
      } catch (err) {
        console.error("Failed to fetch emoji data:", err);
      }
    }
    

getEmoji();


// this will print the emoji name along with the emoji code
button1.addEventListener("click", () => {
      const randomNum = Math.floor(Math.random() * emoji.length);
      button1.innerText = emoji[randomNum].emojiName;
      emojiName1.innerText = emoji[randomNum].emojiCode;
});