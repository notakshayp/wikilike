import metadata from "./customization/Data/metadata.json" assert { type: "json" };
import topics from "./customization/Data/Topics.json" assert {type: "json"};
import blogs from "./customization/Data/blogs.json" assert {type: "json"};

const setup_page=()=>{
    const metadataJSON=metadata;
    set_metadata(metadata);

    const topicsJSON=topics;
    set_navbar_topics(topics);

    //render page views
    let url_path=window.location.pathname;
    console.log(url_path)
    url_path=url_path.split("/")[1];
    console.log(url_path)
    let view_type="home";
    if(url_path==="index.html" || url_path===""){
        view_type="home";
        renderHomeView();
    }
    else if(url_path==="topic.html"){
        view_type="topic"
        let url_string = window.location.href;
        let url = new URL(url_string);
        let topic_name = url.searchParams.get("name");
        renderTopicView(topic_name)
    }
    else if(url_path==="blog.html"){
        view_type="blog"
        let url_string = window.location.href;
        let url = new URL(url_string);
        let blog_name = url.searchParams.get("name");
        renderBlogView(blog_name)
    }
    


    
}

const setYTsource=()=>{
    const blogsJSON=blogs;
    let url_string = window.location.href;
    let url = new URL(url_string);
    const blog_name_rtv = url.searchParams.get("name");
    let innerHTMLBlog="";

    for(let itr in blogsJSON){

    if(blogsJSON[itr]['blog_name']===blog_name_rtv){
        document.getElementById("blog-yt-iframe").setAttribute("src",blogsJSON[itr]['blog_yt_video_url']);
    }
    
    
    }
   
}

//renderHomeView landing page
const renderBlogView = () =>{

    const blogsJSON=blogs;
    let url_string = window.location.href;
    let url = new URL(url_string);
    const blog_name_rtv = url.searchParams.get("name");
    let innerHTMLBlog="";

    for(let itr in blogsJSON){

    if(blogsJSON[itr]['blog_name']===blog_name_rtv){
        document.getElementById("blog-content-para").innerText=blogsJSON[itr]['blog_description'];
        document.getElementById("blog-content-article").setAttribute("href",blogsJSON[itr]['blog_article_link']);
        document.getElementById("blog-yt-iframe").setAttribute("src",blogsJSON[itr]['blog_yt_video_url']);
    }
    
    
    }
   
    document.getElementById("blog-title").innerText=blog_name_rtv;


}

//renderHomeView landing page
const renderHomeView = () =>{
const topicsJSON=topics;

let homeCardsHTML="";

for(let itr in topics){
    let tempTopicName=topics[itr]['topic_name'];
    let tempTopicDes=topics[itr]['description'];
    let tempPreReq=topics[itr]['prerequisite'];

    let tempFooter='';
    for(let itr2 in tempPreReq){
        tempFooter+=`
        <a class="button is-rounded is-primary is-light p-3 m-2" href="./topic.html?name=${tempPreReq[itr2]}">${tempPreReq[itr2]}</a>
        `
    }

    let tempHTML=`
    <div class="card columns-3 is-multiline pr-2 pl-2 m-4">
        <header class="card-header column is-12">
            <p class="card-header-title ">
            ${tempTopicName} <a class="button  button is-danger is-rounded is-small is-responsive is-light p-3 m-2" href="./topic.html?name=${tempTopicName}">Learn More</a>
            </p>
        </header>
        <div class="card-content column is-12">
            <div class="content">
           ${tempTopicDes}
            </div>
        </div>
        <footer class="card-footer buttons are-small column is-12">
        <a class="button  is-white p-3 m-2">Pre Req</a>
          ${tempFooter}
        </footer>
    </div>

    `

    homeCardsHTML+=tempHTML;
}
document.getElementById("home-view").innerHTML=homeCardsHTML;

}


//renderTopicView topic specific page
const renderTopicView = (topic_name) =>{
   const blogsJSON=blogs;

   let url_string = window.location.href;
    let url = new URL(url_string);
    const topic_name_rtv = url.searchParams.get("name");

    document.getElementById("topic-title").innerText=topic_name_rtv;

    
let topicsCardsHTML="";

for(let itr in blogsJSON){
    if(blogsJSON[itr]['topic_name']===topic_name)
    {

        let tempBlogName=blogsJSON[itr]['blog_name'];
        let tempTopicDes=blogsJSON[itr]['blog_description'];
        let tempPreReq=blogsJSON[itr]['prerequisite'];
        let tempFooter='';
        for(let itr2 in tempPreReq){
            tempFooter+=`
            <a class="button is-rounded is-primary is-light p-3 m-2" href="./topic.html?name=${tempPreReq[itr2]}">${tempPreReq[itr2]}</a>
            `
        }

        let tempHTML=`
        <div class="card columns-3 is-multiline pr-2 pl-2 m-4">
            <header class="card-header column is-12">
                <p class="card-header-title ">
                ${tempBlogName} <a class="button  button is-link is-rounded is-small is-responsive is-light p-3 m-2" href="./blog.html?name=${tempBlogName}">Learn More</a>
                </p>
            </header>
            <div class="card-content column is-12">
                <div class="content">
            ${tempTopicDes}
                </div>
            </div>
            <footer class="card-footer buttons are-small column is-12">
            <a class="button  is-white p-3 m-2">Pre Req</a>
            ${tempFooter}
            </footer>
        </div>

        `

        topicsCardsHTML+=tempHTML;
    }
}
document.getElementById("topic-view").innerHTML=topicsCardsHTML;




}

//to set navbar topics
const set_navbar_topics=(topics)=>{
    const element = document.getElementById("topics-list-nav-bar");
    for (let itr in topics){
        element.innerHTML+=`
        <a class="navbar-item" href="./topic.html?name=${topics[itr]['topic_name']}">
               ${topics[itr]['topic_name']}
              </a>
        `
    }
}

//to set site meta data    
const set_metadata=(metadata)=>{
const title_val=metadata['Title'];
const element = document.getElementById("site-title");
element.innerText=title_val
}

//to togle nav bar on mobile view
const toggleBurger=()=>{
    var burger = $('.burger');
    var menu = $('.navbar-menu');
    burger.toggleClass('is-active');
    menu.toggleClass('is-active');
}



setup_page()
document.getElementById ("mobile-nav-burger").addEventListener ("click", toggleBurger);