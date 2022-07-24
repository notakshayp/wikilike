import metadata from "./customization/Data/metadata.json" assert { type: "json" };
import topics from "./customization/Data/Topics.json" assert {type: "json"};

const setup_page=()=>{
    const metadataJSON=metadata;
    set_metadata(metadata);

    const topicsJSON=topics;
    set_navbar_topics(topics);

    //render page views
    const url_path=window.location.pathname;
    let view_type="home";
    if(url_path==="/index.html"){
        view_type="home";
        console.log("rendring home ...")
        renderHomeView();
    }
    else if(url_path==="/topic.html"){
        view_type="topic"
        let url_string = window.location.href;
        let url = new URL(url_string);
        let topic_name = url.searchParams.get("name");
        renderTopicView(topic_name)
    }
    


    
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
    console.log(tempPreReq)
    for(let itr2 in tempPreReq){
        tempFooter+=`
        <a class="button is-rounded is-primary is-light p-3 m-2" href="#">${tempPreReq[itr2]}</a>
        `
    }

    let tempHTML=`
    <div class="card columns-3 is-multiline pr-2 pl-2 m-4" >
        <header class="card-header column is-12">
            <p class="card-header-title ">
            ${tempTopicName}
            </p>
        </header>
        <div class="card-content column is-12">
            <div class="content">
           ${tempTopicDes}
            </div>
        </div>
        <footer class="card-footer buttons are-small column is-12">
        <a class="button  is-white p-3 m-2" disabled>Pre Req</a>
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
    console.log(topic_name);
}

//to set navbar topics
const set_navbar_topics=(topics)=>{
    const element = document.getElementById("topics-list-nav-bar");
    for (let itr in topics){
        element.innerHTML+=`
        <a class="navbar-item" href="/topic.html?name=${topics[itr]['topic_name']}">
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