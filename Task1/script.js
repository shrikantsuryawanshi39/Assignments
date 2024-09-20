document.addEventListener('DOMContentLoaded', () => {
    // JSON data (you can fetch this data or just paste it)
    const data = {
        "title": "Technical Project Management",
        "description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "assets": [
            {
                "type": "video",
                "title": "Technical Project Management",
                "description": "Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach",
                "content": "https://www.youtube.com/embed/TiMRwri1xJ8"
            },
            {
                "type": "threadbuilder",
                "title": "Threadbuild",
                "description": "Watch the video and threadbuild, jot out key threads while watching the video.",
                "content": ""
            },
            {
                "type": "article",
                "title": "Structure your Pointers",
                "description": "Write a 400-500 word article from your thread. Publish your understanding and showcase your learning."
            },
            {
                "type": "4sa_method",
                "title": "4SA Method",
                "description": "To explore more read more",
                "content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878"
            }
        ]
    };

    // Populate Title and Description
    document.getElementById('project-title').textContent = data.title;
    document.getElementById('project-description').textContent = data.description;

    // Populate Assets
    const video = data.assets[0];
    document.getElementById('video').src = video.content;

    // Thread Builder (You can add an input area for threads)
    const TechnicalProjectManagement = document.getElementById('TechnicalProjectManagement');
    TechnicalProjectManagement.innerHTML = `<b>Description:</b> ${data.assets[0].description}`;

    const threadbuilder = document.getElementById('threadbuilder');
    threadbuilder.innerHTML = `<b>Description:</b> ${data.assets[1].description}`;

    const StructureYouPointers = document.getElementById('StructureYouPointers');
    StructureYouPointers.innerHTML = `<b>Description:</b> ${data.assets[2].description}`;

    const Method = document.getElementById('Method');
    Method.innerHTML = `<b>Description:</b> ${data.assets[3].description}`;



    let whenOpen = ` <ul>
                <li class="left-bar-heading">Explore the world of management</li>
            </ul>

            <ul class="left-bar-heading-two">
                <li>Technical Project Management</li>
                <li> Threadbuild</li>
                <li>Structure your pointers</li>
                <li>4SA Method</li>
            </ul>`

    let whenClosed = `<div class="one-box">
                <p>1</p>
            </div>`


    document.querySelector('#leftBarArrow').addEventListener('click', () => {
        let arrowBtn = document.querySelector('#leftBarArrow');
        let sidebar = document.querySelector('#left-bar');
        let leftTopBar = document.querySelector('.left-topbar');

        if (sidebar.style.left === "-260px") {
            // Sidebar is closed, now open it
            leftTopBar.style.width = "392px";
            sidebar.style.left = "0";  // Open sidebar
            arrowBtn.style.transform = "rotate(180deg)";
            sidebar.style.alignItems = "center";

            document.querySelector('.content-box-leftBar').innerHTML = whenOpen;
        } else {
            // Sidebar is open, now close it
            leftTopBar.style.width = "392px";
            sidebar.style.left = "-260px";  // Close sidebar
            arrowBtn.style.transform = "rotate(0deg)";  // Reset arrow rotation
            sidebar.style.alignItems = "end";

            document.querySelector('.content-box-leftBar').innerHTML = whenClosed;
        }
    });

});
