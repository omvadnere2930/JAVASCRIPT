const courses = [{
    c_name: "Web Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
    sub_course: ["HTML", "CSS", "JavaScript", "ReactJS"],
},
{
    c_name: "App Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Android", "IOS", "Flutter"],
},
{
    c_name: "UI/UX Designer",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
},
{
    c_name: "Data Science",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
    sub_course: ["Python", "SQL", "JAVA", "C/C++"],
},
{   
    c_name: "Graphics Designer",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/premium-vector/graphic-design-words-with-pencil-instead-letter-i-designer-artist-vector-conceptual-creative-logo-poster-made-with-special-font_570429-69388.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
},
{
    c_name: "AI/ML Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://analyticsstepsfiles.s3.ap-south-1.amazonaws.com/backend/media/thumbnail/4530462/5951113_1605265443_AI%20(7).jpg",
    sub_course: ["Python", "JAVA", "Javascript", "Haskell"],
},
{
    c_name: "Data Analytics",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://freschesolutions.com/wp-content/uploads/2025/12/How-To-Take-Your-Data-Analytics-Approach-To-The-Next-Level-in-2023.jpg",
    sub_course: ["Python", "SQL", "R", "SAS"],
},
{
    c_name: "Web Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
    sub_course: ["HTML", "CSS", "JavaScript", "ReactJS"],
},
{
    c_name: "App Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038906.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Android", "IOS", "Flutter"],
},
{
    c_name: "UI/UX Designer",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
},
{
    c_name: "Data Science",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2019/09/What-is-data-science-2.jpg",
    sub_course: ["Python", "SQL", "JAVA", "C/C++"],
},
{   
    c_name: "Graphics Designer",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://img.freepik.com/premium-vector/graphic-design-words-with-pencil-instead-letter-i-designer-artist-vector-conceptual-creative-logo-poster-made-with-special-font_570429-69388.jpg?semt=ais_hybrid&w=740&q=80",
    sub_course: ["Adobe XD", "Figma", "Photoshop", "Illustrator"],
},
{
    c_name: "AI/ML Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://analyticsstepsfiles.s3.ap-south-1.amazonaws.com/backend/media/thumbnail/4530462/5951113_1605265443_AI%20(7).jpg",
    sub_course: ["Python", "JAVA", "Javascript", "Haskell"],
},
{
    c_name: "Data Analytics",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://freschesolutions.com/wp-content/uploads/2025/12/How-To-Take-Your-Data-Analytics-Approach-To-The-Next-Level-in-2023.jpg",
    sub_course: ["Python", "SQL", "R", "SAS"],
},
{
    c_name: "Web Development",
    paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg",
    sub_course: ["HTML", "CSS", "JavaScript", "ReactJS"],
}
];

courses.forEach((course) => {
    let output = "";
    course.sub_course.forEach((ele) => {
        console.log(ele);
        output += ` <button class="btn btn-success badge">${ele}</button> `;
    })
    let result =`
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card border-0 shadow">
                <img src="${course.image}" alt="Card image" height="250px">
                    <div class="card-body">
                        <h3>${course.c_name}</h3>
                        <p>${course.paragraph}</p>
                        ${output}
                </div>
            </div>
            </div>`
    document.getElementById('showcard').innerHTML += result;
});