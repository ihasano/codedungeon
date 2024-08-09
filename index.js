

let DeleteNoteBtn = document.querySelector(".DeleteNoteBtn");

let DeleteListBtn = document.querySelector(".DeleteList_Btn");

let addListBtn = document.querySelector(".AddList_Btn");

let MainBlock = document.querySelector(".main_block");

let job = `<ul class="job">
                            <li>
                                <p style="margin-top: 0;">Lorem ipsum,dolor sit amet consectetur adipisicing elit</p>
                            </li>
    
                            <li class="icons">
                                <div>
                                    <img src="images/justify.png" alt="" style="margin-right: 20px;">
    
                                    <img src="images/checkbox.png" alt="">
                                    <span>4/8</span>
    
                                    <img src="images/attach.png" alt=""> <span>2</span>
    
                                    <img src="images/comments.png" alt="">
                                    <span>4</span>
                                </div>
    
                                <div>
                                    <img src="images/man_1.png" alt="">
                                </div>
                            </li>
                            
                            <li>
                                <div style="display: flex;justify-content: right;">
                                    <a href="" style="background-color: red; margin: 10px 0 0 0;" class="DeleteNoteBtn">Delete a note</a>
                                </div>
                            </li>
                            
                        </ul>`;

let BlockContainer = `<li class="block_container">
                    <div class="ToDo_row">

                        <div style="display: flex;justify-content: space-between;">
                            <input type="text" placeholder="To Do" class="container_input">

                            <div>
                                <button class="DeleteList_Btn" style="background-color: red;margin: 10px 0 0 0;border: none; border-radius: 10px; padding: 10px 15px; color: #fff; font-weight: 600">Delete a list</button>
                            </div>
                        </div>

                        <button onclick="AddNewNote()" class="AddNote_Btn" style="background-color: #008a8a; margin: 20px;border: none; border-radius: 10px; padding: 10px 15px; color: #fff; font-weight: 600">+ Add a note</button>
                        
                    </div>
                        
                    
                    <ul class="jobs_container">
                        
                    </ul>
                </li>`;

addListBtn.addEventListener("click", (event) => {
    MainBlock.insertAdjacentHTML("afterbegin", BlockContainer);
});

let jobsContainer = document.querySelector(".main_block > .block_container >.jobs_container");

function AddNewNote() {
    jobsContainer.insertAdjacentHTML("afterbegin", job);
};

// addNoteBtn.addEventListener("click", (event) => {
//     jobsContainer.insertAdjacentHTML("afterbegin", job);
// })

// DeleteNoteBtn.addEventListener("click", (event) => {
//     jobsContainer.remove(jobsContainer.lastElementChild);
// })

// DeleteListBtn.addEventListener("click", (event) => {
//     MainBlock.remove(MainBlock.lastElementChild);
// })


// let addNoteBtn = document.querySelector(".AddNote_Btn");

// console.log(addNoteBtn)