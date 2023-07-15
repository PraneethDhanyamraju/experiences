export default function Navbar()
{
    return<>
        <div class="navbar">
                    <i class="fa-solid fa-signs-post"onClick={()=>window.location.href="/experiences"}> Experiences</i>
                    <i class="fa-solid fa-feather-pointed"  onClick={()=>window.location.href="/write" }> Write</i>
      </div>
    </>
}
