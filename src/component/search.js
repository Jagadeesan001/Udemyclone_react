
function searchbar()
{
    return(
        <div class="navbar">
        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy</h1>
        </div>
        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#00060f"}}></i>
            <input placeholder="Search any things Product,business.."/>
        </div>
        <div class="navbar__s3">
            <p>Cources</p>
            <p>My Learnig</p>
            <i class="fa-solid fa-cart-shopping" style={{color: "#01060e"}}></i>
            <i class="fa-solid fa-bell" style={{color: "#010409"}}></i>
            <i class="fa-solid fa-user" style={{color: "#010813"}}></i>
        </div>
    </div>
    )
}
export default searchbar