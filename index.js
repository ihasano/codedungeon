let addNoteBtn = document.querySelector(".AddNote_Btn");

let jobsContainer = document.querySelector(".jobs_container");

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
                                <a href="" style="background-color: red; margin: 10px 0 0 0;" class="DeleteList_Btn">Delete a list</a>
                            </div>
                        </div>
                        
                        <a href="#" style="margin-left: 0; margin-right: 0;"  class="AddNote_Btn">+ Add a note</a>
                        
                    </div>
                        
                    
                    <ul class="jobs_container">
                        
                    </ul>
                </li>`;

addListBtn.addEventListener("click", (event) => {
    MainBlock.insertAdjacentHTML("afterbegin", BlockContainer);
})

addNoteBtn.addEventListener("click", (event) => {
    jobsContainer.insertAdjacentHTML("afterbegin", job)
})

DeleteNoteBtn.addEventListener("click", (event) => {
    jobsContainer.remove(jobsContainer.lastElementChild)
})

DeleteListBtn.addEventListener("click", (event) => {
    MainBlock.remove(MainBlock.lastElementChild)
})