## Handling File Uploads (Multer)

**Goal:** Building a system that lets users upload Profile Pictures and Documents.

Up until now backend only understood Text/JSON,here we learn how to handle Binary Streams(files).

## JSON vs. Binary

**1. The Limitation of JSON**
Standard API requests send data as text ({"name": "xyz"}).
* If you try to copy-paste an image into JSON code, it turns into a massive, unreadable string of millions of characters (Base64).
* This crashes the server memory and is extremely slow.

**2. The Solution: multipart/form-data**
To send files, we must switch the browser's encoding mode to multipart/form-data.
* **Analogy:** Instead of writing a letter (JSON), we are mailing a heavy physical package. The browser breaks the file into "chunks" and streams them to the server.

## Multer

Express cannot read these file chunks. It needs a special middleware to catch them.
Multer acts as the bridge. It intercepts the incoming stream, reassembles the chunks into a file, and saves it to the disk.

### Key Logic Flow
1.  **User** selects profile.jpg and hits upload.
2.  **Browser** starts streaming the file to the server.
3.  **Multer Middleware** catches the stream.
4.  **DiskStorage Engine** decides:
    * *Where* to put it? (/uploads folder)
    * *What* to name it? (Date.now() + originalName to avoid duplicates).
5.  **Controller** receives req.file containing the file path.

##  System Architecture: Storage 

Database Design rule: Never save files IN the database.

| Strategy | Where is the File? | Where is the Data? | Verdict |
| :--- | :--- | :--- | :--- |
| **Bad Way** | Saved as "Blob" inside MongoDB. | `user.image = <BinaryBlob>` |  Slow database, expensive backups. |
| **Pro Way** | Saved on Disk (or Cloud S3). | `user.image = "/uploads/img-123.jpg"` | DB stays fast. Only stores the link. |

##  Code Implementation (Snippet)

```javascript
const multer = require("multer");

// 1. Configure Storage (Where & Name)
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Save to local folder
    },
    filename: function (req, file, cb) {
        // Rename file with timestamp to prevent overwriting
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// 2. The Route (Middleware)
// upload.single processes ONE file coming from the form field named "profileImage"
app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.file); // Contains path, size, mimetype
    res.redirect("/");
});