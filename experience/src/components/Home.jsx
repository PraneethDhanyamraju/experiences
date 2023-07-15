import icon from "./images/feather.jpg"
export default function Home()
{
    return<>
    <div class="home">
    <img width="200" height="200" src={icon}/>
    <div class="type">
        
      Welcome to My Experiences! Here You can Create,Manage and Delete Your Experiences.
    
    </div>
    <button onClick={()=>window.location.href="/experiences"}>Explore</button>
    <i>&copy; <a href="https://www.flaticon.com/">Flaticon</a></i>
</div>

    </>
}